# todo-mern

> a full stack mern todo app

## Getting Started (Development)

Start Development Environment using `docker-compose`

```
docker-compose -f dev.docker-compose.yml up
```

> Once the containers are running head over to `http://localhost:5173` to access the dev version of the application

Stop the Development Environment

```sh
docker-compose down
# or
docker-compose down --rmi all -v # to remove containers, images, and volumes
```

## Getting Started (Production)

Start the application using `docker-compose`

```
docker-compose up -d
```

> Once the containers are running head over to `http://localhost:4173` to access the application.

Stop the application

```
docker-compose down
```

## License

[MIT](./LICENSE)
