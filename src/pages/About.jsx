import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        if (openFaq === index) {
            setOpenFaq(null);
        } else {
            setOpenFaq(index);
        }
    };

    return (
        <div className="about-page">
            <div className="a-breadcrumb-bar">
                <div className="a-container" style={{ textAlign: 'left' }}>
                    <Link to="/">Home</Link>
                    <span className="a-sep">&gt;</span>
                    <span>About Us</span>
                </div>
            </div>

            {/* 1. HERO SECTION */}
            <section className="a-hero-section">
                <div className="a-container">
                    <div className="a-hero-grid">
                        <div>
                            <div className="a-eyebrow">Who We Are</div>
                            <h1 className="a-hero-title">Your Trusted Partner for <span>International Careers</span></h1>
                            <p className="a-hero-desc" style={{ fontWeight: 600 }}>
                                Ecofusion is an India-based international recruitment and career consulting company committed to helping talented individuals pursue rewarding careers abroad.
                            </p>
                            <p className="a-hero-desc a-hero-desc-light">
                                We specialize in connecting qualified candidates with global employers across industries where professionalism, dedication, and service excellence are highly valued. Our approach is built on transparency, integrity, and long-term relationships, ensuring that every candidate receives the guidance and support needed throughout the recruitment journey.
                            </p>
                            <p className="a-hero-desc a-hero-desc-light">
                                Whether your dream is to work aboard a luxury cruise ship, become part of an international airline, build a career in the merchant navy, or join the professional security industry, we are here to help you take the next step with confidence.
                            </p>
                        </div>
                        <div>
                            <div className="a-hero-image-wrapper">
                                <img src="/assets/img/hero-office.jpg" alt="Office team working" className="a-hero-image" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' }} />
                                <div className="a-hero-badge">
                                    <div className="a-hero-badge-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                    </div>
                                    <div className="a-hero-badge-text">
                                        <h4>Founded 2012</h4>
                                        <p>14+ Years Operations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. OUR STORY SECTION */}
            <section className="a-story-section">
                <div className="a-container">
                    <div className="a-story-grid">
                        <div>
                            <div className="a-story-image-wrapper">
                                <img src="/assets/img/team-discussion.jpg" alt="Team discussion" className="a-story-image" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=800&q=80' }} />
                                <div className="a-story-badge">
                                    <div className="a-story-badge-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <div className="a-story-badge-text">
                                        <h4>10,000+</h4>
                                        <p>Global Placements</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="a-eyebrow">Our Story</div>
                            <h2 className="a-hero-title">Every Great Journey <span>Begins With a Dream</span></h2>
                            <p className="a-hero-desc" style={{ fontWeight: 600 }}>
                                Ecofusion was founded with a simple yet meaningful vision—to create opportunities that change lives.
                            </p>
                            <p className="a-hero-desc a-hero-desc-light">
                                We recognized that many talented individuals have the skills and ambition to succeed internationally but often struggle to navigate complex recruitment processes or identify trustworthy employers. Our mission was to bridge that gap by building a company that places honesty, professionalism, and candidate success at the center of everything we do.
                            </p>
                            <p className="a-hero-desc a-hero-desc-light">
                                Today, we continue to work toward that vision by helping candidates prepare for international careers while maintaining high standards of ethical recruitment and transparent communication.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. OUR MISSION & VISION */}
            <section className="a-mv-section">
                <div className="a-container">
                    <div className="a-mv-grid">
                        <div className="a-mv-card">
                            <div className="a-mv-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            </div>
                            <h3 className="a-mv-title">Our Mission</h3>
                            <div className="a-mv-subtitle">Helping People Build Careers Without Borders</div>
                            <p className="a-mv-desc">Our mission is to connect talented individuals with trusted international employers through professional recruitment services, transparent guidance, and personalized support.</p>
                            <p className="a-mv-desc">We are committed to making the recruitment journey straightforward, ethical, and rewarding while helping candidates develop successful global careers.</p>
                        </div>

                        <div className="a-mv-card">
                            <div className="a-mv-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <h3 className="a-mv-title">Our Vision</h3>
                            <div className="a-mv-subtitle">Inspiring Careers That Cross Oceans and Continents</div>
                            <p className="a-mv-desc">Our vision is to become one of the most trusted international recruitment companies by creating opportunities that empower individuals to achieve professional success beyond geographical boundaries.</p>
                            <p className="a-mv-desc">We aspire to build lasting relationships with candidates and employers while maintaining the highest standards of integrity, innovation, and service excellence.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. OUR CORE VALUES */}
            <section className="a-values-section">
                <div className="a-container">
                    <div className="a-section-header">
                        <div className="a-eyebrow a-eyebrow-center">Our Core Beliefs</div>
                        <h2 className="a-section-title">Our Core Values</h2>
                        <div className="a-section-subtitle">THE PRINCIPLES THAT GUIDE EVERYTHING WE DO</div>
                    </div>

                    <div className="a-values-grid">
                        <div className="a-value-card">
                            <div className="a-value-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            </div>
                            <h4 className="a-value-title">Integrity</h4>
                            <p className="a-value-desc">We believe honesty and ethical recruitment practices are essential for building lasting trust.</p>
                        </div>

                        <div className="a-value-card">
                            <div className="a-value-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                            </div>
                            <h4 className="a-value-title">Transparency</h4>
                            <p className="a-value-desc">We communicate openly about every stage of the recruitment process, ensuring candidates understand their journey from start to finish.</p>
                        </div>

                        <div className="a-value-card">
                            <div className="a-value-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><polyline points="17 11 19 13 23 9" /></svg>
                            </div>
                            <h4 className="a-value-title">Excellence</h4>
                            <p className="a-value-desc">We continually strive to deliver exceptional recruitment experiences through professionalism and attention to detail.</p>
                        </div>

                        <div className="a-value-card">
                            <div className="a-value-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                            </div>
                            <h4 className="a-value-title">Commitment</h4>
                            <p className="a-value-desc">We are dedicated to supporting our candidates at every stage of their career journey.</p>
                        </div>

                        <div className="a-value-card">
                            <div className="a-value-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div>
                            <h4 className="a-value-title">Respect</h4>
                            <p className="a-value-desc">Every candidate deserves equal opportunity, professional guidance, and respectful communication.</p>
                        </div>

                        <div className="a-value-card">
                            <div className="a-value-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                            </div>
                            <h4 className="a-value-title">Continuous Growth</h4>
                            <p className="a-value-desc">We believe learning never stops—for our candidates, our partners, or our organization.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. OUR EXPERTISE */}
            <section className="a-expertise-section">
                <div className="a-container">
                    <div className="a-expertise-header">
                        <div className="a-eyebrow">Our Expertise</div>
                        <h2 className="a-section-title">Specialized International Recruitment Services</h2>
                    </div>

                    <div className="a-expertise-grid">
                        <div className="a-exp-card">
                            <div className="a-exp-img-wrapper">
                                <img src="/assets/img/cruise.jpg" alt="Cruise Ship" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=600&q=80' }} />
                                <div className="a-exp-icon a-exp-icon-blue">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M2 17h20" /><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10v0z" /></svg>
                                </div>
                            </div>
                            <div className="a-exp-content">
                                <h4 className="a-exp-title">Cruise Ship Careers</h4>
                                <p className="a-exp-desc">Join internationally recognized cruise lines and build a rewarding career while traveling across some of the world's most beautiful destinations.</p>
                                <Link to="/services-cruise" className="a-exp-link">Explore Tracks &rarr;</Link>
                            </div>
                        </div>

                        <div className="a-exp-card">
                            <div className="a-exp-img-wrapper">
                                <img src="/assets/img/aviation.jpg" alt="Aviation" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80' }} />
                                <div className="a-exp-icon a-exp-icon-purple">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 5.5L6.5 16l-3.5-1L2 16l4.5 4L11 18.5l-2.5-3L13 14l6.5 4.5l1.5-1.5z" /></svg>
                                </div>
                            </div>
                            <div className="a-exp-content">
                                <h4 className="a-exp-title">Air Hostess Careers</h4>
                                <p className="a-exp-desc">Prepare for a dynamic career in aviation by joining professional cabin crew teams that deliver exceptional passenger experiences.</p>
                                <Link to="/services-aviation" className="a-exp-link">Explore Tracks &rarr;</Link>
                            </div>
                        </div>

                        <div className="a-exp-card">
                            <div className="a-exp-img-wrapper">
                                <img src="/assets/img/merchant.jpg" alt="Merchant Navy" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&w=600&q=80' }} />
                                <div className="a-exp-icon a-exp-icon-green">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                                </div>
                            </div>
                            <div className="a-exp-content">
                                <h4 className="a-exp-title">Merchant Navy Careers</h4>
                                <p className="a-exp-desc">Explore exciting maritime opportunities with international shipping companies operating across global waters.</p>
                                <Link to="/services-merchant" className="a-exp-link">Explore Tracks &rarr;</Link>
                            </div>
                        </div>

                        <div className="a-exp-card">
                            <div className="a-exp-img-wrapper">
                                <img src="/assets/img/security.jpg" alt="Security Guards" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80' }} />
                                <div className="a-exp-icon a-exp-icon-orange">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                </div>
                            </div>
                            <div className="a-exp-content">
                                <h4 className="a-exp-title">Security Guard Careers</h4>
                                <p className="a-exp-desc">Build a stable and professional career with trusted employers in airport, corporate, industrial, and international security services.</p>
                                <Link to="/services-security" className="a-exp-link">Explore Tracks &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. WHY ECOFUSION */}
            <section className="a-why-section">
                <div className="a-container">
                    <div className="a-section-header">
                        <div className="a-eyebrow a-eyebrow-center">Why Ecofusion's</div>
                        <h2 className="a-section-title">More Than Recruitment &mdash; <span>A Long-Term Career Partner</span></h2>
                    </div>
                    <div className="a-why-grid">
                        <div className="a-why-card">
                            <div className="a-why-icon-wrap"><div className="a-why-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            </div></div>
                            <div className="a-why-content">
                                <h4 className="a-why-title">Personalized Career Guidance</h4>
                                <p className="a-why-desc">We take time to understand your background, aspirations, and career goals before recommending suitable opportunities.</p>
                            </div>
                        </div>
                        <div className="a-why-card">
                            <div className="a-why-icon-wrap"><div className="a-why-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div></div>
                            <div className="a-why-content">
                                <h4 className="a-why-title">Ethical Recruitment Practices</h4>
                                <p className="a-why-desc">We believe in transparency, fairness, and honest communication throughout the recruitment process.</p>
                            </div>
                        </div>
                        <div className="a-why-card">
                            <div className="a-why-icon-wrap"><div className="a-why-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            </div></div>
                            <div className="a-why-content">
                                <h4 className="a-why-title">Trusted Employer Network</h4>
                                <p className="a-why-desc">We work with verified employers who value professionalism and quality talent.</p>
                            </div>
                        </div>
                        <div className="a-why-card">
                            <div className="a-why-icon-wrap"><div className="a-why-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>
                            </div></div>
                            <div className="a-why-content">
                                <h4 className="a-why-title">End-to-End Support</h4>
                                <p className="a-why-desc">From your first inquiry to recruitment coordination, we aim to provide continuous guidance and assistance.</p>
                            </div>
                        </div>
                        <div className="a-why-card">
                            <div className="a-why-icon-wrap"><div className="a-why-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                            </div></div>
                            <div className="a-why-content">
                                <h4 className="a-why-title">Professional Communication</h4>
                                <p className="a-why-desc">Our team is committed to responding promptly, clearly, and professionally at every stage.</p>
                            </div>
                        </div>
                        <div className="a-why-card">
                            <div className="a-why-icon-wrap"><div className="a-why-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div></div>
                            <div className="a-why-content">
                                <h4 className="a-why-title">Candidate-Centered Approach</h4>
                                <p className="a-why-desc">Every recruitment journey is unique, and we strive to provide support that meets the individual needs of each candidate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. SIMPLE PATH */}
            <section className="a-path-section">
                <div className="a-container">
                    <div className="a-section-header">
                        <div className="a-eyebrow a-eyebrow-center">Simple Path</div>
                        <h2 className="a-section-title">A Simple and Transparent Recruitment Journey</h2>
                    </div>
                    <div className="a-path-grid">
                        <div className="a-path-card">
                            <div className="a-path-top">
                                <div className="a-path-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                                </div>
                                <div className="a-path-num">01</div>
                            </div>
                            <h4 className="a-path-title">Career Consultation</h4>
                            <p className="a-path-desc">We understand your goals and recommend suitable opportunities.</p>
                        </div>
                        <div className="a-path-card">
                            <div className="a-path-top">
                                <div className="a-path-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                </div>
                                <div className="a-path-num">02</div>
                            </div>
                            <h4 className="a-path-title">Profile Evaluation</h4>
                            <p className="a-path-desc">We review your qualifications and career background.</p>
                        </div>
                        <div className="a-path-card">
                            <div className="a-path-top">
                                <div className="a-path-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                </div>
                                <div className="a-path-num">03</div>
                            </div>
                            <h4 className="a-path-title">Application &amp; Screening</h4>
                            <p className="a-path-desc">Your profile is prepared for employer consideration.</p>
                        </div>
                        <div className="a-path-card">
                            <div className="a-path-top">
                                <div className="a-path-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                </div>
                                <div className="a-path-num">04</div>
                            </div>
                            <h4 className="a-path-title">Interview Coordination</h4>
                            <p className="a-path-desc">Qualified candidates are scheduled for interviews with employers.</p>
                        </div>
                        <div className="a-path-card">
                            <div className="a-path-top">
                                <div className="a-path-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" /><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" /></svg>
                                </div>
                                <div className="a-path-num">05</div>
                            </div>
                            <h4 className="a-path-title">Documentation Guidance</h4>
                            <p className="a-path-desc">We assist candidates with the required recruitment documentation.</p>
                        </div>
                        <div className="a-path-card">
                            <div className="a-path-top">
                                <div className="a-path-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2v20" /><path d="M2 12h20" /><path d="M12 2a15 15 0 0 1 6 10 15 15 0 0 1-6 10 15 15 0 0 1-6-10 15 15 0 0 1 6-10z" /></svg>
                                </div>
                                <div className="a-path-num">06</div>
                            </div>
                            <h4 className="a-path-title">Career Begins</h4>
                            <p className="a-path-desc">Successful candidates begin the next chapter of their international careers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. OUR PLEDGE */}
            <section className="a-pledge-section">
                <div className="a-container">
                    <div className="a-pledge-grid">
                        <div className="a-pledge-content">
                            <div className="a-eyebrow">Our Pledge</div>
                            <h2 className="a-hero-title">Built on Trust, Driven by Opportunity</h2>
                            <p className="a-hero-desc" style={{ fontWeight: 600 }}>At Ecofusion's Nautical Ventures, we are committed to delivering recruitment services with professionalism, honesty, and respect.</p>
                            <p className="a-hero-desc a-hero-desc-light">Our goal is not simply to help candidates apply for jobs&mdash;it is to provide meaningful guidance that supports long-term career growth and international opportunities.</p>
                            <p className="a-hero-desc a-hero-desc-light">Every interaction reflects our commitment to ethical recruitment, transparent communication, and candidate success.</p>
                        </div>
                        <div className="a-pledge-card-wrapper">
                            <div className="a-pledge-card">
                                <h3>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 24, height: 24, color: '#10b981', marginRight: 12 }}>
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                    Our Promise
                                </h3>
                                <p className="a-pledge-subtitle">WHEN YOU CHOOSE ECOFUSION'S NAUTICAL VENTURES, YOU CAN EXPECT:</p>
                                <ul className="a-pledge-list">
                                    <li><span className="a-check">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </span> Transparent communication throughout the recruitment process.</li>
                                    <li><span className="a-check">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </span> Professional guidance from experienced consultants.</li>
                                    <li><span className="a-check">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </span> Ethical recruitment practices.</li>
                                    <li><span className="a-check">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </span> Respect for your privacy and personal information.</li>
                                    <li><span className="a-check">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </span> Dedicated support whenever you need assistance.</li>
                                    <li><span className="a-check">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </span> A commitment to helping you pursue genuine international career opportunities.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. FAQ */}
            <section className="a-faq-section">
                <div className="a-container" style={{ maxWidth: '800px' }}>
                    <div className="a-section-header">
                        <div className="a-eyebrow a-eyebrow-center">FAQ</div>
                        <h2 className="a-section-title">Frequently Asked Questions</h2>
                    </div>
                    <div className="a-faq-list">
                        {[
                            { q: "Who can apply for your services?", a: "We work with candidates at various career stages looking for opportunities in the cruise, aviation, maritime, and security industries." },
                            { q: "Do you guarantee employment?", a: "While we have a strong network and high placement rate, employment depends on your qualifications, interview performance, and employer requirements." },
                            { q: "Which industries do you specialize in?", a: "We specialize in cruise ship staffing, aviation, merchant navy, and international security guard placements." },
                            { q: "Do you provide career guidance?", a: "Yes, we provide personalized guidance to help you choose the right path and prepare effectively for interviews and skills tests." },
                            { q: "How can I contact your team?", a: "You can reach us through our contact page, via email, or by giving us a call at our provided phone numbers." }
                        ].map((item, i) => (
                            <div className="a-faq-item-wrap" key={i}>
                                <div className="a-faq-q" onClick={() => toggleFaq(i)}>
                                    {item.q}
                                    <span>
                                        {openFaq === i ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        )}
                                    </span>
                                </div>
                                {openFaq === i && (
                                    <div className="a-faq-a">{item.a}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. CTA */}
            <section className="a-cta-section">
                <div className="a-cta-bg">
                    <div className="a-cta-overlay"></div>
                    <div className="a-cta-content">
                        <div className="a-cta-pill">READY TO BUILD YOUR INTERNATIONAL CAREER?</div>
                        <h2>Your Journey Starts Here</h2>
                        <p>Whether you're dreaming of working aboard a luxury cruise ship, joining a world-class airline, building a maritime career, or securing an international security role, Ecofusion's Nautical Ventures is here to help you move forward with confidence.</p>
                        <div className="a-cta-buttons">
                            <Link to="/services-cruise" className="a-btn-primary">FIND YOUR DREAM JOB</Link>
                            <Link to="/contact" className="a-btn-ghost">CONTACT OUR CAREER EXPERTS</Link>
                        </div>
                        <div className="a-cta-quote">
                            "At Ecofusion's Nautical Ventures, we don't just connect people with opportunities&mdash;we help them build careers that inspire growth, broaden horizons, and create lasting professional success. Together, let's take the next step toward your global future."
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
