# Deploy de Infraestructura con Terraform

Esta es la infraestructura utilizada para el proyecto

## Pre-Requisitos

- Tener Docker en tu computadora
- Tener un Personal API Access Token de [spot.io](https://spot.io/) y configurar las credenciales `~/.spotinst/credentials`, [Documentation](https://github.com/spotinst/spotctl)
- Tener tus Credenciales de `AWS` Configuradas `~/.aws/credentials`

ejemplo
```bash
cat ~/.aws/credentials
[default_user]
aws_access_key_id=xxxxxx
aws_secret_access_key=xxxxx
```

```bash
cat ~/.spotinst/credentials
[default]
token   = <spotinst_token>
account = <spotinst_account>
```

## Como se ejecuta
Se necesita correr el comando make de esta manera
```bash
# Con esto inicializas terraform
make init aws_profile=default_user platform=spot.io

# Con esto ves el plan
make plan aws_profile=default_user platform=spot.io

# Con esto Aplicas el Plan
make apply aws_profile=default_user platform=spot.io

# Con esto Destruyes la infraestructura (tienes que tener el backend de terraform)
make destroy aws_profile=default_user platform=spot.io


# Inicia un contenedor Terraform con bash como entry point, tu decides que hacer dentro
make bash

# Formatea todos los archivos Terraform en la carpeta de la plataforma
make fmt platform=spot.io

# Muestra los providers
make providers platform=spot.io
```

## Despues de haber levantado toda la infraestructura

Al haber levantado la infraestructura, puedes conectarte con `ssh` y el archivo `MigalaBots.pem` que esta dentro de la carpeta `spot.io`, la `ip` de la instancia la tienes que sacar de `aws` o `spot.io` (ip publica)

```bash
ssh -t ./MigalaBots.pem ubuntu@public_ip
```

despues de esto puedes seguir con los pasos que esta en la carpeta `scripts`.
para ser especifico, solo la parte de crear los `env` y ejecutar `deploy_all.sh`
