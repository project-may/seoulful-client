# 베이스 이미지 설정
FROM node:20.11.0-alpine AS base

RUN apk add --no-cache 'libc6-compat'

WORKDIR /app

COPY package.json package-lock.json ./

RUN rm -rf ./.next/cache

RUN npm install

# 소스 파일 복사
COPY . .

# 환경 변수 파일 복사
COPY .env.production .env.production

#RUN npm run build

#EXPOSE 3000

#ENTRYPOINT [ "npm", "run", "start" ]
