<?php
// sudo apt-get purge npm
// sudo apt-get autoremove
// wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
// nvm install node
// node -v
// npm -v
// npm install -g npm@8.11.0

//include_once dirname(__FILE__) . "/../securize.php";
// if (PHP_OS == 'WINNT') {
//   $device = gethostname() == "DESKTOP-0UV01RG" ? "F" : "G";
//   symlink("$device:/media", "C:/xampp/htdocs/Animes" );
// } else if (PHP_OS == 'Linux') {
//   $destination="/var/www/Netflix_Anime_Api/media/";
//   if (gethostname() == 'jorge-B85M-DS3H') {
//     $link = "/media/jorge/9A3EB3183EB2EBFF/media/";
//   } else if (gethostname() == 'jorge-X555LAB') {
//     $link = "/media/jorge/B0EE54B1EE547218/media/";
//   }

// alias apache_log='tail -f /var/log/apache2/error.log'
// alias apache_access='tail -f /var/log/apache2/access.log'
// alias mount_media='sudo mount --bind /media/jorge/B0EE54B1EE547218/media/ ~/dev/Netflix_Anime_Api/src/media'
// alias umount_media='sudo umount ~/dev/Netflix_Anime_Api/src/media'
// alias run_anime_client='cd ~/dev/Netflix_Anime/ && npm start'
// alias run_anime_node='cd ~/dev/Netflix_Anime_Api && npm run dev'
// alias stop_anime_node='cd ~/dev/Netflix_Anime_Api && npm stop'
// alias env_anime_node='ln -s /media/jorge/B0EE54B1EE547218/.node/env /var/www/Netflix_Anime_Api/.env'
// alias generate_public_private_key='ssh-keygen -t rsa'

//   alis docker network connect developpedidos_ordenes_net odoo_clean_web
// alias docker network connect developpedidos_ordenes_net odoo_clean_db
// docker exec -it odoo_clean_db /bin/bash
// psql odoo Ont1n3t1
//   #Apache2
//   sudo apt-get update && sudo apt-get upgrade
//   sudo apt install -y apache2 apache2-utils
//   sudo systemctl status apache2
//   apache2 -v

//   #PHP7.4
//   sudo apt install php7.4 libapache2-mod-php7.4 php7.4-mysql php-common php7.4-cli php7.4-common php7.4-json php7.4-opcache php7.4-readline php7.4-curl php7.4-pgsql php7.4-mbstring
//   sudo a2enmod php7.4
//   sudo systemctl restart apache2
//   sudo systemctl enable apache2

//   #Activar Postgres con php
//   sudo nano /etc/php/7.4/apache2/php.ini
//     extension=pdo_pgsql

//   sudo systemctl restart apache2 / sudo /etc/init.d/apache2 restart

//   sudo systemctl enable postgresql

//   #Conectar postgresql con pgadmin4
//   sudo nano /etc/postgresql/12/main/postgresql.conf
//   listen_addresses = '*'

//   sudo nano /etc/postgresql/12/main/pg_hba.conf

//   # cambiar peer por trust
//   # Database administrative login by Unix domain socket
//   local all cosasdeanime md5 

//   sudo passwd postgres
//   su postgres
//   psql

//   alter user cosasdeanime with password 'cosasdeanime';
//   #alter user postgres with password 'postgres';

//   sudo systemctl restart postgresql.service / sudo /etc/init.d/postgresql restart


//   #Instalar pgadmin4
//   wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
//   echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" |sudo tee  /etc/apt/sources.list.d/pgdg.list
//   sudo apt-get update
//   sudo apt-get install pgadmin4 pgadmin4-apache2
//   http://localhost/pgadmin4
//   user: postgres@localhost
//   password: localhost
// }

// "<VirtualHost cosasdeanime.com:80>
//   DocumentRoot '/var/www/Anime'
//   ServerName cosasdeanime.com
//   ServerAlias www.cosasdeanime.com
//   ErrorLog '${APACHE_LOG_DIR}/error.log'
//   CustomLog '${APACHE_LOG_DIR}/access.log' common
//   <Directory '/var/www/Anime'>
//     Options -Indexes +FollowSymLinks
//     AllowOverride None
//     Require all granted
//   </Directory>
// </VirtualHost>" >> "/etc/apache2/sites-available/cosasdeanime.conf"



### Hosts
#Windows: C:\Windows\System32\drivers\etc\hosts
#Linux: /etc/hosts

# Copyright (c) 1993-2009 Microsoft Corp.
#
# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
#
# This file contains the mappings of IP addresses to host names. Each
# entry should be kept on an individual line. The IP address should
# be placed in the first column followed by the corresponding host name.
# The IP address and the host name should be separated by at least one
# space.
#
# Additionally, comments (such as these) may be inserted on individual
# lines or following the machine name denoted by a '#' symbol.
#
# For example:
#
#      102.54.94.97     rhino.acme.com          # source server
#       38.25.63.10     x.acme.com              # x client host

# localhost name resolution is handled within DNS itself.
#	127.0.0.1       localhost
#	::1             localhost
#127.0.0.2           cosasdeanime.com
#127.0.0.2           api.cosasdeanime.com

### Virtual Host
#Windows: C:\xampp\apache\conf\extra\httpd-vhosts.conf
#Linux: /etc/apache2/sites-avaible/cosasdeanime.conf

// <VirtualHost cosasdeanime.com:80>
//     DocumentRoot "C:/xampp/htdocs/proyectos/Anime/php"
//     ServerName cosasdeanime.com
//     ServerAlias www.cosasdeanime.com
//     ErrorLog "logs/dummy-host2.example.com-error.log"
//     CustomLog "logs/dummy-host2.example.com-access.log" common 
//     <Directory "C:/xampp/htdocs/proyectos/Anime/php">
//         Options -Indexes +FollowSymLinks
//         AllowOverride None
//         Require all granted
//     </Directory>
// </VirtualHost>

// <VirtualHost cosasdeanime.com:80>
//     DocumentRoot "/var/www/Anime"
//     ServerName cosasdeanime.com
//     ServerAlias www.cosasdeanime.com
//     ErrorLog "${APACHE_LOG_DIR}/error.log"
//     CustomLog "${APACHE_LOG_DIR}/access.log" common
//     <Directory "/var/www/Anime">
//         Options -Indexes +FollowSymLinks
//         AllowOverride None
//         Require all granted
//     </Directory>
// </VirtualHost>

// <VirtualHost api.cosasdeanime.com:80>
//     DocumentRoot "/var/www/Netflix_Anime_Api"
//     ServerName api.cosasdeanime.com
//     ServerAlias www.api.cosasdeanime.com
//     ErrorLog "${APACHE_LOG_DIR}/error.log"
//     CustomLog "${APACHE_LOG_DIR}/access.log" common
//     <Directory "/var/www/Netflix_Anime_Api">
//          Options Indexes FollowSymLinks Includes
//          AllowOverride All
//          Order allow,deny
//          Allow from all

//        <FilesMatch "^(api|document|generarOrdenFromQuo|download|license|renovar)$">
//            ForceType application/x-httpd-php
//        </FilesMatch> 
//     </Directory>
// </VirtualHost>

### Augmentar el tamaño de los ficheros a la hora subir
#Windows: C:\xampp\php\php.ini
#Linux: /etc/php/7.4/apache2/php.ini
// upload_max_filesize=20000000000000000000000000000000000000000000000000000000000000000000000000000000M
// post_max_size = 20000000000000000000000000000000000000000000000000000000000000000000000000000000M

require_once __DIR__ . '/../classes/api.php';
$utils = new Api('script');
// $db = $utils->instanceClases("database","init");

// $db->ejecutar("CREATE ROLE cosasdeanime WITH PASSWORD 'cosasdeanime' VALID UNTIL 'infinity' LOGIN;");
// $db->ejecutar("CREATE DATABASE cosasdeanime WITH OWNER cosasdeanime ENCODING='UTF8' TEMPLATE=postgres LC_COLLATE='es_ES.UTF-8' LC_CTYPE='es_ES.UTF-8' CONNECTION LIMIT=-1 TABLESPACE=pg_default;");
// $db->ejecutar("GRANT ALL PRIVILEGES ON DATABASE cosasdeanime TO cosasdeanime;");
$db = $api->getDb();
$sql = "CREATE TABLE comments (
    id SERIAL NOT NULL PRIMARY KEY,
    comment VARCHAR(250) NOT NULL,
    fecha VARCHAR(200) NOT NULL,
    hora VARCHAR(55) NULL,
    username VARCHAR(55) DEFAULT NULL,
    kind VARCHAR(255) NOT NULL,
    id_external VARCHAR(250) NOT NULL,
    response_comment_id int4 DEFAULT 0,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE metadata (
    id SERIAL NOT NULL PRIMARY KEY,
    visiteds int4 DEFAULT 1,
    num_users int4 DEFAULT 0,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE users (
    username VARCHAR(55) PRIMARY KEY NOT NULL,
    nombre VARCHAR(255) NULL,
    apellidos VARCHAR(255) NULL,
    email VARCHAR(255) NULL,
    password VARCHAR(255) NULL,
    date_birthday VARCHAR(255) NULL,
    tipo VARCHAR(50) NULL,
    dni VARCHAR(255) NULL,
    acess_token VARCHAR(255) NULL,
    admin_token VARCHAR(255) NULL,
    activado bool NULL,
    genere VARCHAR(25) NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE groups (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NULL,  
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE usergroups (
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(55) DEFAULT NULL,
    group_id int4 NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE collections (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    profile int4 DEFAULT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE animes (
    siglas VARCHAR(250) NOT NULL PRIMARY KEY,
    idiomas VARCHAR(255) DEFAULT NULL,
    date_publication VARCHAR(250) DEFAULT NULL,
    date_finalization VARCHAR(250) DEFAULT NULL,
    state VARCHAR(250) DEFAULT NULL,
    kind VARCHAR(25) DEFAULT NULL,
    valorations int4 DEFAULT 0,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    temporada VARCHAR(25) DEFAULT NULL
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE media_animes (
    id SERIAL NOT NULL PRIMARY KEY
    type VARCHAR(250) NOT NULL,
    name VARCHAR(250) NOT NULL,
    extension VARCHAR(250) NOT NULL,
    anime VARCHAR(250) NOT NULL
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE translation_animes (
    id SERIAL NOT NULL PRIMARY KEY
    translation VARCHAR(250) NOT NULL,
    kind VARCHAR(25) DEFAULT NULL,
    lang int4,
    anime VARCHAR(250) NOT NULL
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE anime_generes (
    id SERIAL NOT NULL PRIMARY KEY,
    genere int4,
    anime VARCHAR(250) NOT NULL
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE anime_favorites (
    id SERIAL NOT NULL PRIMARY KEY,
    favorite bool DEFAULT false,
    anime VARCHAR(250) NOT NULL
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE episodes (
    id VARCHAR(250)  NOT NULL PRIMARY KEY,
    anime VARCHAR(250) NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    num int4 DEFAULT 1,
    seasion VARCHAR(250) DEFAULT null,
    madia_type VARCHAR(250) NOT NULL,
    madia_name VARCHAR(250) NOT NULL,
    madia_extension VARCHAR(250) NOT NULL,
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE translation_episodes (
    id SERIAL NOT NULL PRIMARY KEY
    translation VARCHAR(250) NOT NULL,
    lang int4,
    episodes VARCHAR(250) NOT NULL
);";
$db->ejecutar($sql);
$sql = "CREATE TABLE clips (
    id SERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    episode int4 NOT NULL,
    profile int4 DEFAULT NULL,
    time VARCHAR(25) NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);";
$db->ejecutar($sql);
$sql = "CREATE TABLE episode_collections (
    id SERIAL NOT NULL PRIMARY KEY,
    episode VARCHAR(250),
    collection VARCHAR(250) NOT NULL
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE openings (
    id VARCHAR(250) PRIMARY KEY,
    nombre VARCHAR(150),
    descripcion VARCHAR(255) NOT NULL,
    anime int4 NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    num int4 DEFAULT 1,
    seasion VARCHAR(250) DEFAULT null,
    madia_type VARCHAR(250) NOT NULL,
    madia_name VARCHAR(250) NOT NULL,
    madia_extension VARCHAR(250) NOT NULL
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE endings (
    id VARCHAR(250) PRIMARY KEY,
    nombre VARCHAR(150),
    descripcion VARCHAR(255) NOT NULL,
    anime int4 NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    num int4 DEFAULT 1,
    seasion VARCHAR(250) DEFAULT null,
    madia_type VARCHAR(250) NOT NULL,
    madia_name VARCHAR(250) NOT NULL,
    madia_extension VARCHAR(250) NOT NULL
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE config_user (
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(55) DEFAULT NULL,
    limit_num_profiles int4 DEFAULT 5,
    see_video_profiles_time bool DEFAULT false,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE filters (
    id SERIAL NOT NULL PRIMARY KEY,
    code VARCHAR(255) DEFAULT NULL,
    kind VARCHAR(255) NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE translation_filters (
  id SERIAL NOT NULL PRIMARY KEY
  translation VARCHAR(250) NOT NULL,
  lang int4,
  id_external int4
);";
$db->ejecutar($sql);
$sql = "CREATE TABLE langs (
    id SERIAL NOT NULL PRIMARY KEY,
    code VARCHAR(5) DEFAULT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );";
$db->ejecutar($sql);
$db->ejecutar("INSERT INTO langs(id, code) VALUES(1, 'es');");
$db->ejecutar("INSERT INTO langs(id, code) VALUES(2, 'en');");
$db->ejecutar("INSERT INTO langs(id, code) VALUES(3, 'va');");
$db->ejecutar("INSERT INTO langs(id, code) VALUES(4, 'ca');");

$sql = "CREATE TABLE seasons (
    id VARCHAR(250) NOT NULL PRIMARY KEY,
    title VARCHAR(50) DEFAULT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE config_profile (
    id SERIAL NOT NULL PRIMARY KEY,
    profile int4 DEFAULT NULL,
    theme VARCHAR(150) DEFAULT 'dark',
    autoplay bool DEFAULT false,
    columns int4 DEFAULT 2,
    orden VARCHAR(150) DEFAULT 'asc',
    lang VARCHAR(255) DEFAULT 1,
    volume Float DEFAULT 0.5,
    video_velocity_default VARCHAR(150) NOT NULL,
    default_view VARCHAR(150) DEFAULT 'grid',
    avable_chat bool DEFAULT false,
    avable_secret_chat bool DEFAULT false,
    avable_history bool DEFAULT true,
    limit_elem_collection int4 DEFAULT 100,
    offline_mode bool DEFAULT false,
    avable_response_comment bool DEFAULT false,
    option_paginator VARCHAR(150) DEFAULT 'new',
    avable_notifications bool DEFAULT false,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE notifications (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    avaible int4 NOT NULL,
    config int4 NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE config_notification_profile(
    id int4 NOT NULL,
    kind VARCHAR(25) DEFAULT NULL,
    profile int4 DEFAULT NULL,
    sound bool DEFAULT true,
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE anime_avaible_notifications (
    id SERIAL NOT NULL PRIMARY KEY,
    avaible bool DEFAULT false,
    anime VARCHAR(250) NOT NULL
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE history(
    id SERIAL NOT NULL PRIMARY KEY,
    episode VARCHAR(250) NOT NULL,
    profile int4 DEFAULT NULL,
    time VARCHAR(25) NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );";
$db->ejecutar($sql);
$sql = "CREATE TABLE profiles (
    id SERIAL NOT NULL PRIMARY KEY,
    nombre VARCHAR(150),
    username VARCHAR(55) DEFAULT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );";
$db->ejecutar($sql);
//Cambiar el propietario de la tablas, tuplas y columnas, y el de la base de datos
//ALTER DATABASE cosasdeanime OWNER TO cosasdeanime;

/*
  CREATE TABLE cart (
  id SERIAL primary key not null,
  username VARCHAR(55)  NULL,
  kind VARCHAR(55)  NULL,
  payform VARCHAR(55)  NULL,
  costsend
  iva
  payfinal
  dirmain
  dirsecundary
  observations
  descart
  datepayment
  created timestamp DEFAULT CURRENT_TIMESTAMP,
  updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );

  CREATE TABLE reserve (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  timestart time NULL,
  timeend time NULL,
  datestart date NULL,
  dateend date NULL,
  username VARCHAR(55) NULL,
  created timestamp DEFAULT CURRENT_TIMESTAMP,
  updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  ); */
// $sql = "UPDATE pg_class SET relowner = (SELECT oid FROM pg_roles WHERE rolname = 'cosasdeanime') 
// WHERE relname IN (SELECT relname FROM pg_class, pg_namespace WHERE pg_namespace.oid = pg_class.relnamespace 
// AND pg_namespace.nspname = 'public');";
// $db->ejecutar($sql);
$basePathsql =  __DIR__ . "/../media/.backup";
  //$db->executeFromFile("$basePathsql/sql/Filters.sql");
  // $data = json_decode(file_get_contents("$basePathsql/nosql/langs_translations.json"));
  // foreach ($data as $key => $d) {
  //     echo json_encode($utils->apiReqNode("translation/new", $d));
  // }

  // $data = json_decode(file_get_contents("$basePathsql/nosql/Filters.json"));
  // foreach ($data as $key => $d) {
  //     echo json_encode($utils->apiReqNode("translation/new", $d));
  // }
