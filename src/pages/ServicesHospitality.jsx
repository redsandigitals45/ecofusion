import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicesHospitality.css';
import './About.css'; // For common styles like breadcrumb

export default function ServicesHospitality() {
    const [openFaq, setOpenFaq] = useState(0);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? -1 : index);
    };

    return (
        <div className="sh-page">
            <div className="a-breadcrumb-bar">
                <div className="a-container" style={{ textAlign: 'left' }}>
                    <Link to="/">Home</Link>
                    <span className="a-sep">&gt;</span>
                    <Link to="/services">Services</Link>
                    <span className="a-sep">&gt;</span>
                    <span>Hospitality Management</span>
                </div>
            </div>

            {/* OVERVIEW */}
            <section className="sh-overview-section">
                <div className="sh-container sh-overview-grid">
                    <div className="sh-overview-left">
                        <div className="sh-eyebrow">OVERVIEW</div>
                        <h1 className="sh-title">About This<br />Career Pathway</h1>
                    </div>
                    <div className="sh-overview-right">
                        <p>A career in Hospitality Management is built on a foundation of exceptional guest service, operational excellence, and cultural understanding. It spans across global hotels, luxury resorts, and specialized accommodations.</p>
                        <p>Hospitality professionals are the face of the organization, responsible for ensuring that every guest interaction is welcoming, efficient, and deeply memorable. From the front desk to culinary services, teamwork is the heartbeat of a successful property.</p>
                        <p>Working in this dynamic industry allows you to connect with people from around the world, develop world-class service skills, and build a rewarding career with vast opportunities for international placement and long-term professional growth.</p>
                    </div>
                </div>
            </section>

            {/* ROLES */}
            <section className="sh-roles-section">
                <div className="sh-container">
                    <div className="sh-section-header">
                        <div className="sh-eyebrow">POSITIONS & ROLES</div>
                        <h2 className="sh-title">Key Roles & Responsibilities</h2>
                    </div>
                    <div className="sh-roles-grid">
                        {[
                            { num: '01', title: 'Front Office & Reception', desc: 'Welcome guests, manage smooth check-ins and check-outs, handle reservations, and serve as the primary point of contact for guest inquiries.' },
                            { num: '02', title: 'Food & Beverage Service', desc: 'Deliver exceptional dining experiences in restaurants, banquets, and in-room dining, maintaining high standards of quality and hygiene.' },
                            { num: '03', title: 'Guest Relations', desc: 'Anticipate guest needs, handle special requests, coordinate VIP arrivals, and ensure maximum satisfaction during the stay.' },
                            { num: '04', title: 'Housekeeping Operations', desc: 'Ensure impeccable cleanliness, comfort, and aesthetic presentation of guest rooms and public areas across the property.' },
                            { facility: '05', title: 'Event & Banquet Operations', desc: 'Plan and execute conferences, weddings, and corporate events with precision, coordinating seamlessly across hotel departments.' },
                            { num: '06', title: 'Spa & Recreation', desc: 'Provide wellness and leisure services, managing fitness centers, pools, and spa facilities to enhance the overall guest experience.' }
                        ].map((role, i) => (
                            <div className="sh-role-card" key={i}>
                                <div className="sh-role-num">{role.num || role.facility}</div>
                                <div className="sh-role-content">
                                    <h4 className="sh-role-title">{role.title}</h4>
                                    <p className="sh-role-desc">{role.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ELIGIBILITY */}
            <section className="sh-elig-section">
                <div className="sh-container">
                    <div className="sh-section-header">
                        <div className="sh-eyebrow">REQUIREMENTS</div>
                        <h2 className="sh-title">Eligibility & Application Criteria</h2>
                    </div>
                    <div className="sh-elig-grid">
                        <div className="sh-elig-card">
                            <div className="sh-elig-icon sh-elig-icon-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            </div>
                            <h4 className="sh-elig-title">Age Limit</h4>
                            <div className="sh-elig-subtitle">18 - 30 Years</div>
                            <p className="sh-elig-desc">General age requirements for entry-level positions, though this varies by role and region.</p>
                        </div>
                        <div className="sh-elig-card">
                            <div className="sh-elig-icon sh-elig-icon-purple">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
                            </div>
                            <h4 className="sh-elig-title">Educational Criteria</h4>
                            <div className="sh-elig-subtitle">High School / Degree / Diploma</div>
                            <p className="sh-elig-desc">A diploma or degree in Hotel Management is preferred by premium brands.</p>
                        </div>
                        <div className="sh-elig-card">
                            <div className="sh-elig-icon sh-elig-icon-teal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div>
                            <h4 className="sh-elig-title">Work Experience</h4>
                            <div className="sh-elig-subtitle">Freshers Welcome</div>
                            <p className="sh-elig-desc">Many properties hire freshers, while supervisory roles require previous hospitality experience.</p>
                        </div>
                        <div className="sh-elig-card">
                            <div className="sh-elig-icon sh-elig-icon-orange">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            </div>
                            <h4 className="sh-elig-title">Language Skills</h4>
                            <div className="sh-elig-subtitle">Fluent English & Local Languages</div>
                            <p className="sh-elig-desc">Strong communication skills are essential. Multilingual candidates have a distinct advantage.</p>
                        </div>
                        <div className="sh-elig-card">
                            <div className="sh-elig-icon sh-elig-icon-red">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                            </div>
                            <h4 className="sh-elig-title">Physical & Medical</h4>
                            <div className="sh-elig-subtitle">Medically Fit</div>
                            <p className="sh-elig-desc">Must be able to handle active shifts and meet standard fitness requirements of the property.</p>
                        </div>
                        <div className="sh-elig-card">
                            <div className="sh-elig-icon sh-elig-icon-cyan">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            </div>
                            <h4 className="sh-elig-title">Document Readiness</h4>
                            <div className="sh-elig-subtitle">Valid ID & Background Clearance</div>
                            <p className="sh-elig-desc">Standard identification and clear background checks are required for luxury hotel employment.</p>
                        </div>
                        <div className="sh-elig-card">
                            <div className="sh-elig-icon sh-elig-icon-pink">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            </div>
                            <h4 className="sh-elig-title">Special Requirements</h4>
                            <div className="sh-elig-subtitle">Impeccable Grooming & Etiquette</div>
                            <p className="sh-elig-desc">Candidates must adhere to strict personal presentation standards and demonstrate a polite, empathetic attitude.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* EARNINGS */}
            <section className="sh-earn-section">
                <div className="sh-container sh-earn-grid">
                    <div>
                        <div className="sh-eyebrow">EARNINGS</div>
                        <h2 className="sh-title" style={{ fontSize: '36px' }}>Compensation & Benefits</h2>
                        <p className="sh-earn-desc">The hospitality industry provides structured salary packages along with extensive employee benefits designed to support staff across different property brands.</p>

                        <div className="sh-salary-card">
                            <div className="sh-salary-eyebrow">ESTIMATED MONTHLY SALARY</div>
                            <div className="sh-salary-amount" style={{ fontSize: '32px' }}>Competitive &<br />Brand Based</div>

                            <div className="sh-salary-row">
                                <span className="sh-salary-label">Base Salary</span>
                                <span className="sh-salary-val green">As per standard</span>
                            </div>
                            <div className="sh-salary-row">
                                <span className="sh-salary-label">Service Charge</span>
                                <span className="sh-salary-val">Varies by hotel</span>
                            </div>
                            <div className="sh-salary-row" style={{ marginBottom: '24px' }}>
                                <span className="sh-salary-label">Performance Bonus</span>
                                <span className="sh-salary-val">Role dependent</span>
                            </div>

                            <div className="sh-salary-footer">
                                Salary packages vary heavily depending on the hotel brand, location (domestic vs international), and position.
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="sh-benefits-header">Benefits Included</div>
                        <div className="sh-benefits-grid">
                            {[
                                { title: 'Duty Meals Provided', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></svg> },
                                { title: 'Uniform & Laundry', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
                                { title: 'Medical Insurance', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 5h-2V3a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" /><path d="M12 9v6" /><path d="M9 12h6" /></svg> },
                                { title: 'Brand Training Programs', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" /><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" /></svg> },
                                { title: 'Staff Room Discounts', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg> },
                                { title: 'Paid Annual Leave', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 16l2 2 4-4" /></svg> },
                                { title: 'Cross-Training Opportunities', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> },
                                { title: 'Global Transfer Options', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 3L6 14.5 3.5 14 2 15.5 4 19l3.5 2L9 19.5 13 18l3 6l1.2-.7c.4-.2.7-.6.6-1.1z" /></svg> }
                            ].map((ben, i) => (
                                <div className="sh-benefit-card" key={i}>
                                    <div className="sh-benefit-icon">{ben.icon}</div>
                                    <div className="sh-benefit-content">
                                        <h4>{ben.title}</h4>
                                        <p>Provided by Employer</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="sh-benefits-note">* Benefits vary according to specific hospitality brand policies.</div>
                    </div>
                </div>
            </section>

            {/* PATHWAY */}
            <section className="sh-path-section">
                <div className="sh-container">
                    <div className="sh-section-header">
                        <div className="sh-eyebrow">CAREER GROWTH</div>
                        <h2 className="sh-title">Career Growth Pathway</h2>
                        <p style={{ maxWidth: '600px', margin: '16px auto 0', color: '#666', lineHeight: '1.6' }}>
                            The hospitality industry provides structured career progression, allowing dedicated professionals to advance into leadership and management positions through experience, cross-training, and continuous development across properties.
                        </p>
                    </div>

                    <div className="sh-path-wrapper">
                        <div className="sh-path-card">
                            <div className="sh-path-header">
                                <div className="sh-path-badge">ENTRY LEVEL</div>
                                <div className="sh-path-num">01</div>
                            </div>
                            <h4 className="sh-path-title">Associate / Assistant</h4>
                            <p className="sh-path-desc">Begin your hospitality career by mastering frontline guest service, departmental operations, and property standards.</p>
                            <div className="sh-path-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></div>
                        </div>

                        <div className="sh-path-card">
                            <div className="sh-path-header">
                                <div className="sh-path-badge">MID LEVEL</div>
                                <div className="sh-path-num">02</div>
                            </div>
                            <h4 className="sh-path-title">Supervisor</h4>
                            <p className="sh-path-desc">Lead shift teams, handle escalations, monitor quality standards, and train new associates within your department.</p>
                            <div className="sh-path-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></div>
                        </div>

                        <div className="sh-path-card">
                            <div className="sh-path-header">
                                <div className="sh-path-badge">LEADERSHIP</div>
                                <div className="sh-path-num">03</div>
                            </div>
                            <h4 className="sh-path-title">Department Manager</h4>
                            <p className="sh-path-desc">Oversee entire departmental operations, budgets, team performance, and strategic guest experience initiatives.</p>
                            <div className="sh-path-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></div>
                        </div>

                        <div className="sh-path-card">
                            <div className="sh-path-header">
                                <div className="sh-path-badge">MANAGEMENT</div>
                                <div className="sh-path-num">04</div>
                            </div>
                            <h4 className="sh-path-title">General / Resident Manager</h4>
                            <p className="sh-path-desc">Lead the entire property, ensuring brand consistency, profitability, and unparalleled guest satisfaction.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="sh-faq-section">
                <div className="sh-container">
                    <div className="sh-faq-header">
                        <div className="sh-eyebrow">FAQ</div>
                        <h2 className="sh-title">Frequently Asked Questions</h2>
                    </div>
                    <div className="sh-faq-list">
                        {[
                            { q: 'Can I join the hospitality industry without a hotel management degree?', a: 'Yes! While a degree is advantageous, many entry-level roles welcome candidates with strong communication, interpersonal skills, and a positive attitude.' },
                            { q: 'Are there opportunities for international placement?', a: 'Absolutely. Many global hospitality brands encourage internal transfers and cross-training, allowing employees to work at properties worldwide.' },
                            { q: 'Do hotels provide accommodation for staff?', a: 'It depends on the location and property. Resort properties often provide staff housing, whereas city hotels typically provide duty meals and uniform allowances.' },
                            { q: 'Is hospitality only about working at the front desk?', a: 'No, the industry encompasses a vast range of departments including Food & Beverage, Housekeeping, Sales & Marketing, Events, Spa, and Administration.' },
                            { q: 'How important are language skills?', a: 'Extremely important. Proficiency in English is typically required, and knowing additional languages gives you a significant advantage in international properties.' }
                        ].map((faq, i) => (
                            <div className="sh-faq-item-wrap" key={i}>
                                <div className="sh-faq-q" onClick={() => toggleFaq(i)}>
                                    <span>{faq.q}</span>
                                    <span className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)' }}>
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </span>
                                </div>
                                {openFaq === i && (
                                    <div className="sh-faq-a">{faq.a}</div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="sh-faq-action">
                        <Link to="#" className="sh-btn-solid">SHOW ALL FAQS</Link>
                    </div>
                </div>
            </section>

            {/* RELATED CAREERS */}
            <section className="sh-related-section">
                <div className="sh-container">
                    <div className="sh-eyebrow" style={{ marginBottom: '12px' }}>RELATED CAREERS</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                        <h2 className="sh-title" style={{ maxWidth: '400px' }}>Explore Similar Career Opportunities</h2>
                        <p style={{ maxWidth: '400px', color: '#666', fontSize: '15px', lineHeight: '1.6' }}>Discover other premium recruitment pathways and global placements coordinated by Ecofusion's Nautical Ventures.</p>
                    </div>

                    <div className="sh-related-grid">
                        <div className="sh-related-card">
                            <div className="sh-related-img">
                                <span className="sh-related-badge">AVIATION CAREERS</span>
                                <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80" alt="Aviation" />
                            </div>
                            <div className="sh-related-content">
                                <h4 className="sh-related-title">Air Hostess & Cabin Crew</h4>
                                <p className="sh-related-desc">Soar to new heights with a rewarding career in aviation. Deliver top-tier passenger experiences, ensure in-flight safety, and represent premier airlines while exploring the globe.</p>
                                <Link to="/services-aviation" className="sh-related-link">Explore Career Path <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></Link>
                            </div>
                        </div>

                        <div className="sh-related-card">
                            <div className="sh-related-img">
                                <span className="sh-related-badge">CRUISE LINE PLACEMENT</span>
                                <img src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=600&q=80" alt="Cruise Ship" />
                            </div>
                            <div className="sh-related-content">
                                <h4 className="sh-related-title">Cruise Ship Careers</h4>
                                <p className="sh-related-desc">Set sail on an exciting international career aboard luxury cruise ships. Work alongside global professionals, deliver unforgettable guest experiences, and explore breathtaking destinations.</p>
                                <Link to="/services-cruise" className="sh-related-link">Explore Career Path <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></Link>
                            </div>
                        </div>

                        <div className="sh-related-card">
                            <div className="sh-related-img">
                                <span className="sh-related-badge">MERCHANT NAVY CAREERS</span>
                                <img src="https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&w=600&q=80" alt="Merchant Navy" />
                            </div>
                            <div className="sh-related-content">
                                <h4 className="sh-related-title">Merchant Navy Careers</h4>
                                <p className="sh-related-desc">Embark on a rewarding maritime career with leading international shipping companies. Travel across global trade routes, gain valuable international experience, and build a stable career.</p>
                                <Link to="/services-merchant" className="sh-related-link">Explore Career Path <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="sh-cta-section">
                <div className="sh-cta-overlay"></div>
                <div className="sh-cta-content">
                    <div className="sh-cta-eyebrow">YOUR EXCELLENCE AWAITS</div>
                    <h2 className="sh-cta-title">Start Your Journey in Hospitality</h2>
                    <p className="sh-cta-desc">
                        A fulfilling career in luxury hotels and resorts begins with the right preparation and placement network. At Ecofusion's Nautical Ventures, we specialize in connecting passionate hospitality professionals with premium properties worldwide. Whether you are stepping into your first guest service role or advancing into hotel management, we provide the guidance, connections, and support needed to accelerate your career.
                    </p>
                    <div className="sh-cta-buttons">
                        <Link to="#" className="sh-btn-primary">FIND YOUR DREAM ROLE <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></Link>
                        <Link to="#" className="sh-btn-outline">BOOK FREE CONSULTATION</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
