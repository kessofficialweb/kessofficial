// scripts.js (continued)

// Initialize all functionality
document.addEventListener(’DOMContentLoaded’, () => {
    // Mobile menu button (add this HTML to your navigation)
    const menuButton = document.createElement(’button’);
    menuButton.innerHTML = ‘☰’;
    menuButton.className = ‘mobile-menu-btn’;
    menuButton.onclick = mobileMenu;
    document.querySelector(’.nav’).appendChild(menuButton);

    // Initialize modules
    setActiveLink();
    handleFormSubmit(’contact-form’);
    initCardInteractions();
    initScrollAnimations();
});

// Scroll Animations
const initScrollAnimations = () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(’visible’);
            }
        });
    }, observerOptions);

    document.querySelectorAll(’.card, .hero’).forEach(el => observer.observe(el));
}

// Back to Top Button
const backToTop = () => {
    const btn = document.createElement(’button’);
    btn.innerHTML = ‘↑’;
    btn.className = ‘back-to-top’;
    btn.onclick = () => window.scrollTo({ top: 0, behavior: ‘smooth’ });
    document.body.appendChild(btn);

    window.addEventListener(’scroll’, () => {
        btn.style.display = window.scrollY > 500 ? ‘block’ : ‘none’;
    });
}

// Initialize all components
const init = () => {
    backToTop();
    // Add other initializations here
}

// Start the application
init();
