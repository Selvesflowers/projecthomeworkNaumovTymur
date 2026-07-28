@echo off
set "PROJECT_DIR=%~dp0"
set "PC_IP=192.168.0.36"

echo Starting Ingredients Store...
echo.
echo Backend:
echo   http://%PC_IP%:8000/api/products/
echo.
echo Frontend:
echo   http://%PC_IP%:5500/index.html
echo.
echo If Windows Firewall asks for access, click Allow access.
echo.

start "Ingredients backend" cmd /k ""%PROJECT_DIR%backend\.venv\Scripts\python.exe" "%PROJECT_DIR%backend\manage.py" runserver 0.0.0.0:8000"
start "Ingredients frontend" cmd /k ""%PROJECT_DIR%backend\.venv\Scripts\python.exe" -m http.server 5500 --bind 0.0.0.0 --directory "%PROJECT_DIR%""

pause
