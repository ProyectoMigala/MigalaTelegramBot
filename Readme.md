# Telegram Bot Migala

Es un bot de Telegram que sera utilizado en todas las entidades Estatales.

## Pre-Requisitos Configuracion

- Renombra .env.example a .env y actualiza las variables con tus datos

## Pre-Requisitos Ejecucion

- Tener Docker (Docker version 20.10.10, build b485636) y/o docker-compose (docker-compose version 1.29.2, build 5becea4c)

o

- nodejs (v16.13.1)

## Instalar Dependencias
Instale las dependencias con npm
```bash
npm install 
```

## Comandos de Uso

```
# Inicia el Bot
npm run start 

# Inicia el Bot en modo desarrrollo
npm run dev
```

## Docker

- Ejecuta el script `build.sh` para construir la imagen Docker.
- Ejecuta el script `start.sh` para crear un contenedor Docker. El contenedor ejecuta el bot.
