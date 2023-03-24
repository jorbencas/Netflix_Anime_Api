import { postgress } from "../db/postgres";
import { Request, Response, NextFunction } from "express";
import { QueryResult } from "pg";
import { responseCustome  } from "../utils/index";
import { saveBackup } from "../utils/backup";
import letters from '../db/letters.json';
import years from '../db/years.json';

const getFilters = (req: Request, res: Response, next: NextFunction) => {
  let kind = req.params.kind;
  if (kind == "years") {
    let msg = `Se ha podido obtener los años`;
    res.json(responseCustome(msg, 200, years));
  } else if (kind == "letters") {
    let msg = `Se ha podido obtener las letras`;
    res.json(responseCustome(msg, 200, letters));
  } else {
    postgress.query(`SELECT code, tittle FROM filters WHERE kind = '${kind}' ORDER BY created ASC`)
    .then((result: QueryResult) => {
      let msg = `Se ha podido obtener las temporadas`;
        res.status(200).json(responseCustome(msg, 200, result.rows));
    })
    .catch((e: Error) => {
        console.log(e);
        next(e);
    });
  }
};

const insert = (req: Request, res: Response, next: NextFunction) => {
  let { code, tittle, kind } = req.body;
  postgress
    .query("INSERT INTO filters (code, kind, tittle) VALUES ($1, $2, $3) RETURNING *", [code, kind, tittle])
    .then((result: QueryResult) => {
      saveBackup({code:code},{code ,kind, tittle},'filters');
      return result.rows;
    })
    .then( (result) => res.json(responseCustome("", 200, result.shift())))
    .catch((err: Error) => {
      console.log(err);
      postgress.query("SELECT code FROM filters WHERE code = $1 ",[code])
      .then((result: QueryResult) => {
        if (result.rowCount > 0) update(req,res, next);
        else insert(req,res, next);
      }).catch((err: Error) => {
        console.log(err);
        insert(req,res, next);
      });
    });
}

const update = (req: Request, res: Response, next: NextFunction) => {
  let { code, tittle, kind } = req.body;
  postgress.query("UPDATE filters SET tittle=$2 WHERE code=$1 RETURNING *", [code, tittle])
  .then((result: QueryResult) => {
    saveBackup({code:code},{code ,kind, tittle},'filters');
    return result.rows;
  })
  .then( (result) => {
    res.status(200).json(responseCustome("", 200, result.shift()));
  })
  .catch((err: Error) => {
    console.log(err);
    insert(req,res, next);
  });
}

const deleteAll = (_req: Request, res: Response, next: NextFunction) => {
  postgress.query("SELECT code FROM filters WHERE kind = 'generes'").then((result: QueryResult) => {
    result.rows.forEach((row) => {
      postgress.query("DELETE FROM filters WHERE code = $1 AND type = 'generes'", [row.code]).then((result: QueryResult) => {
        res.status(200).json(responseCustome("", 200, result.rows));
      }).catch((err: Error) => {
        next(err);
      });
    });
  }).catch((err: Error) => {
    next(err);
  });
}

// const handlesearch = (req: Request, res: Response, next: NextFunction) => {};

// const mysearches = (req: Request, res: Response, next: NextFunction) => {};

// const updatesearchuser = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};

// const deletesearch = (req: Request, res: Response, next: NextFunction) => {};

// export { handlesearch, updatesearchuser, mysearches, deletesearch, getFilters };
export {   
  insert, 
  deleteAll,
  getFilters, 
  update 
};