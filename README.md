# Like Me (Parte II) - Desafio 4 Acceso a una base de datos con Node y el paquete pg (parte II) - modulo Backend con Node y Express

Basado en el desafio pasado de Like Me, esta aplicacion hace un despliegue de posts (con titulo, imagen y descripcion) ingresados a traves de un formulario. La App principalemente consiste en un frontend de React proporcionado por Desafio Latam, el cual envia la informacion obtenida a un Servidor (backend) montado con ExpressJS el cual guardara la informacion en una base de datos creada con PostgreSQL.

La App cuenta con cuatro endpoints:
1.- GET con ruta /posts el cual realiza el despliegue de los posts.
2.- POST (ruta /posts) que modifica la base de datos ingresando un nuevo registro de posts.
3.- DELETE (ruta /posts/like/:id) el cual elimina un registro a traves del id del boton con icono de basura, es necesario reactualizar la pagina despues de haber creado un post para poder eliminarlo.
4.- PUT (ruta /posts/like/:id) el cual cambia la cantidad de likes que tiene cada post cuando se le da click en el boton con icono de corazon, para poder ver el despliegue correcto de likes en un nuevo post es necesario reactualizar la pagina.

## Installation

Instala desafio4_LikeMe_ParteII con NPM

```bash
  cd desafio4_LikeMe_ParteII
  cd backend
  npm install
  npm run dev
  cd frontend
  npm install
  npm run dev
```

Es necesario que crees una base de datos con PostgreSQL de esta forma:
CREATE DATABASE likeme; //
Luego te conectas a dicha base de datos con:
\c likeme //
Por ultimo creas la tabla en la que se guardara la informacion de esta forma:
CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000),
descripcion VARCHAR(255), likes INT);

## Authors

- [@angelopaolo23] - https://github.com/Angelopaolo23

## Tech Stack

**Client:** React.

**Database:** PostgreSQL, PG package for node.

**Server:** Node, Express, ViteJS, CORS and Nodemon packages.
