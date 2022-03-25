<?php    
    require_once __DIR__ . '/validators.php';
    require_once __DIR__ . '/config.php';
    require_once __DIR__ . '/database.php';
    class Utils extends Config {
        use Validators;
        private $lang;
        private $GET;
        private $POST;
        private $headers;
        private $db;

        public function __construct($params = null) {
            parent::__construct();
            if ($params != 'script') {
                $this->GET = $this->getrequest();
                $this->db = new Database(); 
                $this->lang = $this->urlLang();
                $this->headers = apache_request_headers();
                if ($_SERVER['REQUEST_METHOD'] == 'POST') $this->POST = $this->postrequest(); 
            }
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

        public function falseHeaders($headerName) {
            $headers = $this->getHeaders();
            if (!isset($headers[$headerName])) {
                switch ($headerName) {
                    case 'api_token':
                        $headers[$headerName] = $this->getApiToken();
                        break;
                    case 'acces_token':
                    case 'admin_token':
                        $headers[$headerName] = $_SESSION['auth'][$headerName];
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

        private function urlLang() {
            $GET = $this->getGET();
            $lang = $this->getDefaultLang();
            if (isset($GET['r']) && !empty($GET['r'])) {
                $getpath = explode('/', $GET['r']);
                $urlang = reset($getpath);
                if (in_array($urlang,$this->getValidModules()) && isset($getpath[1])) {
                    $urlang = $getpath[1];
                }
                $sql = "SELECT id FROM langs WHERE code = '{$urlang}'";
                $code = $this->getDb()->obtener_una_columna($sql);
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
                $lang_json = json_decode(file_get_contents($file));
                $trans = isset($lang_json->$string) ? $lang_json->$string : $string;
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
            // $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            // $content_type = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
            if ($curl_error = curl_error($ch)) {
                error_log($curl_error);
                $result = array(
                    'data' => null,
                    'status' => array(
                        'code' => 500,
                        'text' => 'Internal Server Error',
                        'message' => 'error'
                    )
                );
            } else {
                //$json_decode = json_decode($res, true);
                // return array(
                //     'result' => (null === $json_decode) ? $res : $json_decode,
                //     'code' => $http_code,
                //     'content_type' => $content_type
                // );
                $result = json_decode($res, true);
            }
            curl_close($ch);
            return $result;
        }

        public function object_sorter($clave, $orden=null) {
            return function ($a, $b) use ($clave,$orden) {
                $ac = is_object($a) ? $a->$clave : $a[$clave];
                $bc = is_object($b) ? $b->$clave : $b[$clave];  
                return ($orden=="DESC") ? strnatcmp($bc, $ac) : strnatcmp($ac, $bc);
            };
        }

        public function array_clone($array) {
            return array_map(function($element) {
                return ((is_array($element))
                    ? $this->array_clone($element)
                    : ((is_object($element))
                        ? clone $element
                        : $element
                    )
                );
            }, $array);
        }

        public function getNumDaysMonth($date) {
            $timeEsp = trim($date) != "" ? str_replace("/", "-", $date) : "now";
            return (int)date("t",strtotime($timeEsp));
        }

        public function extractZIP($path, $name) {
            $resource = $path . $name . '.zip';
            try {
                if (file_exists($resource)) {
                    exec("unzip $resource ");
                    return true;
                } else {
                    return false;
                }
            }catch (\Throwable $th) {
                echo $th;
                return false;
            }
        }
    
        public function comprimZIP($path, $name) {
            $resource =  $path . $name . ".zip";
            try {
                exec ("zip $resource $path . $name");
                return true;
            }catch (\Throwable $th) {
                echo $th;
                return false;
            }
        }

        /*Genera codigo hexadecimal de 32 cartacteres para clients_id*/
        public function generateHex32Dec(){
            return bin2hex(random_bytes(32));
        }

        public function getNombreFichero(){
            return pathinfo(__FILE__, PATHINFO_FILENAME);
        }

        public function getTableColumns($db,$tabla){
            $sql = "select column_name 
            from information_schema.columns 
            where table_name = '$tabla';";
            //echo $sql . "\n";
            return $db->listar($sql);
        }
    }
?>