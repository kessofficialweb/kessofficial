// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const currentPath = window.location.pathname.split('/').pop();

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Set active tab
    document.querySelectorAll('.tab').forEach(tab => {
        const tabPath = tab.getAttribute('href').split('/').pop();
        if (currentPath === tabPath) {
            tab.classList.add('active');
        }
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navbar.classList.remove('active');
        }
    });

    // Mobile tab scrolling
    if (window.innerWidth <= 768) {
        const activeTab = document.querySelector('.tab.active');
        if (activeTab) {
            activeTab.scrollIntoView({
                behavior: 'auto',
                block: 'nearest',
                inline: 'center'
            });
        }
    }

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
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    backToTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 500 ? 'block' : 'none';
    });

    // Dropdown Functionality
    document.querySelectorAll('.dropbtn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.parentElement;
                dropdown.classList.toggle('active');
                
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
});
// Hamburger Functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links'); // Update selector to match your menu
    
    // Toggle Menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close Menu on Outside Click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header') && !e.target.closest('.nav-links')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Close Menu on Link Click (Mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Handling
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Formspree AJAX submission
    const formData = new FormData(this);
    
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('formSuccess').style.display = 'block';
            this.reset();
            setTimeout(() => {
                document.getElementById('formSuccess').style.display = 'none';
            }, 5000);
        }
    }).catch(error => {
        console.error('Error:', error);
    });
});

// Real-time Validation
document.querySelectorAll('input, select').forEach(element => {
    element.addEventListener('input', () => {
        if (element.checkValidity()) {
            element.classList.remove('invalid');
        } else {
            element.classList.add('invalid');
        }
    });
});
// Add smooth page transition
document.querySelectorAll('.btn-projects').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.href;
        
        // Add transition effect
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = target;
        }, 300);
    });
});
// Gallery Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    
    // Get all gallery images
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = img.parentElement.querySelector('figcaption').innerHTML;
        });
    });

    // Close modal
    document.querySelector('.modal-close').addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Close when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
// PDF Viewer Enhancement
document.addEventListener('DOMContentLoaded', () => {
    const pdfViewer = document.querySelector('.pdf-viewer object');
    
    // Add PDF navigation controls
    const addPdfControls = () => {
        const controls = document.createElement('div');
        controls.className = 'pdf-nav-controls';
        controls.innerHTML = `
            <button class="btn btn-pdf" onclick="zoomIn()">Zoom In</button>
            <button class="btn btn-pdf" onclick="zoomOut()">Zoom Out</button>
            <button class="btn btn-pdf" onclick="toggleFullscreen()">Fullscreen</button>
        `;
        document.querySelector('.pdf-controls').appendChild(controls);
    };

    // Zoom functions
    window.zoomIn = () => {
        const currentZoom = parseFloat(pdfViewer.style.zoom) || 1;
        pdfViewer.style.zoom = Math.min(currentZoom + 0.1, 2);
    };

    window.zoomOut = () => {
        const currentZoom = parseFloat(pdfViewer.style.zoom) || 1;
        pdfViewer.style.zoom = Math.max(currentZoom - 0.1, 0.5);
    };

    window.toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            pdfViewer.requestFullscreen().catch(err => {
                alert(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    };

    // Initialize controls
    addPdfControls();
});
// Blog Interactions
document.addEventListener('DOMContentLoaded', () => {
    // Read More functionality
    document.querySelectorAll('.btn-read-more').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const post = this.closest('.blog-post');
            const excerpt = post.querySelector('.post-excerpt');
            const fullText = post.dataset.fullText || excerpt.innerHTML;
            
            if (!post.dataset.expanded) {
                // Replace with full content
                post.dataset.fullText = excerpt.innerHTML;
                excerpt.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit... [Full article content]`;
                this.textContent = 'Show Less';
                post.dataset.expanded = true;
            } else {
                // Restore excerpt
                excerpt.innerHTML = fullText;
                this.textContent = 'Read More';
                delete post.dataset.expanded;
            }
        });
    });

    // Pagination
    document.querySelectorAll('.btn-pagination').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.btn-pagination.active').classList.remove('active');
            this.classList.add('active');
        });
    });
});
// Internship Filtering
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const internshipCards = document.querySelectorAll('.internship-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            
            // Filter internships
            internshipCards.forEach(card => {
                if (filter === 'all' || card.dataset.discipline === filter) {
                    card.style.display = 'grid';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Smooth scroll for external links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Add this to your scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleView');
    const eventsList = document.querySelector('.events-list'); // Your list view container
    const calendarView = document.querySelector('.calendar-view'); // Add calendar container to HTML

    // Initial state
    let isCalendarView = false;
    
    // Calendar initialization function
    function initCalendar() {
        // Initialize your calendar here (using FullCalendar or other library)
        console.log('Calendar initialized');
    }

    // Toggle functionality
    toggleButton.addEventListener('click', () => {
        isCalendarView = !isCalendarView;
        
        if(isCalendarView) {
            eventsList.style.display = 'none';
            calendarView.style.display = 'block';
            toggleButton.textContent = 'Switch to List View';
            
            // Initialize calendar on first click
            if(!calendarView.innerHTML) {
                initCalendar();
            }
        } else {
            eventsList.style.display = 'block';
            calendarView.style.display = 'none';
            toggleButton.textContent = 'Switch to Calendar View';
        }
    });
});
function initCalendar() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: '/api/events', // Your events endpoint
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }
    });
    calendar.render();
}
// Accordion functionality
document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const content = button.nextElementSibling;
        
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
// Initialize timeline animations
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    timelineItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.4s ease-out';
        observer.observe(item);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const leaderCards = document.querySelectorAll('.leader-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            leaderCards.forEach(card => {
                if(filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'grid';
                } else {
                    card.style.display = 'none';
                }
            });
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

    leaderCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.4s ease-out';
        observer.observe(card);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const leaderCards = document.querySelectorAll('.leader-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            leaderCards.forEach(card => {
                if(filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'grid';
                } else {
                    card.style.display = 'none';
                }
            });
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

    leaderCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.4s ease-out';
        observer.observe(card);
    });
});
/*
// Update initialization in your script
emailjs.init('sVMQfQPoQiX4S6UFK', {
    publicKey: 'sVMQfQPoQiX4S6UFK', // New EmailJS requirement
    blockHeadless: true,
    limitRate: {
        throttle: 3000, // 3 seconds
    }
});
document.getElementById('membershipForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = this;
    const formData = new FormData(form);
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const submitText = submitBtn.querySelector('.submit-text');
    const spinner = submitBtn.querySelector('.spinner');
    const formMessage = document.getElementById('formMessage');
    
    // Show loading state
    submitText.textContent = 'Submitting...';
    spinner.classList.remove('hidden');
    submitBtn.disabled = true;
    
    // Prepare email parameters
    const templateParams = {
        fullName: this.fullName.value,
        email: this.email.value,
        department: this.department.value,
        year: this.year.value,
        message: this.message.value
    };
    
    // Send email
    emailjs.sendForm('service_8a8tkh2', 'template_ppn4tco', form)        
        .then(() => {
            formMessage.textContent = 'Registration successful! We will contact you shortly.';
            formMessage.classList.add('success');
            this.reset();
        })
        .catch((error) => {
            formMessage.textContent = 'Error submitting form. Please try again or contact us directly.';
            formMessage.classList.add('error');
            console.error('Form submission error:', error);
        })
        .finally(() => {
            submitText.textContent = 'Submit Registration';
            spinner.classList.add('hidden');
            submitBtn.disabled = false;
            formMessage.classList.remove('hidden');
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        });
});

emailjs.sendForm('service_8a8tkh2', 'template_ppn4tco', '#myForm').then(
  function (response) {
    console.log('SUCCESS!', response.status, response.text);
  },
  function (err) {
    console.log('FAILED...', err);
  },
);


//-----------------------------------------------------------------------------
// First, initialize EmailJS (place this at the top of your script)
emailjs.init("sVMQfQPoQiX4S6UFK"); // Replace with your actual public key

// Then modify your form submission code like this
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading state if you have one
    const submitBtn = this.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
    }

    // Prepare template parameters
    const templateParams = {
        to_name: this.fullName.value,
        from_name: this.email.value,
        department: this.department.value,
        year: this.year.value,
        message: this.message.value
    };

    // Send email using EmailJS
    emailjs.sendForm('service_8a8tkh2', 'template_ppn4tco', templateParams)//added 'form'
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            // Show success message
            document.getElementById('formSuccess').style.display = 'block';
            e.target.reset();
        }, function(error) {
            console.log('FAILED...', error);
            // Show error message
            alert('Failed to send message. Please try again.');
        })
        .finally(() => {
            // Reset button state
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Registration';
            }
        });
});

*/
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('membershipForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get the button and its elements
            const submitBtn = form.querySelector('button[type="submit"]');
            const submitText = submitBtn.querySelector('.submit-text');
            const formMessage = document.getElementById('formMessage');
            
            // Disable button
            submitBtn.disabled = true;
            submitText.textContent = 'Sending...';
            
            // Prepare template parameters to match your template variables
            const templateParams = {
                name: form.fullName.value,
                fullName: form.fullName.value,
                email: form.email.value,
                department: form.program.value, // Using program field as department
                year: form.year.value,
                message: `
                    Student ID: ${form.studentId.value}
                    Phone: ${form.phone.value}
                    Address: ${form.address.value}
                    Gender: ${form.gender.value}
                    Date of Birth: ${form.dob.value}
                `,
                time: new Date().toLocaleString()
            };

            // Send email
            emailjs.send('service_8a8tkh2', 'template_ppn4tco', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    formMessage.textContent = 'Registration successful! We will contact you shortly.';
                    formMessage.classList.remove('hidden');
                    formMessage.classList.add('success');
                    form.reset();
                })
                .catch(function(error) {
                    console.log('FAILED...', error);
                    formMessage.textContent = 'Failed to submit form. Please try again.';
                    formMessage.classList.remove('hidden');
                    formMessage.classList.add('error');
                })
                .finally(function() {
                    // Reset button state
                    submitBtn.disabled = false;
                    submitText.textContent = 'Submit Registration';
                    
                    // Hide message after 5 seconds
                    setTimeout(() => {
                        formMessage.classList.add('hidden');
                    }, 5000);
                });
        });
    }
});



// Initialize comments array
let comments = JSON.parse(localStorage.getItem('comments')) || [];

// Load existing comments
function loadComments() {
    const container = document.getElementById('commentsContainer');
    container.innerHTML = '';
    
    comments.forEach(comment => {
        const commentHTML = `
            <div class="comment-card">
                <div class="comment-header">
                    <span class="comment-author">${comment.author}</span>
                    <span class="comment-timestamp">${comment.timestamp}</span>
                </div>
                <p class="comment-content">${comment.content}</p>
            </div>
        `;
        container.insertAdjacentHTML('afterbegin', commentHTML);
    });
}

// Post new comment
document.getElementById('postComment').addEventListener('click', () => {
    const commentInput = document.getElementById('commentInput');
    const errorMessage = document.querySelector('.error-message');
    const content = commentInput.value.trim();

    if (!content) {
        errorMessage.textContent = 'Please write a comment before posting.';
        errorMessage.style.display = 'block';
        return;
    }

    const newComment = {
        author: 'Anonymous Student', // Replace with user system if available
        content: sanitizeInput(content),
        timestamp: new Date().toLocaleString()
    };

    comments.push(newComment);
    localStorage.setItem('comments', JSON.stringify(comments));
    
    loadComments();
    commentInput.value = '';
    errorMessage.style.display = 'none';
});

// Basic input sanitization
function sanitizeInput(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Initial load
document.addEventListener('DOMContentLoaded', loadComments);


// Add to your main JS file
window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        scrollButton.classList.add('show');
    } else {
        scrollButton.classList.remove('show');
    }
});

document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



