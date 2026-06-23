# Ingredients Store Backend

Django REST API for the frontend perfume shop. The project uses SQLite for a simple local demo.

## Setup

1. Create virtual environment and install dependencies:

```bash
cd backend
python -m venv .venv
.venv\Scripts\python.exe -m pip install -r requirements.txt
```

2. Create `.env` from `.env.example`. It already contains:

```env
DB_ENGINE=sqlite
```

3. Run migrations and demo seed:

```bash
copy .env.example .env
.venv\Scripts\python.exe manage.py migrate
.venv\Scripts\python.exe manage.py seed_demo
.venv\Scripts\python.exe manage.py createsuperuser
.venv\Scripts\python.exe manage.py runserver
```

API base URL: `http://127.0.0.1:8000/api`

The existing frontend stores the auth token in `localStorage` and sends it as `Authorization: Token <token>`.
