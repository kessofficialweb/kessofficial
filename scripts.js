// scripts.js

// Mobile Navigation Toggle
const mobileMenu = () => {
    const nav = document.querySelector(’.nav-links’);
    nav.style.display = nav.style.display === ‘flex’ ? ‘none’ : ‘flex’;
}

// Smooth Scroll for Anchor Links
document.querySelectorAll(’a[href^=”#”]’).forEach(anchor => {
    anchor.addEventListener(’click’, function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute(’href’)).scrollIntoView({
            behavior: ‘smooth’
        });
    });
});

// Active Navigation Link Highlighting
const setActiveLink = () => {
    const currentPath = window.location.pathname.split(’/’).pop();
    document.querySelectorAll(’.nav-links a’).forEach(link => {
        if (link.getAttribute(’href’) === currentPath) {
            link.classList.add(’active’);
        }
    });
}

// Form Handling
const handleFormSubmit = (formId) => {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener(’submit’, (e) => {
            e.preventDefault();
            // Replace with actual form handling logic
            alert(’Thank you for your message! We will respond shortly.’);
            form.reset();
        });
    }
}

// Card Hover Effects
const initCardInteractions = () => {


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
