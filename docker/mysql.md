# Crear un servidor de MYSQL usando Docker

### 1er paso: Descargar la imagen de MYSQL

```
docker pull mysql:8
```

### Para listar o ver las imagenes que haz descargado

```
docker images
docker images | grep mysql (ejemplo) esto para Linux y MC
docker images | findstr mysql (en windows)
```

### Crear un contenedor de Docker

```
docker create mysql:8 (Crear un contenedor con una imagen, pero que docker le de un nombre)

docker create --name mysqlserver mysql:8 (esta es la forma correcta de crear un contenedor y vincularle de una vez la imagen)

```

### Estados de un contenedor

```
- Exited (pausado)
- Create (creado pero no esta siendo ocupado)
- Running (creado y corriendo bien)
- Unused (huerfano)
```

### Para eliminar un contenedor

```
docker rm NOMBRE_DEL_CONTENEDOR
```

### Para eliminar una imagen

```
docker rm NOMBRE_DEL_IMAGEN
```

### Para listar contenedores

```
docker ps (solo me lista los que estan con estatus: running)
docker ps -a (lista los contenedores independientemente del estatus)
docker ps | findstr mysqlserver (filtrar los status running)
docker ps -a | findstr mysqlserver ( filtra los de cualquier estatus)
```

### Como detener un contenedor

```
docker stop nombre_contenedor
```

### Para visualizar las jecuciones de procesos del contenedor una vez echa a correr

```
docker logs <nombre del contenedor> | o por su identificador (ID)
```

### Para iniciar un contenedor

```
docker start <nombre del contenedor> | o por su identificador (ID)
```

### Crear un contenedor, mezclando el docker pull, docker create y el docker start

```
docker run --name test -e MYSQL_ROOT_PASSWORD=0411 -e MYSQL_USER=user -e MYSQL_PASSWORD=0411 -e MYSQL_DATABASE=cursonode mysql:8 (con definición de variables de entorno)
docker run -d -p 3310:3306 --name mysqlserver -e MYSQL_ROOT_PASSWORD=0411 -e MYSQL_USER=user -e MYSQL_PASSWORD=0411 -e MYSQL_DATABASE=cursonode mysql:8 (con definición de puertos)
```

### para inspeccionar el contenido de un contenedor

```
docker inspect NOMBRE_CONTENEDOR | IDENTIFICADOR (ID)
```

### Para vincukarme mediante la terminal con un contenedor

```
docker exec -it mysqlserver sh
```