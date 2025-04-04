// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenu = () => {
        const nav = document.querySelector('.nav-links');
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    }

    // Initialize Mobile Menu Button
    const menuButton = document.createElement('button');
    menuButton.innerHTML = '☰';
    menuButton.className = 'mobile-menu-btn';
    menuButton.onclick = mobileMenu;
    document.querySelector('.nav').appendChild(menuButton);

    // Project Filtering
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            document.querySelectorAll('.project-card').forEach(card => {
                card.style.display = (filter === 'all' || card.dataset.category === filter) 
                    ? 'block' 
                    : 'none';
            });
        });
    });
    // Mobile Menu Functionality
const mobileMenu = () => {
    const navLinks = document.querySelector(’.nav-links’);
    const menuBtn = document.querySelector(’.mobile-menu-btn’);
    
    navLinks.classList.toggle(’active’);
    menuBtn.classList.toggle(’active’);
}

// Initialize Mobile Menu Button
document.querySelector(’.mobile-menu-btn’).addEventListener(’click’, mobileMenu);

// Close menu when clicking outside
document.addEventListener(’click’, (e) => {
    const navLinks = document.querySelector(’.nav-links’);
    const menuBtn = document.querySelector(’.mobile-menu-btn’);
    
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove(’active’);
        menuBtn.classList.remove(’active’);
    }
});

// Close menu on navigation
document.querySelectorAll(’.nav-links a’).forEach(link => {
    link.addEventListener(’click’, () => {
        document.querySelector(’.nav-links’).classList.remove(’active’);
        document.querySelector(’.mobile-menu-btn’).classList.remove(’active’);
    });
});


    // Form Handling
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const successMsg = form.querySelector('.form-success');
            if (successMsg) {
                successMsg.style.display = 'block';
                form.reset();
                setTimeout(() => successMsg.style.display = 'none', 3000);
            }
        });
    });

    // FAQ Toggle
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
    
// Footer link interactions
document.querySelectorAll('.footer-column a').forEach(link => {
    link.addEventListener('click', (e) => {
        // Add smooth page transitions
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location = link.href;
        }, 300);
    });
    
    // Add active state for current page
    if (link.href === window.location.href) {
        link.classList.add('active');
        link.style.color = 'white';
    }
});
    // Back to Top Button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 500 ? 'block' : 'none';
    });
});
// Dropdown Functionality
document.querySelectorAll('.dropbtn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Mobile behavior
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = this.parentElement;
            dropdown.classList.toggle('active');
            
            // Close other dropdowns
            document.querySelectorAll('.dropdown').forEach(other => {
                if (other !== dropdown) other.classList.remove('active');
            });
        }
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Update dropdown arrow on mobile
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});
document.addEventListener(’DOMContentLoaded’, () => {
    const hamburger = document.querySelector(’.hamburger’);
    const mobileMenu = document.querySelector(’.mobile-menu’);

    // Toggle Mobile Menu
    hamburger.addEventListener(’click’, () => {
        hamburger.classList.toggle(’active’);
        mobileMenu.classList.toggle(’active’);
    });

    // Close menu when clicking outside
    document.addEventListener(’click’, (e) => {
        if (!e.target.closest(’.navbar’) && !e.target.closest(’.mobile-menu’)) {
            hamburger.classList.remove(’active            mobileMenu.classList.remove(’active’);
        }
    });

    // Close menu on link click
    document.querySelectorAll(’.mobile-menu a’).forEach(link => {
        link.addEventListener(’click’, () => {
            hamburger.classList.remove(’active’);
            mobileMenu.classList.remove(’active’);
        });
    });
});

// Add to scripts.js
document.querySelectorAll('.comment-card.compact').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.closest('.faq-item');
        faqItem.classList.toggle('active');
        
        // Close other FAQs
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) item.classList.remove('active');
        });
    });
});

// Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const successMessage = document.getElementById('successMessage');
    
    successMessage.style.display = 'block';
    this.reset();
    
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
});
// Highlight active tab
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop();
    
    document.querySelectorAll('.tab').forEach(tab => {
        const tabPath = tab.getAttribute('href').split('/').pop();
        if (currentPath === tabPath) {
            tab.classList.add('active');
        }
    });

    // Mobile tabs scroll behavior
    const activeTab = document.querySelector('.tab.active');
    if (activeTab && window.innerWidth <= 768) {
        activeTab.scrollIntoView({
            behavior: 'auto',
            block: 'nearest',
            inline: 'center'
        });
    }
});
