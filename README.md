Este es un proyecto de una API de restaurantes. Se puede usar para crear, leer, actualizar y eliminar información de restaurantes.

A lo largo de este proyecto se aplico el "SOLID PRINCIPAL: Single-responsibility principle". Ademas de otros que estan indicados en sus archivos

------------------------------
Cómo ejecutar el docker
------------------------------

Entre al directorio docker que se encuentra en el proyecto

ejecute un docker-compose up para crear el docker file en Docker

------------------------------
Cómo ejecutar el proyecto
------------------------------

Clone el repositorio.

Instale las dependencias del proyecto con el comando npm install.

Inicie el servidor una vez activado el Docker con el comando yarm run start. 

---------------
Cómo usar la API en Postman
------------------------------

Para obtener todos los restaurantes, haga una solicitud GET a http://localhost:3000/api/restaurants.

Para obtener un restaurante específico, haga una solicitud GET a http://localhost:3000/api/restaurants/{id}, reemplace {id} con el ID del restaurante que desea obtener.

Para crear un nuevo restaurante, haga una solicitud POST a http://localhost:3000/api/restaurants y en el cuerpo de la solicitud, proporcione name, address, y cuisine como JSON.

Para actualizar un restaurante, haga una solicitud PUT a http://localhost:3000/api/restaurants/{id} y en el cuerpo de la solicitud, proporcione los campos que desea actualizar como JSON.

Para eliminar un restaurante, haga una solicitud DELETE a http://localhost:3000/api/restaurants/{id}.

Recuerde reemplazar {id} con el ID del restaurante que desea actualizar o eliminar.

los datos a insertar son estos
{
    "name": "Test.", //string y unico
    "address": "test", //string
    "cuisine": "Test" //string
}

