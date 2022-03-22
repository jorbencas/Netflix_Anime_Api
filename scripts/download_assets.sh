#!/bin/bash
if [ -z $1 ]; then 
    echo "No hay url que descargar, introducela.";
elif [ -z $2 ]; then
    echo "No se puede descargar ya que no hay una ruta para guardar el recurso";
else
    destination_path="/var/www/Anime/Web/assets";
    if [[ ! -d $destination_path ]]; then 
        mkdir $destination_path
    fi;
    
    log_path="/var/www/Anime/logs/down_lib_assets.log";
    f="";
    for i in $(echo $2 | tr "/" "\n")
    do
        f=$f"$i/";
        if [[ ! -d $f  && ! $2 =~ '.' ]]; then 
            mkdir Web/assets/$f
            chmod 777 Web/assets/$f
        fi;
    done;

    if [[ $(echo $1 | grep ".zip") && ! -d $destination_path/$3 ]]; then
        echo "Comando: wget $1 -O $destination_path/$2/$3.zip -o $log_path";
        wget $1 -O $destination_path/$2/$3.zip -o $log_path;
        echo "Comando: unzip $destination_path/$2/$3.zip -d $destination_path/$2/$3";
        unzip $destination_path/$2/$3.zip -d $destination_path/$2/$3;
        echo "Comando: mv $destination_path/$2/$3*/ $destination_path/$2/$3";
        mv $destination_path/$2 $destination_path/$2/$3
        rm $destination_path/$2/*.zip;
        chmod 777 -R $destination_path/$2
    elif [[ $(echo $1 | grep ".js") && ! -f $destination_path/$3 ]]; then
        echo "Comando: mv $destination_path/$2/$3* $destination_path/$2/$3";
        wget $1 -O $destination_path/$2/$3.js -o $log_path;
    fi;

    echo "/////////////////////////////////";
fi;
