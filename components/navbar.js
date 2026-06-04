window.Navbar = {
    render({ basePath = '', current = 'home' } = {}) {
        const homeHref = `${basePath}index.html`;
        const wingLinks = window.SRESHTHA_WINGS.map((wing) => `
            <a href="${basePath}pages/${wing.slug}-wing.html">${wing.navTitle}</a>
        `).join('');

        return `
            <nav class="navbar">
                <div class="navbar-container">
                    <div class="navbar-logo">
                        <a href="${homeHref}" class="logo-text">SRESHTHA</a>
                    </div>
                    <div class="navbar-menu">
                        <a href="${current === 'home' ? '#home' : homeHref}" class="nav-link">Home</a>
                        <a href="${current === 'home' ? '#about' : `${homeHref}#about`}" class="nav-link">About</a>
                        <div class="dropdown">
                            <a href="${current === 'home' ? '#wing' : `${homeHref}#wing`}" class="nav-link">Wing <i class="fas fa-chevron-down"></i></a>
                            <div class="dropdown-content">${wingLinks}</div>
                        </div>
                        <a href="${current === 'home' ? '#events' : `${homeHref}#events`}" class="nav-link">Event</a>
                        <a href="${basePath}pages/contact.html" class="nav-link">Contact</a>
                    </div>
                    <button class="join-btn">Join Us</button>
                    <div class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        `;
    },
};
