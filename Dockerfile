FROM node:20.11.0-alpine AS base

RUN apk add --no-cache 'libc6-compat'

WORKDIR /app


COPY package.json package-lock.json ./

#ENV 주입때문에 문제가 생기는지 테스트
#ENV NODE_ENV=production

RUN rm -rf ./.next/cache

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]
