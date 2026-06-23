from django.core.management.base import BaseCommand

from shop.models import Product


PRODUCTS = [
    {
        "slug": "black-afgano",
        "name": "Black Afgano",
        "price": "135.00",
        "image": "nasomatto_blackafgano_retina.1000x1600.shrink_only.q85.jpg",
        "description": "Vůně… blaženosti. Tato temná vůně evokuje účinky hašiše té nejlepší kvality. Je výsledkem honby za dosažením dočasného stavu blaženosti.",
    },
    {
        "slug": "fantomas",
        "name": "Fantomas",
        "price": "135.00",
        "image": "nasomatto-product-fantomas-cr_retina.1000x1600.shrink_only.q85.jpg",
        "description": "Vůně... prohřešku. Tento parfém je zdánlivou stopou k odhalení zločinu, jenž byl spáchán s lehkostí elegantní preciznosti.",
    },
    {
        "slug": "baraonda",
        "name": "Baraonda",
        "price": "135.00",
        "image": "nasomatto-product-baraonda-cr_retina.1000x1600.shrink_only.q85.jpg",
        "description": "Vůně… alkoholu. Baraonda v sobě mísí vůni a chuť skotské single malt, lucidního snění a reality.",
    },
    {
        "slug": "sadonaso",
        "name": "Sadonaso",
        "price": "135.00",
        "image": "nase-cr_retina.1000x1600.shrink_only.q85.jpg",
        "description": "Vůně... rozkoše. Parfém Sadonaso vznikl z přesvědčení, že jediným opravdovým smyslem života je tělesná rozkoš.",
    },
    {
        "slug": "nudiflorium",
        "name": "Nudiflorium",
        "price": "135.00",
        "image": "nasomatto-product-nudiflorum-cr_retina.1000x1600.shrink_only.q85.jpg",
        "description": "Vůně… intimity. Bezprostřední, primitivní, smyslná. Nudiflorum je interpretací pocitu, který vyvolává dotek.",
    },
    {
        "slug": "pardon",
        "name": "Pardon",
        "price": "135.00",
        "image": "nasomatto-pardon_retina.1000x1600.shrink_only.q85.jpg",
        "description": "Vůně… šarmu. Sebevědomá vůně, ze které vyzařuje největší možná dávka mužné elegance a šarmu.",
    },
    {
        "slug": "silver-musk",
        "name": "Silver Musk",
        "price": "135.00",
        "image": "nasomatto-silvermusk_retina.1000x1600.shrink_only.q85.jpg",
        "description": "Vůně… superhrdiny. Vůně, která evokuje magnetickou sílu superhrdiny.",
    },
    {
        "slug": "absinth",
        "name": "Absinth",
        "price": "135.00",
        "image": "nasomatto-absinth_retina.1000x1600.shrink_only.q85.jpg",
        "description": "Vůně… šílenství. Vůně, která dokáže vyvolat nezodpovědné chování i stav šílenství.",
    },
    {
        "slug": "blamage",
        "name": "Blamage",
        "price": "135.00",
        "image": "nasomatto-blamage_retina.1000x1600.shrink_only.q85.jpg",
        "description": "Vůně… omylu. Tato vůně je neuváženým a politováníhodným výtvorem.",
    },
    {
        "slug": "narcotic-v",
        "name": "Narcotic V.",
        "price": "135.00",
        "image": "nasomatto-narcoticv_retina.1000x1600.shrink_only.q85.jpg",
        "description": "Vůně… ženské smyslnosti. Tato hypnotická vůně je čistou esencí smyslnosti a ženskosti.",
    },
    {
        "slug": "duro",
        "name": "Duro",
        "price": "135.00",
        "image": "nasomatto-duro_retina.1000x1600.shrink_only.q85.jpg",
        "description": "Vůně… mužské potence. Cílem této vůně je umocnit všechny projevy mužské síly.",
    },
]


class Command(BaseCommand):
    help = "Load demo Nasomatto products into the database."

    def handle(self, *args, **options):
        created = 0
        updated = 0
        for product in PRODUCTS:
            _, was_created = Product.objects.update_or_create(
                slug=product["slug"],
                defaults={
                    **product,
                    "brand": "Nasomatto",
                    "volume_ml": 30,
                    "is_active": True,
                },
            )
            if was_created:
                created += 1
            else:
                updated += 1

        self.stdout.write(self.style.SUCCESS(f"Demo products loaded. Created: {created}, updated: {updated}"))
