#!/bin/bash

# Stop the script if any command fails
set -e

echo "🏗️ Running build..."
npm run build

echo ""
# Ask the user for confirmation before deploying
read -p "Build complete. Are you ready to deploy? (y/n) " -n 1 -r
echo ""    # Move to a new line

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🚀 Deploying..."
    npm run deploy
    
    echo ""
    echo "✅ Check deployment status: https://github.com/joshoti/joshoti.github.io/deployments/github-pages"
    echo "🌐 Check updated site: https://joshoti.github.io/"
else
    echo "❌ Deployment cancelled."
fi