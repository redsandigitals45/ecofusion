import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => setIsNavOpen(!isNavOpen);

    const handleDropdownClick = (e) => {
        if (window.innerWidth <= 980) {
            e.preventDefault();
            setIsDropdownOpen(!isDropdownOpen);
        }
    };

    // Close nav when clicking a link (mobile)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 980) {
                setIsNavOpen(false);
                setIsDropdownOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="site-header">
            <div className="nav-wrap">
                <Link to="/" className="brand" onClick={() => setIsNavOpen(false)}>
                    <img src="/assets/img/logo.png" alt="Ecofusion Outsourcing logo" />
                    <span className="brand-name">Ecofusion<span> Outsourcing</span></span>
                </Link>
                <nav className={`main-nav ${isNavOpen ? 'open' : ''}`} aria-label="Primary">
                    <ul>
                        <li><NavLink to="/" className="nav-link" onClick={() => setIsNavOpen(false)}>Home</NavLink></li>
                        <li><NavLink to="/about" className="nav-link" onClick={() => setIsNavOpen(false)}>About</NavLink></li>
                        <li className={`has-dropdown ${isDropdownOpen ? 'open' : ''}`}>
                            <a href="#" className="nav-link" onClick={handleDropdownClick}>Services</a>
                            <div className="dropdown">
                                <NavLink to="/services-cruise" onClick={() => setIsNavOpen(false)}>Cruise Ship Careers<small>Onboard hospitality &amp; service roles</small></NavLink>
                                <NavLink to="/services-aviation" onClick={() => setIsNavOpen(false)}>Air Hostess &amp; Cabin Crew<small>Aviation ground &amp; flight roles</small></NavLink>
                                <NavLink to="/services-hospitality" onClick={() => setIsNavOpen(false)}>Hospitality Management<small>Hotel &amp; resort careers</small></NavLink>
                            </div>
                        </li>
                        <li><NavLink to="/reviews" className="nav-link" onClick={() => setIsNavOpen(false)}>Reviews</NavLink></li>
                        <li><NavLink to="/careers" className="nav-link" onClick={() => setIsNavOpen(false)}>Careers</NavLink></li>
                        <li><NavLink to="/blog" className="nav-link" onClick={() => setIsNavOpen(false)}>Blog</NavLink></li>
                        <li><NavLink to="/contact" className="nav-link" onClick={() => setIsNavOpen(false)}>Contact</NavLink></li>
                    </ul>
                    <div className="mobile-cta">
                        <Link to="/contact" className="btn btn-primary" onClick={() => setIsNavOpen(false)}>Start Your Career</Link>
                    </div>
                </nav>
                <div className="nav-cta">
                    <Link to="/contact" className="btn btn-primary btn-sm">Start Your Career</Link>
                </div>
                <button
                    className="nav-toggle"
                    aria-label="Toggle menu"
                    aria-expanded={isNavOpen}
                    onClick={toggleMenu}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                </button>
            </div>
        </header>
    );
}
