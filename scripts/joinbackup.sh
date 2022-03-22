#!/bin/bash
destination_path="../files/media_unificated.sql"

if [ -f $destination_path ]; then
   text="";
   $text > $destination_path
else 
    touch $destination_path
fi

for n in $(ls  ../backup | grep '*.sql' ); do
    echo "../backup/$n"
    if [ -d "../backup/$n" ]; then
        sub_path="../backup/$n"
        for m in $(ls  $sub_path | grep '*.sql' ); do
            cat "$sub_path/$m" >> $destination_path;
        done;
    elif [ -f "../backup/$n" ]; then
        cat "../backup/$n" >> $destination_path
    fi
done

#prueba de joinbackup interactiva



echo"Deseas realizar el joinbackup de las carpetas o de los archivos (c/a)";
$op1=read
$base_path="../backup"

if $op1 == "c":
echo"cuales son las carpetas que deseas unir sus archivos";
ls -ld $base_path
$op1=read

find $base_path/media/*.sql | xargs -p cat >> ../media_unificated.sql
elif $op1 == "a":
find $base_path/media/*.sql | xargs -p cat >> ../media_unificated.sql
fi
find /var/www/Anime/sql/backup/animes/*.sql |xargs cat >> /var/www/Anime/media_unificated.sql