const productController = new ProductController();
const cart = new Cart();
const cartController = new CartController(cart);

document.addEventListener('DOMContentLoaded', () => {
    productController.loadProducts().then(() => {
        displayProducts();
        updateCart();
    });
});

function displayProducts() {
    const productSection = document.getElementById('products');
    productSection.innerHTML = '';

    productController.getProducts().forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="300" height="200">
            <h3>${product.name}</h3>
            <p>Price: ${product.price} Ft</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productSection.appendChild(productDiv);
    });
}

function addToCart(productId) {
    cartController.addProductToCart(productId, 1);
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalDiv = document.getElementById('total');

    cartItemsDiv.innerHTML = '';
    cartController.getCartItems().forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.innerHTML = `${item.product.name} x ${item.quantity} - ${item.getTotalPrice()} Ft`;
        cartItemsDiv.appendChild(cartItemDiv);
    });

    totalDiv.innerHTML = `Total: ${cartController.getCartTotal()} Ft`;
}
