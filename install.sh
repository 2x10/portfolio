#!/bin/bash
set -e

cp config.env .env 

docker compose build --no-cache
docker compose up -d --force-recreate
docker image prune -f