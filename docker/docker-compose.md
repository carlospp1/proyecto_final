# Docker Compose

### Instrucción para ejecutar un docker-compose.yaml

```
docker compose up
docker compose up -d (para desacoplar de la terminal) manera correcta
```

### Para eliminar el contenedor que se creo con docker compose

```
docker compose down
```

### Para ver el estado de los contenedores creados con docker compose

```
docker compose ps
```

### Para recrear o ejecutar solamente algunos servicios

```
docker compose up -d <nombre del servicio1> <nombre del servicio2> ...