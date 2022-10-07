import {responseCustome  } from "../utils/index";
import { postgress } from "../db/postgres";
import { Request, Response, NextFunction } from 'express';
import { QueryResult } from 'pg';
import { saveBackupAnime } from "../utils/backup_animes";

const getOne = (_req: Request, _res: Response, _next: NextFunction) => {
    // GET = api->getGET();
    // db = api->getDb();
    // if (isset($GET['kind'])) {
    //     select = "s.id AS id_external, (SELECT ep.id FROM episodes AS ep INNER JOIN seasons AS sa ON(ep.id BETWEEN sa.epistart AND sa.epiend AND sa.id = s.id) WHERE ep.id = '{$GET['ap']}' + 1 ) AS next,
    //     (SELECT ep.id FROM episodes AS ep INNER JOIN seasons AS sa ON(ep.id BETWEEN sa.epistart AND sa.epiend AND sa.id = s.id) WHERE ep.id = '{$GET['ap']}' - 1 ) AS prev";
    //     from = "INNER JOIN seasons AS s ON (s.anime = e.anime AND e.id BETWEEN s.epistart AND s.epiend)";
    // } else {
    //     select = "(SELECT id FROM episodes WHERE anime = a.id AND num = ( SELECT num FROM episodes WHERE id = '{$GET['ap']}' + 1 ) ) AS next,
    //     (SELECT id FROM episodes WHERE anime = a.id AND num = ( SELECT num FROM episodes WHERE id = '{$GET['ap']}' - 1 ) ) AS prev";
    //     from = "";
    // }
    // sql = "SELECT e.id, e.anime, e.num, a.siglas, select
    // FROM animes AS a INNER JOIN episodes as e ON a.id = e.anime
    // from WHERE e.id = '{$GET['ap']}' ";
    // episode = db->obtener_uno($sql);
    // if (isset($episode->id)) {
    //     trans = [
    //         array("kind" => "epititulo", "id_external" => episode->id),
    //         array("kind" => "titulo", "id_external" => episode->anime)  
    //     ];
    //     if (isset($GET['kind'])) {
    //         array_push($trans, array("kind" => "seasions", "id_external" => episode->id_external));
    //     }

    //     translations = api->gettranslations($trans);
    //     if ( count($translations) > 0 ) {
    //         foreach ($translations as lang) {
    //             kind = lang['kind'];
    //             k = kind == "titulo" ? 'anime_titulo' : kind;
    //             episode->$k = lang['translation'];
    //         }
    //     }
    //     media = api->getMedias([
    //         array( 'type' => 'episodes', 'id_external' => episode->id),
    //         array( 'type' => 'portada', 'id_external' => episode->anime)
    //     ]); 
    //     if (count($media) > 0) {
    //         foreach ($media as media) {
    //             k = media['type'] == 'portada' ? 'img' : 'src';
    //             episode->$k = api->handleMedia($media['type'], media['name'], media['extension'], episode->siglas);
    //         }
    //     } else {
    //         episode->img = api->handleMedia("img","no","jpg");
    //         episode->src = api->handleMedia("img","no","jpg");
    //     }
    //     return api->response("api_Episodes_One_msg", 200, episode);
    // } else {
    //     return api->response("api_Episodes_One_error_msg", 404); 
    // }
};

const getbyAnime = (_req: Request, _res: Response, _next: NextFunction) => {
    // GET = api->getGET();
    // db = api->getDb();
    // if (isset($GET['kind'])) {
    //     if (isset($GET['seasion'])) {
    //         where = "AND s.id = {$GET['seasion']}";
    //     } else {
    //         where = "AND s.epistart = (SELECT id FROM episodes WHERE anime = {$GET['aa']} ORDER BY num ASC LIMIT 1)";
    //     }
    //     from = "INNER JOIN seasons AS s ON (s.anime = e.anime AND e.id BETWEEN s.epistart AND s.epiend)";
    // } else {
    //     where = "";
    //     from = "";
    // }
    // sql = "SELECT e.id, a.siglas, e.anime, e.num, a.kind
    // FROM animes AS a 
    // INNER JOIN episodes as e ON a.id = e.anime
    // from
    // WHERE e.anime = '{$GET['aa']}' where";
    // res = db->listar($sql);
    // if (isset($res[0]->id)) {
    //     media = api->apiReqNode("media", array(
    //         'type' => 'portada',
    //         'id_external' => GET['aa']
    //     ));
    //     foreach ($res as value) {
    //         translations = api->gettranslations([
    //             array("kind" => "epititulo", "id_external" => value->id)
    //         ]);
    //         if (count($translations) > 0 ) {
    //             kind = translations['kind'];
    //             value->$kind = translations['translation'];
    //         }
    //         if (count($media) > 0) {
    //             value->src = api->handleMedia($media['type'], media['name'], media['extension'], value->siglas);
    //         } else {
    //             value->src = api->handleMedia("img","no","jpg");
    //         }
    //     }
    //     return api->response("api_Episodes_slides_msg", 200, res);
    // } else {
    //     return api->response("api_Episodes_slides_error_msg", 404); 
    // }
}

const getLast = (_req: Request, _res: Response, _next: NextFunction) => {
    // GET = api->getGET();
    // db = api->getDb();
    // limit = explode("_",$GET['as']);
    // sql = "SELECT DISTINCT e.id, a.kind, e.created, a.siglas, e.anime
    // FROM animes AS a 
    // INNER JOIN episodes as e ON a.id = e.anime
    // ORDER BY e.created DESC OFFSET limit[0] LIMIT limit[1]";
    // res = db->listar($sql);
    // if (isset($res[0]->id)) {
    //     foreach ($res as value) {
    //         translations = api->gettranslations([
    //             array("kind" => "epititulo", "id_external" => value->id),
    //             array("kind" => "titulo", "id_external" => value->anime)
    //         ]);
    //         if (count($translations) > 0) {
    //             foreach ($translations as lang) {
    //                 kind = lang['kind'];
    //                 k = kind == "titulo" ? 'anime_titulo' : kind;
    //                 value->$k = lang['translation'];
    //             }
    //         }

    //         media = api->apiReqNode("media",  array(
    //             'type' => 'banner',
    //             'id_external' => value->anime
    //         ));
    //         if (count($media) > 0) {
    //             value->src = api->handleMedia($media['type'], media['name'], media['extension'], value->siglas);
    //         } else {
    //             value->src = api->handleMedia("img","no","jpg");
    //         }

    //     }
    //     return api->response("api_Episodes_slides_msg", 200, res);
    // } else {
    //     return api->response("api_Episodes_slides_error_msg", 404); 
    // }
}

const getidrand = (_req: Request, _res: Response, _next: NextFunction) => {
    // db = api->getDb();
    // sql = "SELECT e.id, a.kind FROM episodes AS e INNER JOIN animes AS a ON(e.anime = a.id) ORDER BY random() LIMIT 1;";
    // valor = db->obtener_uno($sql);
    // if (isset($valor)) {
    //     return api->response("api_Episodes_last_msg", 200, valor);
    // } else {
    //     return api->response("api_Episodes_last_error_msg", 404); 
    // }

}

const insert = (req: Request, res: Response, next: NextFunction) => {
    const { id, tittle, sinopsis, anime, num, seasion } = req.params;
     postgress
    .query(`INSERT INTO episodes (id, tittle, sinopsis, anime, num, seasion) VALUES($1, $2, $3, $4, $5, $6)`, [id, tittle, sinopsis, anime, num, seasion])
    .then((result: QueryResult) => {
      saveBackupAnime(anime, result.rows,'episodes');
      res.json(responseCustome("", 200, result.rows))
    })
    .catch((err: Error) => {
      next(err);
    });
};

const edit = (req: Request, res: Response, next: NextFunction) => {
     const { id, tittle, sinopsis, anime, num, seasion } = req.params;
     postgress
    .query(`UPDATE FROM episodes tittle=$2, sinopsis=$3, num=$4, seasion=$5 WHERE id=$1`, [id, tittle, sinopsis, num, seasion])
    .then((result: QueryResult) => {
     saveBackupAnime(anime, result.rows,'episodes');
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
    .query(`SELECT id FROM episodes WHERE anime = ${siglas}`)
    .then((result: QueryResult) =>
      res.json(responseCustome("", 200, result.rows))
    )
    .catch((err: Error) => {
      next(err);
    });
}

export {
    getOne,
    getbyAnime,
    getLast,
    getidrand,
    getListIds,
    insert,
    edit,
    deleteOne,
    deletebyanime
};