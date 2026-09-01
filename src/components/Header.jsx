import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        const newState = !isNavOpen;
        setIsNavOpen(newState);
        // Lock/unlock body scroll when mobile nav is open
        if (newState) {
            document.body.classList.add('nav-open');
        } else {
            document.body.classList.remove('nav-open');
        }
    };

    const closeNav = () => {
        setIsNavOpen(false);
        setIsDropdownOpen(false);
        document.body.classList.remove('nav-open');
    };

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
                document.body.classList.remove('nav-open');
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            document.body.classList.remove('nav-open');
        };
    }, []);

    return (
        <header className="site-header">
            <div className="nav-wrap">
                <Link to="/" className="brand" onClick={closeNav}>
                    <img src="/assets/img/testing-logo.png" alt="Ecofusion Outsourcing logo" />
                    <span className="brand-name">Ecofusion<span> Outsourcing</span></span>
                </Link>
                <nav className={`main-nav ${isNavOpen ? 'open' : ''}`} aria-label="Primary">
                    <ul>
                        <li><NavLink to="/" className="nav-link" onClick={closeNav}>Home</NavLink></li>
                        <li><NavLink to="/about" className="nav-link" onClick={closeNav}>About</NavLink></li>
                        <li className={`has-dropdown ${isDropdownOpen ? 'open' : ''}`}>
                            <a href="#" className="nav-link" onClick={handleDropdownClick}>Services</a>
                            <div className="dropdown">
                                <NavLink to="/services-cruise" onClick={closeNav}>Cruise Ship Careers<small>Onboard hospitality &amp; service roles</small></NavLink>
                                <NavLink to="/services-aviation" onClick={closeNav}>Air Hostess &amp; Cabin Crew<small>Aviation ground &amp; flight roles</small></NavLink>
                                <NavLink to="/services-hospitality" onClick={closeNav}>Hospitality Management<small>Hotel &amp; resort careers</small></NavLink>
                            </div>
                        </li>
                        <li><NavLink to="/reviews" className="nav-link" onClick={closeNav}>Reviews</NavLink></li>
                        <li><NavLink to="/careers" className="nav-link" onClick={closeNav}>Careers</NavLink></li>
                        <li><NavLink to="/blog" className="nav-link" onClick={closeNav}>Blog</NavLink></li>
                        <li><NavLink to="/contact" className="nav-link" onClick={closeNav}>Contact</NavLink></li>
                    </ul>
                    <div className="mobile-cta">
                        <Link to="/contact" className="btn btn-primary" onClick={closeNav}>Start Your Career</Link>
                    </div>
                </nav>
                <div className="nav-cta">
                    <Link to="/contact" className="btn btn-primary btn-sm">Start Your Career</Link>
                </div>
                <button
                    className={`nav-toggle ${isNavOpen ? 'is-open' : ''}`}
                    aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isNavOpen}
                    onClick={toggleMenu}
                >
                    {isNavOpen ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="6" y1="6" x2="18" y2="18" />
                            <line x1="6" y1="18" x2="18" y2="6" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    )}
                </button>
            </div>
        </header>
    );
}

