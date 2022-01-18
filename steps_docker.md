# Etapes dockerisation

## 1/ AWS - Install docker sur AWS EC2

install docker engine:
https://docs.docker.com/engine/install/ubuntu/

linux postinstall:
https://docs.docker.com/engine/install/linux-postinstall/

## 2/ Local - Containeriser le portfolio

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

## 3/ AWS - Paramétrage et test

Ok en local, fait quelques changement pour tester en prod.

- Création de l'enregistrement DNS test.ikodi.eu pour le premier déploiement avec docker -> ok
- Paramétrage de nginx pour recevoir test.ikodi.eu et transférer sur le port 6060 -> ok
- Paramétrage de certbot pour autoriser le https sur test.ikodi.eu -> ok
- Vérifier que l'adresse est accessible et renvoie une app sur le port 6060 -> ok
- Installer docker-compose -> ok
- Installer l'auto-complétion de docker-compose -> ok

## 4/ Local - Image build le portfolio pour la prod et push

- docker-compose build
- docker-compose push ikodi/portfolio
- git add .
- git commit -a
- git push

## 5/ Pull et mise en ligne sur AWS avec nginx
