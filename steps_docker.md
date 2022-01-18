# Etapes dockerisation

## 1/ Install docker sur AWS EC2

install docker engine:
https://docs.docker.com/engine/install/ubuntu/

linux postinstall:
https://docs.docker.com/engine/install/linux-postinstall/

## 2/ Containeriser le portfolio en dev

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

c/ test

Ok en local

3/ Image build le portfolio pour la prod et push

4/ Pull et mise en ligne sur AWS avec nginx
