// ============ TESTIMONIAL CAROUSEL ============
let currentTestimonialIndex = 0;

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.dot');

    if (index >= testimonials.length) {
        currentTestimonialIndex = 0;
    } else if (index < 0) {
        currentTestimonialIndex = testimonials.length - 1;
    } else {
        currentTestimonialIndex = index;
    }

    // Hide all testimonials
    testimonials.forEach((testimonial) => {
        testimonial.classList.remove('active');
    });

    // Remove active class from all dots
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });

    // Show current testimonial
    testimonials[currentTestimonialIndex].classList.add('active');
    dots[currentTestimonialIndex].classList.add('active');
}

function currentSlide(index) {
    showTestimonial(index);
}

function nextTestimonial() {
    showTestimonial(currentTestimonialIndex + 1);
}

function prevTestimonial() {
    showTestimonial(currentTestimonialIndex - 1);
}

// Auto-rotate testimonials every 5 seconds
setInterval(() => {
    nextTestimonial();
}, 5000);

// Initialize first testimonial
document.addEventListener('DOMContentLoaded', () => {
    showTestimonial(0);

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const comments = document.getElementById('comments').value.trim();

            // Validate form
            if (!firstName || !lastName || !email || !subject || !comments) {
                alert('Please fill in all required fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Show success message
            alert('Thank you for reaching out! We will get back to you soon.');

            // Reset form
            contactForm.reset();
        });
    }
});

// ============ MOBILE MENU TOGGLE ============
const hamburger = document.querySelector('.hamburger');
const navbarMenu = document.querySelector('.navbar-menu');
const dropdowns = document.querySelectorAll('.dropdown');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Handle dropdown toggle on mobile
dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (!link.closest('.dropdown') || window.innerWidth > 768) {
            navbarMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown') && !e.target.closest('.hamburger')) {
        dropdowns.forEach((dropdown) => {
            dropdown.classList.remove('active');
        });
    }
});

// ============ SMOOTH SCROLL FOR LINKS ============
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// ============ BUTTON CLICK ANIMATIONS ============
const buttons = document.querySelectorAll('.cta-btn, .secondary-btn, .view-btn, .event-register-btn, .join-btn, .cta-join-btn');

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        // Create ripple effect
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ============ SCROLL ANIMATIONS ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll(
    '.feature-card, .wing-card, .program-card, .event-card, .team-member, .benefit-item'
).forEach((element) => {
    observer.observe(element);
});

// ============ NAVBAR SCROLL EFFECT ============
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling DOWN
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    } else {
        // Scrolling UP
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============ FORM VALIDATION (for future use) ============
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============ KEYBOARD NAVIGATION FOR TESTIMONIALS ============
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevTestimonial();
    } else if (e.key === 'ArrowRight') {
        nextTestimonial();
    }
});

// ============ LAZY LOADING FOR IMAGES ============
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => imageObserver.observe(img));
}

// ============ COUNTER ANIMATION (optional feature) ============
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ============ MOBILE MENU STYLES (via JavaScript) ============
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .navbar-menu {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background-color: #fffaf1;
            border-bottom: 1px solid rgba(226, 120, 34, 0.16);
            box-shadow: 0 18px 35px rgba(91, 58, 28, 0.12);
            flex-direction: column;
            width: 100%;
            text-align: center;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            padding: 0;
        }

        .navbar-menu.active {
            max-height: 400px;
            padding: 20px 0;
        }

        .nav-link {
            display: block;
            padding: 10px 0;
            border-bottom: none;
        }

        .dropdown .dropdown-content {
            position: static;
            background-color: #fff2df;
            display: none;
            margin-top: 0;
        }

        .dropdown.active .dropdown-content {
            display: block;
        }

        .dropdown.active .nav-link i {
            transform: rotate(180deg);
        }

        .dropdown-content a {
            padding: 10px 20px;
        }

        .dropdown-content a:first-child {
            border-top: 1px solid rgba(226, 120, 34, 0.16);
        }

        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(8px, 8px);
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }
    }

    .ripple {
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        from {
            width: 20px;
            height: 20px;
            opacity: 1;
            transform: translate(-50%, -50%);
        }
        to {
            width: 300px;
            height: 300px;
            opacity: 0;
            transform: translate(-50%, -50%);
        }
    }

    .in-view {
        animation: fadeInUp 0.6s ease-out;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ============ PERFORMANCE OPTIMIZATION ============
// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener(
    'resize',
    debounce(() => {
        // Handle responsive adjustments
    }, 250)
);
