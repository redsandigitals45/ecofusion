import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicesAviation.css';
import './About.css'; // For common styles like breadcrumb

export default function ServicesAviation() {
    const [openFaq, setOpenFaq] = useState(0);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? -1 : index);
    };

    return (
        <div className="sa-page">
            <div className="a-breadcrumb-bar">
                <div className="a-container" style={{ textAlign: 'left' }}>
                    <Link to="/">Home</Link>
                    <span className="a-sep">&gt;</span>
                    <Link to="/services">Services</Link>
                    <span className="a-sep">&gt;</span>
                    <span>Air Hostess & Cabin Crew</span>
                </div>
            </div>

            {/* OVERVIEW */}
            <section className="sa-overview-section">
                <div className="sa-container sa-overview-grid">
                    <div className="sa-overview-left">
                        <div className="sa-eyebrow">OVERVIEW</div>
                        <h1 className="sa-title">About This<br />Career Pathway</h1>
                    </div>
                    <div className="sa-overview-right">
                        <p>A career as an Air Hostess or Cabin Crew member is about much more than flying. It is a profession built on safety, professionalism, hospitality, and creating exceptional travel experiences for passengers.</p>
                        <p>Cabin crew members are responsible for ensuring passenger comfort, maintaining safety standards, assisting during emergencies, and representing their airline with confidence and professionalism.</p>
                        <p>Working in aviation allows you to experience different cultures, develop world-class customer service skills, and build a rewarding career with opportunities for international travel and long-term professional growth.</p>
                    </div>
                </div>
            </section>

            {/* ROLES */}
            <section className="sa-roles-section">
                <div className="sa-container">
                    <div className="sa-section-header">
                        <div className="sa-eyebrow">POSITIONS & ROLES</div>
                        <h2 className="sa-title">Key Roles & Responsibilities</h2>
                    </div>
                    <div className="sa-roles-grid">
                        {[
                            { num: '01', title: 'Passenger Assistance', desc: 'Welcome passengers onboard, assist with seating, answer questions, and ensure a comfortable and enjoyable journey from departure to arrival.' },
                            { num: '02', title: 'Safety Demonstrations', desc: 'Conduct safety demonstrations, explain emergency procedures, and ensure passengers understand onboard safety instructions.' },
                            { num: '03', title: 'In-Flight Service', desc: 'Serve meals, beverages, and refreshments while delivering professional and attentive customer service throughout the flight.' },
                            { num: '04', title: 'Emergency Response', desc: 'Remain prepared to respond calmly and professionally during unexpected situations while following airline safety procedures.' },
                            { num: '05', title: 'Cabin Preparation', desc: 'Prepare the aircraft cabin before boarding and ensure cleanliness, organization, and readiness for every flight.' },
                            { num: '06', title: 'Customer Experience', desc: 'Create a welcoming atmosphere by providing personalized service and maintaining the highest standards of hospitality.' }
                        ].map((role) => (
                            <div className="sa-role-card" key={role.num}>
                                <div className="sa-role-num">{role.num}</div>
                                <div className="sa-role-content">
                                    <h4 className="sa-role-title">{role.title}</h4>
                                    <p className="sa-role-desc">{role.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ELIGIBILITY */}
            <section className="sa-elig-section">
                <div className="sa-container">
                    <div className="sa-section-header">
                        <div className="sa-eyebrow">REQUIREMENTS</div>
                        <h2 className="sa-title">Eligibility & Application Criteria</h2>
                    </div>
                    <div className="sa-elig-grid">
                        <div className="sa-elig-card">
                            <div className="sa-elig-icon sa-elig-icon-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            </div>
                            <h4 className="sa-elig-title">Age Limit</h4>
                            <div className="sa-elig-subtitle">18 - 27 Years</div>
                            <p className="sa-elig-desc">Age requirements vary depending on the airline and recruitment program.</p>
                        </div>
                        <div className="sa-elig-card">
                            <div className="sa-elig-icon sa-elig-icon-purple">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
                            </div>
                            <h4 className="sa-elig-title">Educational Criteria</h4>
                            <div className="sa-elig-subtitle">High School / Diploma / Graduate</div>
                            <p className="sa-elig-desc">Educational qualifications depend on the airline's hiring criteria.</p>
                        </div>
                        <div className="sa-elig-card">
                            <div className="sa-elig-icon sa-elig-icon-teal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div>
                            <h4 className="sa-elig-title">Work Experience</h4>
                            <div className="sa-elig-subtitle">Freshers & Experienced Candidates</div>
                            <p className="sa-elig-desc">Many airlines recruit fresh candidates, while premium airlines may prefer previous customer service or hospitality experience.</p>
                        </div>
                        <div className="sa-elig-card">
                            <div className="sa-elig-icon sa-elig-icon-orange">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            </div>
                            <h4 className="sa-elig-title">Language Skills</h4>
                            <div className="sa-elig-subtitle">Fluent English Communication</div>
                            <p className="sa-elig-desc">Strong verbal communication skills are essential. Additional languages are an added advantage.</p>
                        </div>
                        <div className="sa-elig-card">
                            <div className="sa-elig-icon sa-elig-icon-red">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                            </div>
                            <h4 className="sa-elig-title">Physical & Medical</h4>
                            <div className="sa-elig-subtitle">Medically Fit</div>
                            <p className="sa-elig-desc">Candidates must meet the medical and fitness standards established by the airline.</p>
                        </div>
                        <div className="sa-elig-card">
                            <div className="sa-elig-icon sa-elig-icon-cyan">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            </div>
                            <h4 className="sa-elig-title">Document Readiness</h4>
                            <div className="sa-elig-subtitle">Valid Passport Preferred</div>
                            <p className="sa-elig-desc">A valid passport is generally required before final documentation and international travel.</p>
                        </div>
                        <div className="sa-elig-card">
                            <div className="sa-elig-icon sa-elig-icon-pink">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            </div>
                            <h4 className="sa-elig-title">Special Requirements</h4>
                            <div className="sa-elig-subtitle">Confident, Well Groomed & Customer Focused</div>
                            <p className="sa-elig-desc">Candidates should demonstrate excellent communication skills, a positive attitude, professional grooming, teamwork, and a strong commitment to customer service.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* EARNINGS */}
            <section className="sa-earn-section">
                <div className="sa-container sa-earn-grid">
                    <div>
                        <div className="sa-eyebrow">EARNINGS</div>
                        <h2 className="sa-title" style={{ fontSize: '36px' }}>Compensation & Benefits</h2>
                        <p className="sa-earn-desc">International airlines offer competitive salary packages along with comprehensive employee benefits designed to support cabin crew members throughout their careers.</p>

                        <div className="sa-salary-card">
                            <div className="sa-salary-eyebrow">ESTIMATED MONTHLY SALARY</div>
                            <div className="sa-salary-amount" style={{ fontSize: '32px' }}>AED 8,000 - AED 16,000<br /><span style={{ fontSize: '24px', fontWeight: '800' }}>/ Month</span></div>

                            <div className="sa-salary-row">
                                <span className="sa-salary-label">Income Tax</span>
                                <span className="sa-salary-val green">0% (Tax-Free)</span>
                            </div>
                            <div className="sa-salary-row">
                                <span className="sa-salary-label">Allowances</span>
                                <span className="sa-salary-val">As per contract</span>
                            </div>
                            <div className="sa-salary-row" style={{ marginBottom: '24px' }}>
                                <span className="sa-salary-label">Overtime Benefits</span>
                                <span className="sa-salary-val">Full coverage</span>
                            </div>

                            <div className="sa-salary-footer">
                                Salary packages vary depending on the airline, destination network, experience, and employment contract.
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="sa-benefits-header">Benefits Included</div>
                        <div className="sa-benefits-grid">
                            {[
                                { title: 'Competitive Monthly Salary', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 12 12 8 8 12" /><line x1="12" y1="16" x2="12" y2="8" /></svg> },
                                { title: 'Daily Layover & Meal Allowances', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></svg> },
                                { title: 'Medical Insurance', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 5h-2V3a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" /><path d="M12 9v6" /><path d="M9 12h6" /></svg> },
                                { title: 'Professional Cabin Crew Training', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" /><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" /></svg> },
                                { title: 'Discounted or Complimentary Air Travel', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 3L6 14.5 3.5 14 2 15.5 4 19l3.5 2L9 19.5 13 18l3 6l1.2-.7c.4-.2.7-.6.6-1.1z" /></svg> },
                                { title: 'Annual Paid Leave', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><path d="M9 16l2 2 4-4" /></svg> },
                                { title: 'International Career Growth', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> },
                                { title: 'Performance-Based Incentives', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="14" rx="2" ry="2" /><line x1="12" y1="8" x2="12" y2="22" /><path d="M19 8a5 5 0 0 0-10 0" /><path d="M5 8a5 5 0 0 1 10 0" /></svg> }
                            ].map((ben, i) => (
                                <div className="sa-benefit-card" key={i}>
                                    <div className="sa-benefit-icon">{ben.icon}</div>
                                    <div className="sa-benefit-content">
                                        <h4>{ben.title}</h4>
                                        <p>Provided by Employer</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="sa-benefits-note">* Benefits vary according to airline policies and employment contracts.</div>
                    </div>
                </div>
            </section>

            {/* PATHWAY */}
            <section className="sa-path-section">
                <div className="sa-container">
                    <div className="sa-section-header">
                        <div className="sa-eyebrow">CAREER GROWTH</div>
                        <h2 className="sa-title">Career Growth Pathway</h2>
                        <p style={{ maxWidth: '600px', margin: '16px auto 0', color: '#666', lineHeight: '1.6' }}>
                            The aviation industry provides structured career progression, allowing dedicated cabin crew members to advance into leadership and management positions through experience, performance, and continuous development.
                        </p>
                    </div>

                    <div className="sa-path-wrapper">
                        <div className="sa-path-card">
                            <div className="sa-path-header">
                                <div className="sa-path-badge">ENTRY LEVEL</div>
                                <div className="sa-path-num">01</div>
                            </div>
                            <h4 className="sa-path-title">Cabin Crew Member</h4>
                            <p className="sa-path-desc">Begin your aviation career by delivering exceptional passenger service while learning airline procedures and international safety standards.</p>
                            <div className="sa-path-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></div>
                        </div>

                        <div className="sa-path-card">
                            <div className="sa-path-header">
                                <div className="sa-path-badge">MID LEVEL</div>
                                <div className="sa-path-num">02</div>
                            </div>
                            <h4 className="sa-path-title">Senior Cabin Crew</h4>
                            <p className="sa-path-desc">Support junior crew members, assist flight leadership, and maintain high service standards throughout every flight.</p>
                            <div className="sa-path-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></div>
                        </div>

                        <div className="sa-path-card">
                            <div className="sa-path-header">
                                <div className="sa-path-badge">LEADERSHIP</div>
                                <div className="sa-path-num">03</div>
                            </div>
                            <h4 className="sa-path-title">Cabin Supervisor</h4>
                            <p className="sa-path-desc">Lead cabin operations, coordinate crew responsibilities, and ensure smooth passenger service and regulatory compliance.</p>
                            <div className="sa-path-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></div>
                        </div>

                        <div className="sa-path-card">
                            <div className="sa-path-header">
                                <div className="sa-path-badge">MANAGEMENT</div>
                                <div className="sa-path-num">04</div>
                            </div>
                            <h4 className="sa-path-title">Cabin Services Manager</h4>
                            <p className="sa-path-desc">Oversee cabin crew operations, training, service quality, and operational excellence across airline routes.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQ SECTION */}
            <section className="sa-faq-section">
                <div className="sa-container">
                    <div className="sa-faq-header">
                        <div className="sa-eyebrow">FAQ</div>
                        <h2 className="sa-title">Frequently Asked Questions</h2>
                    </div>
                    <div className="sa-faq-list">
                        {[
                            { q: 'Can freshers apply for cabin crew jobs?', a: 'Yes, many leading airlines proactively recruit freshers who possess excellent communication skills, a positive attitude, and a strong customer service orientation.' },
                            { q: 'Is previous airline experience required?', a: 'No, previous airline experience is not strictly required for entry-level positions, though experience in hospitality or customer service is a plus.' },
                            { q: 'What educational qualification is required?', a: 'A high school diploma or equivalent is the basic minimum, though some premium international airlines may prefer candidates with a college degree.' },
                            { q: 'Is English communication mandatory?', a: 'Yes, fluent spoken and written English is mandatory for safety and passenger communication. Proficiency in additional languages is highly desirable.' },
                            { q: 'What is the ideal age for cabin crew recruitment?', a: 'The ideal age typically ranges between 18 and 27 years, though this can vary slightly depending on specific airline recruitment policies.' }
                        ].map((faq, i) => (
                            <div className="sa-faq-item-wrap" key={i}>
                                <div className="sa-faq-q" onClick={() => toggleFaq(i)}>
                                    <span>{faq.q}</span>
                                    <span className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)' }}>
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </span>
                                </div>
                                {openFaq === i && (
                                    <div className="sa-faq-a">{faq.a}</div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="sa-faq-action">
                        <Link to="#" className="sa-btn-solid">SHOW ALL FAQS</Link>
                    </div>
                </div>
            </section>

            {/* RELATED CAREERS */}
            <section className="sa-related-section">
                <div className="sa-container">
                    <div className="sa-eyebrow" style={{ marginBottom: '12px' }}>RELATED CAREERS</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                        <h2 className="sa-title" style={{ maxWidth: '400px' }}>Explore Similar Career Opportunities</h2>
                        <p style={{ maxWidth: '400px', color: '#666', fontSize: '15px', lineHeight: '1.6' }}>Discover other premium recruitment pathways and global placements coordinated by Ecofusion's Nautical Ventures.</p>
                    </div>

                    <div className="sa-related-grid">
                        <div className="sa-related-card">
                            <div className="sa-related-img">
                                <span className="sa-related-badge">CRUISE LINE PLACEMENT</span>
                                <img src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=600&q=80" alt="Cruise Ship" />
                            </div>
                            <div className="sa-related-content">
                                <h4 className="sa-related-title">Cruise Ship Careers</h4>
                                <p className="sa-related-desc">Set sail on an exciting international career aboard luxury cruise ships. Work alongside global professionals, deliver unforgettable guest experiences, explore breathtaking destinations, and build a rewarding future while traveling the world.</p>
                                <Link to="/services-cruise" className="sa-related-link">Explore Career Path <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></Link>
                            </div>
                        </div>

                        <div className="sa-related-card">
                            <div className="sa-related-img">
                                <span className="sa-related-badge">MERCHANT NAVY CAREERS</span>
                                <img src="https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&w=600&q=80" alt="Merchant Navy" />
                            </div>
                            <div className="sa-related-content">
                                <h4 className="sa-related-title">Merchant Navy Careers</h4>
                                <p className="sa-related-desc">Embark on a rewarding maritime career with leading international shipping companies. Work aboard modern commercial vessels, travel across global trade routes, gain valuable international experience, and build a stable career in one of the world's most essential industries.</p>
                                <Link to="/services-merchant" className="sa-related-link">Explore Career Path <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></Link>
                            </div>
                        </div>

                        <div className="sa-related-card">
                            <div className="sa-related-img">
                                <span className="sa-related-badge">INTERNATIONAL SECURITY CAREERS</span>
                                <img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" alt="Security Guard" />
                            </div>
                            <div className="sa-related-content">
                                <h4 className="sa-related-title">Security Guard Careers</h4>
                                <p className="sa-related-desc">Step into a profession built on responsibility, discipline, and trust. Work with internationally recognized organizations across airports, commercial facilities, hospitality, logistics, industrial sites, and private institutions while building a stable and rewarding career.</p>
                                <Link to="/services-security" className="sa-related-link">Explore Career Path <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="sa-cta-section">
                <div className="sa-cta-overlay"></div>
                <div className="sa-cta-content">
                    <div className="sa-cta-eyebrow">YOUR FUTURE AWAITS</div>
                    <h2 className="sa-cta-title">Begin Your Global Career Journey</h2>
                    <p className="sa-cta-desc">
                        Your dream of working with an international airline starts with the right opportunity and the right guidance. At Ecofusion's Nautical Ventures, we are committed to helping aspiring aviation professionals prepare for rewarding careers with leading airlines through ethical recruitment, transparent communication, and personalized support. Whether you're taking your first step toward becoming cabin crew or advancing your aviation career, we're here to help you move forward with confidence.
                    </p>
                    <div className="sa-cta-buttons">
                        <Link to="#" className="sa-btn-primary">FIND YOUR DREAM JOB <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></Link>
                        <Link to="#" className="sa-btn-outline">BOOK FREE CONSULTATION</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
