let cart = [];


/* GO TO PRODUCTS */

function goToProducts() {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

}


/* ADD TO CART */

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " has been added to your cart!");

}


/* UPDATE CART */

function updateCart() {

    document.getElementById("cart-count").innerText = cart.length;

}


/* SHOW CART */

function showCart() {

    document.getElementById("cart-modal").style.display = "block";

    displayCart();

}


/* CLOSE CART */

function closeCart() {

    document.getElementById("cart-modal").style.display = "none";

}


/* DISPLAY CART */

function displayCart() {

    let cartItems = document.getElementById("cart-items");

    let total = 0;


    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

        document.getElementById("total").innerText = "0";

        return;

    }


    let output = "";


    for (let i = 0; i < cart.length; i++) {

        output += `
        <div class="cart-item">

            <div>

                <strong>${cart[i].name}</strong>

                <br>

                ₦${cart[i].price.toLocaleString()}

            </div>

            <button onclick="removeItem(${i})">

                Remove

            </button>

        </div>
        `;

        total += cart[i].price;

    }


    cartItems.innerHTML = output;

    document.getElementById("total").innerText =
        total.toLocaleString();

}


/* REMOVE ITEM */

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

    displayCart();

}


/* WHATSAPP CONTACT */

function contactWhatsApp() {

    // CHANGE THIS TO YOUR REAL WHATSAPP NUMBER

    let phoneNumber = "2348062404339";


    let message = "Hello Mayor B Enterprise! I want to make an enquiry.";


    let url =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);


    window.open(url, "_blank");

}


/* CHECKOUT */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }


    let phoneNumber = "2348062404339";


    let message =
        "Hello Mayor B Enterprise!%0A%0A";

    message += "I want to order:%0A%0A";


    let total = 0;


    for (let i = 0; i < cart.length; i++) {

        message +=
            cart[i].name +
            " - ₦" +
            cart[i].price.toLocaleString() +
            "%0A";

        total += cart[i].price;

    }


    message +=
        "%0ATotal Amount: ₦" +
        total.toLocaleString();


    let url =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);


    window.open(url, "_blank");

}
