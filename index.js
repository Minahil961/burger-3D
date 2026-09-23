// Grab DOM elements
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const container = document.getElementById('burgerContainer');
const burger3D = document.getElementById('burger3D');

// 1. Mobile Menu Toggling Action logic
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('menu-open');
});

document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('menu-open');
    }
});

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const rotateX = ((y / rect.height) - 0.5) * -50; 
    const rotateY = ((x / rect.width) - 0.5) * 50;
    
    burger3D.style.transform = `rotateX(${20 + rotateX}deg) rotateY(${-20 + rotateY}deg)`;
});

container.addEventListener('mouseleave', () => {
    burger3D.style.transform = `rotateX(20deg) rotateY(-20deg)`;
});
