<?php
    // // namespace gw2;


    // // app config
    // // use gw2\gw2_database_pg;
    // require_once ("gw2/gw2_database_pg.php");
    // require_once ("gw2/gw2_pda.php");
    // /*
    // use gw2\gw2_pda;
    // */

    // // app mods
    // require ("models/Lotes.php");
    // require ("models/Packinglistbultos.php");
    // require ("models/SgaLineascontenedores.php");
    // require ("models/SgaMovimientos.php");
    // require ("models/Articulos.php");
    // require ("models/Movilote.php");
    // require ("models/Packing.php");
    // require ("models/LineasPacking.php");
    // require ("models/LineasPicking.php");

    // // gw libs
    // use libs\Utils;

    // // third libraries
    // // use DebugBar\StandardDebugBar;
    // // use Monolog\Logger;
    // // use Monolog\Handler\StreamHandler;


    // class gw2_core
    // {
    //     public $GET=array();
    //     public $POST=array();
    //     public $avaiable_mods= array();
    //     public $mensajes;
    //     public $confArray = Array();

    //     function __construct() {        

    //         // app config
    //         $this->BD = new gw2_database();

    //         // app mods
    //         $this->Lotes = new Lotes();        
    //         $this->Packinglistbultos = new Packinglistbultos();        
    //         $this->SgaLineascontenedores = new SgaLineascontenedores();        
    //         $this->SgaMovimientos = new SgaMovimientos();
    //         $this->Articulos = new Articulos();
    //         $this->Movilote = new Movilote();
    //         $this->Packing = new Packing();
    //         $this->LineasPacking = new LineasPacking();
    //         $this->LineasPicking = new LineasPicking();
    
    //         // // gw libs 
    //         // $this->Utils = new Utils();
            
    //         // // thirds libraries
    //         // $this->debugbar = new StandardDebugBar();
    //         // $this->logname = "general.log";
    //         // $this->log = new Logger('General');
    //         // $this->log->pushHandler(new StreamHandler(LOGS_SRC . "/{$this->logname}", Logger::WARNING));
            
    //         $this->confArray = $this->addConfig("_generic_");        
    //         $this->BD->conectaBD();
    //         $this->avaiable_mods = Array("portada", "seccion","familia");        
            
    //         $this->conexion = false;
    //         $this->GET      = $this->limpiarGET();        
    //         $_POST          = $this->POST = $this->limpiarPOST();
            
    //         global $_lang,$_getvar,$_ruta;
    //         $get = trim($this->GET[$_getvar]);
    //         if ($get=="") $get="$_lang/"._MODULOPORDEFECTO;
    //         $_ruta = explode("/",$get);  
            
    //         global $default_mod_title;
    //         $this->mod_title      = $default_mod_title;
    //     }

    //     function tt($stringtrad) {
    //     // para strings con @, devuelve cadena al idioma actual
    //       global $_lang;
    // 	    $idiomasact = explode(",",IDIOMAS_ACTIVOS);
    // 	    $stringtrad_array = explode("@",$stringtrad);

    // 	    while ($idioma = current($idiomasact)) {
    // 	        if ($idioma == $_lang) {
    // 		    $textotrad = $stringtrad_array[key($idiomasact)];
    // 	        }
    // 	        next($idiomasact);
    // 	    }
    //       	return $textotrad;
    //     }


    //     function maildebug($txt) { // envía un reporte de debug o error al mail DEBUG_MAIL
    //       global $_path;
    //       $referer = $_SERVER['HTTP_REFERER'];
    //       $uri     = $_SERVER['REQUEST_URI'];
    //       $ip      = $_SERVER['REMOTE_ADDR'];
    //       $session = json_encode($_SESSION);
    //       $post    = json_encode($_POST);
    //       $get     = json_encode($_GET);
    //       $getclean= json_encode($this->GET);
    //       $postclean=json_encode($this->POST);
    //       $txtmail = "
    //         $txt
    //         --
    //         REFERER: $referer
    //         URI: {$_path}{$uri}
    //         IP: $ip
    //         --
    //         SESSION:
    //         $session
    //         --
    //         POST:
    //         $post
    //         --
    //         GET:
    //         $get
    //         --
    //         GET CLEAN:
    //         $getclean
    //         --
    //         POST CLEAN:
    //         $postclean
    //       ";
    //       mail(DEBUG_MAIL,"Debug $_path",$txtmail);
    //       mail("miguel@gestiweb.com","Debug $_path",$txtmail);

    //     }

    //     function redireccionar($rutacompleta) {
    //         global $_path;
    //         $destino = "Location: $_path/?$rutacompleta";
    //         //print $destino;
    //         header($destino);
    //     }

    //     function redireccionarGW($vmruta) {
    //         global $_path;
    //         $destino = "Location: $_path/?r=$vmruta";
    //         header($destino);
    //     }

    // /* ********************** database ******************************** */
    //     function conectaBD()         {return $this->BD->conectaBD();}
    //     function sql($sql)           {return $this->BD->sql($sql);}
    //     function sql_valor($sql)     {return $this->BD->sql_valor($sql);}
    //     function sql_una_fila($sql)  {return $this->BD->sql_una_fila($sql);}
    //     function sql_filas($sql)     {return $this->BD->sql_filas($sql);}
    //     function sql_tabla($sql)     {return $this->BD->sql_tabla($sql);}
    //     function sql_columna($sql)   {return $this->BD->sql_columna($sql);}
    //     function campoSeguro($campo) {return $this->BD->campoSeguro($campo);}
    //     function valorSeguro($campo) {return $this->BD->valorSeguro($campo);}

    // /* ********************** utils ******************************** */
    // //function slugify($text)         {return $this->Utils->slugify($text);}


    // /* **************** funciones AUTH para Agentes Offline ************ */

    //     function tokenAgenteOffline ($codAgente) {
    //         global $_clave;
    //         $passAgente = $this->sql_valor("SELECT pass_web FROM agentes WHERE codagente = '$codAgente'");
    //         $md5pass    = md5($passAgente);
    //         $tokenReal  = substr(md5($codAgente.$md5pass.$_clave),0,5);
    //         return $tokenReal;
    //     }

    //     function esAgenteOffline() {
    //         $tokenUrl=$this->GET['t'];
    //         $agentUrl=$this->GET['a'];
    //         if ($tokenUrl != $this->tokenAgenteOffline($agentUrl)) {
    //             print json_encode("AUTHERROR");
    //             exit();
    //         }
    //     }


    // /* ********************** funciones ******************************** */

    //     function esMaster() {
    //         global $_clave;

    //         // si ya está logueado, return true
    //             if (isset($_SESSION['master'])) {
    //                 $claveMaster = md5($_clave."master".CLAVE_MASTER);
    //                 if ($_SESSION['master'] == $claveMaster) { return true; }
    //             }
    //         return false;
    //     }

    //     function Master() {
    //         // Verificamos si ya esta login
    //             if ($this->esMaster()) return;
    //         // Verificamos que se intenta loguear correctamente
    //             global $_clave, $GW2;
    //             $passEnviado = $_POST['pass'];
    //             if ($_POST['user']=="master" && $_POST['pass']==CLAVE_MASTER) {
    //                 $claveMaster = md5($_clave."master".CLAVE_MASTER);
    //                 $_SESSION['master'] = $claveMaster;
    //                 return;
    //             }

    //         // En cualquier otro caso, mostrar formulario de login
    //           $html = "
    //             <style>
    //                  body {
    //                   background:#fff;
    //                 }
    //                 form{
    //                     max-width:500px;
    //                     margin:auto;
    //                 }
    //                 input{
    //                     width:100%;
    //                     padding:5px;
    //                     margin:5px;
    //                     display:block;
    //                     border:1px solid #ccc;
    //                     border-radius:3px;
    //                 }
    //                 #logo{
    //                     display:block;
    //                     margin:35px auto;
    //                 }
    //                 span {
    //                   display:block;
    //                   text-align:center;
    //                   color:#666;
    //                 }
    //             </style>
    //             <meta charset='utf-8'>
    //             <span>Login para Admin</span>
    //             <form method='post' style='text-align:center;'>
    //               <input type='text'     name='user' placeholder='Usuario'>
    //               <input type='password' name='pass' placeholder='Contraseña'>
    //               <input type='submit' value='Entrar'>
    //             </form>
    //           ";
    //           print $html;
    //           exit;
    //     }



    //     function ExtraerCadena($cadena, $primercorte, $segundocorte)
    //     {
    //       $primerpaso = explode($primercorte,$cadena);
    //       $segundopaso = explode($segundocorte,$primerpaso[1]);
    //       $extracto = $segundopaso[0];
    //       if (!$extracto) $extracto="No hubo extracto";
    //       return $extracto;
    //     }
    //     function db_primeraMay($txt) // capitalize
    //     {
    //         return ucwords(strtolower($txt));
    //     } // fin function db_primeraMay($txt)


    //     function normaliza ($cadena) {
    //         $cadena = strtolower($cadena);
    //         $cadena = str_replace("ñ","n",$cadena);
    //         $cadena = str_replace(" ","_",$cadena);
    //         return $cadena;
    //         //return preg_replace($pattern, $replacement, $string);
    //         //return (ereg_replace('[^ A-Za-z0-9_-ñÑ]', '', $cadena));
    //      }

    //     function l($destino="",$descripcion="#",$atributos=NULL) {
    //         return $this->link($destino,$descripcion,$atributos);
    //     }

    //     function link($destino="",$descripcion="#",$atributos=NULL) // el idioma lo pone link, no va en la ruta
    //     {
    //         global $_getvar,$_lang;
    //         if ($destino!="#" && $destino!=".") {
    //             $desc_url=strip_tags($desc_url);
    //             $desc_url = $this->normaliza($desc_url); //todo a minusculas, sin acentos, etc
    //             $destino = "?$_getvar=$_lang/$destino";
    //             return "<a href='$destino' $atributos>$descripcion</a>";
    //         }
    //         else {
    //             return "<a $atributos>$descripcion</a> ";
    //         }

    //     }

        // function msg_admin ($txt,$tipo="info")
        // {
        //     global $USUARIO;
        //     $r=$USUARIO->roles_usuario();
        //     $txt = "<b><u>ADMIN</u>:</b> ".$txt;
        //     if ($r['admin']) $this->msg($txt,$tipo." msg_admin");
        // }

    //     function ModValido($mod)
    //     {
    //         /*
    //         if (!in_array($mod,$this->avaiable_mods)) {
    //             //echo "<!--". $this->msg ("módulo [$mod] no en array","error") . "-->";
    //             return false;
    //         }
    //         */
    //         if (!file_exists("mod/$mod/$mod.php")) {
    //             //$this->msg_admin ("[mod/$mod/$mod.php] no existe","error");
    //             $this->msg       ("error al cargar el modulo $mod","error");
    //             return false;
    //         }
    //         return true;
    //     }

    // function Render ($rutadefinida=NULL, $args = array()) {
    //     global $_ruta;
    //     global $_lang;
    //     global $GW2;

    //     if ($rutadefinida) {
    //         $ruta = explode("/",$rutadefinida);
    //     } else $ruta = $_ruta;

    //         $mod = $ruta[1];

    //     if (!$mod || $mod=="") $mod="portada";
    //     if (!$this->ModValido($mod))  return;

    //     // apuntar el uso de este modulo, para cargar css, p.ej.
    //     global $mod_usados;
    //     $mod_usados[$mod]=true;

    //         // gestiona la caché sólo si hay directorio para ese módulo
    //         /*
    //         if (file_exists("cache/$mod")) {
    //             $cache = $this->Cache($ruta);
    //             if ($cache) return $cache;
    //     }
    //     */
    //     // carga config del modulo
    //     $this->addConfig($mod);
    //     // ejecuta el módulo

    //     require_once ("mod/$mod/$mod.php");
    //     $V = call_user_func_array($mod.'_run',array($ruta,$args));

    //     ob_start();
    //     include ("mod/$mod/{$mod}.view.php");
    //     $render = ob_get_clean();

    //     //guarda caché sólo si hay directorio para ese módulo
    //     /*
    //         if (file_exists("cache/$mod")) {
    //         $this->GuardaCache($ruta,$render);
    //     }
    //     */
    //     // if (getenv('APP_DEBUG')) {
    //     //     global $_DEBUG_TIEMPOS;
    //     //     $tactual = microtime(true)*1000;
    //     //     $trender = round((microtime(true) - $timeini)*1000,3); //milisec
    //     //     $ruta_ = implode("/",$ruta);
    //     //     $_DEBUG_TIEMPOS[] = Array(
    //     //         "ruta"    => $ruta_ ,
    //     //         "tactual" => $tactual,
    //     //         "trender" => $trender,
    //     //     );
    //     // }
    //     return $render;
    // }

    //     function RenderJSON($rutadefinida) { // nueva para módulos que devuelven JSON
    //       // Verifica ruta
    //         if (!$rutadefinida)
    //             return "Ruta [$rutadefinida] inválida";
    //         $ruta = explode("/",$rutadefinida);
    //       // Verifica módulo
    //         $mod = $ruta[1];
    //         if (!$this->ModValido($mod))
    //             return "Módulo [$mod] inválido";
    //       // ejecuta, del módulo, la función json, la cual retorna ya el json
    //         require_once ("mod/$mod/$mod.php");
    //         $json = call_user_func_array($mod.'_json',array($ruta));

    //       return $json;
    //     }

    //     function RenderJSON_new($rutadefinida) {
    //         // Verifica ruta
    //         if (!$rutadefinida)
    //             return "Ruta [$rutadefinida] inválida";
    //         $ruta = explode("/",$rutadefinida);
    //         // Verifica módulo
    //         $mod = $ruta[1];

    //         if (!file_exists("mod/_consulta/$mod.php")) {
    //             $this->msg       ("error al cargar el modulo $mod","error");
    //             return "Módulo [$mod] inválido";
    //         }
    //         // ejecuta, del módulo, la función json, la cual retorna ya el json
    //         require_once ("mod/_consulta/$mod.php");
    //         $json = call_user_func_array($mod.'_json',array($ruta));

    //         return $json;
    //     }


    //     function Cache ($ruta) {
    //       if (!_CACHE_) return false;
    //       $unadecada = _RANGOCACHE_;
    //       $rutacache = "cache/".$ruta[1]."/".implode("-",$ruta).".html";
    //       if (!file_exists($rutacache)) return false;
    //       if (rand(1,$unadecada)==1) return false;
    //       return file_get_contents($rutacache);
    //     }

    //     function GuardaCache ($ruta,$render) {
    //       if (!_CACHE_) return;
    //       $rutacache = "cache/".$ruta[1]."/".implode("-",$ruta).".html";
    //       $fp = fopen($rutacache, 'w');
    //       fwrite($fp, $render);
    //       fclose($fp);
    //     }

    //     function gw_printarray ($array,$padres=NULL) #será recursiva
    //     {
    //         if ($padres)
    //             foreach ($padres as $p)
    //                 $htmlpadres.= "<i>[$p]</i>";
    //         if (!is_array($array)) $array=get_object_vars($array); //return "[no es un array]";
    //         ob_start();
    //         if (count($array)>0)
    //         foreach ($array as $val)
    //         {
    //             if (is_array($val)) $valor="<u>ARRAY (".count($val)." hijos)</u>";
    //             else if (is_object($val)) $valor="<u>OBJECT</u>";
    //             else $valor=htmlentities(utf8_decode($val));
    //             print "<div>";
    //             print "$htmlpadres<b>['$key']:</b> $valor";
    //             if (is_array($val)) {$padres2=$padres; $padres2[]=$key; print $this->gw_printarray($val,$padres2);}
    //             if (is_object($val)) {$padres2=$padres; $padres2[]=$key; print $this->gw_printarray(get_object_vars($val),$padres2);}
    //             print "</div>";
    //         }

    //         $output = ob_get_clean();
    //         return $output;
    //     } // fin function gw_printarray ($array,$padres=NULL)

    //     function formatea($numero=NULL,$decimales=2,$prefijo="",$sufijo="&nbsp;€") {
    //         $html = $prefijo . number_format(round($numero,$decimales), $decimales, ',', '.') . $sufijo;
    //         return $html;
    //     } // fin function formatea

    //     function formatea_var($valor,$tipo) {
    //         switch ($tipo) {
    //             case "decimal": $html = $this->formatea($valor); break;
    //             default: $html = $valor."($tipo)"; break;
    //         }
    //         return $html;
    //     }


    //     function enviar_correo ($emaildestino,$emailrespondera,$asuntomail,$cuerpomail,$bcc=NULL,$html=FALSE) {
    //         // emaildestino puede ser un array, o no, da igual. Si es un array, se envian varios correos a todos los destinos

    //         $emaildestino_array = array();
    //         if (is_array($emaildestino)) $emaildestino_array=$emaildestino;
    //         else $emaildestino_array[]=$emaildestino;

    //         $envioexito=1; //envia tantos mails como grande es el array $emaildestino

    //         foreach($emaildestino_array as $enviar_a) {
    //             $lheaders = Array();

    //             //$lheaders[]='From: '.$emailrespondera;
    //             $lheaders[]='From: ' . _MAIL_NOREPLY;
    //             $lheaders[]='Reply-To: '.$emailrespondera;
    //             $lheaders[]='X-Mailer: PHP/' . phpversion();
    //             if ($bcc) $lheaders[]="Bcc: ".$bcc;

    //             if ($html) {
    //                 $lheaders[]='Content-type: text/html; charset=UTF-8';
    //                 $lheaders[]='Content-Transfer-Encoding: 7bit';
    //                 $lheaders[]='MIME-Version: 1.0';
    //                 $cuerpomail='<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><html>'.
    //                             '<body>'.
    //                               "\r\n" .  $cuerpomail. "\r\n" .
    //                             '</body></html>';
    //             }
    //             $config_mail_cabeceras = implode("\n",$lheaders);
    //             if (!$envioexito=mail ($enviar_a, $asuntomail, $cuerpomail,$config_mail_cabeceras)) {
    //               $alert=addslashes("No se pudo enviar la notificación ".$enviar_a);
    //               echo $alert;
    //               break;
    //             }
    //         }
    //         $alertjava="<script language='javascript' type='text/javascript'>alert('$alert');</script>";
    //         //echo $alertjava;
    //         if (!$envioexito) return FALSE;
    //         return TRUE;
    //     }


    //     function stockdisponible($barcode=NULL,$referencia=NULL) {
    //         if (!$barcode && !$referencia) return false;
    //         return 1; // para que no compruebe stock; eliminar para contabilizar stock.
    //         if ($barcode)
    //             return $this->sql_valor("SELECT disponible FROM stocks WHERE barcode='$barcode' LIMIT 1");
    //         else
    //             return $this->sql_valor("SELECT disponible FROM stocks WHERE referencia='$referencia'");
    //     }


    //     function fecha($fechayhora) {
    //         // $fechayhora puede ser timestamp o textual
    //         // si el campo es de fechaThora, eliminar la parte de hora "T"

    //         /*
    //             $fechayhora_array = explode("T",$cabecera[$campo]);
    //             $fecha = $fechayhora_array[0];
    //        */
    //         $time = strtotime($fechayhora);
    //         if (!$time) // false si no cumple (asumimos timestamp)
    //             $time = $fechayhora;

    //         $fechaFormateada = date("d-m-Y",$time);
    //         return $fechaFormateada;
    //     }


    //     //
    //     // IMAGENES DE PRODUCTO ---------------------------------------------------
    //     //

    //     function img_med ($refcompleta) {
    //         global $_path_img,$_path;

    //         $imgsrc_med = "{$_path_img['prod_med']}/$refcompleta"."_1.jpg";

    //         if (file_exists($imgsrc_med)) {
    //             return "/".$imgsrc_med."?v=".substr(md5(file_get_contents($imgsrc_med)),0,5);
    //         } else {
    //             return "/".$_path_img['imgnodisp_med'];
    //         }
    //     }
    //     function img_med_color ($refcompleta, $color) {
    //         global $_path_img,$_path;

    //         $imgsrc_med = "{$_path_img['prod_med']}/$refcompleta-$color.jpg";

    //         if (file_exists($imgsrc_med)) {
    //             return "/".$imgsrc_med."?v=".substr(md5(file_get_contents($imgsrc_med)),0,5);
    //         } else {
    //             return false;
    //         }
    //     }

    //     function img_min ($refcompleta) {
    //         global $_path_img,$_path;
    //         $imgsrc_min = "{$_path_img['prod_min']}/$refcompleta".".jpg";

    //         if (file_exists($imgsrc_min)) {
    //             return "/".$imgsrc_min."?v=".substr(md5(file_get_contents($imgsrc_min)),0,5);
    //         } else {
    //             return "/".$_path_img['imgnodisp_med'];
    //         }
    //     }

    //     function img_min_color ($refcompleta, $color) {
    //         global $_path_img,$_path;
    //         $imgsrc_min = "{$_path_img['prod_min']}/$refcompleta-$color.jpg";

    //         if (file_exists($imgsrc_min)) {
    //             return "/".$imgsrc_min."?v=".substr(md5(file_get_contents($imgsrc_min)),0,5);
    //         } else {
    //             return "/".$_path_img['imgnodisp_med'];
    //         }
    //     }

    //     function redim_img($rutaorigen,$rutadest,$tamanyox) {
    //         if (strstr($rutaorigen,"http://") || strstr($rutadest,"http://")) return false;
    //         if (!file_exists($rutaorigen)) return false;
    //         $imgNor = $rutaorigen; // = "cli/fotos/originales/" . $nombrearchivo;
    //         $imgPeq = $rutadest;   // = $imgNor;
    //         $dimensiones = getimagesize($imgNor);
    //         $w = $dimensiones[0];
    //         $h = $dimensiones[1];
    //         $new_width = $tamanyox;
    //         $new_height = round(floatval($h) / (floatval($w) / $new_width));

    //         $image_p = imagecreatetruecolor($new_width, $new_height);
    //         $image = imagecreatefromjpeg($imgNor);
    //         imagecopyresampled($image_p, $image, 0, 0, 0, 0, $new_width, $new_height, $w, $h);
    //         imagejpeg($image_p, $imgPeq, 90);
    //         print "<!-- creada: $rutadest -->";
    //         return true;
    //     }


    //     function grabarLog($txt, $tipo = "") {
    //       // Variables a grabar
    //         global $log_peticionID; if (!intval($log_peticionID))  $log_peticionID = rand(1000,9999);
    //         $codAgenteLogueado = $this->GET['a'];
    //         if (!$codAgenteLogueado || trim($tipo)=="") {
    //             $log_directorio = "log";
    //         } else {
    //             $log_directorio = "log/$codAgenteLogueado/$tipo";
    //         }

    //         $id       = $log_peticionID;
    //         $hoy      = date("Y-m-d");
    //         $ahora    = date("H:i:s");
    //         $ip       = $_SERVER['REMOTE_ADDR'];
    //         $fichero  = "$log_directorio/$hoy.log";

    //       // Crear directorio si no existe
    //         if (!file_exists($log_directorio)) mkdir($log_directorio, 0777, true);
    //       // Componer linea de log
    //         $linea    = "$hoy|$ahora ID:$id IP:$ip\t$txt\n";
    //       // Grabar linea
    //         $fp       = fopen($fichero, "a+");
    //         fwrite($fp, $linea);
    //         fclose($fp);
    //     }

    //     function volver($veces=NULL) { // vuelve al clic anterior (o anteriores)
    //         if (!$veces) // si no se define, se vuelve al referer
    //             $this->redireccionar($_SERVER['HTTP_REFERER']);
    //         else { // si se define, se vuelve "$veces" clics, mediante javascript
    //             print "<script>window.history.go(-{$veces});</script>";
    //         }
    //         exit();
    //     }

    //     function json_error($msg,$errorType=0, $datos="") {
    //         return json_encode(Array( "ok" => $errorType, "datos" => $datos, "msg" => $msg));
    //     }

    //     // La configuración genérica se parsea entera al inicio
    //     //  para evitar parseos continuados del mismo fichero en varios módulos
    //     // Del mismo modo, se van agregando al array de configuraciones todas
    //     //  las configuraciones de los módulos establecidos.
    //     // La función conf() es un método abreviado para acceder al array.

    //     function addConfig($modulo) {
    //         if (!isset( $this->configGen[$modulo]) && file_exists("conf/$modulo.ini"))
    //                     $this->configGen[$modulo] = parse_ini_file("conf/$modulo.ini");
    //     }
    //     function conf($variable,$modulo=NULL) {
    //         // Consulta variable de configuración genérica o de módulo
    //         // - Si el módulo es NULL, se considera genérica
    //         // - Si no existe variable en ese módulo, se devuelve la variable genérica
    //         // - Si tampoco existe la variable genérica, se devuelve cero "0"
    //         if (!$modulo) $modulo = "_generic_";
    //                         $valor = $this->configGen[$modulo][$variable];
    //         if (!$valor)  $valor = $this->configGen["_generic_"][$variable];
    //         if (!$valor)  $valor = 0;

    //         return $valor;
    //     }
    // } // fin class gw_core
