<?php 
    class Config {
        private $domain;
        private $urlApi;
        private $urlNode;
        private $restrictedModules;
        private $apiToken;
        private $validModules;
        private $nomediaImg;
        private $defaultLang;
        private $defaultPage;
        private $constructConf;
        private $idLang;
        private $ajaxModules;

        public function __construct($params = null){
            if (isset($params['config'])) {
                $this->domain = $params['config']['domain'];
                $this->urlApi = $params['config']['urlApi'];
                $this->urlNode = $params['config']['urlNode'];
                $this->restrictedModules = $params['config']['restrictedModules'];
                $this->apiToken = $params['config']['apiToken'];
                $this->validModules = $params['config']['validModules'];
                $this->nomediaImg = $params['config']['nomediaImg'];
                $this->defaultLang = $params['config']['defaultLang'];
                $this->idLang = $params['config']['idLang'];
                $this->defaultPage = $params['config']['defaultPage'];
                $this->ajaxModules = $params['config']['ajaxModules'];
            } else {
                $this->restrictedModules = array(
                    "Profiles", "Edit", "Events", "Collection", 
                    "Cart", "Admin", "Apidoc"
                );
                $this->validModules = array(
                    'signup', 'singin', 'Anime', "Buscador", 'Collection', "Entradas", "Errors",
                    'aleatory', 'EpisodesDetails', 'Profiles', "User", "Apidoc", 'Filesystem', 
                    'Showerrors', 'Backup', "Home", "Edit", "Events", "Blog", "Cart", 'OpeningsDetails', 
                    'EndingsDetails'
                );
                $cnfg = parse_ini_file(__DIR__.'/../conf/config.ini');
                $this->domain = isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : $cnfg['domain'];
                $this->urlApi = "http://{$this->getDomain()}?r=es/api&am=";
                $this->urlNode = $cnfg['urlNode'];
                $this->apiToken = $cnfg['apiToken'];
                $this->nomediaImg = $cnfg['nomediaImg'];
                $this->defaultLang = $cnfg['defaultLang'];
                $this->idLang = $cnfg['IdLang'];
                $this->defaultPage = $cnfg['defaultPage'];
                $this->ajaxModules = array('Modals','Grid', 'List', 'Tabla');
                $this->cacheConstructor();
            }
        }

        public function getApiToken() {
            return $this->apiToken;
        }

        public function getRestrictedModules(){
            return $this->restrictedModules;
        }

        public function getUrlApi(){
            return $this->urlApi;
        }

        public function getValidModules(){
            return $this->validModules;
        }

        public function setValidModules($validModules){
            $this->validModules = $validModules;
        }

        public function getNomediaImg(){
            return $this->nomediaImg;
        }

        public function getUrlNode(){
            return $this->urlNode;
        }

        public function getDefaultLang(){
            return $this->defaultLang;
        }

        public function getDefaultPage(){
            return $this->defaultPage;
        }

        public function getDomain(){
            return $this->domain;
        }

        public function getConstructConf(){
            return $this->constructConf;
        }

        public function setConstructConf($constructConf){
            $this->constructConf = $constructConf;
        }

        public function getIdLang(){
            return $this->idLang;
        }

        public function setIdLang($idLang){
            $this->idLang = $idLang;
        }

        public function getAjaxModules(){
            return $this->ajaxModules;
        }

        private function cacheConstructor() {
            $this->setConstructConf(array(
                'apiToken' => $this->getApiToken(),
                'restrictedModules' => $this->getRestrictedModules(),
                'urlApi' => $this->getUrlApi(),
                'validModules' => $this->getValidModules(),
                'nomediaImg' => $this->getNomediaImg(),
                'urlNode' => $this->getUrlNode(),
                'defaultLang' => $this->getDefaultLang(),
                'idLang' => $this->getIdLang(),
                'defaultPage' => $this->getDefaultPage(),
                'domain' => $this->getDomain(),
                'ajaxModules' => $this->getAjaxModules()
                )
            );
        }
    }
?>