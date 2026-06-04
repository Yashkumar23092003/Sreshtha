document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page || 'home';

    if (page === 'home') {
        window.SreshthaRender.home();
    } else if (page === 'contact') {
        window.SreshthaRender.contact();
    } else {
        window.SreshthaRender.wing(page);
    }

    if (window.SreshthaInteractions) {
        window.SreshthaInteractions.init();
    }
});
