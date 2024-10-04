class ProductController {
    constructor() {
        this.products = [];
    }

    loadProducts() {
        return fetch('products.json')
            .then(response => response.json())
            .then(data => {
                this.products = data.map(p => new Product(p.id, p.name, p.price, p.image));
            });
    }

    getProducts() {
        return this.products;
    }
}

class CartController {
    constructor(cart) {
        this.cart = cart;
    }

    addProductToCart(productId, quantity) {
        const product = productController.getProducts().find(p => p.id === productId);
        if (product) {
            this.cart.addItem(product, quantity);
        }
    }

    getCartItems() {
        return this.cart.items;
    }

    getCartTotal() {
        return this.cart.getTotal();
    }
}
