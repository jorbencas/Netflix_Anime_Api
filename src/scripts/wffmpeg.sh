#!/bin/bash
#https://www.twitch.tv/videos/1709647907?collection=mO7571znIxck5w
echo $0 + " ____" + $1;
youtube-dl -f mp4 https://www.youtube.com/watch?v=N1DjyP55bGg&ab_channel=D%27OconFilms -o ~/Descargas/v/cf.mp4 --exec "cd  ~/Descargas/v && ffmpeg -i {}.mp4 -c:v libvpx-vp9 -crf 63 -b:v 1M -c:a libvorbis {}.web && del {}"



#!/bin/bash

# Download the video using youtube-dl
youtube-dl -f 'bestvideo[height<=1080]+bestaudio/best[height<=1080]' "$1"

# Get the file name without extension
filename=$(basename -- "$1")
filename="${filename%.*}"

# Convert the video to an optimized mp4 format using ffmpeg
ffmpeg -i "$filename.webm" -vf "scale=-2:720" -c:v libx264 -preset slower -crf 23 -c:a aac -b:a 128k -movflags +faststart "$filename.mp4"

# Delete the original webm file
rm "$filename.webm"



./convert.sh https://www.youtube.com/watch?v=dQw4w9WgXcQ
