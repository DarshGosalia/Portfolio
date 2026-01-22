@echo off
echo ========================================
echo Portfolio Site - Quick Start
echo ========================================
echo.

REM Add Node.js to PATH for this session
set "PATH=C:\Program Files\nodejs;%PATH%"

echo Step 1: Installing dependencies...
echo This may take a few minutes on first run...
echo.

call npm install

if %errorlevel% neq 0 (
    echo.
    echo ========================================
    echo ERROR: Installation failed!
    echo ========================================
    echo.
    echo Please try the following:
    echo 1. Close ALL terminal/PowerShell windows
    echo 2. Restart your computer
    echo 3. Double-click this file again
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Step 2: Starting development server...
echo ========================================
echo.
echo Your portfolio will be available at:
echo.
echo    http://localhost:5000
echo.
echo The browser should open automatically.
echo Press Ctrl+C in this window to stop the server.
echo ========================================
echo.

timeout /t 2 /nobreak > nul

REM Start the dev server
call npm run dev

pause
