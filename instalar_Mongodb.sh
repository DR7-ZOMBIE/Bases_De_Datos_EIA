#!/bin/bash

# Asegurarse de que el script se ejecuta como root
if [ "$EUID" -ne 0 ]
  then echo "Por favor, ejecuta este script como root o utiliza sudo."
  exit
fi

# Agregar el repositorio oficial de MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list

# Actualizar los paquetes e instalar MongoDB
apt-get update
apt-get install -y mongodb-org

# Iniciar y habilitar el servicio de MongoDB
systemctl start mongod
systemctl enable mongod

# Crear el directorio de log y configurar los permisos
mkdir -p /var/log/mongodb
chown -R mongodb:mongodb /var/log/mongodb

touch /var/log/mongodb/mongod.log
chown mongodb:mongodb /var/log/mongodb/mongod.log

systemctl restart mongod
systemctl status mongod

# Instalar MongoDB Compass
wget https://downloads.mongodb.com/compass/mongodb-compass_1.29.4_amd64.deb -O mongodb-compass.deb
apt-get install -y ./mongodb-compass.deb
rm mongodb-compass.deb
