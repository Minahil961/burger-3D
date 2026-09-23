// DOM Element Nodes
const burgerSelect = document.getElementById('burgerSelect');
const quantityInput = document.getElementById('quantity');
const summaryItemName = document.getElementById('summaryItemName');
const summaryItemPrice = document.getElementById('summaryItemPrice');
const summaryTotal = document.getElementById('summaryTotal');
const checkoutForm = document.getElementById('checkoutForm');
const successModal = document.getElementById('successModal');

// Fixed Delivery cost configuration
const DELIVERY_FEE = 3.00;

// Dynamic Price Calculator Function
function updateSummary() {
    // Get currently selected option element state values
    const selectedOption = burgerSelect.options[burgerSelect.selectedIndex];
    const itemPrice = parseFloat(selectedOption.value);
    const itemName = selectedOption.getAttribute('data-name');
    const quantity = parseInt(quantityInput.value) || 1;

    // Run math logic rules
    const subtotal = itemPrice * quantity;
    const finalTotal = subtotal + DELIVERY_FEE;

    // Mutate state view UI changes text elements
    summaryItemName.textContent = `${itemName} (x${quantity})`;
    summaryItemPrice.textContent = `Rs  ${subtotal.toFixed(2)}`;
    summaryTotal.textContent = `Rs ${finalTotal.toFixed(2)}`;
}

// Attach live updates to form interactions
burgerSelect.addEventListener('change', updateSummary);
quantityInput.addEventListener('input', updateSummary);

// Form submission handler
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents default page reloading action
    
    // Display our modal success card window container
    successModal.classList.add('show');
});
