window.Hero = {
    home(hero) {
        return `
            <section id="home" class="hero">
                <div class="hero-container">
                    <div class="hero-left">
                        <p class="hero-kicker">${hero.kicker}</p>
                        <h1 class="hero-title">${hero.title}</h1>
                        <p class="hero-subtitle">${hero.subtitle}</p>
                        <p class="hero-copy">${hero.copy}</p>
                        <div class="hero-actions">
                            <button class="cta-btn">JOIN US NOW</button>
                            <a href="#programs" class="text-link">Explore Programs</a>
                        </div>
                        <div class="hero-stats" aria-label="Sreshtha impact highlights">
                            ${hero.stats.map((stat) => `
                                <div>
                                    <strong>${stat.value}</strong>
                                    <span>${stat.label}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="hero-right">
                        <div class="hero-photo-card">
                            <img src="${hero.image}" alt="${hero.imageAlt}">
                            <div class="hero-photo-badge">
                                <i class="fas fa-hands-helping"></i>
                                <span>${hero.badge}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    page(title, className) {
        return `
            <section class="${className}">
                <div class="${className}-content">
                    <h1>${title}</h1>
                    <div class="${className}-underline"></div>
                </div>
            </section>
        `;
    },
};
