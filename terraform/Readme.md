# Deploy de Infraestructura con Terraform

Esta es la infraestructura utilizada para el proyecto

## Pre-Requisitos

- Tener Docker en tu computadora
- Tener un Personal API Access Token de [spot.io](https://spot.io/), [Documentation](https://registry.terraform.io/providers/spotinst/spotinst/latest/docs#credential-precedence)
- Tener tus Credenciales de `AWS` Configuradas `~/.aws/credentials`

ejemplo
```bash
[default_user]
aws_access_key_id=xxxxxx
aws_secret_access_key=xxxxx
```

## Como se ejecuta
Se necesita correr el comando make de esta manera
```bash
# Con esto inicializas terraform
make init aws_profile=default_user spotinst_token=xxxxx spotinst_account=xxxxx platform=spot.io

# Con esto ves el plan
make plan aws_profile=default_user spotinst_token=xxxxx spotinst_account=xxxxx platform=spot.io

# Con esto Aplicas el Plan
make apply aws_profile=default_user spotinst_token=xxxxx spotinst_account=xxxxx platform=spot.io

# Con esto Destruyes la infraestructura
make destroy aws_profile=default_user spotinst_token=xxxxx spotinst_account=xxxxx platform=spot.io


# Inicia un contenedor Terraform con bash como entry point, tu decides que hacer dentro
make bash

# Formatea todos los archivos Terraform en la carpeta de la plataforma
make fmt platform=spot.io
```
