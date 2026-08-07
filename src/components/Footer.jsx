import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="site-footer bg-light">
            <div className="container">
                <div className="footer-grid-new">
                    <div className="footer-col-main">
                        <div className="footer-brand">
                            <img src="/assets/img/testing-logo.png" alt="Logo" style={{ background: 'transparent', height: '60px', width: 'auto' }} />
                        </div>
                        <h3 className="footer-title">Ecofusion</h3>
                        <p className="footer-desc">Connecting talented individuals with trusted international career opportunities in Cruise Ships, Air Hostess, Merchant Navy, and Security Services.</p>

                        <ul className="footer-features">
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-5" /></svg> Ethical Recruitment</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-5" /></svg> Verified Employers</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-5" /></svg> Professional Guidance</li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>QUICK LINKS</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/careers">Career Opportunities</Link></li>
                            <li><Link to="/reviews">Reviews</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>OUR SERVICES</h4>
                        <ul>
                            <li><Link to="/services-cruise">🛳️ Cruise Ship Careers</Link></li>
                            <li><Link to="/services-aviation">✈️ Air Hostess Careers</Link></li>
                            <li><Link to="/services-merchant">⚓ Merchant Navy Careers</Link></li>
                            <li><Link to="/services-security">🛡️ Security Guard Careers</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col contact-col">
                        <h4>CONTACT INFO</h4>
                        <div className="contact-item">
                            <svg className="c-icon text-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            <div>
                                <strong>IT Park</strong>
                                <span>Dehradun, Uttarakhand - 248001, India</span>
                            </div>
                        </div>
                        <div className="contact-item">
                            <svg className="c-icon text-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            <div>
                                <strong>[Phone Number]</strong>
                                <span>Click to copy phone</span>
                            </div>
                        </div>
                        <div className="contact-item">
                            <svg className="c-icon text-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            <div>
                                <strong>[Email]</strong>
                                <span>Click to copy email</span>
                            </div>
                        </div>
                        <div className="contact-item">
                            <svg className="c-icon text-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                            <div>
                                <strong>WhatsApp Support <span style={{ color: '#22c55e', fontSize: '10px' }}>💬</span></strong>
                                <span>[Phone Number]</span>
                            </div>
                        </div>
                       
                        <div className="contact-item">
                            <svg className="c-icon text-gray" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            <div>
                                <strong style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.05em' }}>Business Hours</strong>
                                <span>Mon - Fri: 9:30 AM - 6:30 PM<br />Sat: 10:00 AM - 4:00 PM<br />Sun: Closed</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-col text-right">
                        <h4>STAY CONNECTED</h4>
                        <p className="social-text">Follow us for career updates and international opportunities.</p>
                        <div className="social-row">
                            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="3" /><line x1="8" y1="11" x2="8" y2="17" /><line x1="8" y1="8" x2="8" y2="8" /><path d="M12 17v-3.5a2.5 2.5 0 0 1 5 0V17" /></svg></a>
                            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg></a>
                            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 9h3V6h-3a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h3l1-3h-4V9a1 1 0 0 1 1-1Z" /></svg></a>
                            <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.95C18.88 4 12 4 12 4s-6.88 0-8.6.47a2.78 2.78 0 0 0-1.94 1.95A29.04 29.04 0 0 0 1 11.75a29.04 29.04 0 0 0 1.46 5.33 2.78 2.78 0 0 0 1.94 1.95C6.12 19.5 13 19.5 13 19.5s6.88 0 8.6-.47a2.78 2.78 0 0 0 1.94-1.95 29.04 29.04 0 0 0 1.46-5.33 29.04 29.04 0 0 0-1.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg></a>
                            <a href="#" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg></a>
                        </div>
                    </div>
                </div>

                <div className="newsletter-box">
                    <div className="nl-content">
                        <span className="nl-tag"><span className="dot"></span> NEWSLETTER</span>
                        <h3>Stay Updated With International Career Opportunities</h3>
                        <p>Receive the latest international job openings, recruitment updates, career tips, and industry insights directly in your inbox.</p>
                    </div>
                    <div className="nl-form-wrapper">
                        <form className="nl-form">
                            <input type="email" placeholder="Enter your email address" />
                            <button type="submit">SUBSCRIBE &rarr;</button>
                        </form>
                        <span className="nl-disclaimer">We respect your privacy. You can unsubscribe at any time.</span>
                    </div>
                </div>

                <div className="footer-bottom-new">
                    <div className="fb-left">
                        <span>© 2026 <strong>ecofusion</strong>. All Rights Reserved.</span>
                    </div>
                    <div className="fb-center">
                        <Link to="#">Privacy Policy</Link>
                        <span className="dot-sep">&bull;</span>
                        <Link to="#">Terms & Conditions</Link>
                        <span className="dot-sep">&bull;</span>
                        <Link to="#">Payment Terms</Link>
                    </div>
                    <div className="fb-right">
                        <span>CONNECTING INDIA TO GLOBAL OPPORTUNITIES</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
