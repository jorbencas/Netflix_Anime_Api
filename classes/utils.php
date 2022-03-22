<?php    
    require_once __DIR__ . '/validators.php';
    require_once __DIR__ . '/config.php';
    class Utils extends Config {
        use Validators;
        private $currentPage;
        private $lang;
        private $GET;
        private $POST;
        private $headers;
        private $construct;

        public function __construct($params = null) {
            parent::__construct($params);
            if (is_array($params)) {
                $this->GET = $params['GET'];
                $this->lang = $params['lang'];
                $this->currentPage = $params['currentPage'];
                $this->headers = $params['headers'];
                if (isset($params['POST'])) $this->POST = $params['POST'];
            } elseif ($params != 'script') {
                $this->GET = $this->getrequest();
                $req = $this->getGET();
                $this->lang = $this->urlLang($req);
                $this->currentPage = $this->getpage($req);
                $this->headers = apache_request_headers();
                if ($_SERVER['REQUEST_METHOD'] == 'POST') $this->POST = $this->postrequest(); 
                $this->construct = $this->cacheConstructor($req);
            }
        }
    
        public function getcurrentPage() {
            return $this->currentPage;
        }

        public function getLang() {
            return $this->lang;
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
        
        public function getConstruct(){
            return $this->construct;
        }

        public function setConstruct($construct){
            $this->construct = $construct;
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
            if (isset($_GET) && isset($_GET['r']) /*&& !strstr($_GET['r'],"api")*/) {
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

        private function getpage($req) {
            $page = $this->getDefaultPage();
            if (isset($req['r']) && !empty($req['r'])) {
                if (strpos($req['r'],"/api")) {
                    $page = 'api';
                } else {
                    $getpath = explode('/', $req['r']);
                    if (count($getpath) == 2) {
                        $modules = $this->getValidModules();
                        $urlpage = $getpath[1];
                        if ($urlpage != $this->getLang() && in_array($urlpage,$modules)) {
                            $page = $urlpage;
                        } else {
                            $urlpage = reset($getpath);
                            if ($urlpage != $this->getLang() && in_array($urlpage,$modules)) {
                                $page = $urlpage;
                            } else {
                                $page = 'Errors';
                            }
                        }
                    }
                } 
            }
            return $page;
        }

        private function urlLang($req) {
            $lang = $this->getDefaultLang();
            if (isset($req['r']) && !empty($req['r']) && !strstr($req['r'],"/api")) {
                if ($this->isAjax()) {
                    $this->setValidModules($this->getAjaxModules());
                }
                $getpath = explode('/', $req['r']);
                $urlang = reset($getpath);
                if (in_array($urlang,$this->getValidModules()) && isset($getpath[1])) {
                    $urlang = $getpath[1];
                }
                $data = $this->apiReq("Langs", array("action" => 'getcodelangs'));
                if ($data['status']['code'] == 200) {
                    $valids = array();
                    foreach($data['data'] as $l){
                        if ($urlang == $l['code']) {
                            $this->setIdLang($l['id']);
                        }
                        array_push($valids,$l['code']);
                    }
                } else {
                    $valids = array("es","en","va","ca");
                    foreach($valids as $key => $l){
                        if ($urlang == ($key + 1)) {
                            $this->setIdLang(($key + 1));
                        }
                    }
                }
                if (in_array($urlang,$valids)) {
                    $lang = $urlang;
                }
            }
            return $lang;
        }
        
        public function handleMedia($tipo, $name, $ext, $id_anime = null, $id_element = null) {
            $mediapath = null;
            $nomedia = $this->getNomediaImg();
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
            } else if ($this->isImage($ext)) {
                $mediapath = $nomedia;
            } else if ($this->isMusic($ext)){
                $mediapath = 'public/notifications/error.mp3';
            } else {
                var_dump($mediaSrc);
            }

            if ($this->isAjax()) {
                $mediapath = "http://{$this->getDomain()}/$mediapath";
            }
            
            return $mediapath;
        }
    
        public function tt($file, $string) {
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
            $lang = isset($headers['current_lang']) ?  'current_lang:'. $headers['current_lang'] : "current_lang:". $this->getIdLang();
            $apiToken = isset($headers['api_token']) ? 'api_token:'.$headers['api_token'] : 'api_token:'.$this->getApiToken();
            $accesToken = isset($headers['acces_token']) ? 'acces_token:'.$headers['acces_token'] : null;
            $adminToken = isset($headers['admin_token']) ? 'admin_token:'.$headers['admin_token'] : null;            
            // if (isset($adminToken)) {
            //     $adminToken = str_replace(' ','X', str_pad('u'.$adminToken, 32));//remplazar espacios por X
            // }
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/json', 
                'charset: utf-8',
                $lang,
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
        
        //public function apiReq($peticion, $params = null) {
            // $headers = $this->getHeaders();
            // $date = new DateTime();
            // $rand = $date->getTimestamp();
            // $lang = isset($headers['current_lang']) ? 'current_lang:'.$headers['current_lang'] : "current_lang:".$this->getLang(); 
            // $api_token = isset($headers['api_token']) ? 'api_token:'.$headers['api_token'] : 'api_token:'.$this->getApiToken();
            // $acces_token = isset($headers['acces_token']) ? 'acces_token:'.$headers['acces_token'] : null;
            // $admin_token = isset($headers['admin_token']) ? 'admin_token:'.$headers['admin_token'] : null;            
            // $admin_token = str_pad('u'.$admin_token, 32);//añade hasta llegar a 32 caracteres
            // $admin_token = str_replace(' ','X', $admin_token);//remplazar espacios por X
            // $w = $this->instanceClases("webPage",$this->getDomain()."?r=es/api&am=$peticion&rand=$rand");
            // $w->setHeader([
            //     'Content-Type: application/json', 
            //     'charset: utf-8',
            //     'X-Requested-With: XMLHttpRequest',
            //     $lang,
            //     $api_token,
            //     $acces_token,
            //     $admin_token
            // ]);
            // if (isset($params)) {
            //     $w->setData($this->handleParams($w, $params));
            //     $result = $w->request(WebPage::POST);
            // } else{
            //     $result = $w->request(WebPage::GET);
            // }
            // return json_decode($result, true);
        //}

        // public function handleParams($w, $params){
        //     foreach ($params as $key => $value) {
        //         if (is_array($value)) {
        //             error_log("$key ______ ".json_encode($value));
        //             if (is_object($value)) {
        //                 $value = get_object_vars($value);
        //             }
        //             $w->setData($this->handleParams($w, $value));
        //         } else{
        //             $w->addData($key, $value);
        //         }
        //     }
        //     return $w->getData();
        // }

        public function instanceClases($className, $params = null) {
            $path = __DIR__."/$className.php";
            if (file_exists($path)) {
                require_once $path;
                $class = ucfirst($className);
                if (isset($params)) {
                    return new $class($params);
                } else {
                    return new $class();
                }
            } else {
                return null;
            }
        }

        private function cacheConstructor($req) {
            return array(
                'config' => $this->getConstructConf(),
                'GET' => $req,
                'headers' => $this->getHeaders(),
                'POST' => $this->getPOST(),
                'lang' => $this->getLang(),
                'currentPage' => $this->getcurrentPage()
            );
        }
    }
?>