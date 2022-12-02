#!/usr/bin/env bash

cd 18.10.0-alpine && \
docker build -t lskjs/node:18.10.0-alpine . && \
docker push lskjs/node:18.10.0-alpine && \
cd .. && \
echo "SUCCESS"

# docker rmi -f $(docker images -q --filter "dangling=true")
