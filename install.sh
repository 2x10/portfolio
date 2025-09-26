#!/bin/bash
set -e

CONFIG_FILE=".env"  
EXAMPLE_FILE="${CONFIG_FILE}.example" 

setup_config() {
    if [ ! -f "$CONFIG_FILE" ] || [ ! -s "$CONFIG_FILE" ]; then
        if [ ! -f "$EXAMPLE_FILE" ]; then
            echo "Example file '$EXAMPLE_FILE' is missing. Cannot create '$CONFIG_FILE'."
            exit 0
        fi
        cp "$EXAMPLE_FILE" "$CONFIG_FILE"
        exit 100
    fi
}

setup_config

echo "$CONFIG_FILE found and configured, proceeding with installation..."

docker compose build --no-cache
docker compose up -d --force-recreate
docker image prune -f
