FROM node:lts-alpine

WORKDIR /app && chown -R node:node /app

COPY package*.json ./
RUN yarn global add @nestjs/cli prisma && yarn cache clean --force

COPY . .

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "yarn","start:dev" ]