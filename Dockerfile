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
ARG NEXT_PUBLIC_NAVER_LOGIN_CLIENT_ID
ARG NEXT_PUBLIC_NAVER_STATE
ARG NEXT_PUBLIC_CLIENT_URL
ARG NEXT_PUBLIC_SERVER_URL
ARG NEXT_PUBLIC_KAKAO_REST_API

ENV NAVER_MAP_CLIENT_ID=$NAVER_MAP_CLIENT_ID
ENV NAVER_MAP_CLIENT_SECRET=$NAVER_MAP_CLIENT_SECRET
ENV NEXT_PUBLIC_NAVER_LOGIN_CLIENT_ID=$NEXT_PUBLIC_NAVER_LOGIN_CLIENT_ID
ENV NEXT_PUBLIC_NAVER_STATE=$NEXT_PUBLIC_NAVER_STATE
ENV NEXT_PUBLIC_CLIENT_URL=$NEXT_PUBLIC_CLIENT_URL
ENV NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_SERVER_URL
ENV NEXT_PUBLIC_KAKAO_REST_API=$NEXT_PUBLIC_KAKAO_REST_API

# 환경 변수 출력
RUN echo "NAVER_MAP_CLIENT_ID=$NAVER_MAP_CLIENT_ID"
RUN echo "NAVER_MAP_CLIENT_SECRET=$NAVER_MAP_CLIENT_SECRET"
RUN echo "NEXT_PUBLIC_NAVER_LOGIN_CLIENT_ID=$NEXT_PUBLIC_NAVER_LOGIN_CLIENT_ID"
RUN echo "NEXT_PUBLIC_NAVER_STATE=$NEXT_PUBLIC_NAVER_STATE"
RUN echo "NEXT_PUBLIC_CLIENT_URL=$NEXT_PUBLIC_CLIENT_URL"
RUN echo "NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_SERVER_URL"
RUN echo "KAKAO_REST_API=$KAKAO_REST_API"

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]
