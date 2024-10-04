class Product {
    constructor(id, name, price,image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

class CartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new CartItem(product, quantity));
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

}
