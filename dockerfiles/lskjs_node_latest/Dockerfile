FROM node:latest

RUN \
    apk add --no-cache curl && \
    npm i -g pnpm@7 && \
    pnpm config set store-dir .pnpm-store
