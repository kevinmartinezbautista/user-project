# Adonis API application

API de usuarios

## Setup

Ejecuta estando dentro del directorio del proyecto  `npm install`.

### Ejecuta DB script
Ejecuta el script de base de datos adjunto al proyecto dentro de la carpeta userDB.sql
mysql -u nombreUsuario -p nombreDB
source userDB.sql

### Exec

Ejecuta `npm start` para correr el proyecto (API) estando en la raiz del proyecto

Importante: para probar los servicios se adjunta una coleccion de postman en la carpeta app/postman
Por seguridad, no se mandan datos en la URL por tanto el servicio de obtener un usuario es POST