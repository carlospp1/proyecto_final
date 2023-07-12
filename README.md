Este es un proyecto de una API de restaurantes. Se puede usar para crear, leer, actualizar y eliminar información de restaurantes.

------------------------------
Cómo ejecutar el proyecto
------------------------------

Clone el repositorio.

Instale las dependencias del proyecto con el comando npm install.

Asegúrese de tener MongoDB instalado y ejecutándose en su máquina.

Inicie el servidor con el comando npm start. El servidor comenzará en localhost:3000.

------------------------------
Cómo usar la API en Postman
------------------------------

Para obtener todos los restaurantes, haga una solicitud GET a http://localhost:3000/api/restaurants.

Para obtener un restaurante específico, haga una solicitud GET a http://localhost:3000/api/restaurants/{id}, reemplace {id} con el ID del restaurante que desea obtener.

Para crear un nuevo restaurante, haga una solicitud POST a http://localhost:3000/api/restaurants y en el cuerpo de la solicitud, proporcione name, address, y cuisine como JSON.

Para actualizar un restaurante, haga una solicitud PUT a http://localhost:3000/api/restaurants/{id} y en el cuerpo de la solicitud, proporcione los campos que desea actualizar como JSON.

Para eliminar un restaurante, haga una solicitud DELETE a http://localhost:3000/api/restaurants/{id}.

Recuerde reemplazar {id} con el ID del restaurante que desea actualizar o eliminar.