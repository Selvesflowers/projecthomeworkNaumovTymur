# API Specification

Base URL: `http://127.0.0.1:8000/api`

Authentication header:

```http
Authorization: Token <token>
```

## Auth

### Register

`POST /auth/register/`

Request:

```json
{
  "username": "demo",
  "email": "demo@example.com",
  "password": "password123",
  "password_confirm": "password123"
}
```

Response `201`:

```json
{
  "token": "token-value",
  "user": {
    "id": 1,
    "username": "demo",
    "email": "demo@example.com",
    "first_name": "",
    "last_name": ""
  }
}
```

### Login

`POST /auth/login/`

Request:

```json
{
  "username": "demo",
  "password": "password123"
}
```

Response `200`: same structure as register.

### Logout

`POST /auth/logout/`

Requires authentication.

Response `204`.

### Current User

`GET /auth/me/`

Requires authentication.

Response `200`:

```json
{
  "id": 1,
  "username": "demo",
  "email": "demo@example.com",
  "first_name": "",
  "last_name": ""
}
```

## Products

### Product List

`GET /products/`

Optional search:

`GET /products/?search=black`

Response `200`:

```json
[
  {
    "id": 1,
    "slug": "black-afgano",
    "name": "Black Afgano",
    "price": "135.00",
    "description": "Vůně...",
    "image": "nasomatto_blackafgano_retina.1000x1600.shrink_only.q85.jpg",
    "brand": "Nasomatto",
    "volume_ml": 30,
    "is_active": true
  }
]
```

### Product Detail

`GET /products/{slug}/`

Example:

`GET /products/black-afgano/`

## Cart

### Get Cart

`GET /cart/`

Requires authentication.

### Add Item

`POST /cart/items/`

Requires authentication.

Request:

```json
{
  "product_slug": "black-afgano",
  "quantity": 1
}
```

Response `201`: full cart object.

### Update Item

`PATCH /cart/items/{id}/`

Request:

```json
{
  "quantity": 2
}
```

### Remove Item

`DELETE /cart/items/{id}/`

Response `200`: updated cart object.

## Orders

### Checkout

`POST /checkout/`

Requires authentication.

Request:

```json
{
  "customer_name": "Demo User",
  "customer_email": "demo@example.com",
  "customer_phone": "+420000000000",
  "delivery_address": "Prague, Demo street 1",
  "comment": "Demo order"
}
```

Response `201`: created order with order items.

### Order List

`GET /orders/`

Requires authentication.

### Order Detail

`GET /orders/{id}/`

Requires authentication.
