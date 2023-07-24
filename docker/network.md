# Networks (Controlan el acceso y comunicacion de los contenedores)

### Tipo de redes

```
Bridge (default o nombrada), host y none
```

### Bridge Default 

```
docker exec -it test01 sh
ping 172.17.0.4.
```

### Bridge Nombrada 

```
docker exec -it test01 sh
ping 172.17.0.4.
```

### Crear una red de tipo Bridge nombrada y luego vincularla a un contenedor a crear

```
docker network create <Nombre de red> -d bridge
docker run -d --name test03 --network <nombre de la red> nginx:alpine
docker run -d --name test03 --network net-sql nginx:alpine
```

### Vincular una red a un contenedor existente

```
docker network connect <nombre de la red> <nombre contenedor>
docker network connect net-sql test03 (ejemplo)
```

### Desvincular contenedor de una red especifica

```
docker network disconnect <nombre de la red> <nombre contenedor>
docker network disconnect net-sql test03 (ejemplo)
```

### Para listar Redes

```
docker network ls
docker network | grep sql
docker network | findstr sql
```

### Para inspeccionar Redes

```
docker network inspect <nombre de la red>
```

### Para eliminar una red

```
docker network rm <nombre de la red>
```




