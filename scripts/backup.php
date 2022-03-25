<?php
    //include_once dirname(__FILE__) . "/../securize.php";
    require_once __DIR__ . '/../classes/api.php';
    $api = new Api();
    // backupNoSql($api, "translations");
    // backupNoSql($api, "media");
  // $animes = array('ZNT','SAO','BDGIM', 'IEGOCH', 'MKNR','YN', 
  //   'IEGOGLA', 'SAOOS', 'EJDLP', 'IELADO', 'TCSLPDRE', 'FELE', 'FA', 
  //   'AJIN', 'AICOI', 'TNYNN', 'PPP', 'MKNR', 'CB', 'BTOOM', 'BLOOD+', 
  //   'FMA', 'DMC', 'DGM', 'LLDU', 'SSSG', 'PP', 'MIA', 'MNY','NGNL', 'NNT', 
  //   'NORAGAMI', 'OP', 'DNA', 'DN', 'DRIFTERS', 'DTB', 'FSN', 'GASGSTA', 'GB', 
  //   'HAIKYUU', 'HELLSING', 'HM', 'HOTD', 'IE', 'IEGO', 'IEGOG', 'INUYASHA', 
  //   'JOJOSBA-PB-BT', 'JOJOSBA-SC', 'OPM', 'OYB', 'PA', 'PP2', 'REVISIONS', 
  //   'SAOEE', 'SD', 'SG', 'SWKNU', 'SX', 'TF', 'TFR', 'TG', 'TGRE', 'TGVA', 
  //   'TRIGUN', 'TRC', 'PB', '5CPS', 'AKIRA', 'EYLB', 'FIREWORKS', 'FTDC', '91D', 
  //   'VS', 'ECDLPK', '7S', 'MVT', 'LCQSAT', 'PDDLS', 'AGK', 'BC', 'AC', 'BTB', 
  //   'AS', 'AT', 'DGMH', 'DC', 'DBSB', 'LPM', 'BJH', 'ECA', 'LNL', 'FOO', 'KNS', 
  //   'BLEDOI', 'BLEDOII', 'BLEDOIII', 'BASILISK', 'BLOODC', 'AS2', 'AC2', 'BAKUGAN', 
  //   'ONS', 'BNV', 'BIDG', 'AT2', 'AT3', 'D01', 'DORAEMON', 'FZ', 'FTF', 'LTDLL', 
  //   'FMAECDS', 'FMALESM', 'EHDC', 'ERDM', 'PPLP', 'EVDC', 'MUHDAI', 'DNRLVD', 
  //   'DBRF', 'BEUV', 'SSLDS', 'NNTTNT', 'JOJOSBA-DIU', 'DB', 'DBZ', 'SXLPEUS', 
  //   'SXOVAS', 'PLPEPDT', 'GITSTR', 'GITSAB', 'GITSABGW', 'GITABGT', 'GITSAGSTA', 
  //   'DBLLDDS', 'DBLBDEEC', 'DBAM', 'DBECDMF', 'OPFG', 'BNHA2H', 'DBZDAMG', 
  //   'DBZEMFDM', 'DBZLMB', 'DBZESGSG', 'DBZLMR', 'DBZGDFI', 'DBZLTGSS', 'DBZEED', 
  //   'DBZLGDP', 'DBZERB', 'DBZECD', 'DBZF', 'DBZEADD', 'DBZLBDD', 'Gantz', 'IEAQTET', 
  //   'IECDLSEEE', 'ILEC', 'IFELM', 'HU', 'CY'
  // );

   // $animes = array('BDGIM');
    $animes = array('ZNT','SAO','BDGIM', 'MKNR','YN', 'MKNRM');
    $delimiter = ");";
    $inits = array(
        'animes' => 1,
        'openings' => 1,
        'endings' => 1,
        'episodes' => 1,
        'seasons' => 1
    );
    foreach ($animes as $file) {
        $basePath = __DIR__ . "/../backup/sql/animes/$file.sql";
        if (file_exists($basePath)){
            $elements = explode($delimiter,file_get_contents($basePath));
            foreach ($elements as $key => $value) {
                foreach ($inits as $table => $id) {
                    if (strstr($value,"INTO $table")  
                    && (
                        strstr($value,"VALUES($id") 
                        || strstr($value,"VALUES('$id'")
                    )
                    ){
                        $id++;
                        $inits[$table] = $id;
                    }
                }
                $elements[$key] = $value;
            }
        } else {
            error_log("////////////// error //////////////");
            error_log(json_encode($basePath));
        }
    }
    error_log(json_encode($inits));

    // function backupNoSql($api, $kindBackup){
    //     $kinds = array( 
    //         "portada", "banner", "openings", 
    //         "endings", "episodes"
    //     );

    //     $extfolders = array(
    //         'AJIN', 'Blood+', 'DGM', 'LLDU', 'NNT', 'OP',
    //         'INUYASHA', 'OYB', 'PP2', 'REVISIONS', 'BC', 'AC',
    //         'SD', 'SG', 'SWKNU', 'SX', 'TRC', 'AKIRA', 'EYLB',
    //         'FIREWORKS', 'BTB', 'AS', 'DC', 'BASILISK', 'BNV',
    //         'BLOODC', 'AS2', 'AC2', 'BAKUGAN', 'ONS', 'BIDG',
    //         'D01', 'DORAEMON', 'EHDC', 'PPLP', 'EVDC', 'DNRLVD',
    //         'DBRF', 'DB', 'DBZ', 'SXLPEUS', 'SXOVAS', '_nana',
    //         'nuevos'
    //     );

    //     $basePath = __DIR__ . '/../backup/nosql/anie';
    //     $scaned = $api->scanFolders($basePath,false, true);
    //     if (sizeof($scaned) > 0) {
    //         foreach ($scaned as $file) {
    //             if (is_dir("$basePath/$file")){
    //                 $f = explode(".",$file);
    //                 $dir = $f[0];
    //                 $bFile = "$basePath/$dir/$dir.json";
    //                 if ($kindBackup == 'media') {
    //                     $bFile = str_replace("$dir.json", $dir."_media.json", $bFile);
    //                 }
    //                 $folder = __DIR__ . "/../media/animes/$dir";
    //                 if (file_exists($bFile)) {
    //                     unlink($bFile);
    //                 }
    //                 $contents = array();
    //                 if (is_dir($folder)
    //                 && (!in_array(strtoupper($dir),$extfolders) || !in_array(ucfirst(strtolower($dir)),$extfolders))) {
    //                     foreach ($kinds as $d) {
    //                         if(is_dir("$folder/$d")){
    //                             $scanedFiles = $api->scanFolders("$folder/$d", true, true);
    //                             if (sizeof($scanedFiles) > 0) {
    //                                 foreach ($scanedFiles as $fol) {
    //                                     if(strstr($fol,".")){
    //                                         $elements = explode(".",$fol);
    //                                         if ($kindBackup == 'media') {
    //                                             array_push($contents,array(
    //                                                 "type" => $d,
    //                                                 "name" => $elements[0],
    //                                                 "extension" => $elements[1],
    //                                                 "id_external" => 0
    //                                             ));
    //                                         } else if($kindBackup == 'translations') {
    //                                             array_push($contents,array(
    //                                                 "translation" => $d,
    //                                                 "lang" => $elements[0],
    //                                                 "kind" => $elements[1],
    //                                                 "id_external" => 0
    //                                             ));
    //                                         }
    //                                     } else {
    //                                         error_log("$folder/$d/$fol");
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }
    //                     $con = json_encode($contents, JSON_UNESCAPED_UNICODE);
    //                     $api->writeFile($con,'backup',$bFile);
    //                 } else {
    //                     error_log($folder);
    //                 }
    //             }
    //         }
    //     }
    // }
?>
