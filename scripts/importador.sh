#!/bin/bash
echo $file > p.tmp && sed "$/.JPG/.jpg/g" p.tmp > p.txt && rm p.tmp && m="${cat p.txt}" && $nameupcaset = echo "min/$m" && rm p.txt 

for(filename in cd "$pwd/media/animes" find -iname)
echo $nameupcaset



#!/bin/bash

thispath=$(dirname $(readlink -f $0))
cd "$thispath"


for filename in $(
     cd originales
     find . -iname "*.jpg"
); do
     echo "FILE: $filename"
     OLDSHA1=$(cat "sha1orig/$filename.sha1" 2>/dev/null)
     NEWSHA1=$(sha1sum "originales/$filename")

#     if [ "$OLDSHA1" != "$NEWSHA1" ]; then
     if [ \( "originales/$filename" -nt "gra/$filename" \) -o \
          \( "originales/$filename" -nt "med/$filename" \) -o \
          \( "originales/$filename" -nt "min/$filename" \) -o \
          \( "$OLDSHA1" != "$NEWSHA1" \) ];

     then
         echo "FILE: $filename -- UPDATED"
         #sha1sum "originales/$filename" > "sha1orig/$filename.sha1"
         #Convertimos solo la extension a minuscula
         echo $filename > name.tmp && sed "s/.PNG/.png/g" name.tmp >
name.txt && rm name.tmp && lowername=$(cat name.txt) && rm name.txt
         echo $lowername > name.tmp && sed "s/.JPG/.jpg/g" name.tmp >
name.txt && rm name.tmp && lowername=$(cat name.txt) && rm name.txt
         echo $lowername > name.tmp && sed "s/.JPEG/.jpeg/g" name.tmp >
name.txt && rm name.tmp && lowername=$(cat name.txt) && rm name.txt
         echo $lowername > name.tmp && sed "s/.GIF/.gif/g" name.tmp >
name.txt && rm name.tmp && lowername=$(cat name.txt) && rm name.txt

         convert "originales/$filename" -resize 1024x1024 -strip
-quality 95 "gra/$lowername" && \
         convert "originales/$filename" -resize 750x750 -strip -quality
90 "med/$lowername" && \
         convert "originales/$filename" -resize 250x250 -strip -quality
90 "min/$lowername" && \
                 sha1sum "originales/$filename" > "sha1orig/$filename.sha1";
                 chmod 777 "gra/$lowername"
                 chmod 777 "med/$lowername"
                 chmod 777 "min/$lowername"



         #convert "originales/$filename" -resize 3000x3000 -strip
-quality 95 -density 96 -units pixelsperinch "gra/$filename" && \
                 #convert "gra/$filename" -resize 750x750 -strip
-quality 90 "med/$filename" && \
                 #convert "med/$filename" -resize 300     -strip
-enhance -quality 90 "min/$filename" && \
                 #sha1sum "originales/$filename" >
"sha1orig/$filename.sha1";
                 #chmod 777 "gra/$filename"
                 #chmod 777 "med/$filename"
                 #chmod 777 "min/$filename"
                 #chmod 777 "originales/$filename"
                 #chmod 777 "visualizaciones/$filename"
     else
         echo "FILE: $filename * " >/dev/null
     fi

done








