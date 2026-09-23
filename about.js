// Grab stat counter nodes
const counters = document.querySelectorAll('.counter');
let countersTriggered = false;

// Function that counts values up smoothly
function runCounters() {
    counters.forEach(counter => {
        counter.textContent = '0';
        
        const updateCount = () => {
            const target = parseInt(counter.getAttribute('data-target'));
            const current = parseInt(counter.textContent);
            
            // Adjust speed factor based on size
            const increment = Math.ceil(target / 40);
            
            if (current < target) {
                counter.textContent = `${current + increment}`;
                // Appends '+' string dynamically for thousands scale
                if (target === 50 && (current + increment) >= target) {
                    counter.textContent = '50k+';
                }
                setTimeout(updateCount, 30);
            } else {
                counter.textContent = target === 50 ? '50k+' : `${target}`;
            }
        };
        
        updateCount();
    });
}

// Automatically triggers animation when the user scrolls down to the statistics box
window.addEventListener('scroll', () => {
    const statsSection = document.getElementById('statsSection');
    const sectionPosition = statsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition && !countersTriggered) {
        runCounters();
        countersTriggered = true; // Keeps animation from resetting repeatedly
    }
});
