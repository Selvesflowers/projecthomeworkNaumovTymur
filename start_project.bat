@echo off
set "PROJECT_DIR=%~dp0"
set "PC_IP=192.168.0.36"

echo Starting Ingredients Store...
echo.
echo Backend:
echo   http://%PC_IP%:8000/api/products/
echo.
echo Frontend:
echo   http://%PC_IP%:8080/index.html
echo.
echo If Windows Firewall asks for access, click Allow access.
echo.

start "Ingredients backend" "%PROJECT_DIR%start_backend.bat"
start "Ingredients frontend" "%PROJECT_DIR%start_frontend.bat"

pause
