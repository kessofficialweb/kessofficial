javascript
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
