FROM node:17.4.0

RUN \
    apk add --no-cache curl && \
    npm i -g pnpm@7 && \
    pnpm config set store-dir .pnpm-store
