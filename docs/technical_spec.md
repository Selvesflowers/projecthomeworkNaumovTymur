# Technical Specification

## Project

Ingredients Store is a demo perfume shop. The existing frontend is static HTML/CSS/JavaScript. The backend is a Django REST API with SQLite database.

## Goals

- Store products in a database.
- Support user registration, login and logout.
- Support a personal cart for each authenticated user.
- Allow checkout without real payment.
- Save orders and order items in the database.
- Provide API documentation and ER model.

## Functional Requirements

### Products

- User can view product list.
- User can search products by name, brand or description.
- User can view one product by slug.
- Administrator can add, edit and disable products through Django admin.

### Users

- User can register with username, email and password.
- User can log in and receive an API token.
- User can log out and invalidate the token.
- User can request current profile data.

### Cart

- Authenticated user has one cart.
- User can add product to cart.
- User can update item quantity.
- User can remove item from cart.
- API calculates cart total.

### Orders

- User can create an order from cart.
- Order stores customer contacts, delivery address, comment and total.
- Order stores copied product name, price and quantity in order items.
- After checkout the cart is cleared.

## Non-Functional Requirements

- Backend framework: Django + Django REST Framework.
- Database: SQLite.
- Auth: DRF Token Authentication.
- API response format: JSON.
- Frontend communication: `fetch` requests to `http://127.0.0.1:8000/api`.

## Business Process

1. Admin loads or creates products.
2. User registers or logs in.
3. User opens product page and adds product to cart.
4. User checks cart and changes quantities if needed.
5. User fills checkout form.
6. Backend creates order and order items, then clears the cart.

## Main Files

- `backend/config/settings.py` - Django settings and PostgreSQL connection.
- `backend/shop/models.py` - database models.
- `backend/shop/serializers.py` - API data validation and transformation.
- `backend/shop/views.py` - API business logic.
- `backend/shop/urls.py` - API routes.
- `backend/shop/management/commands/seed_demo.py` - demo product loader.
