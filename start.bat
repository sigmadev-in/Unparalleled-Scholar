@echo off
echo.
echo ========================================
echo  UNPARALLELED SCHOLAR - US.V1
echo  Built by Srijanxi Technologies
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo [INFO] Node.js version:
node --version
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo [INFO] Installing dependencies...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Failed to install dependencies
        pause
        exit /b 1
    )
    echo [SUCCESS] Dependencies installed!
    echo.
) else (
    echo [INFO] Dependencies already installed
    echo.
)

REM Check if .env exists
if not exist ".env" (
    echo [WARNING] .env file not found
    echo [INFO] Creating .env from .env.example...
    copy .env.example .env >nul
    echo [SUCCESS] .env file created!
    echo.
)

echo ========================================
echo  Starting Unparalleled Scholar Server
echo ========================================
echo.
echo [INFO] Server will start on http://localhost:3000
echo [INFO] Press Ctrl+C to stop the server
echo.

REM Start the server
npm run dev
