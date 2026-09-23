// Dom Element query references
const contactForm = document.getElementById('contactForm');
const formToast = document.getElementById('formToast');

// Form intercept event listener
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Terminates traditional page reloading loops
    
    // Slide up our interactive feedback banner window
    formToast.classList.add('reveal');
    
    // Clear out input fields for subsequent feedback
    contactForm.reset();

    // Slide banner window back down offscreen automatically after 4 seconds
    setTimeout(() => {
        formToast.classList.remove('reveal');
    }, 4000);
});
