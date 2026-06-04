window.SreshthaRender = {
    mount(selector, html) {
        const element = document.querySelector(selector);
        if (element) {
            element.innerHTML = html;
        }
    },

    renderShell({ current = 'home', basePath = '' } = {}) {
        this.mount('#site-navbar', window.Navbar.render({ current, basePath }));
        this.mount('#site-footer', window.Footer.render({ basePath }));
    },

    home() {
        const home = window.SRESHTHA_HOME;
        this.renderShell({ current: 'home', basePath: '' });
        this.mount('#app', `
            ${window.Hero.home(home.hero)}
            <section class="trust-strip" aria-label="Sreshtha focus areas">
                ${home.trustItems.map((item) => `
                    <div class="trust-item"><i class="fas ${item.icon}"></i><span>${item.label}</span></div>
                `).join('')}
            </section>
            <section id="about" class="about">
                ${window.SectionTitle.render(home.about.title)}
                <div class="about-content">
                    <div class="about-left">
                        <div class="about-image">
                            <img src="${home.about.image}" alt="${home.about.imageAlt}">
                        </div>
                    </div>
                    <div class="about-right">
                        <h3 class="about-heading">${home.about.heading}</h3>
                        <p class="about-text">${home.about.text}</p>
                        <button class="secondary-btn">READ MORE</button>
                    </div>
                </div>
                <div class="feature-cards">
                    ${home.features.map((item) => window.Card.feature(item)).join('')}
                </div>
            </section>
            <section id="wing" class="wings">
                ${window.SectionTitle.render(home.wingsSectionTitle)}
                <div class="wings-container">
                    ${window.SRESHTHA_WINGS.map((wing) => window.Card.wing(wing)).join('')}
                </div>
            </section>
            <section class="what-you-get">
                ${window.SectionTitle.render(home.whatYouGet.title)}
                <div class="wyg-container">
                    <div class="wyg-left">
                        <h3>${home.whatYouGet.left.heading}</h3>
                        <p>${home.whatYouGet.left.text}</p>
                    </div>
                    <div class="wyg-center">
                        <div class="growth-orbit" aria-hidden="true">
                            <span><i class="fas fa-brain"></i></span>
                            <span><i class="fas fa-comments"></i></span>
                            <span><i class="fas fa-heart"></i></span>
                            <strong>Growth</strong>
                        </div>
                    </div>
                    <div class="wyg-right">
                        <h3>${home.whatYouGet.right.heading}</h3>
                        <p>${home.whatYouGet.right.text}</p>
                    </div>
                </div>
                <div class="wyg-benefits">
                    ${home.whatYouGet.benefits.map((item) => window.Card.benefit(item)).join('')}
                </div>
            </section>
            <section id="programs" class="programs">
                ${window.SectionTitle.render('Programs & Events')}
                <div class="programs-grid">
                    ${home.programs.map((item) => window.Card.program(item)).join('')}
                </div>
            </section>
            <section id="events" class="upcoming-events">
                ${window.SectionTitle.render('Upcoming Events')}
                <div class="events-grid">
                    ${window.SRESHTHA_EVENTS.home.map((item) => window.Card.event(item)).join('')}
                </div>
            </section>
            ${this.testimonials()}
            ${this.team()}
            ${this.cta(home.cta)}
        `);
    },

    wing(slug) {
        const wing = window.SRESHTHA_WINGS.find((item) => item.slug === slug);
        if (!wing) return;

        this.renderShell({ current: slug, basePath: '../' });
        this.mount('#app', `
            ${window.Hero.page(wing.pageTitle, 'wing-header')}
            <section class="wing-about">
                <div class="wing-about-container">
                    ${window.SectionTitle.render(wing.aboutTitle)}
                    <div class="wing-about-content">
                        <div class="wing-about-left">
                            <div class="wing-about-image">
                                <img src="${wing.image}" alt="${wing.imageAlt}">
                            </div>
                        </div>
                        <div class="wing-about-right">
                            <h3>${wing.heading}</h3>
                            <p>${wing.description}</p>
                            <button class="secondary-btn">LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="wing-programs">
                <div class="wing-programs-container">
                    ${window.SectionTitle.render('Programs & Events')}
                    <div class="wing-programs-grid">
                        ${wing.programs.map((item) => window.Card.wingProgram(item)).join('')}
                    </div>
                </div>
            </section>
            <section class="wing-events">
                <div class="wing-events-container">
                    ${window.SectionTitle.render('Upcoming Events')}
                    <div class="wing-events-grid">
                        ${window.SRESHTHA_EVENTS[slug].map((item) => window.Card.wingEvent(item)).join('')}
                    </div>
                </div>
            </section>
            ${this.cta(window.SRESHTHA_HOME.cta)}
        `);
    },

    contact() {
        const contact = window.SRESHTHA_CONTACT;
        this.renderShell({ current: 'contact', basePath: '../' });
        this.mount('#app', `
            ${window.Hero.page(contact.title, 'contact-header')}
            <section class="contact-main">
                <div class="contact-container">
                    <div class="contact-form-section">
                        <h2>${contact.formTitle}</h2>
                        <form class="contact-form" id="contactForm">
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="firstName">First Name <span class="required">*</span></label>
                                    <input type="text" id="firstName" name="firstName" placeholder="First name here" required>
                                </div>
                                <div class="form-group">
                                    <label for="lastName">Last Name <span class="required">*</span></label>
                                    <input type="text" id="lastName" name="lastName" placeholder="Last name here" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="email">Email Address <span class="required">*</span></label>
                                    <input type="email" id="email" name="email" placeholder="Add email" required>
                                </div>
                                <div class="form-group">
                                    <label for="subject">Subject <span class="required">*</span></label>
                                    <input type="text" id="subject" name="subject" placeholder="How can we help you?" required>
                                </div>
                            </div>
                            <div class="form-group full-width">
                                <label for="comments">Comments / Questions <span class="required">*</span></label>
                                <textarea id="comments" name="comments" placeholder="Comments" rows="6" required></textarea>
                            </div>
                            <button type="submit" class="send-btn">SEND MESSAGE</button>
                        </form>
                    </div>
                    <div class="contact-info-section">
                        <h2>${contact.infoTitle}</h2>
                        <div class="contact-info-grid">
                            ${this.infoCard('fa-phone', 'Phone Number', `<a href="tel:+919876543210">${contact.phone}</a>`)}
                            ${this.infoCard('fa-envelope', 'Email Address', `<a href="mailto:${contact.email}">${contact.email}</a>`)}
                            ${this.infoCard('fa-map-marker-alt', 'Location', contact.address)}
                            ${this.infoCard('fa-clock', 'Open Hour', contact.hours)}
                        </div>
                        <div class="contact-social">
                            <h4>${contact.socialTitle}</h4>
                            <div class="social-links">
                                <a href="#" title="Facebook"><i class="fab fa-facebook"></i></a>
                                <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
                                <a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
                                <a href="#" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            ${this.cta(window.SRESHTHA_HOME.cta)}
        `);
    },

    infoCard(icon, title, value) {
        return `
            <div class="info-card">
                <div class="info-icon"><i class="fas ${icon}"></i></div>
                <div class="info-content">
                    <h4>${title}</h4>
                    <p>${value}</p>
                </div>
            </div>
        `;
    },

    testimonials() {
        return `
            <section class="testimonials">
                ${window.SectionTitle.render("Student's Testimonials")}
                <div class="testimonials-carousel">
                    ${window.SRESHTHA_TESTIMONIALS.map((item, index) => `
                        <div class="testimonial-item ${index === 0 ? 'active' : ''}">
                            <i class="fas fa-quote-left quote-icon"></i>
                            <p class="testimonial-text">${item.text}</p>
                            <div class="testimonial-image" aria-hidden="true">${item.initials}</div>
                            <h4 class="testimonial-name">${item.name}</h4>
                            <p class="testimonial-designation">${item.designation}</p>
                        </div>
                    `).join('')}
                </div>
                <div class="carousel-dots">
                    ${window.SRESHTHA_TESTIMONIALS.map((_, index) => `
                        <span class="dot ${index === 0 ? 'active' : ''}" onclick="currentSlide(${index})"></span>
                    `).join('')}
                </div>
            </section>
        `;
    },

    team() {
        return `
            <section class="core-team">
                ${window.SectionTitle.render("Sreshtha's Core Team")}
                <div class="team-container">
                    ${window.SRESHTHA_TEAM.map((member) => `
                        <div class="team-member">
                            <div class="team-avatar" aria-hidden="true">${member.initials}</div>
                            <h4>${member.name}</h4>
                            <p>${member.role}</p>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    },

    cta(cta) {
        return `
            <section class="cta-banner">
                <div class="cta-content">
                    <h2>${cta.title}</h2>
                    <button class="cta-join-btn">${cta.button}</button>
                </div>
            </section>
        `;
    },
};
