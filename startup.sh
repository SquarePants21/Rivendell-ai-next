#!/bin/bash

# Install dependencies if node_modules is missing
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm ci --only=production
fi

# Start the application
npm start
