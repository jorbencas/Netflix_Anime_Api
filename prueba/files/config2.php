
<?php
use Moolty\Cache;
include_once(dirname(__FILE__) . "/../cache/Cache.class.php");
/**
 * EN: 	Retrieves and stores data from a config file.
 * 		The config file must have .config extension
 * 		Config data can be automatically stored in cache for 24hs for faster access.
 * 		
 * 
 * ES:	Recupera y almacena datos un archivo de configuracion.
 *		El archivo de configuracion debe tener como extension .config
 * 		Los datos del fichero de configuracion pueden ser almacenados en cache automaticamente durante 24hs 
 * 		para acelerar la recuperacion de datos
 * 
 * 
 * @example
 * Config file example:
 * firstname=John
 * lastname=Doe
 * //Array data
 * address[]=Street blah, number 5
 * address[]=Oregon
 *
 * @todo ver como hacer para que las configs sean unicas por aplicacion y no se pisen. 
 */
class Config {

	/**
	 * EN: Unique instance of the Config class
	 * ES: Instancia unica de la clase config
	 * 
	 * @access private
	 * @var Config
	 */
	private static $instance = NULL;
	
	/**
	 * EN: Stores all the loaded configurations 
	 * ES: Almacena todas las configuraciones que se van cargando
	 * 
	 * @access private;
	 * @var unknown_type
	 */
	private $config;
	
	/**
	 * EN: 	This class is a singleton. You can't create new instances of it
	 *		To get a Config object you must call Config::getConfig();	
	 * 		
	 * ES: 	Esta clase es un singleto. No se pueden generar nuevas instancias .
	 * 		Para obtener un objeto config se solicitar a traves de Config::getConfig()
	 * 
	 * @access private
	 */
	private function __construct() {
	}
	
	/**
	 * EN:	Get an instance of Config and load the condfig data.
	 * 		You can pass a config file name or any other file name and it will look for a .config file with the same name.
	 * 		This is useful when you want to get automatic configs for classes. Just pass the class file name.
	 * 
	 * ES:	Obtiene una instancia de Config y carga los datos de configuracion deseada.
	 * 		Se le puede pasar un archivo config o cualquier otro nombre de archivo y va a buscar un archivo .config con
	 * 		el mismo nombre.
	 * 		Este es util cuando se desea obtener la configuracion automatica de una clase. Solo habria que pasarle el nombre de la clase
	 * 
	 * @example Config::getConfig("app.config");
	 * @example Config::getConfig(__FILE__); //In a class Person it will look for Person.config in the same directory
	 * 
	 * @param $configFile string Path to config file.
	 * @param $useCache boolean enable/disable cache
	 * @return array 
	 */
	public static function getConfig($configFile, $useCache=true) {
		$configName=Config::getConfigFileName($configFile);
		$configPath=dirname($configFile);
		if (self::$instance == NULL) {
			self::$instance = new Config ( );
		}
		self::$instance->getConfigData ( $configName, $configPath, $useCache );
		return self::$instance->config [$configName];
	}
	
	
	/**
	 * EN: 	Get the config file name to be used as key in $this->config
	 * ES: 	Devuelve el nombre del archivo de configuracion para que sea utilizado como clave en $this->config.

	 * @param string $configFile absolute config file name 
	 * @return string config name
	 */
	private static function getConfigFileName($configFile) {
		$configName=explode("/" , $configFile);
		$configName=trim($configName[count($configName)-1]);
		$configName=explode("." , $configName);
		$configName=$configName[0];
		return $configName;
	}
	
	
	/**
	 * EN: 	Get configuration data
	 * 		First it look for it in $this->config, then in cache (if set) and then in the file.
	 * 		This is to prevent excesive i/o
	 * 
	 * ES: 	Obtiene los datos de configuracion.
	 * 		Primero busca la configuracion en el array $this->config.
	 * 		Si no los encuentra, los busca en la cache (si esta configurado) y si tampoco los encuentra
	 * 		los busca en el archivo de configuracion para luego almacenarlos en cache
	 * 
	 * @param string $configName Config name
	 * @param string $configPath Absolute path of the config file
	 * @para bool $useCache enable/disable cache use
	 */
	private function getConfigData($configName, $configPath, $useCache) {
		if (! isset ( $this->config [$configName] )) {
			if ($useCache) {
				if (!$this->getConfigDataFromCache($configName,$configPath)) {
					$this->getConfigDataFromFile($configName, $configPath);
					$this->setConfigCache($configName,$configPath);
				}
			} else {
				$this->getConfigDataFromFile($configName, $configPath);
			}					
			
		}
	}
	
	/**
	 * EN: 	Save configuration data in cache for 24hs (86400 secs)
	 * ES: 	Guarda los datos de configuracion en cache
	 * 		durante 24 horas (86400 segundos).
	 * 
	 * @param string $configName Config name
	 * @param string $configPath Absolute path of the config file
	 */
	private function setConfigCache($configName, $configPath) {
		try{
			$cache=new Cache();
			$cache->set("config_" . "$configPath/$configName", $this->config[$configName],86400);
		}catch(CacheError $e) {
			
		}
	}
	
	/**
	 * EN: Get the configuration data from cache
	 * ES: Obtiene los datos de configuracion desde el cache.
	 * 
	 * @param string $configName Config name
	 * @param string $configPath Absolute path of the config file
	 * @return bool $configLoaded Devuelve TRUE si pudo carga la config del cache.
	 */
	private function getConfigDataFromCache($configName, $configPath) {
		$configLoaded=false;
		try{
			$cache=new Cache();
			$this->config[$configName]=$cache->get("config_" . "$configPath/$configName");
			if ($this->config[$configName]!=false) {
				$configLoaded=true;
			}
		}catch(CacheError $e) {
			$configLoaded=false;
		}
		//if ($configLoaded)echo "CACHE--";
		return $configLoaded;
	}
	
	/**
	 * EN: Get the configuration data from a config file
	 * ES: Obtiene los datos de configuracion desde un fichero config.
	 * 
	 * @param string $configName Config name
	 * @param string $configPath Absolute path of the config file
	 */
	private function getConfigDataFromFile($configName, $configPath) {
		$configFilename = $configPath . "/" . $configName . ".config";
		$configFile = fopen ( $configFilename, "r" );
		if ($configFile) {
			while ( ! feof ( $configFile ) ) {
				$line= fgets ( $configFile, 4096 );
				if (trim($line)!="") {
					$vars=explode("=", $line);
					if (substr($vars[0],0,1)!="#") {
						if (substr($vars[0],strlen($vars[0])-2,2)=="[]") {
							$vars[0]=substr($vars[0],0,strlen($vars[0])-2);
							$this->config [$configName][$vars[0]][]=rtrim($vars[1]);						
						} else {
							$this->config [$configName][$vars[0]]=rtrim($vars[1]);
						}
					}
				}
			}
			fclose ( $configFile);
		}
	}

	/**
	 * EN: Saves the configuration data to file and/or cache
	 * ES: Guarda los datos de configuracion en archivo y/o cache
	 * 
	 * @param string $configFile Config file name
	 * @param array $config Config data
	 * @param boolean $useCache enable/disable save in cache
	 */
	public static function save($configFile, $config, $useCache=true) {
		$configName=Config::getConfigFileName($configFile);
		$configPath=dirname($configFile);
		$configFileName = $configPath . "/" . $configName . ".config";
		$newConfig=fopen($configFileName,"w");
		foreach($config as $variable=>$valor) {
			if (is_array($valor)) {
				foreach ($valor as $valor_array) {
					$linea= $variable."[]=".$valor_array."\n";
					$write=fputs($newCotrenfig,$linea);
				}
			} else {
				$linea= $variable."=".$valor."\n";
				$write=fputs($newConfig,$linea);
			}
		}
		fclose($newConfig);
		
		if ($useCache) {
			Config::saveToCache("$configPath/$configName", $config);
		}
	}	
	
	/**
	 * EN: Saves configuration data to cache
	 * ES: Guarda los datos de la configuracion en cache
	 * @param unknown_type $configKeyName
	 * @param unknown_type $config
	 */
	public static function saveToCache($configKeyName, $config) {
		try{
			$cache=new Cache();
			$cache->set("config_" . $configKeyName,$config, 86400);
            apc_add($key, $value, $expiration);
		}catch(CacheError $e) {
			
		}
	}
	
	
	
}
?>

