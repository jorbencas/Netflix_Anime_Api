import { postgress } from "../db/postgres";
import { Request, Response, NextFunction } from "express";
import { QueryResult } from "pg";
// import { responseCustome  } from "../utils/index";
import {createTable, responseCustome  } from "../utils/index";
import { access, readFile } from 'node:fs/promises';
import { PathLike, existsSync } from "node:fs";
import path from "node:path";
import { saveBackup } from "../utils/backup";

const getFilters = (req: Request, res: Response, next: NextFunction) => {
  let kind = req.params.kind;
  if (kind == "years") {
    let r = [
      "1998",
      "1999",
      "2000",
      "2001",
      "2002",
      "2003",
      "2004",
      "2005",
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
    ];
    let msg = `Se ha podido obtener la traducion del idioma {lang}`;
    res.json(responseCustome(msg, 200, r));
  } else if (kind == "letters") {
    let r = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "Ñ",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "0-9",
    ];
    let msg = `Se ha podido obtener la traducion del idioma {lang}`;
    res.json(responseCustome(msg, 200, r));
  } else {
    let lang = req.params.lang;
    postgress
      .query(
        `SELECT code, tittle FROM langs WHERE kind = 'langs'`
      )
      .then((result: QueryResult) => {
        console.log(result);
        let msg = `Se ha podido obtener la traducion del idioma ${lang}`;
        res.json(responseCustome(msg, 200, result.rows));
      })
      .catch((e: Error) => {
        next(e);
      });
  }
};

const getTemporadas =  (_req: Request, res: Response, _next: NextFunction) => { 
let lista: Array<object> = [
  { tittle : "Primavera", code : 'spring' },
  { tittle : "Verano", code : 'summer' },
  { tittle : "Otoño", code : 'autumn' },
  { tittle : "Invierno", code : 'winter' }
];

postgress.query(`SELECT code, tittle FROM filters WHERE kind = 'temporadas' ORDER BY created ASC`)
.then((result: QueryResult) => {
  if(result.rowCount > 0){
    lista = result.rows;
  }
  let msg = `Se ha podido obtener las temporadas`;
    res.json(responseCustome(msg, 200, lista));
})
.catch((e: Error) => {
    console.log(e);
      let msg = `Se ha podido obtener las temporadas`;
    res.json(responseCustome(msg, 200, lista));
});

}





const getDefualtGeneres = (_req: Request, res: Response, next: NextFunction) => {
  postgress
    .query("SELECT id, code, kind, tittle FROM filters WHERE kind = 'generes' ORDER BY created ASC")
    .then((result: QueryResult) => res.json(responseCustome("", 200, result.rows)))
    .catch((err: Error) => {
      next(err);
    });
}

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
        createTable(`CREATE TABLE filters (
          tittle VARCHAR(250) NOT NULL,
          code VARCHAR(255) PRIMARY KEY,
          kind VARCHAR(255) NOT NULL,
          created timestamp DEFAULT CURRENT_TIMESTAMP,
          updated timestamp DEFAULT CURRENT_TIMESTAMP
        );`);
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
    res.json(responseCustome("", 200, result.shift()));
  })
  .catch((err: Error) => {
    console.log(err);
    createTable(`CREATE TABLE filters (
      tittle VARCHAR(250) NOT NULL,
      code VARCHAR(255) PRIMARY KEY,
      kind VARCHAR(255) NOT NULL,
      created timestamp DEFAULT CURRENT_TIMESTAMP,
      updated timestamp DEFAULT CURRENT_TIMESTAMP
    );`);
    insert(req,res, next);
  });
}



const deleteAll = (_req: Request, res: Response, next: NextFunction) => {
  postgress.query("SELECT code FROM filters WHERE kind = 'generes'").then((result: QueryResult) => {
    result.rows.forEach((row) => {
      postgress.query("DELETE FROM filters WHERE code = $1 AND type = 'generes'", [row.code]).then((result: QueryResult) => {
        res.json(responseCustome("", 200, result.rows));
      }).catch((err: Error) => {
        next(err);
      });
    });
  }).catch((err: Error) => {
    next(err);
  });
}


const insertAll = (_req: Request, _res: Response, next: NextFunction) => {
  const PATH_TO_FILES : PathLike = path.join(
    __dirname,
    "/../media/.backup/filters.json"
  );
  if (existsSync(PATH_TO_FILES)) {
    access(PATH_TO_FILES, 7).then(() => {
      readFile(PATH_TO_FILES).then((file: Buffer) => {
        let content = JSON.parse(file.toString("utf-8"));
        content.forEach( (element: any) => {
          const { tittle, code, kind } = element;
          postgress.query("INSERT INTO filters(tittle, code, kind) values($1, $2, $3)",[tittle, code, kind]).then((result: QueryResult) => {
            console.log('====================================');
            console.log(result);
            console.log('====================================');
          }).catch((err: Error) => {
            next(err);
          });
        });
      }).catch((err: Error) => {
        next(err);
      });
    }).catch((err: Error) => {
      next(err);
    });
  } else {
    console.log('====================================');
    console.log("ERROR");
    console.log('====================================');
  }
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
  getDefualtGeneres,
  insert, 
  deleteAll,
  insertAll,
  getFilters, 
  getTemporadas 
};