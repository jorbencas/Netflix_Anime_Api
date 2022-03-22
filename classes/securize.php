<?php 


class Security
{
    public static function isSecureEntry($argv)
    {
        // Si es un cron se deja pasar
        if (php_sapi_name() == 'cli' && !isset($_SERVER['TERM'])) {
            return true;
        }

        // Si no es un cron se comprueba el token segun la fecha y hora emitida
        $token = md5("ES".date("YmdH")."ET");
        if ((isset($_GET["token"]) && $_GET["token"] == $token) || (isset($argv[1]) && $argv[1] == $token)) {
            return true;
        }
        return false;
    }

    public static function secureEntry($argv)
    {
        if (!Security::isSecureEntry($argv)) {
            error_log("ENTRADA NO PERMITIDA");
            header("Location: https://pedidos.protegerse.com");
            exit();
        }
    }

    public static function encrypt_decrypt($action, $string)
    {
        $output = false;
        $encrypt_method = "AES-256-CBC";
        $secret_key = 'OntinEsetKey';
        $secret_iv = 'OntinEsetKeyIv';
        // hash
        $key = hash('sha256', $secret_key);
        
        // iv - encrypt method AES-256-CBC expects 16 bytes - else you will get a warning
        $iv = substr(hash('sha256', $secret_iv), 0, 16);
        if ($action == 'encrypt') {
            $output = openssl_encrypt($string, $encrypt_method, $key, 0, $iv);
            $output = base64_encode($output);
        // $output = substr($output, 0, -2);
        } elseif ($action == 'decrypt') {
            // $string = $string."==";
            $output = openssl_decrypt(base64_decode($string), $encrypt_method, $key, 0, $iv);
        }
        return $output;
    }
    public static function encrypt($string)
    {
        return Security::encrypt_decrypt('encrypt', $string);
    }

    public static function decrypt($string)
    {
        // Si es un md5 no lo desencripto
        if (!empty($string) && preg_match('/^[a-f0-9]{32}$/', $string)) {
            return $string;
        }
        return Security::encrypt_decrypt('decrypt', $string);
    }

       // public function encode_decode($action, $string) {
        //     $output = false;
        //     $encrypt_method = "AES-256-CBC";
        //     $secret_key = 'OntinEsetKey';
        //     $secret_iv = 'OntinEsetKeyIv';
        //     // hash
        //     $key = hash('sha256', $secret_key);
            
        //     // iv - encrypt method AES-256-CBC expects 16 bytes - else you will get a warning
        //     $iv = substr(hash('sha256', $secret_iv), 0, 16);
        //     if ($action == 'encrypt') {
        //         $output = openssl_encrypt($string, $encrypt_method, $key, 0, $iv);
        //         $output = base64_encode($output);
        //     // $output = substr($output, 0, -2);
        //     } elseif ($action == 'decrypt') {
        //         // $string = $string."==";
        //         $output = openssl_decrypt(base64_decode($string), $encrypt_method, $key, 0, $iv);
        //     }
        //     return $output;
        // }
        
}
?>