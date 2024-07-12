# 베이스 이미지 설정
FROM node:20.11.0-alpine AS base

RUN apk add --no-cache 'libc6-compat'

WORKDIR /app

COPY package.json package-lock.json ./

RUN rm -rf ./.next/cache

RUN npm install

# 빌드
COPY . .

ARG NAVER_MAP_CLIENT_ID
ARG NAVER_MAP_CLIENT_SECRET
ARG SERVER_URL
ARG KAKAO_REST_API

ENV NAVER_MAP_CLIENT_ID=$NAVER_MAP_CLIENT_ID
ENV NAVER_MAP_CLIENT_SECRET=$NAVER_MAP_CLIENT_SECRET
ENV SERVER_URL=$SERVER_URL
ENV KAKAO_REST_API=$KAKAO_REST_API

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]
