<?php
class WebPage {
	const POST="POST";
	const GET="GET";
	private $curlHandler;
	private $url;
	private $userAgent;
	private $header;
	private $host;
	private $username;
	private $password;
	private $timeOut;
	private $data;
        private $verbose;
        private $returnHeader;

	/**
	 * @param Ambigous <string, unknown> $url
	 */
	public function setUrl($url) {
		$this->url = $url;
	}

	public function __construct($url, $user=null, $password=null){
		//$this->header=Array();
		$this->data=Array();
		$this->curlHandler=curl_init();
		$this->setUserAgent();
		$this->setHeader();
		$this->timeOut=0;
		$this->url=$url;
        $this->returnHeader=false;
        $this->verbose=false;
        if($user){
            $this->username=$user;
            $this->password=$password;
        }
	}

	private function setCurl(){
    	@curl_setopt ( $this->curlHandler, CURLOPT_RETURNTRANSFER , 1 );
        @curl_setopt ( $this->curlHandler, CURLOPT_VERBOSE , $this->verbose );
        @curl_setopt ( $this->curlHandler, CURLOPT_HEADER , $this->returnHeader );
   		@curl_setopt ( $this->curlHandler, CURLOPT_FOLLOWLOCATION, 1);
        @curl_setopt ( $this->curlHandler, CURLOPT_USERAGENT, $this->userAgent);
		if(isset($this->referer))@curl_setopt ($this->curlHandler , CURLOPT_REFERER, $this->referer );
		if(isset($this->host))$this->header[]="Host: ".$this->host;
		@curl_setopt ( $this->curlHandler, CURLOPT_HTTPHEADER, $this->header );
        @curl_setopt($this->curlHandler, CURLOPT_SSL_VERIFYPEER, 0 );
        @curl_setopt($this->curlHandler, CURLOPT_SSL_VERIFYHOST, 0 );
        if (isset($this->username) & isset($this->password)){
            @curl_setopt($this -> ch , CURLOPT_USERPWD,$this->username.':'.$this->password);
            @curl_setopt($this -> ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
        }
        @curl_setopt ( $this -> ch , CURLOPT_TIMEOUT, $this->timeOut);
	}

	public function setHeader($header=null){
		if(is_array($header))$this->header=$header;
        else $this->header = array(
	        "Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5",
	        "Accept-Language: es-es,es;q=0.8,en-us;q=0.5,en;q=0.3",
	        "Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7",
	        "Keep-Alive: 300",
            );
	}

        public function setVerbose($verbose=false){
            $this->verbose=$verbose;
        }

        public function setReturnHeader($return=false){
            $this->returnHeader=$return;
        }

	public function setUserAgent($userAgent=null){
		if(is_null($userAgent))$this->userAgent='Mozilla/5.0 (Windows; U; Windows NT 5.1; es; rv:1.8.0.9) Gecko/20061206 Firefox/1.5.0.9';
		else $this->userAgent=$userAgent;
	}

	public function setHost($host=null){
		if(!is_null($host))$this->host=$host;
	}

	public function setReferer($referer=null){
		if(!is_null($referer))$this->referer=$referer;
	}

	public function setLogin($username, $password){
		$this->username=$username;
		$this->password=$password;
	}

	public function getData(){
		return $this->data;
	}

	public function addData($variable, $value){
		$this->data[$variable]=$value;
	}

	public function setData($data){
		if(is_array($data))$this->data=$data;
		else throw new Error("Data no es array.");
	}

	private function getQueryString(){
		$queryString="";
		$first=true;
		foreach($this->data as $variable=>$value){
			if(!$first)$queryString.="&";
			$queryString.=$variable . "=" . $value;
			$first=false;
		}
		return $queryString;
	}

	public function get(){
		return $this->request(WebPage::GET);
	}

	public function post(){
		return $this->request(WebPage::POST);
	}

	public function request($requestType=WebPage::GET){
		$this->setCurl();
		if($requestType==WebPage::GET)$this->url.="?" . $this->getQueryString();
		@curl_setopt($this->curlHandler, CURLOPT_URL, $this->url);
		if($requestType==WebPage::POST){
        	@curl_setopt( $this->curlHandler, CURLOPT_POST, true );
        	@curl_setopt( $this->curlHandler, CURLOPT_POSTFIELDS, $this->getQueryString());
		}
		$response=@curl_exec($this->curlHandler);
		$error=@curl_error($this->curlHandler);
		$headerSize=@curl_getinfo($this->curlHandler, CURLINFO_HEADER_SIZE);
		$headerInfo=@curl_getinfo($this->curlHandler);


		return $response;
	}
}
    //     /**
    //  * Execute a request (with curl)
    //  *
    //  * @param string $url URL
    //  * @param mixed  $parameters Array of parameters
    //  * @param string $http_method HTTP Method
    //  * @param array  $http_headers HTTP Headers
    //  * @param int    $form_content_type HTTP form content type to use
    //  * @return array
    //  */
    // private function executeRequest($url, $parameters = array(), $http_method = self::HTTP_METHOD_GET, array $http_headers = null, $form_content_type = self::HTTP_FORM_CONTENT_TYPE_MULTIPART)
    // {
    //     $curl_options = array(
    //         CURLOPT_RETURNTRANSFER => true,
    //         CURLOPT_SSL_VERIFYPEER => true,
    //         CURLOPT_CUSTOMREQUEST  => $http_method
    //     );

    //     switch($http_method) {
    //         case self::HTTP_METHOD_POST:
    //             $curl_options[CURLOPT_POST] = true;
    //             /* No break */
    //         case self::HTTP_METHOD_PUT:
	// 		case self::HTTP_METHOD_PATCH:

    //             /**
    //              * Passing an array to CURLOPT_POSTFIELDS will encode the data as multipart/form-data,
    //              * while passing a URL-encoded string will encode the data as application/x-www-form-urlencoded.
    //              * http://php.net/manual/en/function.curl-setopt.php
    //              */
    //             if(is_array($parameters) && self::HTTP_FORM_CONTENT_TYPE_APPLICATION === $form_content_type) {
    //                 $parameters = http_build_query($parameters, null, '&');
    //             }
    //             $curl_options[CURLOPT_POSTFIELDS] = $parameters;
    //             break;
    //         case self::HTTP_METHOD_HEAD:
    //             $curl_options[CURLOPT_NOBODY] = true;
    //             /* No break */
    //         case self::HTTP_METHOD_DELETE:
    //         case self::HTTP_METHOD_GET:
    //             if (is_array($parameters) && count($parameters) > 0) {
    //                 $url .= '?' . http_build_query($parameters, null, '&');
    //             } elseif ($parameters) {
    //                 $url .= '?' . $parameters;
    //             }
    //             break;
    //         default:
    //             break;
    //     }

    //     $curl_options[CURLOPT_URL] = $url;

    //     if (is_array($http_headers)) {
    //         $header = array();
    //         foreach($http_headers as $key => $parsed_urlvalue) {
    //             $header[] = "$key: $parsed_urlvalue";
    //         }
    //         $curl_options[CURLOPT_HTTPHEADER] = $header;
    //     }

    //     $ch = curl_init();
    //     curl_setopt_array($ch, $curl_options);
    //     // https handling
    //     if (!empty($this->certificate_file)) {
    //         curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
    //         curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
    //         curl_setopt($ch, CURLOPT_CAINFO, $this->certificate_file);
    //     } else {
    //         // bypass ssl verification
    //         curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    //         curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    //     }
    //     if (!empty($this->curl_options)) {
    //         curl_setopt_array($ch, $this->curl_options);
    //     }
    //     $result = curl_exec($ch);
    //     $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    //     $content_type = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
    //     if ($curl_error = curl_error($ch)) {
    //         throw new Exception($curl_error, Exception::CURL_ERROR);
    //     } else {
    //         $json_decode = json_decode($result, true);
    //     }
    //     curl_close($ch);

    //     return array(
    //         'result' => (null === $json_decode) ? $result : $json_decode,
    //         'code' => $http_code,
    //         'content_type' => $content_type
    //     );
    // }





	
//Modo de uso 


/*

    $w = new WebPage($url_backend . "odoo/partner");
    $w->addData("action", 'check_user_contact_reseller');
    $w->addData("reseller_code", $id_reseller);
    $w->addData("token", "3df5d34145614d4cc1b85b580ec3826b");
    $result = $w->request(WebPage::POST);
    $result = json_decode($result, true);

*/
?>
