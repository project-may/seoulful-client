FROM node:20.11.0-alpine AS base
# From {baseImage명}:{version}
RUN apk add --no-cache 'libc6-compat'

WORKDIR /app

COPY package.json package-lock.json ./

RUN rm -rf ./.next/cache

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]