#!/bin/bash

# Asegurarse de que el script se ejecuta como root
if [ "$EUID" -ne 0 ]
  then echo "Por favor, ejecuta este script como root o utiliza sudo."
  exit
fi

mkdir -p /var/log/mongodb
chown -R mongodb:mongodb /var/log/mongodb

touch /var/log/mongodb/mongod.log
chown mongodb:mongodb /var/log/mongodb/mongod.log

systemctl restart mongod
systemctl status mongod

