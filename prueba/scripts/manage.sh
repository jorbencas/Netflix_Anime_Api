#!/bin/bash

sudo chown -R www-data:www-data /var/www/Anime
sudo addgroup jorge www-data
link="/media/jorge/9A3EB3183EB2EBFF/media/";
link="/media/jorge/B0EE54B1EE547218/media/";
destination="/var/www/Anime/media/";

# if [[ ! $(findmnt -M $link) ]]; then
#     sudo chown -R www-data:www-data $link/animes
#     sudo mount --bind  $link $destination
#     sudo adduser www-data plugdev
# fi
#find $link/animes -type f -size 0
#tar -czfv archivo.tar.gz
#tar -xzvf archivo.tar.gz
#comprimir tar-xz tar -cJf - nombre_ficheros | xz -7 > nombre_fichero.tar.xz
#find . -type f -exec chmod 0644 {} +
#find . -type d -exec chmod 0755 {} +
#sudo find . -type d -exec chmod -R 766 {} \+
#sudo find . -type f -exec chmod -R 666 {} \+


    #-rw------- (600) — S�lo el usuario tiene el derecho de leer y escribir.

    #-rw-r--r-- (644) — S�lo el usuario tiene los permisos de leer y escribir; el grupo y los dem�s s�lo pueden leer.

    #-rwx------ (700) — S�lo el usuario tiene los derechos de leer, escribir y ejecutar el fichero.

    #-rwxr-xr-x (755) — El usuario tiene los derechos de leer, escribir y ejecutar; el grupo y los dem�s s�lo pueden leer y ejecutar.

    #-rwx--x--x (711) — El usuario tiene los derechos de lectura, escritura y ejecuci�n; el grupo y los dem�s s�lo pueden ejecutar.

    #-rw-rw-rw- (666) — Todo el mundo puede leer y escribir en el fichero. �No es una buena elecci�n!

    #-rwxrwxrwx (777) — Todo el mundo puede leer, escribir y ejecutar. �Otra mala elecci�n! 

#Aqu� tiene un conjunto de valores para los directorios:

    #drwx------ (700) — S�lo el usuario puede leer y escribir en este directorio.

    #drwxr-xr-x (755) — Cualquiera puede leer el directorio, pero su contenido lo puede cambiar s�lo el usuario user. 


#youtube-dl --cache-dir "$link/mega/YNM/" https://twitter.com/i/status/1315725349733400583
#sudo pg_dump -o -h localhost -U odoo -d 0nt1n3t1 -F t -t 'product_product' -t 'product_template' > odooClean_dump.tar
#sudo pg_restore -h localhost -U postgres -d cosasdeanime backup.tar
#sudo nano /etc/postgresql/13/main/postgresql.conf
#psql -U postgres cosasdeanime < /var/www/Anime/sql/backup.sql

#unrar x fichero.exe
#instalar python
sudo apt-get install python3
sudo apt-get install python3-pip

#instalar Django
sudo apt install python3-django

#Instalar libs python
sudo pip3 install translate
sudo apt install python3-django

#youtube-dl
sudo wget https://yt-dl.org/downloads/latest/youtube-dl -O /usr/local/bin/youtube-dl
sudo chmod a+rx /usr/local/bin/youtube-dl
sudo ln -s /usr/bin/python3 /usr/bin/python

#git
sudo apt-get install git

#Instalar potgresql
sudo apt-get update
sudo apt-get install -y postgresql-13
sudo systemctl status postgresql

#Instalar node y npm en linux
sudo apt-get install wget
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
source ~/.profile
nvm ls-remote
nvm install 12.18.4
npm -v
node -v

#PHP
sudo apt install php libapache2-mod-php php-mysql

#VirtualHpst Apache
sudo chown -R jorge:jorge /var/www/Anime
sudo chmod -R 755 /var/www/Anime
sudo nano /etc/apache2/sites-available/cosasdeanime.es.conf

"<VirtualHost cosasdeanime.com:80>
  DocumentRoot '/var/www/Anime'
  ServerName cosasdeanime.com
  ServerAlias www.cosasdeanime.com
  ErrorLog '${APACHE_LOG_DIR}/error.log'
  CustomLog '${APACHE_LOG_DIR}/access.log' common
  <Directory '/var/www/Anime'>
    Options -Indexes +FollowSymLinks
    AllowOverride None
    Require all granted
  </Directory>
</VirtualHost>" >> "/etc/apache2/sites-available/cosasdeanime.conf"

sudo a2ensite cosasdeanime.conf
sudo a2dissite 000-default.conf
sudo apache2ctl configtest
sudo systemctl reload apache2

#phing 
sudo apt-get install phing
phing

#Ejemplo cron 
sudo crontab -e
@reboot bash ~/Documentos/prueba/.script.sh
sudo systemctl status cron.service
sudo systemctl enable cron.service

# MySQL - Base de datos
# Reiniciar - Detener - Arrancar
/etc/init.d/mysql restart
/etc/init.d/mysql stop
/etc/init.d/mysql start

# Apache - Servidor web http
# Reiniciar - Detener - Arrancar
/etc/init.d/apache2 restart
/etc/init.d/apache2 stop
/etc/init.d/apache2 start

# Samba - Servidor de archivos
# Reiniciar - Detener - Arrancar
/etc/init.d/samba restart
/etc/init.d/samba stop
/etc/init.d/samba start

# Pro ftpd - Servidor de Ftp
# Reiniciar - Detener - Arrancar
/etc/init.d/proftpd restart
/etc/init.d/proftpd stop
/etc/init.d/proftpd start

# Todas las conexiones de red
# Reiniciar - Detener - Arrancar
/etc/init.d/networking restart
/etc/init.d/networking stop
/etc/init.d/networking start

# PostgreSQL - Otra base de datos
# Reiniciar - Detener - Arrancar
/etc/init.d/postgresql restart
/etc/init.d/postgresql stop
/etc/init.d/postgresql start 

### Configuración del proyecto
------
* Enlace simbolico del contenido media en linux: sudo ln -s /media/jorge/9A3EB3183EB2EBFF/media/ /var/www/Anime

* Desinstalar nvm 
    -   nvm deactivate
    -   nvm uninstall v12.18.4

## Actualizar Nodejs y NPM versiones 
NVM: https://github.com/coreybutler/nvm-windows


#git
git merge precios --no-commit --no-ff

#si vols aceptar per defecte lo que ve.... 
git merge precios --strategy-option theirs --no-commit --no-ff

#Instalar Postman
1.- Descargar Postman

https://www.postman.com/downloads/

2.- Descomprimirlo

tar zxf Postman-*.tar.gz

3.- Mover a directorio opt/

sudo mv Postman/ /opt/

4.- Crear enlace simbolico en /usr/local/bin/

sudo ln -s /opt/Postman/Postman /usr/local/bin/postman

5.- Crear acceso directo

cat > ~/.local/share/applications/postman.desktop <<EOL
[Desktop Entry]
Encoding=UTF-8
Name=Postman
Exec=postman
Icon=/opt/Postman/app/resources/app/assets/icon.png
Terminal=false
Type=Application
Categories=Development;
EOL

#Clound shell 
https://shell.cloud.google.com/?hl=es_419&fromcloudshell=true&show=terminal

#instalar mongo
curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt update
sudo apt install mongodb-org

#start mongo 
sudo systemctl start mongod.service
sudo systemctl enable mongod

#status mongo 
sudo systemctl status mongod

#
mongo --eval 'db.runCommand({ connectionStatus: 1 })'


#dreate colection
db.translations.insert
(
	{
		"Employeeid" : 1,
		"EmployeeName" : "Martin"
	}
)
 //     id SERIAL NOT NULL PRIMARY KEY,
  //     translation TEXT DEFAULT NULL,
  //     lang int4 NOT NULL,
  //     kind VARCHAR(255) NOT NULL,
  //     id_external int4 DEFAULT 0,
  //     created timestamp DEFAULT CURRENT_TIMESTAMP,
  //     updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  
db.media.insert
(
	{
		"Employeeid" : 1,
		"EmployeeName" : "Martin"
	}
)
 //     id SERIAL NOT NULL PRIMARY KEY,
  //     type VARCHAR(255) NOT NULL,
  //     name VARCHAR(255) NOT NULL,
  //     extension VARCHAR(255) NOT NULL,
  //     orden int4 DEFAULT 0, 
  //     main bool DEFAULT false,
  //     anime int4 DEFAULT 0,
  //     opening int4 DEFAULT 0,
  //     ending int4 DEFAULT 0,
  //     episode int4 DEFAULT 0,
  //     personage int4 DEFAULT 0,
  //     profile VARCHAR(55) DEFAULT 0,
  //     new_post int4 DEFAULT 0,
  //     chat int4 DEFAULT 0,
  //     created timestamp DEFAULT CURRENT_TIMESTAMP,
  //     updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

db.collections.insert
(
	{
		"Employeeid" : 1,
		"EmployeeName" : "Martin"
	}
)

collections
db.collections.insert
(
	{
		"Employeeid" : 1,
		"EmployeeName" : "Martin"
	}
) 


db.comments.insert
(
	{
		"Employeeid" : 1,
		"EmployeeName" : "Martin"
	}
)


db.chat.insert
(
	{
		"Employeeid" : 1,
		"EmployeeName" : "Martin"
	}
)

db.searches.insert
(
	{
		"Employeeid" : 1,
		"EmployeeName" : "Martin"
	}
)

db.history.insert
(
	{
		"Employeeid" : 1,
		"EmployeeName" : "Martin"
	}
)

db.notifications.insert
(
	{
		"Employeeid" : 1,
		"EmployeeName" : "Martin"
	}
)