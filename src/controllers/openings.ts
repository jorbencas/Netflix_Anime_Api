import { responseCustome, updateIdAcumulative } from "../utils/index";
import { postgress } from "../db/postgres";
import { Request, Response, NextFunction } from 'express';
import { QueryResult } from 'pg';
import { saveBackupAnime } from "../utils/backup_animes";

const getbyAnime = (_req: Request, _res: Response, _next: NextFunction) => {
   
    // sql = "SELECT o.id, o.nombre, o.descripcion, o.anime, a.siglas, o.num, a.kind
    // FROM animes AS a
    // INNER JOIN openings as o ON a.id = o.anime 
    // WHERE o.anime = '{$GET['aa']}'";
    // res = db->listar($sql);
    // if (isset($res[0]->id)) {
    //     media = api->apiReqNode("media", array(
    //         'type' => 'portada',
    //         'id_external' => GET['aa']
    //     ));
    //     foreach ($res as key => value) {
    //         if (count($media) > 0) {
    //             value->src = api->handleMedia($media['type'], media['name'], media['extension'], value->siglas);
    //         } else {
    //             value->src = api->handleMedia("img","no","jpg");
    //         }
    //         res[$key] = value;
    //     }
    //     return api->response("api_Openings_slides_msg", 200, res);
    // } else {
    //     return api->response("api_Openings_slides_error_msg", 404); 
    // }
}

const getOne = (_req: Request, _res: Response, _next: NextFunction) => {
    // db = api->getDb();
    // GET = api->getGET();
    // sql = "SELECT o.id, o.anime, o.nombre, o.descripcion, a.siglas, o.num,
    // (SELECT id FROM openings WHERE anime = o.anime AND num = ( SELECT num FROM openings WHERE id = '{$GET['ap']}' + 1 ) ) AS next,
    // (SELECT id FROM openings WHERE anime = o.anime AND num = ( SELECT num FROM openings WHERE id = '{$GET['ap']}' - 1 ) ) AS prev
    // FROM openings AS o
    // INNER JOIN animes AS a ON(a.id = o.anime)
    // WHERE o.id = '{$GET['ap']}'";
    // opening = db->obtener_uno($sql);
    // if (isset($opening->id)) {
    //     translations = api->gettranslations([
    //         array("kind" => "titulo", "id_external" => opening->anime),
    //     ]);
    //     if (count($translations) > 0 ) {
    //         kind = translations['kind'];
    //         k = kind == "titulo" ? 'anime_titulo' : kind;
    //         opening->$k = translations['translation'];
    //     }

    //     media = api->getMedias([
    //         array( 'type' => 'openings', 'id_external' => opening->id),
    //         array( 'type' => 'portada', 'id_external' => opening->anime)
    //     ]); 
    //     if (count($media) > 0) {
    //         foreach ($media as media) {
    //             k = media['type'] == 'portada' ? 'img' : 'src';
    //             opening->$k = api->handleMedia($media['type'], media['name'], media['extension'], opening->siglas);
    //         }
    //     } else {
    //         opening->img = api->handleMedia("img","no","jpg");
    //         opening->src = api->handleMedia("img","no","jpg");
    //     }
    //     return api->response("api_Openings_One_msg", 200,$opening);
    // } else {
    //     return api->response("api_Openings_One_error_msg", 404); 
    // }
}

const insert = (req: Request, res: Response, next: NextFunction) => {
    const { id, tittle, sinopsis, anime, num, seasion } = req.body;
    let ID = updateIdAcumulative(id,'openings', 'id');
    postgress.query(`INSERT INTO openings (id, tittle, sinopsis, anime, num, seasion) VALUES($1, $2, $3, $4, $5, $6) RETURNNING *;`, [ID, tittle, sinopsis, anime, num, seasion])
    .then((result: QueryResult) => {
      saveBackupAnime(anime,{'id':ID}, result.rows, 'openings');
      res.json(responseCustome("", 200, result.rows))
    })
    .catch((err: Error) => {
      next(err);
    });
};

const edit = (req: Request, res: Response, next: NextFunction) => {
    const { id, tittle, sinopsis, anime, num, seasion } = req.body;
     postgress
    .query(`UPDATE FROM openings tittle=$2, sinopsis=$3, num=$4, seasion=$5 WHERE id=$1 RETURNNING *;`, [id, tittle, sinopsis, num, seasion])
    .then((result: QueryResult) => {
      saveBackupAnime(anime,{'id':id}, result.rows, 'openings');
      res.json(responseCustome("", 200, result.rows))
    })
    .catch((err: Error) => {
      next(err);
    });
};

const deleteOne = (_req: Request, _res: Response, _next: NextFunction) => {
    // db = api->getDb();
    // POST = api->getPOST();
    // data = api->apiReq("Openings&ap={$POST['id']}");
    // if ($data['status']['code'] == 200) {
    //     openings = data['data']; 
    //     openings['action'] = 'deleteby';
    //     openings['type'] = "openings"; 
    //     openings['kind'] = 'opening';
    //     data = api->apiReq("Upload", openings);            
    //     if ($data['status']['code'] == 200) {
    //         sql = "DELETE FROM openings WHERE id = '{$POST['id']}'";
    //         deleted = db->ejecutar($sql);
    //         if ($deleted) {
    //             ok = data['data'];
    //             return api->response("api_Openings_delete_msg", 200, ok);
    //         } else {
    //             return api->response("api_Openings_delete_error_msg", 404); 
    //         }
    //     } else {
    //         return api->response("api_Openings_delete_error_msg", 404); 
    //     }
    // } else {
    //     return api->response("api_Openings_delete_error_msg", 404); 
    // }
};

const deletebyanime = (_req: Request, _res: Response, _next: NextFunction) => {
    // db = api->getDb();
    // POST = api->getPOST();
    // data = api->apiReq("Openings&aa={$POST['id']}");
    // if ($data['status']['code'] == 200) {
    //     sql = "DELETE FROM openings WHERE anime = '{$POST['id']}'";
    //     deleted = db->ejecutar($sql);
    //     if ($deleted) {
    //         foreach ($data['data'] as value) {
    //             id = value['id'];
    //             params['kind'] = "epititulo";
    //             params['action'] = "deletetranslation";
    //             params['id_external'] = id;
    //             api->apiReq("Langs", params);
    //             sql = "DELETE FROM atributtes WHERE episodes = '$id' AND anime = '{$POST['id']}'";
    //             db->ejecutar($sql);
    //             params['id'] = id;
    //             params['action'] = "deletetelementbyepisode";
    //             api->apiReq("History", params); 
    //             params['id'] = id;
    //             params['kind'] = 'episodes';
    //             params['action'] = "deletesearch";
    //             api->apiReq("Filters", params); 
    //         }
    //         return api->response("api_Openings_delete_msg", 200, 'ok');
    //     } else {
    //         return api->response("api_Episodes_delete_error_msg", 404); 
    //     }
    // } else {
    //     return api->response("api_Openings_delete_msg", 200);
    // }
}

const getListIds = (req: Request, res: Response, next: NextFunction) => {
     const { siglas } = req.params;
     postgress
    .query(`SELECT id FROM openings WHERE anime = ${siglas}`)
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