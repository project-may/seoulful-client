FROM node:20.11.0-alpine AS base

RUN apk add --no-cache 'libc6-compat'

WORKDIR /app


COPY package.json package-lock.json ./

ENV NODE_ENV=production

RUN rm -rf ./.next/cache

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]