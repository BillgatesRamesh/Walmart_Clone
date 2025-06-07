import {products} from "./product.js";

const productGrid = document.querySelector(".product-grid");

let html = "";
products.forEach(product => {
    html += `<div class="product-container">
                <div class="img-container">
                    <img class="product-img" 
                        src="${product.image}">
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m480-146.93-44.15-39.69q-99.46-90.23-164.5-155.07-65.04-64.85-103.08-115.43-38.04-50.57-53.15-92.27Q100-591.08 100-634q0-85.15 57.42-142.58Q214.85-834 300-834q52.38 0 99 24.5t81 70.27q34.38-45.77 81-70.27 46.62-24.5 99-24.5 85.15 0 142.58 57.42Q860-719.15 860-634q0 42.92-15.12 84.61-15.11 41.7-53.15 92.27-38.04 50.58-102.89 115.43Q624-276.85 524.15-186.62L480-146.93Zm0-81.07q96-86.38 158-148.08 62-61.69 98-107.19t50-80.81q14-35.3 14-69.92 0-60-40-100t-100-40q-47.38 0-87.58 26.88-40.19 26.89-63.65 74.81h-57.54q-23.85-48.31-63.85-75Q347.38-774 300-774q-59.62 0-99.81 40Q160-694 160-634q0 34.62 14 69.92 14 35.31 50 80.81t98 107q62 61.5 158 148.27Zm0-273Z"/></svg>
    
                <button class="add-btn">+Add</button>
    
                <div class="price-container">
                    $ ${product.priceCents/100}
                </div>
    
                <div class="product-name limit-text-to-3">
                    ${product.name}
                </div>
    
                <div class="rating-container">
                    <div class="product-rating-stars">
                        <img src="Images/All Product/Rating/rating ${product.rating.stars}.png" width="80px">
                    </div>
                    <div class="product-rating-count">
                        ${product.rating.count}
                    </div>
                </div>
    
                <div class="subscription-icon">
                    save with <img src="Images/All Product/W+.png" width="40px">
                </div>
    
                <div class="time-period">
                    <p>Pickup <span>tomorrow</span></p>
                    <p>Delivery <span>today</span></p>
                    <p>Shipping <span>in 2 days</span></p>
                </div>
            </div>`;
});

productGrid.innerHTML = html;

const cartQuantity = document.getElementById("cart-quantity");
const cartPrice = document.getElementById("cart-price");

function addToCart(){
    cartQuantity.textContent = Number(cartQuantity.textContent) + 1;

    const button = event.target;
    const productContainer = button.closest('.product-container');
    const priceContainer = productContainer.querySelector(".price-container").textContent.trim();
    const productPrice = parseFloat(priceContainer.replace('$', ''));
    const currentTotal = parseFloat(cartPrice.textContent.replace('$', ''));
    const newTotal = currentTotal + productPrice;
    
    cartPrice.textContent = `$${newTotal.toFixed(2)}`
}

document.querySelectorAll(".add-btn").forEach(button =>{
    button.addEventListener("click", addToCart)
})