#!/bin/bash

# Definir el directorio de entrada y salida
input_dir="./"
output_dir="./optimizados"

if [[ ! -d $output_dir ]]; then 
	# Asegurarse de que el directorio de salida exista
	mkdir -p "$output_dir"
fi

# Recorrer los archivos MP4 en el directorio de entrada
for file in $input_dir/*.mkv; do
  # Obtener el nombre del archivo sin la extensión
  filename=$(basename "$file" .mkv)
  
  # Convertir el archivo a WebM usando ffmpeg
  ffmpeg -i "$file" -c:v libvpx-vp9 -crf 63 -b:v 1M -c:a libvorbis "$output_dir/$filename.mp4"
  #if [[ -f $file ]]; then
  #	rm $file
  #fi
  #echo "\n\n\n\n\n\n Elimiinado archivo $file "
done
