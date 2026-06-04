let currentTestimonialIndex = 0;
let testimonialTimer = null;

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.dot');

    if (!testimonials.length) return;

    if (index >= testimonials.length) {
        currentTestimonialIndex = 0;
    } else if (index < 0) {
        currentTestimonialIndex = testimonials.length - 1;
    } else {
        currentTestimonialIndex = index;
    }

    testimonials.forEach((testimonial) => testimonial.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));

    testimonials[currentTestimonialIndex].classList.add('active');
    if (dots[currentTestimonialIndex]) {
        dots[currentTestimonialIndex].classList.add('active');
    }
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

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

window.SreshthaInteractions = {
    init() {
        this.injectRuntimeStyles();
        this.initTestimonials();
        this.initContactForm();
        this.initMobileMenu();
        this.initSmoothScroll();
        this.initButtonRipples();
        this.initScrollAnimations();
        this.initKeyboardNavigation();
    },

    initTestimonials() {
        showTestimonial(0);
        if (testimonialTimer) {
            clearInterval(testimonialTimer);
        }
        testimonialTimer = setInterval(nextTestimonial, 5000);
    },

    initContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const comments = document.getElementById('comments').value.trim();

            if (!firstName || !lastName || !email || !subject || !comments) {
                alert('Please fill in all required fields');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }

            alert('Thank you for reaching out! We will get back to you soon.');
            contactForm.reset();
        });
    },

    initMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navbarMenu = document.querySelector('.navbar-menu');
        const dropdowns = document.querySelectorAll('.dropdown');

        if (!hamburger || !navbarMenu) return;

        hamburger.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        dropdowns.forEach((dropdown) => {
            dropdown.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        });

        document.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', () => {
                if (!link.closest('.dropdown') || window.innerWidth > 768) {
                    navbarMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown') && !e.target.closest('.hamburger')) {
                dropdowns.forEach((dropdown) => dropdown.classList.remove('active'));
            }
        });
    },

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                const target = document.querySelector(href);
                if (!target) return;

                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            });
        });
    },

    initButtonRipples() {
        document.querySelectorAll('.cta-btn, .secondary-btn, .view-btn, .event-register-btn, .join-btn, .cta-join-btn').forEach((button) => {
            button.addEventListener('click', function (e) {
                const rect = this.getBoundingClientRect();
                const ripple = document.createElement('span');

                ripple.style.left = `${e.clientX - rect.left}px`;
                ripple.style.top = `${e.clientY - rect.top}px`;
                ripple.classList.add('ripple');
                this.appendChild(ripple);

                setTimeout(() => ripple.remove(), 600);
            });
        });
    },

    initScrollAnimations() {
        if (!('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        });

        document.querySelectorAll('.feature-card, .wing-card, .program-card, .event-card, .wing-event-card, .team-member, .benefit-item').forEach((element) => {
            observer.observe(element);
        });
    },

    initKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevTestimonial();
            } else if (e.key === 'ArrowRight') {
                nextTestimonial();
            }
        });
    },

    injectRuntimeStyles() {
        if (document.getElementById('runtime-interaction-styles')) return;

        const style = document.createElement('style');
        style.id = 'runtime-interaction-styles';
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
    },
};
