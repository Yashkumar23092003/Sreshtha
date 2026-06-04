window.Footer = {
    render({ basePath = '' } = {}) {
        return `
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-section">
                        <h4>SRESHTHA</h4>
                        <p>Creating leaders with a difference through education and community engagement.</p>
                    </div>
                    <div class="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="${basePath}index.html">Home</a></li>
                            <li><a href="${basePath}index.html#about">About Us</a></li>
                            <li><a href="${basePath}index.html#wing">Our Wings</a></li>
                            <li><a href="${basePath}index.html#programs">Programs</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Contact</h4>
                        <p>Email: info@sreshtha.org</p>
                        <p>Phone: +91-9876-543-210</p>
                        <p>Address: New Delhi, India</p>
                    </div>
                    <div class="footer-section">
                        <h4>Follow Us</h4>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 Sreshtha. All rights reserved.</p>
                </div>
            </footer>
        `;
    },
};
