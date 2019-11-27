# install docker
```s
$ sudo docker image ls
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
postgres            12.1                7363c5bcdbce        5 hours ago         394MB
adminer             latest              b742c07b7fd1        18 hours ago        80.8MB
hello-world         latest              fce289e99eb9        10 months ago       1.84kB

$ sudo docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
c48e5fe4f640        postgres:12.1       "docker-entrypoint.s…"   5 minutes ago       Up 5 minutes        0.0.0.0:5432->5432/tcp   restaurant_db_1
a413fc81869d        adminer             "entrypoint.sh docke…"   52 minutes ago      Up 51 minutes       0.0.0.0:8080->8080/tcp   restaurant_adminer_1
```

# set up postgres
https://hub.docker.com/_/postgres?tab=description
## start a postgres instance
`$ sudo docker-compose up -d`
The default `postgres` user and database are created in the entrypoint with `initdb`.
> The postgres database is a default database meant for use by users, utilities and third party applications.
> postgresql.org/docs

## ... or via psql
```
$ sudo docker exec -it restaurant_db_1 psql -U postgres
psql (9.5.0)
Type "help" for help.

postgres=# SELECT 1;
 ?column? 
----------
        1
(1 row)
```

## local psql
```
$ sudo yum install -y postgresql
$ psql -U postgres -h localhost
```

## adminer
http://132.145.50.39:8080/?pgsql=db&username=postgres&db=postgres&ns=public

