import responseCustome from "../utils/index";
import { postgress } from "../db/postgres";
import { Request, Response } from 'express';

const getOne = (req: Request, res: Response) => {
    GET = api->getGET();
    db = api->getDb();
    if (isset($GET['kind'])) {
        select = "s.id AS id_external, (SELECT ep.id FROM episodes AS ep INNER JOIN seasons AS sa ON(ep.id BETWEEN sa.epistart AND sa.epiend AND sa.id = s.id) WHERE ep.id = '{$GET['ap']}' + 1 ) AS next,
        (SELECT ep.id FROM episodes AS ep INNER JOIN seasons AS sa ON(ep.id BETWEEN sa.epistart AND sa.epiend AND sa.id = s.id) WHERE ep.id = '{$GET['ap']}' - 1 ) AS prev";
        from = "INNER JOIN seasons AS s ON (s.anime = e.anime AND e.id BETWEEN s.epistart AND s.epiend)";
    } else {
        select = "(SELECT id FROM episodes WHERE anime = a.id AND num = ( SELECT num FROM episodes WHERE id = '{$GET['ap']}' + 1 ) ) AS next,
        (SELECT id FROM episodes WHERE anime = a.id AND num = ( SELECT num FROM episodes WHERE id = '{$GET['ap']}' - 1 ) ) AS prev";
        from = "";
    }
    sql = "SELECT e.id, e.anime, e.num, a.siglas, select
    FROM animes AS a INNER JOIN episodes as e ON a.id = e.anime
    from WHERE e.id = '{$GET['ap']}' ";
    episode = db->obtener_uno($sql);
    if (isset($episode->id)) {
        trans = [
            array("kind" => "epititulo", "id_external" => episode->id),
            array("kind" => "titulo", "id_external" => episode->anime)  
        ];
        if (isset($GET['kind'])) {
            array_push($trans, array("kind" => "seasions", "id_external" => episode->id_external));
        }

        translations = api->gettranslations($trans);
        if ( count($translations) > 0 ) {
            foreach ($translations as lang) {
                kind = lang['kind'];
                k = kind == "titulo" ? 'anime_titulo' : kind;
                episode->$k = lang['translation'];
            }
        }
        media = api->getMedias([
            array( 'type' => 'episodes', 'id_external' => episode->id),
            array( 'type' => 'portada', 'id_external' => episode->anime)
        ]); 
        if (count($media) > 0) {
            foreach ($media as media) {
                k = media['type'] == 'portada' ? 'img' : 'src';
                episode->$k = api->handleMedia($media['type'], media['name'], media['extension'], episode->siglas);
            }
        } else {
            episode->img = api->handleMedia("img","no","jpg");
            episode->src = api->handleMedia("img","no","jpg");
        }
        return api->response("api_Episodes_One_msg", 200, episode);
    } else {
        return api->response("api_Episodes_One_error_msg", 404); 
    }
};

const getbyAnime = (req: Request, res: Response) => {
    GET = api->getGET();
    db = api->getDb();
    if (isset($GET['kind'])) {
        if (isset($GET['seasion'])) {
            where = "AND s.id = {$GET['seasion']}";
        } else {
            where = "AND s.epistart = (SELECT id FROM episodes WHERE anime = {$GET['aa']} ORDER BY num ASC LIMIT 1)";
        }
        from = "INNER JOIN seasons AS s ON (s.anime = e.anime AND e.id BETWEEN s.epistart AND s.epiend)";
    } else {
        where = "";
        from = "";
    }
    sql = "SELECT e.id, a.siglas, e.anime, e.num, a.kind
    FROM animes AS a 
    INNER JOIN episodes as e ON a.id = e.anime
    from
    WHERE e.anime = '{$GET['aa']}' where";
    res = db->listar($sql);
    if (isset($res[0]->id)) {
        media = api->apiReqNode("media", array(
            'type' => 'portada',
            'id_external' => GET['aa']
        ));
        foreach ($res as value) {
            translations = api->gettranslations([
                array("kind" => "epititulo", "id_external" => value->id)
            ]);
            if (count($translations) > 0 ) {
                kind = translations['kind'];
                value->$kind = translations['translation'];
            }
            if (count($media) > 0) {
                value->src = api->handleMedia($media['type'], media['name'], media['extension'], value->siglas);
            } else {
                value->src = api->handleMedia("img","no","jpg");
            }
        }
        return api->response("api_Episodes_slides_msg", 200, res);
    } else {
        return api->response("api_Episodes_slides_error_msg", 404); 
    }
}

const getLast = (req: Request, res: Response) => {
    GET = api->getGET();
    db = api->getDb();
    limit = explode("_",$GET['as']);
    sql = "SELECT DISTINCT e.id, a.kind, e.created, a.siglas, e.anime
    FROM animes AS a 
    INNER JOIN episodes as e ON a.id = e.anime
    ORDER BY e.created DESC OFFSET limit[0] LIMIT limit[1]";
    res = db->listar($sql);
    if (isset($res[0]->id)) {
        foreach ($res as value) {
            translations = api->gettranslations([
                array("kind" => "epititulo", "id_external" => value->id),
                array("kind" => "titulo", "id_external" => value->anime)
            ]);
            if (count($translations) > 0) {
                foreach ($translations as lang) {
                    kind = lang['kind'];
                    k = kind == "titulo" ? 'anime_titulo' : kind;
                    value->$k = lang['translation'];
                }
            }

            media = api->apiReqNode("media",  array(
                'type' => 'banner',
                'id_external' => value->anime
            ));
            if (count($media) > 0) {
                value->src = api->handleMedia($media['type'], media['name'], media['extension'], value->siglas);
            } else {
                value->src = api->handleMedia("img","no","jpg");
            }

        }
        return api->response("api_Episodes_slides_msg", 200, res);
    } else {
        return api->response("api_Episodes_slides_error_msg", 404); 
    }
}

const getidrand = (req: Request, res: Response) => {
    db = api->getDb();
    sql = "SELECT e.id, a.kind FROM episodes AS e INNER JOIN animes AS a ON(e.anime = a.id) ORDER BY random() LIMIT 1;";
    valor = db->obtener_uno($sql);
    if (isset($valor)) {
        return api->response("api_Episodes_last_msg", 200, valor);
    } else {
        return api->response("api_Episodes_last_error_msg", 404); 
    }

}

const insertEdit = (req: Request, res: Response) => {
   
};

const deleteOne = (req: Request, res: Response) => {

};

const deletebyanime = (req: Request, res: Response) => {
    

export {
    getOne,
    getbyAnime,
    getLast,
    getidrand,
    insertEdit,
    deleteOne,
    deletebyanime
};