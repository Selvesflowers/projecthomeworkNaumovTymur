@echo off
cd /d "%~dp0"
set "PYTHON_EXE=C:\Users\timur\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"

echo Starting frontend...
echo PC URL: http://127.0.0.1:8080/index.html
echo Phone URL: http://192.168.0.36:8080/index.html
echo.

"%PYTHON_EXE%" -m http.server 8080 --bind 0.0.0.0

pause
