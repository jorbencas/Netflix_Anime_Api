
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

#crear database 
