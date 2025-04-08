document.addEventListener('DOMContentLoaded', () => {
    // Organizational chart expansion
    document.querySelectorAll('.node-details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const target = this.dataset.target;
            const children = this.closest('.chart-node').querySelector('.node-children');
            
            this.classList.toggle('active');
            children.style.display = children.style.display === 'block' ? 'none' : 'block';
            
            this.querySelector('i').classList.toggle('fa-chevron-up');
            this.querySelector('i').classList.toggle('fa-chevron-down');
        });
    });

    // Timeline animations
    const timelineEvents = document.querySelectorAll('.timeline-event');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    timelineEvents.forEach(event => {
        event.style.opacity = 0;
        event.style.transform = 'translateX(-20px)';
        event.style.transition = 'all 0.4s ease-out';
        observer.observe(event);
    });
});
