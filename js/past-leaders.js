document.addEventListener('DOMContentLoaded', () => {
    // Decade navigation
    const decadeBtns = document.querySelectorAll('.decade-btn');
    const decadeSections = document.querySelectorAll('.decade-section');

    decadeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active classes
            decadeBtns.forEach(b => b.classList.remove('active'));
            decadeSections.forEach(section => section.classList.remove('active'));
            
            // Activate selected
            btn.classList.add('active');
            const decade = btn.dataset.decade;
            document.getElementById(decade).classList.add('active');
        });
    });

    // Leader card animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.past-leader-card').forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.4s ease-out';
        observer.observe(card);
    });
});
