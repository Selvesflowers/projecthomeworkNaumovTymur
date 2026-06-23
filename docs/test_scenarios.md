# Test Scenarios

## Scenario 1: Product Catalog

1. Run backend.
2. Open `GET /api/products/`.
3. Expected result: response status `200`, product list is returned.

## Scenario 2: Product Search

1. Open `GET /api/products/?search=black`.
2. Expected result: response contains `Black Afgano`.

## Scenario 3: Register User

1. Send `POST /api/auth/register/` with username, email and password.
2. Expected result: response status `201`, token is returned.

## Scenario 4: Login User

1. Send `POST /api/auth/login/`.
2. Expected result: response status `200`, token is returned.

## Scenario 5: Add Product To Cart

1. Log in.
2. Send `POST /api/cart/items/` with `product_slug` and `quantity`.
3. Expected result: cart contains the selected product.

## Scenario 6: Update Cart Quantity

1. Log in.
2. Send `PATCH /api/cart/items/{id}/`.
3. Expected result: item quantity and cart total are updated.

## Scenario 7: Checkout

1. Log in.
2. Add product to cart.
3. Send `POST /api/checkout/` with contact and delivery data.
4. Expected result: order is created, order items are saved, cart is empty.

## Scenario 8: Logout

1. Log in.
2. Send `POST /api/auth/logout/`.
3. Expected result: token is deleted and protected endpoints require login again.
