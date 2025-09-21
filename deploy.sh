#!/bin/bash

# Netlify Deployment Script
echo "🚀 Starting Netlify deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build files are in the 'dist' directory"
    echo ""
    echo "🌐 To deploy:"
    echo "1. Go to https://netlify.com"
    echo "2. Drag the 'dist' folder to the deploy area"
    echo "3. Or connect your GitHub repository"
    echo ""
    echo "📋 Don't forget to set environment variables in Netlify:"
    echo "- REACT_APP_SUPABASE_URL"
    echo "- REACT_APP_SUPABASE_ANON_KEY"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
