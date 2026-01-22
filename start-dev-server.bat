@echo off
REM Set the Node.js path
set "PATH=C:\Program Files\nodejs;%PATH%"

echo ========================================
echo Starting Portfolio Site Dev Server...
echo ========================================
echo.
echo Your site will be available at:
echo http://localhost:5000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

npm run dev

pause
