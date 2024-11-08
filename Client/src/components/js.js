let cart = [];
let productCounts = [0, 0, 0, 0]; // Initialize counters for each product
let totalAmount = 0;

// Add to Cart function with detailed item information
function addToCart(id) {
    const productElement = document.querySelector(`.box[data-id="${id}"]`);
    const title = productElement.getAttribute("data-title");
    const price = parseInt(productElement.getAttribute("data-price"));
    const image = productElement.getAttribute("data-image");

    // Update product count
    productCounts[id]++;
    document.getElementById(`count-${id}`).innerText = productCounts[id];
    
    // Push item to cart array and update the display
    cart.push({ title, price, image });
    displayCart();
    updateCartTotal();
}

// Delete item from cart
function delElement(index) {
    cart.splice(index, 1);
    displayCart();
    updateCartTotal();
}

// Display cart items and update the DOM
function displayCart() {
    if (cart.length === 0) {
        document.getElementById("cartItem").innerHTML = "Your cart is empty";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((item, index) => {
            const { image, title, price } = item;
            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src='${image}' alt='${title}' />
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>₹ ${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>
            `;
        }).join('');
    }
}

// Update the cart total and display it
function updateCartTotal() {
    totalAmount = productCounts.reduce((total, count, index) => total + count * [120, 60, 230, 100][index], 0);
    document.getElementById("total").innerText = `₹ ${totalAmount}.00`;
    document.getElementById("count").innerText = cart.length;
    
    // Show or hide the Pay button based on total amount
    document.getElementById("payButton").style.display = totalAmount > 0 ? 'block' : 'none';
}

// Increment product count
function incrementCount(id) {
    productCounts[id]++;
    document.getElementById(`count-${id}`).innerText = productCounts[id];
    updateCartTotal();
}

// Decrement product count
function decrementCount(id) {
    if (productCounts[id] > 0) {
        productCounts[id]--;
        document.getElementById(`count-${id}`).innerText = productCounts[id];
        updateCartTotal();
    }
}

// Open the QR page for payment
function openQRPage() {
    window.open('QR.html', '_blank');
}
