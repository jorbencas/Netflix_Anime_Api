#Docker
sudo apt-get install docker docker.io docker-compose

#Utilizar docker sin que el usuario sea sudo
sudo groupadd docker
sudo usermod -aG docker jorge

## Información para dockerizar la aplicación
https://medium.com/bb-tutorials-and-thoughts/dockerizing-react-app-with-nodejs-backend-26352561b0b7


#bajar imagen de docker 
docker pull url_imagen

#listar contendores
docker ps -a

#eliminar imagenes forzando
docker rmi -f $(docker images -aq)

#listar contenedores activos 
docker ps

#Ejecutar contenedor 
docker exec -it nombre_contenedor bash

#eliminar contenedor 
docker rm nombre_contenedor

#listar volimenes
docker volume ls

#eliminar volumen
docker volume rm nombre_volumen

#Iniciar docker con build
docker-compose up

#Iniciar docker sin build
docker-compose start

#log de un contenedor 
docker logs nombre_contenedor --follow

#parar containers
docker stop $(docker ps -a -q);



#curso Docker Udemy

https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes-es

docker volume prune
docker rmi -f $(docker images -aq)
docker rm $(docker ps -a -f status=exited -q)
