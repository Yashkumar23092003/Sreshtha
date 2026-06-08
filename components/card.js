window.Card = {
    feature(item) {
        return `
            <div class="feature-card">
                <div class="feature-visual"><i class="fas ${item.icon}"></i></div>
                <h4>${item.title}</h4>
                <p>${item.text}</p>
            </div>
        `;
    },

    wing(item, basePath = '') {
        return `
            <div class="wing-card">
                <div class="wing-circle"><i class="fas ${item.icon}"></i></div>
                <h3>${item.navTitle}</h3>
                <a class="secondary-btn card-link-btn" href="${basePath}pages/${item.slug}-wing.html">READ MORE</a>
            </div>
        `;
    },

    program(item) {
        const top = item.image
            ? `<img src="${item.image}" alt="${item.title}">`
            : `<div class="program-media"><i class="fas ${item.icon}"></i></div>`;
        return `
            <div class="program-card">
                ${top}
                <div class="program-footer">
                    <h4>${item.title}</h4>
                    <button class="view-btn">VIEW MORE</button>
                </div>
            </div>
        `;
    },

    wingProgram(item) {
        return `
            <div class="wing-program-card">
                <div class="wing-program-header"><i class="fas ${item.icon}"></i></div>
                <div class="wing-program-footer">
                    <h4>${item.title}</h4>
                    <p>${item.status}</p>
                    <a href="#" class="wing-learn-btn">LEARN MORE</a>
                </div>
            </div>
        `;
    },

    event(item) {
        const locationIcon = item.locationIcon || 'fa-map-marker-alt';
        const media = item.image
            ? `<img src="${item.image}" alt="${item.title}">`
            : `<div class="event-media"><i class="fas ${item.icon}"></i></div>`;
        return `
            <div class="event-card">
                <div class="event-image">
                    ${media}
                </div>
                <div class="event-content">
                    <h4>${item.title}</h4>
                    <p><i class="fas fa-calendar"></i> ${item.date}</p>
                    <p><i class="fas ${locationIcon}"></i> ${item.location}</p>
                    <button class="event-register-btn">REGISTER</button>
                </div>
            </div>
        `;
    },

    wingEvent(item) {
        return this.event(item)
            .replace('event-card', 'wing-event-card')
            .replace('event-image', 'wing-event-image')
            .replace('event-content', 'wing-event-content');
    },

    benefit(item) {
        return `
            <div class="benefit-item">
                <i class="fas ${item.icon}"></i>
                <h4>${item.title}</h4>
                <p>${item.text}</p>
            </div>
        `;
    },
};
