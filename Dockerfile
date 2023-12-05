FROM node:14-alpine

WORKDIR /src

COPY package*.json ./

COPY src ./src

RUN npm i


EXPOSE 8080

CMD [ "npm","start" ]