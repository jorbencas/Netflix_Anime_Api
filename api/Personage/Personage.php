<?php 
    function Personage($api) {
        $GET = $api->getGET();
        switch ($api->getAction()) {
            case 'inserteditOnepersonage': $result =  $api->isValidAccesToken() ? inserteditOnepersonage($api) : $api->response("api_Peronage_resp_error_msg", 404);  break;
            case 'deleteOnepersonage': $result =  $api->isValidAccesToken() ? deleteOnepersonage($api) : $api->response("api_Peronage_resp_error_msg", 404);  break;
            case 'deletePersonagebyanime': $result =  $api->isValidAccesToken() ? deletePersonagebyanime($api) : $api->response("api_Peronage_resp_error_msg", 404);  break;
            case 'apione': $result =  getOneCharacters($api); break;
            case 'apislide': $result = getLastCharacters($api); break;
            case 'apiby': $result = getCharacterbyAnime($api); break;
            case 'query': $result = function_exists($GET['aq']) ? $GET['aq']($api) : $api->response("api_Peronage_resp_error_msg", 404);  break;
            default: $result = $api->response("api_Peronage_resp_error_msg", 404);  break;
        }
        return $result;
    }

    function getCharacterbyAnime($api) {
        $db = $api->instanceClases("database");
        $GET = $api->getGET();
        $sql = "SELECT p.id, p.nombre, p.descripcion, p.anime, a.siglas, a.idiomas
        FROM  personages AS p
        INNER JOIN animes AS a ON(p.anime = a.id) 
        WHERE p.anime = '{$GET['aa']}'";
        $res = $db->listar($sql);
        if (isset($res[0]->id)) {
            foreach ($res as $key => $value) {
                $element['type'] = 'personages';
                $element['id_external'] = $value->id;
                $media = $api->apiReqNode("media", $element);
                if (count($media) > 0) {
                    $value->src = $api->handleMedia($media['type'], $media['name'], $media['extension'], $value->siglas);
                } else {
                    $value->src = $api->handleMedia("img","no","jpg");
                }
                $res[$key] = $value;
            }
            return $api->response("api_Personage_slides_msg", 200, $res);
        } else {
            return $api->response("api_Personage_slides_error_msg", 404); 
        }
    };

    function getOneCharacters($api) {
        $db = $api->instanceClases("database");
        $GET = $api->getGET();
        $sql = "SELECT p.id, p.nombre, p.descripcion,a.siglas,
        p.fecha_nacimiento, p.anime, p.fecha_muerte
        FROM  personages AS p
        INNER JOIN animes AS a ON(p.anime = a.id) 
        WHERE p.id = '{$GET['ap']}'";
        $res = $db->listar($sql);
        if (isset($res[0]->id)) {
            $element['type'] = 'personages';
            $element['id_external'] = $res[0]->id;
            $media = $api->apiReqNode("media", $element);
            if (count($media) > 0) {
                $res[0]->src = $api->handleMedia($media['type'], $media['name'], $media['extension'], $res[0]->siglas);
            } else {
                $res[0]->src = $api->handleMedia("img","no","jpg");
            }
            return $api->response("api_Personage_One_msg", 200, $res[0]);
        } else {
            return $api->response("api_Personage_One_error_msg", 404); 
        }
    }
    
    function getLastCharacters($api) {
        $db = $api->instanceClases("database");
        $GET = $api->getGET();
        $limit = explode("_",$GET['as']);
        $sql = "SELECT p.id, p.nombre, p.descripcion, a.siglas
        FROM animes AS a
        INNER JOIN personages AS p ON m.personage = p.id
        OFFSET $limit[0] LIMIT $limit[1]";
        $res = $db->listar($sql);
        if (isset($res[0]->id)) {
            foreach ($res as $key => $value) {
                $element['type'] = 'personages';
                $element['id_external'] = $value->id;
                $media = $api->apiReqNode("media", $element);
                if (count($media) > 0) {
                    $value->src = $api->handleMedia($media['type'], $media['name'], $media['extension'], $value->siglas);
                } else {
                    $value->src = $api->handleMedia("img","no","jpg");
                }
                $res[$key] = $value;
            }
            return $api->response("api_Peronage_last_msg", 200, $res);
        } else {
            return $api->response("api_Peronage_last_error_msg", 404); 
        }
    }

    function lastidpersonage($api) {
        $db = $api->instanceClases("database");
        $sql = "SELECT MAX(id) FROM personages";
        $valor = $db->obtener_una_columna($sql);
        if (isset($valor)) {
            return $api->response("api_Personage_lastid_msg", 200, $valor);
        } else {
            return $api->response("api_Personage_lastid_error_msg", 404); 
        }
    }

    function inserteditOnepersonage($api) {
        $db = $api->instanceClases("database");
        $POST = $api->getPOST();
        $sql = "SELECT * FROM personages WHERE id = '{$POST['id']}'";
        $valor = $db->listar($sql);
        if (!isset($valor[0]->id)) {
            $sql = "INSERT INTO personages(id, nombre, descripcion, 
            fecha_nacimiento, fecha_muerte,anime) values('{$POST['id']}',  
            '{$POST['nombre']}', '{$POST['descripcion']}', '{$POST['fecha_nacimiento']}', 
            '{$POST['fecha_muerte']}', '{$POST['anime']}')";
            $inserted = $db->ejecutar($sql);
            if ($inserted) {
                $kind = "Personage insertado";
                $mensage = "Se ha insertado el personage {$POST['nombre']}";
                $api->writeFile(array("kind" => $kind, "message" => $mensage),"log");
                return $api->response("api_Personage_insert_msg", 200, $sql);
            } else {
                return $api->response("api_Personage_insert_error_msg", 404); 
            }
        } else {
            $sql = "UPDATE personages set   
            nombre ='{$POST['nombre']}', descripcion = '{$POST['descripcion']}', 
            fecha_nacimiento = '{$POST['fecha_nacimiento']}', 
            fecha_muerte = '{$POST['fecha_muerte']}', 
            anime = '{$POST['anime']}' WHERE id = '{$POST['id']}'";
            $updated = $db->ejecutar($sql);
            if ($updated) {
                $kind = "Personage actualizado";
                $mensage = "Se ha actualizado el personage {$POST['nombre']}";
                $api->writeFile(array("kind" => $kind, "message" => $mensage),"log");
                return $api->response("api_Personage_update_msg", 200, $sql);
            } else {
                return $api->response("api_Personage_update_error_msg", 404); 
            }
        }
    };

    function deleteOnepersonage($api) {
        $db = $api->instanceClases("database");
        $POST = $api->getPOST();
        $data = $api->apiReq("Personage&ap={$POST['id']}");
        if ($data['status']['code'] == 200) {
            $personage = $data['data'];
            $personage['action'] = 'deleteby';
            $personage['type'] = "personages";
            $personage['kind'] = 'personage';
            $data = $api->apiReq("Upload", $personage);
            if ($data['status']['code'] == 200) {
                $sql = "DELETE FROM personages WHERE id = '{$POST['id']}'";
                $deleted = $db->ejecutar($sql);
                if ($deleted) {
                    return $api->response("api_Personage_delete_msg", 200, $data['data']);
                } else {
                    return $api->response("api_Personage_delete_error_msg", 404); 
                }
            } else {
                return $api->response("api_Personage_delete_error_msg", 404); 
            }
        } else {
            return $api->response("api_Personage_delete_error_msg", 404); 
        }
    };

    function deletePersonagebyanime($api) {
        $db = $api->instanceClases("database");
        $POST = $api->getPOST();
        $data = $api->apiReq("Personage&aa={$POST['id']}");
        if ($data['status']['code'] == 200) {
            $sql = "DELETE FROM personages WHERE anime = '{$POST['id']}'";
            $deleted = $db->ejecutar($sql);
            if ($deleted) {
                foreach ($data['data'] as $key => $value) {
                    $id = $value['id'];
                    $params['kind'] = "epititulo";
                    $params['action'] = "deletetranslation";
                    $params['id_external'] = $id;
                    $api->apiReq("Langs", $params);
                    $sql = "DELETE FROM atributtes WHERE episodes = '$id' AND anime = '{$POST['id']}'";
                    $db->ejecutar($sql);
                    $params['id'] = $id;
                    $params['action'] = "deletetelementbyepisode";
                    $api->apiReq("History", $params); 
                    $params['id'] = $id;
                    $params['kind'] = 'episodes';
                    $params['action'] = "deletesearch";
                    $api->apiReq("Filters", $params); 
                }
                return $api->response("api_Personage_delete_msg", 200, "ok");
            } else {
                return $api->response("api_Personage_delete_error_msg", 404); 
            }
        } else {
            return $api->response("api_Personage_delete_msg", 200);
        }
    }
    
?>