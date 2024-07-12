# 베이스 이미지 설정
FROM node:20.11.0-alpine AS base

RUN apk add --no-cache 'libc6-compat'

WORKDIR /app

COPY package.json package-lock.json ./

RUN rm -rf ./.next/cache

RUN npm install

# 소스 파일 복사
COPY . .

ENV NEXT_PUBLIC_NAVER_MAP_CLIENT_ID = $NEXT_PUBLIC_NAVER_MAP_CLIENT_ID \
     NEXT_PUBLIC_NAVER_MAP_CLIENT_SECRET = $NEXT_PUBLIC_NAVER_MAP_CLIENT_SECRET \
     NEXT_PUBLIC_SERVER_URL = $NEXT_PUBLIC_SERVER_URL \
     NEXT_PUBLIC_KAKAO_REST_API = $NEXT_PUBLIC_KAKAO_REST_API 
    
RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]
