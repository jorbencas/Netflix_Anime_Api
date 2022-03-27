<?php
    require_once __DIR__ . '/validators.php';
    require_once __DIR__ . '/config.php';
    require_once __DIR__ . '/database.php';
    class Api extends Config {
        use Validators;
        private $lang;
        private $GET;
        private $POST;
        private $headers;
        private $db;
        private $am;
        private $action;

        public function __construct($params = null) {
            parent::__construct();
            if ($params != 'script') {
                $this->GET = $this->getrequest();
                $this->db = new Database();
                $GET = $this->getGET();
                $this->lang = $this->urlLang($GET);
                $this->headers = apache_request_headers();
                if ($_SERVER['REQUEST_METHOD'] == 'POST') $this->POST = $this->postrequest(); 
                $this->am = isset($GET['am']) ? $GET['am'] : null;
                $this->action = null;
            }
        }

        public function getAm() {
            return $this->am;
        }

        public function getAction() {
            return $this->action;
        }

        public function setAction($action) {
            $this->action = $action;
        }

        public function getLang() {
            return $this->lang;
        }
        
        public function getDb(){
            return $this->db;
        }

        public function getGET() {
            return $this->GET;
        }

        public function getPOST() {
            return $this->POST;
        }

        public function getHeaders() {
            return $this->headers;
        } 

        public function setHeaders($headers) {
            $this->headers = $headers;
        }

        public function falseHeaders($name) {
            $headers = $this->getHeaders();
            if (!isset($headers[$name])) {
                switch ($name) {
                    case 'api_token':
                        $headers[$name] = $this->getApiToken();
                        break;
                    case 'acces_token':
                    case 'admin_token':
                        $headers[$name] = $_SESSION['auth'][$name];
                        break;
                }
                $this->setHeaders($headers);
            }
        }
        
        private function getrequest() {
            if (isset($_GET) && isset($_GET['r'])) {
                $nuevoGET = Array();
                foreach($_GET as $k=>$valor) {
                    $valor = str_replace('SELECT','',$valor);
                    $valor = str_replace('CREATE','',$valor);
                    $valor = str_replace('UPDATE','',$valor);
                    $valor = str_replace('INSERT','',$valor);
                    $valor = str_replace('DELETE','',$valor);
                    $valor = str_replace('FROM','',$valor);
                    $valor = str_replace('WHERE','',$valor);
                    $valor = str_replace('SET','',$valor);
                    $valor = str_replace('ALTER','',$valor);
                    $valor = str_replace('EXECUTE','',$valor);
                    $valor = str_replace('SLEEP','',$valor);
                    $valor = str_replace('COPY','',$valor);
                    $valor = str_replace('SELECT','',$valor);
                    $valor = str_replace("DUMP","", $valor);
                    $valor = str_replace(" OR ","", $valor);
                    $valor = str_replace("%","",    $valor);
                    $valor = str_replace("LIKE","", $valor);
                    $valor = str_replace("--"," ",     $valor);
                    $valor = str_replace("^","",       $valor);
                    $valor = str_replace("[","",       $valor);
                    $valor = str_replace("]","",       $valor);
                    $valor = str_replace("(","",       $valor);
                    $valor = str_replace(")","",       $valor);
                    $valor = str_replace("\\","",      $valor);
                    $valor = str_replace("!","",       $valor);
                    $valor = str_replace("¡","",       $valor);
                    //$valor = str_replace("?","",       $valor);
                    //$valor = str_replace("=","",       $valor);
                    $valor = str_replace("\""," ",     $valor);
                    $valor = str_replace("'"," ",      $valor);
                    $valor = str_replace('\''," ",      $valor);
                    $valor = str_replace('%20',"_",     $valor);
                    // $valor = str_replace("&","",       $valor);
                    $nuevoGET[$k] = trim($valor);
                }
                return $nuevoGET;
            } else {
                return $_GET;
            }
        }
    
        private function postrequest() {
            $POST = isset($_POST) && count($_POST) > 0 ? $_POST : json_decode(file_get_contents('php://input'), true);
            // if (count($_POST) > 0) {
            //     $nuevoPOST = Array();
            //     foreach($POST as $key=>$valor) {
            //         $valor = preg_replace('([^A-Za-z0-9])', '', $valor); // faltaria agregar - _ /
            //         // Para todo el mundo, no se permite:
            //             if (!isset($this->getHeaders()['admin_token'])) {
            //                 $valor = str_replace("^","",       $valor);
            //                 $valor = str_replace("\\","",      $valor);
            //                 $valor = str_replace("%","",       $valor);
            //                 $valor = str_replace("[","",       $valor);
            //                 $valor = str_replace("]","",       $valor);
            //                 $valor = str_replace("!","",       $valor);
            //                 $valor = str_replace("¡","",       $valor);
            //                 $valor = str_replace("?","",       $valor);
            //                 $valor = str_replace("=","",       $valor);
            //                 $valor = str_replace("\""," ",     $valor);
            //                 $valor = str_replace("'"," ",      $valor);
            //                 $valor = str_replace('\''," ",      $valor);
            //                 $valor = str_replace("&","",       $valor);
            //             } else {
            //                 $valor = str_replace("SLEEP","",   $valor);
            //                 $valor = str_replace("SELECT","",  $valor);
            //                 $valor = str_replace("COPY","",    $valor);
            //                 $valor = str_replace("DELETE","",  $valor);
            //                 $valor = str_replace("DROP","",    $valor);
            //                 $valor = str_replace("DUMP","",    $valor);
            //                 $valor = str_replace(" OR ","",    $valor);
            //                 $valor = str_replace("LIKE","",    $valor);
            //                 $valor = str_replace("--"," ",     $valor);
            //                 $valor = str_replace('%27'," ",     $valor); // '
            //             }
            //         // filtrar también el key?
            //         $key = preg_replace('([^A-Za-z0-9]\-\_\/\??)', '', $key); // faltaria agregar -   
            //         $nuevoPOST[$key] = $valor;
            //     }
            //     return $nuevoPOST;
            // } else {
            //     return $POST;
            // }
            return $POST;
        }

        private function urlLang($GET) {
            $lang = $this->getDefaultLang();
            if (isset($GET['r']) && !empty($GET['r'])) {
                $getpath = explode('/', $GET['r']);
                $urlang = reset($getpath);
                if (in_array($urlang,$this->getValidModules()) && isset($getpath[1])) {
                    $urlang = $getpath[1];
                }
                $code = $this->getIdLang($urlang);
                if (empty($code)) {
                    $lang = $urlang;
                }
            }
            return $lang;
        }
        
        public function handleMedia($tipo, $name, $ext, $id_anime = null, $id_element = null) {
            $nomedia = $this->getNomediaImg();
            $mediapath = $nomedia;
            switch ($tipo) {
                case 'banner': 
                case 'portada': 
                case 'openings': 
                case 'endings':
                case 'episodes':
                        $mediaSrc = "media/animes/$id_anime/$tipo/{$name}.$ext"; 
                    break;
                case 'personages': 
                    $mediaSrc = "media/animes/$id_anime/$tipo/$name/{$name}.$ext";
                    break;
                case 'profiles':
                case 'new_post':
                case 'chat': 
                    $mediaSrc = "media/$tipo/$id_anime/{$name}.$ext"; 
                    break;
                default: $mediaSrc = $nomedia; break;
            }
            
            if (isset($id_element)) {
                $mediaSrc = "media/animes/$id_anime/$tipo/$id_element/{$name}.$ext"; 
            }
            if (file_exists($mediaSrc)) {
                $mediapath = $mediaSrc;
            }
            
            return "http://{$this->getDomain()}/$mediapath";
        }
    
        public function tt($mod, $string) {
            $file = "api/$mod/$mod.json";
            if (file_exists($file)) {
                $langsJson = json_decode(file_get_contents($file));
                $trans = isset($langsJson->$string) ? $langsJson->$string : $string;
            } else {
                $trans = $string;
            }
            return $trans;
        }

        public function apiReq($peticion, $params = null) {
            $date = new DateTime();
            $peticion .= "&rand={$date->getTimestamp()}";
            return $this->curl($this->getUrlApi() . $peticion, $params);
        }

        public function apiReqNode($peticion, $params = null) {
            return $this->curl($this->getUrlNode() . $peticion, $params);
        }

        private function curl($url, $params) {
            $ch = curl_init($url);
            if (isset($params)) {
                curl_setopt($ch, CURLOPT_POST, 1);
                curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($params) );
            }
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            $apiToken = isset($headers['api_token']) ? 'api_token:'.$headers['api_token'] : 'api_token:'.$this->getApiToken();
            $accesToken = isset($headers['acces_token']) ? 'acces_token:'.$headers['acces_token'] : null;
            $adminToken = isset($headers['admin_token']) ? 'admin_token:'.$headers['admin_token'] : null;            
            // if (isset($adminToken)) {
            //     $adminToken = str_replace(' ','X', str_pad('u'.$adminToken, 32));//remplazar espacios por X
            // }
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/json', 
                'charset: utf-8',
                $apiToken,
                $accesToken,
                $adminToken
            ]);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
            curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
            $res = curl_exec($ch);
            if ($curl_error = curl_error($ch)) {
                $result = array(
                    'data' => null,
                    'status' => array(
                        'code' => 500,
                        'text' => 'Internal Server Error',
                        'message' => 'error',
                        'http' => array(
                            'url_error' => $curl_error,
                            'code' => curl_getinfo($ch, CURLINFO_HTTP_CODE),
                            'content_type' => curl_getinfo($ch, CURLINFO_CONTENT_TYPE)
                        )
                    )
                );
            } else {
                $result = json_decode($res, true);
            }
            curl_close($ch);
            return $result;
        }

        public function run() {
            $mod = $this->getAm();
            if (isset($mod)) {
                header('Access-Control-Allow-Origin: *');
                header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, acces_token, api_token, admin_token");
                header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
                header("Allow: GET, POST, OPTIONS, PUT, DELETE");
                //flaseo para poder realizar peticiones desde el navegador
                if ($this->isLocalHost() && !$this->isAjax()){
                    $this->falseHeaders("api_token");
                }
                $headers = $this->getHeaders();
                // if ($this->isAjax()) {
                //     error_log($this->getApiToken());
                //     error_log("/////////////////////");
                //     error_log($headers['api_token']);
                // }
                //error_log("/////////////////////");
                if (isset($headers['api_token']) && substr_compare($this->getApiToken(), $headers['api_token'],0) == 0) {
                    $controller = "api/$mod/{$mod}.php";
                    if (is_dir("api") && file_exists($controller)) {
                        include_once $controller;
                        if (function_exists($mod) && $_SERVER['REQUEST_METHOD'] !== "OPTIONS"){
                            if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                                $POST = $this->getPOST();
                                if (isset($POST['action']) && !empty($POST['action'])) $this->setAction($POST['action']);
                            } else {
                                $GET = $this->getGET();
                                if (isset($GET['aq']) && !empty($GET['aq'])) $this->setAction('query');
                                elseif (isset($GET['ap']) && !empty($GET['ap'])) $this->setAction('apione');
                                elseif (isset($GET['as']) && !empty($GET['as'])) $this->setAction('apislide');
                                elseif (isset($GET['aa']) && !empty($GET['aa'])) $this->setAction('apiby');
                            }
                            $process = call_user_func_array($mod, array( 'api' => $this));
                        } else {
                            $process = $this->response("Modulo no existe $mod o no permitido", 404);
                        }
                    } else {
                        $process = $this->response("Modulo no existe $mod", 404);
                    }    
                } else {
                    $mensage = 'No estas autorizado para utilizar la api de '. $this->tt('Web','titulo');
                    $process = $this->response($mensage, 401);
                }
            } else {
                $mensage = 'Ha habido un error, comprueba la petición realizada a la api.';
                $process = $this->response($mensage, 404);
            }
            return $process;
        }

        public function response($message, $code, $data = null, $alert = null, $notifications = null) {
            switch ($code) {
                case 100: $text = 'Continue'; break;
                case 101: $text = 'Switching Protocols'; break;
                case 200: $text = 'OK'; break;
                case 201: $text = 'Created'; break;
                case 202: $text = 'Accepted'; break;
                case 203: $text = 'Non-Authoritative Information'; break;
                case 204: $text = 'No Content'; break;
                case 205: $text = 'Reset Content'; break;
                case 206: $text = 'Partial Content'; break;
                case 300: $text = 'Multiple Choices'; break;
                case 301: $text = 'Moved Permanently'; break;
                case 302: $text = 'Moved Temporarily'; break;
                case 303: $text = 'See Other'; break;
                case 304: $text = 'Not Modified'; break;
                case 305: $text = 'Use Proxy'; break;
                case 400: $text = 'Bad Request'; break;
                case 401: $text = 'Unauthorized'; break;
                case 402: $text = 'Payment Required'; break;
                case 403: $text = 'Forbidden'; break;
                case 404: $text = 'Not Found'; break;
                case 405: $text = 'Method Not Allowed'; break;
                case 406: $text = 'Not Acceptable'; break;
                case 407: $text = 'Proxy Authentication Required'; break;
                case 408: $text = 'Request Time-out'; break;
                case 409: $text = 'Conflict'; break;
                case 410: $text = 'Gone'; break;
                case 411: $text = 'Length Required'; break;
                case 412: $text = 'Precondition Failed'; break;
                case 413: $text = 'Request Entity Too Large'; break;
                case 414: $text = 'Request-URI Too Large'; break;
                case 415: $text = 'Unsupported Media Type'; break;
                case 500: $text = 'Internal Server Error'; break;
                case 501: $text = 'Not Implemented'; break;
                case 502: $text = 'Bad Gateway'; break;
                case 503: $text = 'Service Unavailable'; break;
                case 504: $text = 'Gateway Time-out'; break;
                case 505: $text = 'HTTP Version not supported';break;
            }

            $resp = array(
                'data' => $data,
                'status' => array(
                    'code' => $code,
                    'text' => $text,
                    'message' => $this->tt($this->getAm(),$message) 
                )
            );

            if (isset($alert) || isset($notifications)) {
                $resp['specials'] = array();
                if (isset($alert)) {
                    $resp['specials']['alert'] = array( 
                        'c' => $alert['code'],
                        't' => $this->tt($this->getAm(),$alert['text'])
                    );
                }
                if (isset($notifications)) {
                    $resp['specials']['alert'] = $this->handleMedia('notifications', $notifications, 'mp3');
                }
            }
            return $resp;
        }

        public function writeFile($content, $kind = '', $path = null) {
            $permission = 0755;
            $flag = ($kind == 'error' || $kind == 'log') ? FILE_APPEND : 0;
            if ($kind == 'log') {
                $content = "User SO: ".get_current_user()." - ".date("d-m-Y H:i:s");
                $content .= " acción: {$content['kind']} - {$content['message']} PHP_EOL";
                $path = "logs/{$this->getDomain()}.log";
            }
            $this->mkFolders($path);
            file_put_contents($path, $content, $flag);
            //$permissionFile = substr(sprintf('%o', fileperms($path)), -4);
            //if($permissionFile == $permission) chmod($path,$permission);
            chown($path, get_current_user());
            chmod($path,$permission);
        }

        public function mkFolders($path) {
            if (isset($path) && !is_dir($path)) {
                $p = explode("/",$path);
                //if (strstr(end($p),".")) array_pop($p);
                if (count($p) > 0) {
                    $new = implode("/", $p);
                    if (!is_dir($new)) {
                        mkdir($new, 0755, true);
                        chown($new, get_current_user());
                    }
                }
            }
        }

        public function removeFolders($dir) {
            if (file_exists($dir)) {
                $folders = array_diff(scandir($dir),array("..","."));
                if (sizeof($folders) > 0) {
                    foreach ($folders as $file) {
                        if(is_dir("$dir/$file")){
                            $this->removeFolders("$dir/$file");
                        } else{
                            unlink("$dir/$file");
                        } 
                    }
                    return rmdir($dir);
                } else{
                    //return rmdir($dir);
                }
            }
        }

        public function isValidAccesToken() {
            $headers = $this->getHeaders();
            $sql = "SELECT acess_token FROM users WHERE acess_token = '{$headers['acess_token']}'";
            $valor = $this->getDb()->obtener_una_columna($sql);
            return isset($valor) ? true : false;
        }

        public function isValidAdminToken() {
            $headers = $this->getHeaders();
            $sql = "SELECT admin_token FROM users WHERE admin_token = '{$headers['admin_token']}'";
            $valor = $this->getDb()->obtener_una_columna($sql);
            return isset($valor) ? true : false;
        }

        public function scanFolders($path, $recursive = true, $endelement = false) {
            $scan = array();
            if (file_exists($path)) {
                $folders = array_diff(scandir($path),array("..","."));
                if (sizeof($folders) > 0) {
                    foreach ($folders as $value) {
                        $folder = "$path/$value";
                        if ($recursive && is_dir($folder)) {
                            $scan = array_merge($scan,$this->scanFolders($folder,$recursive,$endelement));
                        } else{
                            if ($endelement) {
                                $t = explode("/",$folder);
                                $folder = end($t);
                            }
                            array_push($scan,$folder);
                        }
                    }
                }
            }
            return $scan; 
        }

        private function getIdLang($code = null){
            if(!$code && !$this->getLang()){
                $code = $this->getDefaultLang();
            } elseif (!$code) {
                $code = $this->getLang();
            }
            $sql = "SELECT id FROM langs WHERE code = '$code'";
            return $this->getDb()->obtener_una_columna($sql);
        }

        public function gettranslations($params) {
            $translation = $this->apiReqNode("translation", array( 
                "code" => $this->getIdLang(), 
                "translations" => $params
            ));
            if ( count($translation) > 0 ) {
                foreach ($translation as $key => $trans) {
                    $trans[$trans['kind']] = $trans['translation'];
                    unset($trans['translation']);
                    $translation[$key] = $trans;
                }
                if (count($translation) == 1 && !isset(current($params)['keyword'])) {
                    $translation = current($translation);
                }
            }
            return $translation;
        }
    }
?>