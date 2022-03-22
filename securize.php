<?php
include_once __DIR__ . '/classes/securize.php';
if (!Security::isSecureEntry($argv)) {
    error_log("ENTRADA NO PERMITIDA");
    // include_once dirname(__FILE__) . '/libs/mail/Mail.class.php';
    // try {
    //     $mail = new Mail();
    //     $mail->setFrom("dev@ontinet.com");
    //     $mail->setTo("dev@ontinet.com");
    //     // $mail->setTo("jterol@ontinet.com");
    //     $body  = "Se ha ejecutado un script sin el permiso adecuado:<br /><br />";
    //     $body .= "<b>FECHA:          </b>".date('Y-m-d H:i:s')       ."<br />";
    //     $body .= "<b>SSH_CONNECTION: </b>".$_SERVER['SSH_CONNECTION']."<br />";
    //     $body .= "<b>SCRIPT_URI:     </b>".$_SERVER['SCRIPT_URI']    ."<br />";
    //     $body .= "<b>HTTP_HOST:      </b>".$_SERVER['HTTP_HOST']     ."<br />";
    //     $body .= "<b>SERVER_NAME:    </b>".$_SERVER['SERVER_NAME']   ."<br />";
    //     $body .= "<b>SERVER_ADDR:    </b>".$_SERVER['SERVER_ADDR']   ."<br />";
    //     $body .= "<b>REMOTE_ADDR:    </b>".$_SERVER['REMOTE_ADDR']   ."<br />";
    //     $body .= "<b>QUERY_STRING:   </b>".$_SERVER['QUERY_STRING']  ."<br />";
    //     $body .= "<b>REQUEST_URI:    </b>".$_SERVER['REQUEST_URI']   ."<br />";
	//     $body .= "<b>SCRIPT_NAME:    </b>".$_SERVER['SCRIPT_NAME']   ."<br />";
    //     $body .= "<b>SCRIPT_PATH:    </b>".get_included_files()[0]   ."<br />";
    //     $body .= "<b>RESPONSABLE_USER:    </b>".exec('whoami')  ."<br />";
    //     $mail->setSubject("Ejecución de Script NO permitida");
    //     $mail->setHTMLBody($body);
    //     $mail->send();
    // } catch (Exception $e) {
    // }
    
    // header("Location: /index.php");
    exit();
}
?>