#!/bin/bash

echo ""
echo "========================================"
echo " UNPARALLELED SCHOLAR - US.V1"
echo " Built by Srijanxi Technologies"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "[ERROR] Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "[INFO] Node.js version:"
node --version
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "[INFO] Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "[ERROR] Failed to install dependencies"
        exit 1
    fi
    echo "[SUCCESS] Dependencies installed!"
    echo ""
else
    echo "[INFO] Dependencies already installed"
    echo ""
fi

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "[WARNING] .env file not found"
    echo "[INFO] Creating .env from .env.example..."
    cp .env.example .env
    echo "[SUCCESS] .env file created!"
    echo ""
fi

echo "========================================"
echo " Starting Unparalleled Scholar Server"
echo "========================================"
echo ""
echo "[INFO] Server will start on http://localhost:3000"
echo "[INFO] Press Ctrl+C to stop the server"
echo ""

# Start the server
npm run dev
