# Etapes dockerisation

## Workflow

### 1/ Containeriser l'app (ici mon portfolio)

a/ Dockerfile

Contenu basic.

```Dockerfile
FROM node:16
WORKDIR /app
COPY . ./
RUN npm install --production
RUN npm run build
CMD ["npm", "start"]
```

b/ docker-compose.yml

```yaml
version: "3"
services:
  portfolio:
    build: .
    image: ikodi/portfolio
    ports:
      - "6060:6060"
    environment:
      - PORT=6060
```

Note: la prop 'image' permet de tagguer directement l'image pour le push sur dockerhub

_Alternativement, on peut renommer l'image pour pouvoir push sur dockerhub_

```bash
docker image tag portfolio_portfolio_1 ikodi/portfolio
```

c/ .dockerignore

```text
node_modules
Dockerfile
.dockerignore
.git
.gitignore
docker-compose*
```

### 2/ Image build le portfolio pour la prod

```bash
docker-compose build
```

ou selon le cas

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml build
```

Note: Il est possible de ne faire un nouveau build que pour un service précisé dans la commande, admettons qu'il y ait plusieurs services (portfolio, redis, nginx par exemple) on peut choisir de faire une nouvelle image sans rebuild redis et nginx

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml build portfolio
```

### 3/ Push l'image sur dockerhub

```bash
docker push ikodi/portfolio
```

il est possible de faire un push avec docker-compose et de ne push qu'une image précisée (même fonctionnement que le build)

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml push portfolio
```

On oubli pas de mettre à jour le repo github

- git add .
- git commit -a
- git push

### 4/ 1er deploiement sur AWS

```bash
$ git clone <repo>
$ docker-compose up -d
```

Va faire un premier build de l'image en local, mais ce n'est pas souhaitable pour la suite de faire le build sur le serveur distant.

### 5/ Prendre en compte les changements sans faire de nouveau build sur le serveur

Déjà faire un nouveau build en local -> cf étape 2
Puis push la nouvelle image sur dockerhub -> cf étape 3

Enfin faire un pull de la nouvelle image

```bash
docker-compose -f docker-compose.yml pull
```

et un up

```bash
docker-compose -f docker-compose.yml up -d
```

## Paramétrage AWS

### 1/ Install docker sur AWS EC2

install docker engine:
https://docs.docker.com/engine/install/ubuntu/

linux postinstall:
https://docs.docker.com/engine/install/linux-postinstall/

### 2/ Paramétrage et test

Ok en local, fait quelques changement pour tester en prod.

- Création de l'enregistrement DNS test.ikodi.eu pour le premier déploiement avec docker -> ok
- Paramétrage de nginx pour recevoir test.ikodi.eu et transférer sur le port 6060 -> ok
- Paramétrage de certbot pour autoriser le https sur test.ikodi.eu -> ok
- Vérifier que l'adresse est accessible et renvoie une app sur le port 6060 -> ok
- Installer docker-compose -> ok
- Installer l'auto-complétion de docker-compose -> ok

### 3/ Pull et mise en ligne sur AWS avec nginx

- docker-compose up
