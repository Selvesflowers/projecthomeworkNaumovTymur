@echo off
cd /d "%~dp0"
set "PYTHON_EXE=C:\Users\timur\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
set "PYTHONPATH=%~dp0backend\.venv\Lib\site-packages"

echo Starting backend...
echo Backend URL: http://127.0.0.1:8000/api/products/
echo.

"%PYTHON_EXE%" backend\manage.py migrate
"%PYTHON_EXE%" backend\manage.py seed_demo
"%PYTHON_EXE%" backend\manage.py runserver 0.0.0.0:8000 --noreload

pause
