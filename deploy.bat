@echo off
REM Deploy script for China Leasing Intelligence
REM Run this in Git Bash or PowerShell

echo Deploying to Vercel...
cd /d "%~dp0"

REM Install dependencies if needed
if not exist node_modules (
    echo Installing dependencies...
    call npm install
)

REM Deploy to Vercel (will prompt for login if needed)
call vercel --prod

echo.
echo Deployment complete!
pause
