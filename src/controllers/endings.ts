import {responseCustome, updateIdAcumulative } from "../utils/index";
import { postgress } from "../db/postgres";
import { Request, Response, NextFunction } from 'express';
import { QueryResult } from 'pg';
import { saveBackupAnime } from "../utils/backup";
import { insertMedia } from "./media";

const getbyAnime = (req: Request, res: Response, next: NextFunction) => {
    let siglas = req.params.siglas;
    postgress
        .query(
        `SELECT e.id, e.anime, e.nombre, e.descripcion,  
        a.siglas, e.num, a.kind,
        (SELECT ma.name, ma.extension
            FROM media_animes ma 
            ON(ma.anime = a.siglas) 
            WHERE ma.type = 'portada'
        ) AS portada
        FROM endings as e
        INNER JOIN animes AS a ON a.id = e.anime 
        WHERE e.anime = ${siglas}
            `
        )
        .then((result) => {
        console.log(result);
        let msg = `Se ha podido obtener la traducion del idioma {lang}`;
        res.json(responseCustome(msg, 200, result.rows));
        })
        .catch((e: Error) => {
        // let msg = `No se ha podido obtener la traducion del idioma {lang}`;
        next(e);
        });
}

const getOne = (_req: Request, _res: Response, _next: NextFunction) => {
    // sql = "SELECT e.id, e.anime, e.nombre, e.descripcion, a.siglas, e.num,
    // (SELECT id FROM endings WHERE anime = e.anime AND num = ( SELECT num FROM endings WHERE id = '{$GET['ap']}' - 1) ) AS prev,
    // (SELECT id FROM endings WHERE anime = e.anime AND num = ( SELECT num FROM endings WHERE id = '{$GET['ap']}' + 1) ) AS next
    // FROM endings AS e
    // INNER JOIN animes AS a ON(a.id = e.anime)
    // WHERE e.id = '{$GET['ap']}'";
    // ending = db->obtener_uno($sql);
    // if (isset($ending->id)) {
    //     translations = api->gettranslations([
    //         array("kind" => "titulo", "id_external" => ending->anime),
    //     ]);
    //     if ( count($translations) > 0 ) {
    //         kind = translations['kind'];
    //         k = kind == "titulo" ? 'anime_titulo' : kind;
    //         ending->$k = translations['translation'];
    //     }
    //     media = api->getMedias([
    //         array( 'type' => 'endings', 'id_external' => $ending->id),
    //         array( 'type' => 'portada', 'id_external' => ending->anime)
    //     ]); 
    //     if (count($media) > 0) {
    //         foreach ($media as media) {
    //             k = media['type'] == 'portada' ? 'img' : 'src';
    //             ending->$k = api->handleMedia($media['type'], media['name'], media['extension'], ending->siglas);
    //         }
    //     } else {
    //         ending->img = api->handleMedia("img","no","jpg");
    //         ending->src = api->handleMedia("img","no","jpg");
    //     }
    //     return api->response("api_Endings_One_msg", 200, ending);
    // } else {
    //     return api->response("api_Endings_One_error_msg", 404);
    // }
}

const insert = (req: Request, res: Response, next: NextFunction) => {
  const { id, tittle, sinopsis, anime, num, seasion } = req.body;
  let ID = updateIdAcumulative(id,'endings', 'id');
    postgress.query(`INSERT INTO endings (id, tittle, sinopsis, anime, num, seasion) VALUES($1, $2, $3, $4, $5, $6) RETURNNING *`, [ID, tittle, sinopsis, anime, num, seasion])
    .then((result: QueryResult) => {
      saveBackupAnime(anime,{id:ID},result.rows, 'endings');
                insertMedia(req, res, next);

      res.json(responseCustome("", 200, result.rows))
    })
    .catch((err: Error) => {
      next(err);
    });
};

const edit = (req: Request, res: Response, next: NextFunction) => {
     const { id, tittle, sinopsis, anime, num, seasion } = req.body;
     postgress
    .query(`UPDATE FROM endings tittle=$2, sinopsis=$3, num=$4, seasion=$5 WHERE id=$1 RETURNNING *;`, [id, tittle, sinopsis, num, seasion])
    .then((result: QueryResult) => {
      saveBackupAnime(anime,['id',id],result.rows, 'endings');
                insertMedia(req, res, next);

      res.json(responseCustome("", 200, result.rows))
    })
    .catch((err: Error) => {
      next(err);
    });
};

const deleteOne = (_req: Request, _res: Response, _next: NextFunction) => {
   
};

const deletebyanime = (_req: Request, _res: Response, _next: NextFunction) => {
    
}
const getListIds = (req: Request, res: Response, next: NextFunction) => {
    const { siglas } = req.params;
     postgress
    .query(`SELECT id FROM endings WHERE anime = ${siglas}`)
    .then((result: QueryResult) =>
      res.json(responseCustome("", 200, result.rows))
    )
    .catch((err: Error) => {
      next(err);
    });
}
export {
    getbyAnime,
    getOne,
    getListIds,
    insert,
    edit,
    deleteOne,
    deletebyanime
};