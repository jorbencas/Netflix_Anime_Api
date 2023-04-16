import { responseCustome } from "../utils/index";
import { postgress } from "../db/postgres";
import { Request, Response, NextFunction } from "express";
import { QueryResult } from "pg";
import Anime from "../models/Anime";
import Anime_genere from "../models/Anime_genere";
import Anime_temporada from "../models/Anime_temporada";
import Media_anime from '../models/Media_anime';

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

const getOne = async (_req: Request, _res: Response, _next: NextFunction) => {
  //let { siglas } = req.params;

  // let animeInstanced = new Anime();
  // animeInstanced.setSiglas(siglas);
  // let anime = await animeInstanced.getOne(); 
  // if(anime) {
  //   let instance = new Media_anime();
  //   instance.setAnime(siglas);
  //   instance.setType("banner");
  //   let banner = await instance.getMediaByType();
  //   instance.setType("portada");
  //   let portada = await instance.getMediaByType();
  // let msg = `Se ha podido obtener la traducion del idioma {lang}`;
  //   /*result.banner = result.;
  //   result.portada = ;*/
  //   res.status(200).json(responseCustome(msg, 200,     ));
  // } else {

  // }
  
   
  // })
  // .catch((e: Error) => {
  //   next(e);
  // });
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

const editinsert = async (req: Request, res: Response) => {
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
    media
  } = req.body;
  let inserted: Boolean = false;
  let anime = new Anime();
  anime.setTittle(tittle);
  anime.setSinopsis(sinopsis); 
  anime.setSiglas(siglas); 
  anime.setState(state); 
  anime.setDate_publication(date_publication); 
  anime.setDate_finalization(date_finalization); 
  anime.setIdioma(idioma); 
  anime.setKind(kind);
  let obtenidoAnime = await anime.Obtener(); 
  if (obtenidoAnime) {
    inserted = await anime.editar();
  } else {
    inserted = await anime.insert();
  }
  if (inserted) {
    await processsGeneres(generes, siglas);
    await processsTemporadas(temporadas, siglas);
    await processMedia(media);      
  }

  let msg:string = `Se ha insertado/editado todo`;
    res.status(200).json(responseCustome(msg, 200, req.body));
};

async function processsGeneres(generes: Array<string>, siglas:string){
  generes.forEach(async(genere: string) => {
    let instance = new Anime_genere(genere,siglas);
    let inserted = await instance.insertar()
    console.log("fin generes: " + inserted);
  });
}

async function processsTemporadas(temporadas: Array<string>, siglas:string){
  temporadas.forEach(async(temporada: string) => {
    let instance = new Anime_temporada(temporada, siglas);
    let inserted = await instance.insertar();
    console.log("fin temporadas: " +inserted);
  });
}

async function processMedia(media: Array<Object>){
  if(typeof media !=='undefined'){
    media.forEach(async (mediaElement:any) => {  
      const {id_external, kind, file} = mediaElement;
      const {nombre, extension} = file;
      let instance = new Media_anime();
      instance.setAnime(id_external);
      instance.setName(nombre);
      instance.setExt(extension);
      instance.setType(kind);
      let existe = await instance.Obtener();
      if (existe) {
        let edited = await instance.Editar();
        console.log("fin media: " + edited);
      } else {
        let inserted = await instance.insertar();
        console.log("fin media: " + inserted);
      }
    });
  }
}

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
