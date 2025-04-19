#!/bin/bash

# Simple deployment script
echo "Deploying application..."

# Pull latest changes
git pull origin main

# Build and restart containers
docker-compose down
docker-compose build
docker-compose up -d

echo "Deployment complete."