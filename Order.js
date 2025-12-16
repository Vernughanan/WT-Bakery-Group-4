document.addEventListener('DOMContentLoaded', function() {
    
    // Select Basic Elements
    const qtyInputs = document.querySelectorAll('.qty');
    const totalPriceElement = document.getElementById('total-price');
    const orderButton = document.getElementById('place-order-btn');
    const errorMsg = document.getElementById('error-msg');

    // User Details Inputs
    const nameInput = document.getElementById('c-name');
    const phoneInput = document.getElementById('c-phone');
    const addressInput = document.getElementById('c-address');

    // Payment Elements
    const paymentRadios = document.querySelectorAll('input[name="payment"]');
    const cardDetailsBox = document.getElementById('card-details-box');
    
    // Card Inputs
    const cardNum = document.getElementById('card-num');
    const cardName = document.getElementById('card-name');
    const cardExpiry = document.getElementById('card-expiry');
    const cardCvv = document.getElementById('card-cvv');

    // 1. Calculate Total Bill
    function updateBill() {
        let total = 0;
        qtyInputs.forEach(input => {
            const qty = parseInt(input.value);
            const price = parseFloat(input.getAttribute('data-price'));
            if (qty > 0) total += qty * price;
        });
        totalPriceElement.innerText = 'Rs.' + total.toFixed(2);
    }

    qtyInputs.forEach(input => input.addEventListener('input', updateBill));

    // 2. Toggle Card Details Visibility
    paymentRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'card') {
                cardDetailsBox.classList.remove('hidden');
            } else {
                cardDetailsBox.classList.add('hidden');
            }
        });
    });

    // 3. Validate and Place Order
    orderButton.addEventListener('click', function() {
        // Reset Errors
        errorMsg.style.display = 'none';
        document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));

        // Get Data
        const totalText = totalPriceElement.innerText;
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const address = addressInput.value.trim();
        const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

        let hasError = false;

        // Validate Cart
        if (totalText === "Rs.0.00") {
            alert("Your cart is empty!");
            return;
        }

        // Validate Personal Info
        if (!name) { nameInput.classList.add('input-error'); hasError = true; }
        if (!phone) { phoneInput.classList.add('input-error'); hasError = true; }
        if (!address) { addressInput.classList.add('input-error'); hasError = true; }

        // Validate Card Details (ONLY if Card is selected)
        if (paymentMethod === 'card') {
            if (!cardNum.value.trim() || cardNum.value.length < 16) { 
                cardNum.classList.add('input-error'); hasError = true; 
            }
            if (!cardName.value.trim()) { 
                cardName.classList.add('input-error'); hasError = true; 
            }
            if (!cardExpiry.value.trim()) { 
                cardExpiry.classList.add('input-error'); hasError = true; 
            }
            if (!cardCvv.value.trim() || cardCvv.value.length < 3) { 
                cardCvv.classList.add('input-error'); hasError = true; 
            }
        }

        if (hasError) {
            errorMsg.style.display = 'block';
            errorMsg.innerText = "Please fill in all highlighted fields.";
            return;
        }

        // Success Message
        let successMsg = `Order Placed Successfully!\n\nName: ${name}\nTotal: ${totalText}\nMethod: ${paymentMethod === 'cod' ? 'Cash on Delivery' : 'Card Payment'}`;
        
        alert(successMsg);
        
        // Reload page to reset (optional)
        // location.reload();
    });

});