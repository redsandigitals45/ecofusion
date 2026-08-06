import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div className="footer-brand"><img src="/assets/img/logo.png" alt="Logo" /><span>Ecofusion Outsourcing</span></div>
                        <p style={{ maxWidth: '280px' }}>A career partner — not just a recruiter. Recruitment, training and certification for cruise, aviation and hospitality careers.</p>
                        <div className="social-row">
                            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg></a>
                            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="3" /><line x1="8" y1="11" x2="8" y2="17" /><line x1="8" y1="8" x2="8" y2="8" /><path d="M12 17v-3.5a2.5 2.5 0 0 1 5 0V17" /></svg></a>
                            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 9h3V6h-3a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h3l1-3h-4V9a1 1 0 0 1 1-1Z" /></svg></a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Explore</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/reviews">Reviews</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><Link to="/services-cruise">Cruise Ship Careers</Link></li>
                            <li><Link to="/services-aviation">Air Hostess &amp; Cabin Crew</Link></li>
                            <li><Link to="/services-hospitality">Hospitality Management</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Get in Touch</h4>
                        <ul>
                            <li>[Email Address]</li>
                            <li>[Phone Number]</li>
                            <li>Gurugram, India</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>© 2026 Ecofusion Outsourcing. All rights reserved.</span>
                    <span>Empowering Careers. Enabling Global Opportunity.</span>
                </div>
            </div>
        </footer>
    );
}
