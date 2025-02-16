# Proyecto Challenge

Este proyecto es una API para gestionar usuarios y sucursales.

## Requisitos Previos

1. Instalar una IDE, por ejemplo [Visual Studio Code](https://code.visualstudio.com/)
2. Instalar [Node.js](https://nodejs.org/)

## Instalación
Para construir y levantar el proyecto, ejecuta los siguientes comandos:

```sh
npm install
npm run build
npm start
```

## Probar el Funcionamiento

1. Instalar [Postman](https://www.postman.com/)
2. Importar el archivo del proyecto `Challenge.postman_collection.json` en Postman
3. Abrir el archivo en Postman para poder probar la API

## Endpoints

### Usuarios

- `GET /api/users`: Obtiene todos los usuarios.
- `GET /api/users/:id`: Obtiene un usuario por ID.
- `POST /api/users`: Crea un nuevo usuario.
- `PUT /api/users/:id`: Actualiza un usuario existente.
- `DELETE /api/users/:id`: Elimina un usuario (marcar como inactivo).

### Sucursales

- `GET /api/branches`: Obtiene todas las sucursales.
- `GET /api/branches/:id`: Obtiene una sucursal por ID.
- `POST /api/branches`: Crea una nueva sucursal.
- `PUT /api/branches/:id`: Actualiza una sucursal existente.
- `DELETE /api/branches/:id`: Elimina una sucursal (marcar como inactiva).

## Migración de Datos

La migración de datos se ejecuta automáticamente cada 2 horas. También puedes ejecutarla manualmente mediante el siguiente endpoint:

- `POST /api/migrate`: Ejecuta la migración de datos manualmente.
