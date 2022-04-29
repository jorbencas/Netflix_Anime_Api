<?php
//include_once dirname(__FILE__) . "/../securize.php";
require_once __DIR__ . '/../classes/api.php';
$api = new Api('script');
// Obtener todos los codigos de idioma
$sql = "SELECT code FROM langs";
$langs = $api->getDb()->listar($sql);
$langs = array_map(function ($lang) {
    return $lang->code;
}, $langs);
// FIN de Obtener todos los codigos de idioma
$basePath = __DIR__ . "/../media/animes";
$siglas = __DIR__ . "/../files/animes.json";
if (file_exists($siglas)) {
    $animes = json_decode(file_get_contents($siglas));
}
$scanedFiles = $api->scanFolders($basePath, false, true);
if (!file_exists($siglas) || (file_exists($siglas) && sizeof($scanedFiles) > count($animes))) {
    $api->writeFile(json_encode($scanedFiles), '', $siglas);
}
// $animes = array("5CPS");
$animes = array("CY");
foreach ($animes as $siglas) {
    if (!in_array($siglas, array(
        'DC', "nuevos", "INUYASHA", "D01", "Bleach", "AT", "AS", "Haikyuu",
        "Blood+", "BTB", "DB", "DBS", "DBZ", "DGM", "DN", "FMA", "FELE", "FA", "DTB", "GB", "NANA",
        "IE", "JOJOS", "LLDU", "NNT", "Noragami", "OP", "OYB", "PP", "PPP", "SG", "SD", "SS", "TF",
        "SX", "TG", "TRC"
    ))) {
        $anime = "$basePath/$siglas";
        $bFolder = "$anime/.backup";
        $api->mkFolders($bFolder);
        $sqlFolder = "$bFolder/sql";
        $api->mkFolders($sqlFolder);
        $noSqlFolder = "$bFolder/nosql";
        $api->mkFolders($noSqlFolder);
        if (is_dir($sqlFolder) && is_dir($noSqlFolder)) {
            error_log("Creada estructura de ficheros para backup de $siglas - check");
            backupSql($api, 'animes', $siglas, $anime, $sqlFolder);
            backupSql($api, 'seasons', $siglas, $anime, $sqlFolder);
            backupSql($api, 'openings', $siglas, $anime, $sqlFolder);
            backupSql($api, 'endings', $siglas, $anime, $sqlFolder);
            backupSql($api, 'episodes', $siglas, $anime, $sqlFolder);
            backupNoSql($api, "translations", $siglas, $anime, $langs, $noSqlFolder);
            backupNoSql($api, "media", $siglas, $anime, $langs, $noSqlFolder);
        }
    }
}

function backupSql($api, $kindBackup, $siglas, $anime, $sqlFolder)
{
    $contentFile = array();
    $sqlFile = "$sqlFolder/$kindBackup.json";
    if ($kindBackup == 'animes') {
        $numEpisodes = $api->scanFolders("$anime/episodes");
        if (sizeof($numEpisodes) > 10) {
            $kind = 'serie';
        } else if (sizeof($numEpisodes) > 1 && sizeof($numEpisodes) < 10) {
            $kind = 'ova';
        } else {
            $kind = 'pelicula';
        }
        error_log("\n \t Creando estructura $kindBackup");
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
        $scanedFiles = $api->scanFolders("$anime/episodes", false, true);
        if (sizeof($scanedFiles) > 1) {
            //regex [0-9]{2,3}\.(mp4)
            error_log("\n");
            foreach ($scanedFiles as $file) {
                if (preg_match("/^[0-9]{1,2}/i", $file)) {
                    error_log("\t Creando estructura $kindBackup para $file");
                    $content = new stdClass();
                    $content->id = $siglas . $file;
                    array_push($contentFile, $content);
                }
            }
        } else if (sizeof($scanedFiles) > 0) {
            error_log("\n");
            $file = current($scanedFiles);
            if (preg_match("/^[0-9]{1,2}/i", $file)) {
                error_log("\t Creando estructura $kindBackup para $file");
                $contentFile = new stdClass();
                $contentFile->id = $siglas . $file;
            }
        }
    } else if ($kindBackup == 'openings' || $kindBackup == 'endings') {
        if (is_dir("$anime/$kindBackup")) {
            $scanedFiles = $api->scanFolders("$anime/$kindBackup", false, true);
            if (sizeof($scanedFiles) > 1) {
                error_log("\n");
                foreach ($scanedFiles as $file) {
                    error_log("\t Creando estructura $kindBackup para $file");
                    $content = new stdClass();
                    $elements = explode("/", $file);
                    $fileName = explode('.', end($elements));
                    $num = preg_replace("/^0{1}/i", "", $fileName[0]);
                    $content->id = $siglas . $num;
                    $content->nombre = '';
                    $content->descripcion = '';
                    $content->anime = $siglas;
                    $content->season = null;
                    $content->num = $num;
                    array_push($contentFile, $content);
                }
            } else if (sizeof($scanedFiles) > 0) {
                error_log("\n");
                $file = current($scanedFiles);
                $elements = explode("/", $file);
                $fileName = explode('.', end($elements));
                $num = preg_replace("/^0{1}/i", "", $fileName[0]);
                error_log("\t Creando estructura $kindBackup para $file");
                $contentFile = new stdClass();
                $contentFile->id = $siglas . $num;
                $contentFile->nombre = '';
                $contentFile->descripcion = '';
                $contentFile->anime = $siglas;
                $contentFile->season = null;
                $contentFile->num = $num;
            }
        }
    } else if ($kindBackup == 'episodes') {
        $scanedFiles = $api->scanFolders("$anime/episodes");
        if (sizeof($scanedFiles) > 1) {
            error_log("\n");
            $idExternal = $siglas;
            foreach ($scanedFiles as $file) {
                $info = pathinfo($file);
                $f = explode("/", $info['dirname']);
                if (preg_match("/^[0-9]{1,2}/i", end($f))) {
                    $idExternal .= preg_replace("/^0{1}/i", "", end($f));
                } else {
                    $idExternal = null;
                }
                $elements = explode("/", $file);
                $fileName = explode('.', end($elements));
                $num = preg_replace("/^0{1}/i", "", $fileName[0]);
                error_log("\t Creando estructura $kindBackup para " . end($elements));
                $content = new stdClass();
                $content->id = $siglas . $num;
                $content->anime = $siglas;
                $content->season = $idExternal;
                $content->num = $num;
                array_push($contentFile, $content);
            }
        } else if (sizeof($scanedFiles) > 0) {
            error_log("\n");
            $idExternal = $siglas;
            $file = current($scanedFiles);
            $info = pathinfo($file);
            $f = explode("/", $info['dirname']);
            if (preg_match("/^[0-9]{1,2}/i", end($f))) {
                $idExternal .= preg_replace("/^0{1}/i", "", end($f));
            } else {
                $idExternal = null;
            }
            $elements = explode("/", $file);
            $fileName = explode('.', end($elements));
            $num = preg_replace("/^0{1}/i", "", $fileName[0]);
            error_log("\t Creando estructura $kindBackup para " . end($elements));
            $contentFile = new stdClass();
            $contentFile->id = $siglas . $num;
            $contentFile->anime = $siglas;
            $contentFile->season = $idExternal;
            $contentFile->num = $num;
        }
    }
    if ((gettype($contentFile) == 'array' && sizeof($contentFile) > 0) || (gettype($contentFile) == 'object' && (isset($contentFile->id) || isset($contentFile->siglas)))) {
        $api->writeFile(json_encode($contentFile, JSON_UNESCAPED_UNICODE), '', $sqlFile);
        if (file_exists($sqlFile)) {
            error_log("Creado fichero sql para $kindBackup de $siglas - check");
        } else {
            error_log(json_encode($contentFile));
        }
    } else {
        error_log("No hay $kindBackup en $siglas");
    }
}

function backupNoSql($api, $kindBackup, $siglas, $anime, $langs, $noSqlFolder){
    $bNOSQLFile = "$noSqlFolder/$kindBackup.json";
    $contentFile = array();
    if ($kindBackup == 'media') {
        $kinds = array('portada', 'banner', 'openings', 'endings', 'episodes');
        foreach ($kinds as $kind) {
            $path = "$anime/$kind";
            if (is_dir($path)) {
                error_log("\n");
                $scanedFiles = $api->scanFolders($path, true, true);
                if (sizeof($scanedFiles) > 0) {
                    foreach ($scanedFiles as $fol) {
                        $fileName = explode('.', $fol );
                        $idExternal = $siglas;
                        if ($kind !== 'portada' && $kind !== 'banner') {
                            $idExternal .= preg_replace("/^0{1}/i", "", $fileName[0]);
                        }
                        error_log("\t Creando estructura $kindBackup para $kind  ". $fol);
                        array_push($contentFile, array(
                            "type" => $kind,
                            "name" => $fileName[0],
                            "extension" => $fileName[1],
                            "id_external" => $idExternal
                        ));
                    }
                }
            }
        }
    } else if ($kindBackup == 'translations') {
        $kinds = array('titulo', 'sinopsis');
        foreach ($kinds as $kind) {
            error_log("\n");
            foreach ($langs as $lang) {
                error_log("\t Creando estructura $kindBackup para $kind con idioma $lang");
                array_push($contentFile, array(
                    "translation" => '',
                    "lang" => $lang,
                    "kind" => $kind,
                    "id_external" => $siglas
                ));
            }
        }
        error_log("\n");
        $scanedFiles = $api->scanFolders("$anime/episodes", false, true);
        if (sizeof($scanedFiles) > 0) {
            foreach ($scanedFiles as $file) {
                if (preg_match("/^[0-9]{1,2}/i", $file)) {
                    foreach ($langs as $lang) {
                        error_log("\t Creando estructura $kindBackup para sessions $file con idioma $lang");
                        array_push($contentFile, array(
                            "translation" => '',
                            "lang" => $lang,
                            "kind" => 'sessions',
                            "id_external" => $siglas . $file
                        ));
                    }
                }
            }
        }
        error_log("\n");
        $scanedFiles = $api->scanFolders("$anime/episodes");
        if (sizeof($scanedFiles) > 0) {
            foreach ($scanedFiles as $file) {
                error_log("\n");
                $idExternal = $siglas;
                $elements = explode("/", $file);
                $fileName = explode('.', end($elements));
                $idExternal .= preg_replace("/^0{1}/i", "", $fileName[0]);
                foreach ($langs as $lang) {
                    error_log("\t Creando estructura $kindBackup para episodes " . end($elements) . " con idioma $lang");
                    array_push($contentFile, array(
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
        $api->writeFile(json_encode($contentFile, JSON_UNESCAPED_UNICODE), '', $bNOSQLFile);
        if (file_exists($bNOSQLFile)) {
            error_log("Creado fichero nosql para $kindBackup de $siglas - check");
        } else {
            error_log(json_encode($contentFile));
        }
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
