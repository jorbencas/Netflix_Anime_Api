<?php
date_default_timezone_set('Europe/Madrid');
/*
 * Ejemplo de Uso
 *
 * $mail=new Mail();
 * $mail->setFrom("matias@ontinet.com");
 * $mail->setTo("admin@ofi-ontinet.com");
 * $mail->setTextBody("Hola");
 * $mail->setSubject("Ejemplo");
 * $mail->send();
 */

class Mail{
	const SMTP="smtp";
	const QMAIL="qmail";
	const SENDMAIL="sendmail";
    private $mail;
    private $to;
    private $config;
    private $headers;
	public function __construct($host=null, $username=null, $password=null, $type=null) {
        // require_once(dirname(__FILE__) . "/phpmailer/class.phpmailer.php");
        require_once(dirname(__FILE__) . "/PHPMailer6/PHPMailer.php");
        include_once(dirname(__FILE__) . "/../util/Config.class.php");
        $this->config = Config::getConfig(dirname(__FILE__)."/../../configs/Mail/Mail.config", false);
        $this->mail = new PHPMailer();
        if ( PHPMailer::VERSION >= 6 )
        {
            $this->mail->SMTPDebug = 0;
            $this->mail->SMTPAutoTLS = false;
            $this->mail->Debugoutput = 'error_log';
        }
        $this->mail->CharSet = 'utf-8';
        $this->mail->ClearAddresses();
        if (!isset($type))
            $type = $this->config["type"];
        if ($type == Mail::SMTP)
            $this->mail->IsSMTP();
        if ($type == Mail::QMAIL)
            $this->mail->IsSMTP();
        if ($type == Mail::SENDMAIL)
            $this->mail->IsSendmail();
        if (isset($host))
            $this->mail->Host = $host;
        else
            $this->mail->Host = $this->config["host"];
        $this->mail->SMTPAuth = true;
        if (isset($username))
            $this->mail->Username = $username;
        else if (array_key_exists("username", $this->config))
            $this->mail->Username = $this->config["username"];
        if (isset($password))
            $this->mail->Password = $password;
        else if (array_key_exists("password", $this->config))
            $this->mail->Password = $this->config["password"];
        //$this->mail->SingleTo = true;
        $this->to = Array();
        $this->headers = Array();
    }

    public function setFrom($from, $fromName = "") {
        $this->mail->From = $from;
        if (trim($fromName) != "") {
            $this->mail->FromName = $fromName;
        } else {
            $this->mail->FromName = $from;
        }
    }

    public function setTo($to, $toName = "") {
        if ($toName == "") {
            $this->mail->AddAddress($to);
        } else {
            $this->mail->AddAddress($to, $toName);
        }
    }

    public function setCc($cc) {
        $this->mail->setCc($cc);
    }

    public function setBcc($bcc, $bccName = "") {
        if ($bccName == "") {
            $this->mail->AddBCC($bcc);
        } else {
            $this->mail->AddBCC($bcc, $bccName);
        }
    }

    public function setAltBody($body) {
        $this->mail->AltBody = $body;
    }
    public function setSubject($subject) {
        $this->mail->Subject = $subject;
    }

    public function setTextBody($body) {
        $this->mail->Body = $body;
    }

    public function setHTMLBody($body) {
        $this->mail->MsgHTML($body);
    }

    public function addAttachment($filePath) {
        $this->mail->AddAttachment($filePath);
    }

    public function send() {
        $this->mail->ClearCustomHeaders();
        foreach ($this->headers as $header => $value) {
            $this->mail->AddCustomHeader("$header : $value");
        }
        if (trim($this->mail->From) == "root@localhost") {
            $this->setFrom($this->config["from"], $this->config["fromName"]);
        }
        // $this->mail->AddBCC("jterol@ontinet.com");
        $sent = $this->mail->Send();
        if (!$sent) {
            throw new Exception($this->mail->ErrorInfo);
        }
    }

    public function setReturnPath($returnPath) {
        $this->mail->Sender = $returnPath;
    }

    public function setReplyTo($replyTo, $replyToName = "") {
        $this->mail->AddReplyTo($replyTo, $replyToName);
		
    }

    public function addHeader($header, $value) {
        $this->headers[$header] = $value;
    }

    public function removeHeader($header) {
        unset($this->header[$header]);
    }
}

  // $outputLog = "\nERROR ENTRADA A FUNCION EN DESUSO";
            // $outputLog .= "\n\n_____TRAZA_____";
            // $traces = debug_backtrace();
            // foreach ($traces as $trace) {
            //     $outputLog .= "\n".$trace['file']." :: ".$trace['line'];
            // }
            // $outputLog .= "\n_______________\n\n";
            // $dominio = current(explode(".", $_SERVER['HTTP_HOST']));
            // $outputLog .= $dominio;
            // error_log($outputLog);




            
//     function sendtoken($arrArgument, $type) {
//         $mail = array(
//             'type' => $type,
//             'token' => $arrArgument['token'],
//             'inputEmail' => $arrArgument['email']
//         );
//         set_error_handler('ErrorHandler');
//         try {
//             enviar_email($mail);
//             //return true;
//         } catch (Exception $e) {
//             return false;
//         }
//         restore_error_handler();
//     }
?>