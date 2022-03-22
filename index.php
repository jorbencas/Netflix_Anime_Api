<?php
    require_once __DIR__ . '/classes/utils.php';
    $utils = new Utils();
    $construct = $utils->getConstruct();
    $currentPage = $utils->getcurrentPage();
    if ($currentPage == 'api') {
        $res = $utils->instanceClases("api", $construct)->process();
        echo json_encode($res, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
    } else {
        $mensage = "No es posible obtener información de Cosas de Anime mediante una llamada ajax o curl.";
        $res = $utils->instanceClases("api", $construct)->response($mensage, 404);
        echo json_encode($res, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
    }
?>