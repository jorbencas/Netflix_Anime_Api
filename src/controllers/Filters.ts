import responseCustome from "../utils/index";
import { postgress } from "../db/postgres";
import { Request, Response } from 'express';

const getFilters = (req: Request, res: Response) => {
    let kind = req.params.kind;
    if (kind == 'years') {
        let r = ['1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020','2021'];
        let msg = `Se ha podido obtener la traducion del idioma {lang}`;
        res.json(responseCustome(msg, 200, r));
    } else if (kind == 'letters') {
        let r = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0-9'];
        let msg = `Se ha podido obtener la traducion del idioma {lang}`;
        res.json(responseCustome(msg, 200, r));
    } else {
        let lang = req.params.lang;
        postgress
        .query(
        `SELECT l.code, tf.translation, tf.id_external 
        FROM langs l inner join translation_filter tf
        ON(l.id = tf.id_external) 
        WHERE l.code = ${lang} AND tf.kind = 'langs'`
        )
        .then((result) => {
        console.log(result);
        let msg = `Se ha podido obtener la traducion del idioma {lang}`;
        res.json(responseCustome(msg, 200, result.rows));
        })
        .catch((e) => {
        let msg = `No se ha podido obtener la traducion del idioma {lang}`;
        res.status(500).json(responseCustome(msg, 500, e.stack));
        });
    }
}

const handlesearch = (req: Request, res: Response) => {

}

const mysearches = (req: Request, res: Response) => {
  
}

const updatesearchuser = (req: Request, res: Response) => {
  
}

const deletesearch = (req: Request, res: Response) => {
   
}

export {
    handlesearch,
    updatesearchuser,
    mysearches,
    deletesearch,
    getFilters
};