# Adonis API application

API de usuarios

## Setup

Ejecuta estando dentro del directorio del proyecto  `npm install`.

### Create DB
Ejecuta el script de base de datos adjunto al proyecto dentro de la carpeta userDB.sql
mysql -u nombreUsuario -p nombreDB
source userDB.sql

### Config DB
En la raiz del proyecto se encuentra un archivo .env el cual se debe editar con los datos de conexión a la BD
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=SGdCSXrZsHfK81lKCvodqIiaYwZYuWAB
DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER= EDITAR USUARIO DE BD  <==================
DB_PASSWORD=EDITAR PASSWORD DE BD  <=====================
DB_DATABASE=api_usuarios
HASH_DRIVER=bcrypt

### Run 

Ejecuta `npm start` para correr el proyecto (API) estando en la raiz del proyecto

Importante: para probar los servicios se adjunta una coleccion de postman en la carpeta app/postman
Por seguridad, no se mandan datos en la URL por tanto el servicio de obtener un usuario es POST