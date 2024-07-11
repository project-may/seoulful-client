FROM node:20.11.0-alpine AS base
RUN apk add --no-cache 'libc6-compat' python3 make g++

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json ./

# Remove .next/cache directory if it exists
RUN rm -rf ./.next/cache

# Use npm ci instead of npm install for a clean environment
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]