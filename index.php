<?php
    require_once __DIR__ . '/classes/api.php';
    $api = new Api();
    echo json_encode($api->run(), JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
?>