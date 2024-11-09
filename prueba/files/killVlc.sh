#!/bin/bash
vlc=`ps aux | grep vlc | cut -d " " -f7`
kill -9 $vlc
