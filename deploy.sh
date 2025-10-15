#!/bin/bash
set -e

# --- Pull latest code ---
echo "Pulling latest changes..."
git pull origin main

# --- Get last commit date ---
LAST_UPDATED=$(git log -1 --format=%cd --date=short)
echo "Last updated: $LAST_UPDATED"

# Export variable so Docker build can see it
export VITE_LAST_UPDATED=$LAST_UPDATED

# --- Build and redeploy ---
echo "Building Docker image..."
docker compose build --build-arg LAST_UPDATED="$LAST_UPDATED"

echo "Starting container..."
docker compose up -d

echo "✅ Deployment complete."
