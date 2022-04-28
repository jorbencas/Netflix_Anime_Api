<?php
//include_once dirname(__FILE__) . "/../securize.php";
require_once __DIR__ . '/../classes/api.php';
$api = new Api('script');
// Obtener todos los codigos de idioma
    $sql = "SELECT code FROM langs";
    $langs = $api->getDb()->listar($sql);
    $langs = array_map(function($lang){ return $lang->code; }, $langs);
// FIN de Obtener todos los codigos de idioma
$siglas = __DIR__ . "/../files/animes.json";
if (file_exists($siglas)) {
    $animes = json_decode(file_get_contents($siglas));
}
$basePath = __DIR__ . "/../media/animes";
$scanedFiles = $api->scanFolders($basePath, false, true);
if (!file_exists($siglas) || (file_exists($siglas) && sizeof($scanedFiles) > count($animes))) {
    $api->writeFile(json_encode($scanedFiles), '', $siglas);
}
// $animes = array("5CPS");
$animes = array("CY");
foreach ($animes as $siglas) {
    if (in_array($siglas,array('DC',"nuevos", "INUYASHA", "D01", "Bleach", "AT", "AS", "Haikyuu",
    "Blood+", "BTB", "DB", "DBS", "DBZ", "DGM", "DN","FMA", "FELE", "FA", "DTB", "GB", "NANA",
    "IE", "JOJOS", "LLDU", "NNT", "Noragami", "OP", "OYB", "PP", "PPP", "SG", "SD", "SS", "TF",
    "SX", "TG","TRC"))) {
        $anime = "$basePath/$siglas";
        $bFolder = "$anime/.backup";
        $api->mkFolders($bFolder);
        $sqlFile = "$bFolder/sql/$siglas.json";
        $api->writeFile(json_encode([]), 'backup', $sqlFile);
        $bNOSQLFolder = "$bFolder/nosql";
        $api->mkFolders($bNOSQLFolder);
        $translationsFile = "$bNOSQLFolder/$siglas.json";
        $api->writeFile(json_encode([]), 'backup', $translationsFile);
        $mediaFile = "$bNOSQLFolder/$siglas" . "_media.json";
        $api->writeFile(json_encode([]), 'backup', $mediaFile);
        if (file_exists($sqlFile) && file_exists($translationsFile) && file_exists($mediaFile)) {
            error_log("Creada estructura de ficheros para backup de $siglas - check");
            backupSql($api, 'animes', $siglas, $anime);
            backupSql($api, 'seasons', $siglas, $anime);
            backupSql($api, 'openings', $siglas, $anime);
            backupSql($api, 'endings', $siglas, $anime);
            backupSql($api, 'episodes', $siglas, $anime);
            backupNoSql($api, "media", $siglas, $anime, $langs);
            backupNoSql($api, "translations", $siglas, $anime, $langs);
        }
    }
}

function backupSql($api, $kindBackup, $siglas, $anime){
    $contentFile = array();
    $sqlFile = "$anime/.backup/sql/$kindBackup.json";
    if ($kindBackup == 'animes') {
        $scanedFiles = $api->scanFolders("$anime/episodes");
        if (sizeof($scanedFiles) > 10) {
            $kind = 'serie';
        } else if (sizeof($scanedFiles) > 1 && sizeof($scanedFiles) < 10) {
            $kind = 'ova';
        } else {
            $kind = 'pelicula';
        }
        $contentFile = new stdClass();
        $contentFile->siglas = $siglas;
        $contentFile->generes = '';
        $contentFile->idiomas = '';
        $contentFile->date_publication  = '';
        $contentFile->date_finalization  = '';
        $contentFile->state  = 'Finalizado';
        $contentFile->kind = $kind;
        $contentFile->temporada  = '';
    } else if ($kindBackup == 'seasons') {
        $scanedFiles = $api->scanFolders("$anime/episodes",false, true);
        if (sizeof($scanedFiles) > 1) {
            //regex [0-9]{2,3}\.(mp4)
            foreach ($scanedFiles as $file) {
                if(preg_match("/^[0-9]{1,2}/i",$file)){
                    // error_log("Session: $siglas");
                    $idExternal = $siglas . $file;
                    $content = new stdClass();
                    $content->id = $idExternal;
                    array_push($contentFile,$content);
                }
            }
        } else if (sizeof($scanedFiles) > 0) {
            $file = current($scanedFiles);
            if(preg_match("/^[0-9]{1,2}/i",$file)){
                $idExternal = $siglas . $file;
                $contentFile = new stdClass();
                $contentFile->id = $idExternal;
            }
        }
    } else if ($kindBackup == 'openings' || $kindBackup == 'endings') {
        if (is_dir("$anime/$kindBackup")) {
            $scanedFiles = $api->scanFolders("$anime/$kindBackup", false, true);
            if (sizeof($scanedFiles) > 1) {
                foreach ($scanedFiles as $file) {
                    $content = new stdClass();
                    $elements = explode("/",$file);               
                    $fileName = explode('.',end($elements));
                    $num = preg_replace("/^0{1}/i", "" ,$fileName[0]);
                    $content->id = $siglas.$num;;
                    $content->nombre = '';
                    $content->descripcion = '';
                    $content->anime = $siglas;
                    $content->season = '';
                    $content->num = $num;
                    array_push($contentFile,$content);
                }
            } else if (sizeof($scanedFiles) > 0) {
                $file = current($scanedFiles);
                $elements = explode("/",$file);               
                $fileName = explode('.',end($elements));
                $num = preg_replace("/^0{1}/i", "" ,$fileName[0]);
                $contentFile = new stdClass();
                $contentFile->id = $siglas.$num;;
                $contentFile->nombre = '';
                $contentFile->descripcion = '';
                $contentFile->anime = $siglas;
                $contentFile->season = '';
                $contentFile->num = $num;
            }
        }
    } else if ($kindBackup == 'episodes') {
        $scanedFiles = $api->scanFolders("$anime/episodes");
        if (sizeof($scanedFiles) > 1) {
            $idExternal = $siglas;
            foreach ($scanedFiles as $file) {
                $info = pathinfo($file);
                $f = explode("/",$info['dirname']);
                if(preg_match("/^[0-9]{1,2}/i",end($f))){
                    $idExternal .= preg_replace("/^0{1}/i", "" ,end($f));
                } else {
                    $idExternal = null;
                }
                $elements = explode("/",$file);               
                $fileName = explode('.',end($elements));
                $num = preg_replace("/^0{1}/i", "" ,$fileName[0]);
                $content = new stdClass();
                $content->id = $siglas.$num;;
                $content->anime = $siglas;
                $content->season = $idExternal;
                $content->num = $num;
                array_push($contentFile,$content);
            }
        } else if (sizeof($scanedFiles) > 0) {
            $idExternal = $siglas;
            $file = current($scanedFiles);
            $info = pathinfo($file);
            $f = explode("/",$info['dirname']);
            //regex [0-9]{2,3}\.(mp4)
            if(preg_match("/^[0-9]{1,2}/i",end($f))){
                $idExternal .= preg_replace("/^0{1}/i", "" ,end($f));
            } else {
                $idExternal = null;
            }
            $elements = explode("/",$file);             
            $fileName = explode('.',end($elements));
            $num = preg_replace("/^0{1}/i", "" ,$fileName[0]);
            $contentFile = new stdClass();
            $contentFile->id = $siglas.$num;
            $contentFile->anime = $siglas;
            $contentFile->season = $idExternal;
            $contentFile->num = $num;
        }
    }
    if ( (gettype($contentFile) == 'array' && sizeof($contentFile) > 0) || (gettype($contentFile) == 'object' && (isset($contentFile->id) ||isset($contentFile->siglas) ))) {
        error_log(json_encode($contentFile));
        $api->writeFile(json_encode($contentFile, JSON_UNESCAPED_UNICODE), 'backup', $sqlFile);
    } else {
        error_log("No hay $kindBackup en $siglas");
    }
}

function backupNoSql($api, $kindBackup, $siglas, $anime, $langs){
    $bNOSQLFile = "$anime/.backup/nosql/$siglas"."_"."$kindBackup.json";;
    $contentFile = array();
    if ($kindBackup == 'media') {
        $scanedFiles = $api->scanFolders($anime, true);
        if (sizeof($scanedFiles) > 0) {
            foreach ($scanedFiles as $fol) {
                if( is_file($fol) && !strstr($fol, '.backup')){
                    $elements = explode("/",$fol);
                    $fileName = explode('.',end($elements));
                    $kinds = array('portada','banner','openings','endings','episodes');
                    foreach ($kinds as $kind) {
                        if (strstr($fol, $kind)) {
                            $idExternal = $siglas;
                            if ($kind !== 'portada' || $kind !== 'banner') {
                                $fileName = explode('.',end($elements));
                                if(preg_match('/^0{1}[0-9]/i',$fileName[0])){
                                    $idExternal .= preg_replace("/^0{1}/i", "" ,$fileName[0]);
                                }
                            }
                            array_push($contentFile,array(
                                "type" => $kind,
                                "name" => $fileName[0],
                                "extension" => $fileName[1],
                                "id_external" => $idExternal
                            ));
                        }
                    }
                }
            }
        }
    } else if($kindBackup == 'translations') {
        $kinds = array('titulo','sinopsis');
        foreach ($kinds as $kind) {
            foreach ($langs as $lang) {
                array_push($contentFile,array(
                    "translation" => '',
                    "lang" => $lang,
                    "kind" => $kind,
                    "id_external" => $siglas
                ));
            }
        }

        $scanedFiles = $api->scanFolders("$anime/episodes",false, true);
        if (sizeof($scanedFiles) > 0) {
            //regex [0-9]{2,3}\.(mp4)
            foreach ($scanedFiles as $file) {
                if(preg_match("/^[0-9]{1,2}/i",$file)){
                    $idExternal = $siglas . $file;
                    foreach ($langs as $lang) {
                        array_push($contentFile,array(
                            "translation" => '',
                            "lang" => $lang,
                            "kind" => 'sessions',
                            "id_external" => $idExternal
                        ));
                    }
                }
            }
        }

        $scanedFiles = $api->scanFolders("$anime/episodes");
        if (sizeof($scanedFiles) > 0) {
            foreach ($scanedFiles as $file) {
                $idExternal = $siglas;
                $info = pathinfo($file);
                $f = explode("/",$info['dirname']);
                if(preg_match("/^[0-9]{1,2}/i",end($f))){
                    $idExternal .= preg_replace("/^0{1}/i", "" ,end($f));
                }
                foreach ($langs as $lang) {
                    array_push($contentFile,array(
                        "translation" => '',
                        "lang" => $lang,
                        "kind" => 'epititulo',
                        "id_external" => $idExternal
                    ));
                }
            }
        }
    }
    if (sizeof($contentFile) > 0) {
        error_log(json_encode($contentFile));
        $api->writeFile(json_encode($contentFile, JSON_UNESCAPED_UNICODE), 'backup', $bNOSQLFile);
    } else {
        error_log("No hay $kindBackup en $siglas");
    }
    
}

// function reloadBackup($animes, $basePath, $api){
//     foreach ($animes as $sufijo) {
//         $bFolder = "$basePath/$sufijo/.backup";
//         $sqlFile = "$bFolder/$sufijo.sql";
//         if (file_exists($sqlFile)) {
//             $api->getDb()->executeFromFile($sqlFile);
//         }
//         $data = json_decode(file_get_contents("$bFolder/$sufijo/$sufijo.json"));
//         foreach ($data as $d) {
//             error_log(json_encode($api->apiReqNode("translation/new", $d)));
//         }
//         $data = json_decode(file_get_contents("$bFolder/$sufijo/$sufijo"."_media.json"));
//         foreach ($data as $d) {
//             error_log(json_encode($api->apiReqNode("media/new", $d)));
//         }
//     }
// }
?>