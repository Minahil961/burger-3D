// Gather document DOM node references
const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');
const cartCountDisplay = document.getElementById('cartCount');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// Tracking variables
let totalCartItems = 0;

// 1. Menu Interactive Category Filter Engine
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle selected tab highlighted design state
        document.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');
        
        const targetedCategory = button.getAttribute('data-category');

        // Show or Hide cards based on matching parameters
        menuCards.forEach(card => {
            const cardCategory = card.getAttribute('data-item-category');
            if (targetedCategory === 'all' || cardCategory === targetedCategory) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// 2. Click Counter Accumulator system logic
addToCartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        totalCartItems += 1;
        cartCountDisplay.textContent = totalCartItems;

        // Micro-interaction button visual response
        btn.textContent = "Added! ✓";
        btn.style.backgroundColor = "#ff9f1c";
        btn.style.color = "#0b0b0d";

        setTimeout(() => {
            btn.textContent = "Add to Cart";
            btn.style.backgroundColor = "transparent";
            btn.style.color = "#ff9f1c";
        }, 1000);
    });
});
