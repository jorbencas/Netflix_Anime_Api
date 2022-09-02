import {responseCustome  } from "../utils/index";
import { postgress } from "../db/postgres";
import { Request, Response, NextFunction } from "express";
import { QueryResult } from "pg";

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

// postgress.query(`SELECT code, tittle FROM filters WHERE kind = 'temporadas'`)
// .then((result: QueryResult) => {
//   if(result.rowCount > 0){
//     lista = result.rows;
//   }
  let msg = `Se ha podido obtener las temporadas`;
    res.json(responseCustome(msg, 200, lista));
// })
// .catch((e: Error) => {
//     next(e);
// });

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
export { getFilters, getTemporadas };