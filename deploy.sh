#!/bin/bash
set -e

# --- Pull latest code ---
echo "Pulling latest changes..."
git pull origin main

# --- Get last commit date ---
LAST_UPDATED=$(git log -1 --format=%cd --date=short)
echo "Last updated: $LAST_UPDATED"

# --- Build and redeploy ---
echo "Building Docker image..."
LAST_UPDATED="$LAST_UPDATED" docker compose build

echo "Starting container..."
docker compose up -d

echo "✅ Deployment complete."
