FROM node:16-slim

WORKDIR /app

COPY package.json ./

COPY firebase.json ./

RUN corepack enable

RUN yarn

EXPOSE 3001

CMD ["yarn", "dev:api"]