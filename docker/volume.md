#Volúmenes (me permiten darle persistencia a los contenedores)

### Tipos de volúmenes (Para trabajo local)
```
Host, Anónimo y Nombrado
```

### Creación y ejemplo de tipo Host
```
-1 Defines un directorio de persistencia en tu maquina de manera manual
-2 trabaja fuera de la red virtual de docker, por tanto no puedes mediante comando listarlos, inspeccionarlos ni eliminarlos
-3 de acceso visible y manipulable por gestiones humanas

- docker run -d -p 3310:3306 -v C:\Users\carlo\OneDrive\Documentos\clase12\docker\mysql:/var/lib/mysql --name mysqlserver -e MYSQL_ROOT_PASSWORD=0411 -e MYSQL_USER=user -e MYSQL_PASSWORD=0411 -e MYSQL_DATABASE=cursonode mysql:8
```

### Para listar los volumenes

```
docker volume ls
docker volume ls | grep nginx
docker volume ls | findstr grep nginx
```

### Para inspeccionar los volumenes

```
docker volume inspect <nombre del volumen>
```

### Para eliminar volumenes

```
docker valume rm <nombre del volumen>
```


### Creación y ejemplo de volumen anonimo

```
-1 No se le asigna ninguna ruta o nombre al volumen
-2 La persistencia se genera bien, pero si el contenedor se vuelve a construir la definicion del volumen anonimo se vuelve a crear con un nombre diferente
-3 en sentido practico es solo para jugar
-4 Si se pueden eliminar por terminar, listar e inspeccionar
-5 Son dificiles de identificar

docker run -d -p 3310:3306 -v :/var/lib/mysql --name mysqlserver -e MYSQL_ROOT_PASSWORD=0411 -e MYSQL_USER=user -e MYSQL_PASSWORD=0411 -e MYSQL_DATABASE=cursonode mysql:8
```

### Para eliminar volumenes anonimos en conjunto del contenedor

```
docker rm -fv <nombre del contenedor>
```


### Creacion y ejemplo de volumen nombrado

```
docker run -d -p 3310:3306 -v colu-mysql:/var/lib/mysql --name mysqlserver -e MYSQL_ROOT_PASSWORD=0411 -e MYSQL_USER=user -e MYSQL_PASSWORD=0411 -e MYSQL_DATABASE=cursonode mysql:8
```