import { responseCustome } from "../utils/index";
import { postgress } from "../db/postgres";
import { Request, Response, NextFunction } from "express";
import { QueryResult } from "pg";
import { saveBackupAnime } from "../utils/backup";
import { insertMedia } from "./media";
import Anime from "../models/Anime";
import Anime_genere from "../models/Anime_genere";

const getlist = (_req: Request, res: Response, next: NextFunction) => {
  postgress
  .query(
    `SELECT a.valorations, a.siglas, a.state, ma.type, ma.id
    FROM animes a LEFT JOIN media_animes ma ON(ma.anime = a.siglas) 
    WHERE ma.type = 'portada'`
  )
  .then((result: QueryResult) => {
    console.log(result);
    let msg = `Se ha podido obtener la traducion del idioma {lang}`;
    res.status(200).json(responseCustome(msg, 200, result.rows));
  })
  .catch((e: Error) => {
    next(e);
  });
};

const getslides = (req: Request, res: Response, next: NextFunction) => {
  let {first, last} = req.params;
  postgress
  .query(
    `SELECT a.valorations, a.siglas, a.state,
    ma.id, ma.type
    FROM animes a INNER JOIN media_anime ma ON(a.siglas = ma.anime)
    WHERE ma.type = 'portada'
    OFFSET ${first} LIMIT ${last}`
  )
  .then((result: QueryResult) => {
    console.log(result);
    let msg = `Se ha podido obtener la traducion del idioma {lang}`;
    res.status(200).json(responseCustome(msg, 200, result.rows));
  })
  .catch((e: Error) => {
    next(e);
  });
};

const getOne = (req: Request, res: Response, next: NextFunction) => {
  let { siglas, edit } = req.params;
  if(edit) console.log(edit);
  postgress
  .query(
    `SELECT a.siglas, a.tittle, a.sinopsis, a.idiomas, a.date_publication, a.date_finalization, a.state, a.valorations, a.kind, 
    af.id as idFvorite, af.favorite as favorite,
    temp.tittle, temp.code, gen.tittle, gen.code,
    mb.type bannert, mb.idbanneri, mp.type portadat, mp.id portadat
    FROM animes a 
    INNER JOIN anime_favorite as af ON(af.anime = a.siglas)
    LEFT JOIN (
      SELECT f.tittle, f.code, ag.anime 
      FROM filters f inner join anime_generes ag
      ON(ag.temporada = f.code)
    ) as temp
    ON(temp.anime = a.siglas)
    LEFT JOIN (
      SELECT f.tittle, f.code, ag.anime 
      FROM filters f inner join anime_generes ag
      ON(ag.genere = f.code)
    )  AS gen
    ON(gen.anime = a.siglas)
    LEFT JOIN (
      SELECT type, name, ext, id_external 
      FROM media_anime 
      WHERE type = 'banner' 
    ) AS mb
    ON(mb.id_external = a.siglas)
    LEFT JOIN (
      SELECT type, name, ext, id_external 
      FROM media_anime 
      WHERE type = 'portada' 
    ) AS mp
    ON(mp.id_external = a.siglas)
    WHERE a.siglas = '${siglas}'`
  )
  .then((result: any) => {
    console.log(result);
    result = result.rows.shift();
    let msg = `Se ha podido obtener la traducion del idioma {lang}`;
    /*result.banner = result.;
    result.portada = ;*/
    res.status(200).json(responseCustome(msg, 200, result));
  })
  .catch((e: Error) => {
    next(e);
  });
};

const getNum = (_req: Request, res: Response, next: NextFunction) => {
  postgress
    .query(
      `SELECT count(siglas) FROM animes WHERE created IS NOT NULL`
    )
    .then((result: QueryResult) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.status(200).json(responseCustome(msg, 200, result.rows.shift()));
    })
    .catch((e: Error) => {
      next(e);
    });
};

const lastByGenere = (_req: Request, res: Response, next: NextFunction) => {
  postgress
    .query(
    `SELECT a.valorations, a.siglas, a.state,
    ma.type, ma.id
    FROM filters AS f INNER JOIN anime_generes
    ON ag.generes LIKE ('%' || f.code::text || '%') 
    INNER JOIN animes a on(a.siglas = ag.anime)
    INNER JOIN media_anime ON(ma.anime = a.siglas) 
    WHERE ma.type = 'portada' AND f.kind = 'generes'`
    )
    .then((result: QueryResult) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.status(200).json(responseCustome(msg, 200, result.rows));
    })
    .catch((e: Error) => {
      next(e);
    });
};

const last = (_req: Request, res: Response, next: NextFunction) => {
  postgress
    .query(
      `SELECT a.valorations, a.siglas, a.state,
      ma.type, ma.id
      FROM animes a inner join anime_generes ag
      ON(a.siglas = ag.anime) 
      INNER JOIN media_anime ON(ma.anime = a.siglas) 
      WHERE ma.type = 'portada'`
    )
    .then((result: QueryResult) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.status(200).json(responseCustome(msg, 200, result.rows));
    })
    .catch((e: Error) => {
      next(e);
    });
};

const getFavorite = (_req: Request, res: Response, next: NextFunction) => {
  postgress
    .query(
      `SELECTa.siglas, a.tittle, a.sinopsis, a.idiomas, a.date_publication, a.date_finalization, a.state, a.valorations, a.kind, 
    af.id as idFvorite, af.favorite as favorite
    FROM animes a 
    INNER JOIN anime_favorite as af ON(af.anime = a.siglas)`
    )
    .then((result: QueryResult) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.status(200).json(responseCustome(msg, 200, result.rows));
    })
    .catch((e: Error) => {
      next(e);
    });
};

const addFavorite = (req: Request, res: Response, next: NextFunction) => {
  let { anime } = req.params;
  postgress
    .query(
      `UPDATE anime_favorites SET favorite WHERE anime = '${anime}';`
    )
    .then((result: QueryResult) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.status(200).json(responseCustome(msg, 200, result.rows));
    })
    .catch((e: Error) => {
      console.log(e);
      postgress
      .query(
        `INSERT INTO anime_favorites(anime, favorite) VALUES('${anime}',true);`
      )
      .then((result: QueryResult) => {
        console.log(result);
        let msg = `Se ha podido obtener la traducion del idioma {lang}`;
        res.status(200).json(responseCustome(msg, 200, result.rows));
      })
      .catch((e: Error) => {
        next(e);
      });
    });
};

const removeFavorite = (req: Request, res: Response, next: NextFunction) => {
  let {id} = req.params;
  postgress
    .query(
      `UPDATE anime_favorites SET favorite WHERE id = '${id}';`
    )
    .then((result: QueryResult) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.status(200).json(responseCustome(msg, 200, result.rows));
    })
    .catch((e: Error) => {
      next(e);
    });
};

const insert = async (req: Request, res: Response, next: NextFunction) => {
  const {
    siglas,
    state,
    date_publication,
    date_finalization,
    tittle,
    sinopsis,
    idioma,
    generes,
    temporadas,
    kind,
  } = req.body;
  console.log(req.body);
//insertar anime usando la clase

    let anime = new Anime(tittle, sinopsis, siglas, state, date_publication, date_finalization, idioma, kind);
    let inserted = await anime.insert();
    if (inserted) {
          console.log(result);
      console.log(anime);
    generes.forEach(async(genere: string) => {
      let sql = `INSERT INTO anime_generes (genere, anime) VALUES ('${genere}', '${siglas}') RETURNING id;`;
          console.log(sql);

    let r: QueryResult = await postgress.query(sql);
    console.log(r);
        saveBackupAnime(siglas,{'id':r.rows[0]}, r.rows[0], 'anime_generes');


    });



    insertMedia(req, res, next);
    /*let msg:string = `Se ha podido obtener la traducion del idioma {lang}`;
    res.json(responseCustome(msg, 200, r.rows));*/
    temporadas.forEach(async(temporada: string) => {
      sql = `INSERT INTO anime_temporadas (genere, anime) VALUES ('${temporada}', '${siglas}') RETURNING id;`;
       let r = await postgress.query(sql);
    saveBackupAnime(siglas,{'id':r.rows[0]}, r.rows[0], 'anime_temporadas');    
    });
   
    let msg:string = `Se ha podido obtener la traducion del idioma {lang}`;
    res.status(200).json(responseCustome(msg, 200, null));
    } else {
      
    }
};

const editinsert = (req: Request, res: Response, next: NextFunction) => {
  const {
    siglas,
    state,
    date_publication,
    date_finalization,
    tittle,
    sinopsis,
    idioma,
    kind,
    generes,
    temporadas,
  } = req.body;

   let anime = new Anime(tittle, sinopsis, siglas, state, date_publication, date_finalization, idioma, kind);
   let obtenidoAnime = await anime.Obtener(); 
   if (obtenidoAnime) {
    let inserted = await anime.editar();
    if (inserted) {
      generes.forEach(async(genere: string) => {
        let genereInserted = new Anime_genere(genere,siglas);
        let genereEdited = await genereInserted.Editar();
          if (!genereEdited) {
            let genereInserted = await genereInserted.insertar()

          }
      });
          let sql = "";
          temporadas.forEach((temporada: string) => {
            sql += `UPDATE anime_temporadas SET temporada = '${temporada}' WHERE anime = '${siglas}';`;
          });
      console.log(sql);

          postgress
          .query(sql)
          .then((r: QueryResult) => {
            console.log(r);
            insertMedia(req, res, next);
            saveBackupAnime(siglas,{'id':r.rows}, r.rows, 'anime_temporadas');
            let msg = `Se ha podido obtener la traducion del idioma {lang}`;
            res.status(200).json(responseCustome(msg, 200, r.rows));
          })
          .catch((e: Error) => {
            next(e);
          });  
    } else {
      let inserted = await anime.insert();
    if (inserted) {
          console.log(result);
           let genereInserted = new Anime_genere(genere,siglas);
        let genereEdited = await genereInserted.Editar();
          if (!genereEdited) {
            let genereInserted = await genereInserted.insertar()

          }
    } else {
      
    }
    } else {
       let inserted = await anime.insert();
    if (inserted) {
          console.log(result);
 let genereInserted = new Anime_genere(genere,siglas);
        let genereEdited = await genereInserted.Editar();
          if (!genereEdited) {
            let genereInserted = await genereInserted.insertar()

          }
    } else {
      
    }
    }
   }
    

      
};

export {
  getlist,
  getslides,
  getOne,
  getNum,
  last,
  lastByGenere,
  getFavorite,
  addFavorite,
  removeFavorite,
  editinsert
};
