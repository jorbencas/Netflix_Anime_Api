import responseCustome from "@utils/index";
import { postgress } from "@db/postgres";
import { Request, Response, NextFunction } from 'express';

const getTittle = (req: Request, res: Response) => {
  let lang = req.params.lang;

        res.json(responseCustome("Ok", 200, [{
        translation : "Ingles", 
        id_external: 1 ,
        code: "en",
        lang
        },
        {
        translation : "Valenciano", 
        id_external: 2 ,
        code: "va",
        lang
        },
        {
        translation : "Castellano", 
        id_external: 3 ,
        code: "es",
        lang
        }]

        ));


  // postgress
  //   .query(
  //     `SELECT l.code, tf.translation, tf.id_external 
  //     FROM langs l inner join translation_filter tf
  //     ON(l.id = tf.id_external) 
  //     WHERE l.code = ${lang} AND tf.kind = 'langs'`
  //   )
  //   .then((result) => {
  //     console.log(result);
  //     let msg = `Se ha podido obtener la traducion del idioma {lang}`;
  //     res.json(responseCustome(msg, 200, result.rows));
  //   })
  //   .catch((e) => {
  //     console.error(e.stack);
  //     let msg = `No se ha podido obtener la traducion del idioma {lang}`;
  //     res.status(500).json(responseCustome(msg, 500));
  //   });
};

const getCode = (_req: Request, res: Response, next: NextFunction) => {
  postgress
    .query("SELECT id, code FROM langs")
    .then((result) => res.json(responseCustome("", 200, result.rows)))
    .catch((err) => {
      next(err);
    });
};

export {
  getTittle,
  getCode
};
