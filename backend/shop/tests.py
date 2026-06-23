from django.contrib.auth import get_user_model
from django.test import TestCase
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient

from .models import Cart, Product


class ShopApiTests(TestCase):
    def setUp(self):
        self.product = Product.objects.create(
            slug="black-afgano",
            name="Black Afgano",
            price="135.00",
            description="Demo perfume",
            image="nasomatto_blackafgano_retina.1000x1600.shrink_only.q85.jpg",
            brand="Nasomatto",
            volume_ml=30,
        )
        self.user = get_user_model().objects.create_user(
            username="demo",
            email="demo@example.com",
            password="password123",
        )
        Cart.objects.create(user=self.user)
        self.token = Token.objects.create(user=self.user)
        self.client = APIClient()

    def authenticate(self):
        self.client.credentials(HTTP_AUTHORIZATION=f"Token {self.token.key}")

    def test_product_list(self):
        response = self.client.get("/api/products/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data[0]["slug"], "black-afgano")

    def test_add_cart_item_and_checkout(self):
        self.authenticate()
        cart_response = self.client.post(
            "/api/cart/items/",
            {"product_slug": "black-afgano", "quantity": 2},
            format="json",
        )
        self.assertEqual(cart_response.status_code, 201)
        self.assertEqual(cart_response.data["items"][0]["quantity"], 2)

        order_response = self.client.post(
            "/api/checkout/",
            {
                "customer_name": "Demo User",
                "customer_email": "demo@example.com",
                "customer_phone": "+420000000000",
                "delivery_address": "Prague, Demo street 1",
                "comment": "Demo order",
            },
            format="json",
        )
        self.assertEqual(order_response.status_code, 201)
        self.assertEqual(order_response.data["items"][0]["quantity"], 2)
        self.assertEqual(self.user.cart.items.count(), 0)
