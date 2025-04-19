#!/bin/bash

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
  echo "Creating .env file..."
  cp .env.example .env
fi

# Install dependencies
echo "Installing dependencies..."
pnpm install

# Initialize database
echo "Setting up database..."
docker-compose up -d db
sleep 5  # Wait for database to be ready

echo "Setup complete. Run 'docker-compose up' to start the application."