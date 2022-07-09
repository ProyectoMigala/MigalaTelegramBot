# Como hacer Deploy Manual

Scripts utilizados para hacer deploy del proyecto

## Pre-Requisitos

- tener un servidor linux
- tener `Docker` en el servidor
- conectarse y cambiar a usuario root `sudo su -`
- crear una carpeta `opt` en el `home` del usuario `root` -> `/root/opt`

### Clonas el proyecto en la carpeta `opt` del usuario `root`

```bash
git clone https://github.com/ProyectoMigala/MigalaTelegramBot.git

root@ip-xxx-xxx-xxx-xxx:~/opt# ls
MigalaTelegramBot
```

### En la misma ruta Donde esta el directorio del codigo del proyecto, copias los archivos `deploy.sh` y `deploy_all.sh`

```bash
root@ip-xxx-xxx-xxx-xxx:~/opt# ls
MigalaTelegramBot  deploy.sh  deploy_all.sh
```

### Creas los archivos de entorno para cada bot

```bash
root@ip-xxx-xxx-xxx-xxx:~/opt# ls
MigalaTelegramBot  deploy.sh  deploy_all.sh  env.jalisco  env.testing
```

Ejecutas el comando `deploy_all.sh` y listo.
Todos los bots deberian tener un contenedor `docker` en ejecucion (exceptuando `testing`)

