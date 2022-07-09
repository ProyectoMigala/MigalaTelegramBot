#!/bin/bash

mensaje () {
    echo ""
    echo "************************************************************"
    echo "\t $1"
    echo "************************************************************"
    echo ""
}

mensaje "Cambiamos al usuario root"
sudo su -

mensaje "Instalamos Docker con el script"
curl -fsSL https://get.docker.com | bash

mensaje "Creamos la carpeta opt"
mkdir /root/opt

mensaje "Nos Movemos de Carpeta"
cd /root/opt

mensaje "Clonamos el repositorio"
git clone https://github.com/ProyectoMigala/MigalaTelegramBot.git

mensaje "Copiamos los scripts a la ruta opt"
cp ./MigalaTelegramBot/scripts/deploy* ./

mensaje "Hacemos ejecutable los scripts"
chmod +x deploy*

mensaje "Finalizamos"
