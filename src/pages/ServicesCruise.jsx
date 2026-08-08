import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicesCruise.css';
import './About.css'; // For common styles like breadcrumb

export default function ServicesCruise() {
    const [faqOpen, setFaqOpen] = useState(null);

    const toggleFaq = (idx) => {
        setFaqOpen(faqOpen === idx ? null : idx);
    };
    return (
        <div className="sc-page">
            <div className="a-breadcrumb-bar">
                <div className="a-container" style={{ textAlign: 'left' }}>
                    <Link to="/">Home</Link>
                    <span className="a-sep">&gt;</span>
                    <Link to="/services">Services</Link>
                    <span className="a-sep">&gt;</span>
                    <span>Cruise Ship Careers</span>
                </div>
            </div>

            {/* OVERVIEW */}
            <section className="sc-overview-section">
                <div className="sc-container sc-overview-grid">
                    <div className="sc-overview-left">
                        <div className="sc-eyebrow">OVERVIEW</div>
                        <h1 className="sc-title">About This<br />Career Pathway</h1>
                    </div>
                    <div className="sc-overview-right">
                        <p>A cruise ship career combines hospitality, travel, and professional growth in one exciting opportunity. Modern cruise ships operate like floating luxury resorts, offering careers across guest services, hospitality, culinary, housekeeping, retail, wellness, and entertainment.</p>
                        <p>Working onboard gives you the opportunity to develop internationally recognized skills, work with multicultural teams, meet people from around the world, and gain valuable experience while visiting incredible destinations.</p>
                        <p>Whether you're starting your first international job or looking to advance your hospitality career, cruise ships offer a unique environment where learning, growth, and adventure come together.</p>
                    </div>
                </div>
            </section>

            {/* ROLES */}
            <section className="sc-roles-section">
                <div className="sc-container">
                    <div className="sc-section-header">
                        <div className="sc-eyebrow">POSITIONS & ROLES</div>
                        <h2 className="sc-title">Key Roles & Responsibilities</h2>
                    </div>
                    <div className="sc-roles-grid">
                        {[
                            { num: '01', title: 'Guest Services', desc: 'Welcome guests, assist with check-in, answer inquiries, manage reservations, and deliver exceptional customer service throughout the voyage.' },
                            { num: '02', title: 'Housekeeping', desc: 'Maintain guest cabins and public areas to the highest cleanliness standards while ensuring passenger comfort and satisfaction.' },
                            { num: '03', title: 'Food & Beverage', desc: 'Provide professional dining service across restaurants, cafés, lounges, buffets, and specialty dining venues.' },
                            { num: '04', title: 'Culinary Team', desc: 'Prepare and present high-quality meals while maintaining international food safety and hygiene standards.' },
                            { num: '05', title: 'Retail & Duty-Free', desc: 'Assist guests with onboard shopping, product recommendations, and luxury retail services.' },
                            { num: '06', title: 'Spa & Wellness', desc: 'Deliver wellness, beauty, and relaxation services while creating memorable guest experiences.' }
                        ].map((role) => (
                            <div className="sc-role-card" key={role.num}>
                                <div className="sc-role-num">{role.num}</div>
                                <div className="sc-role-content">
                                    <h4 className="sc-role-title">{role.title}</h4>
                                    <p className="sc-role-desc">{role.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ELIGIBILITY */}
            <section className="sc-elig-section">
                <div className="sc-container">
                    <div className="sc-section-header">
                        <div className="sc-eyebrow">REQUIREMENTS</div>
                        <h2 className="sc-title">Eligibility & Application Criteria</h2>
                    </div>
                    <div className="sc-elig-grid">
                        <div className="sc-elig-card">
                            <div className="sc-elig-icon sc-elig-icon-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            </div>
                            <h4 className="sc-elig-title">Age Limit</h4>
                            <div className="sc-elig-subtitle">18 - 35 Years</div>
                            <p className="sc-elig-desc">Applicants should meet the employer's minimum age requirement.</p>
                        </div>
                        <div className="sc-elig-card">
                            <div className="sc-elig-icon sc-elig-icon-purple">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
                            </div>
                            <h4 className="sc-elig-title">Educational Criteria</h4>
                            <div className="sc-elig-subtitle">High School, Diploma or Graduate</div>
                            <p className="sc-elig-desc">Educational requirements depend on the position and employer.</p>
                        </div>
                        <div className="sc-elig-card">
                            <div className="sc-elig-icon sc-elig-icon-teal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div>
                            <h4 className="sc-elig-title">Work Experience</h4>
                            <div className="sc-elig-subtitle">Freshers & Experienced Candidates</div>
                            <p className="sc-elig-desc">Entry-level opportunities are available, while some positions may require relevant experience.</p>
                        </div>
                        <div className="sc-elig-card">
                            <div className="sc-elig-icon sc-elig-icon-orange">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            </div>
                            <h4 className="sc-elig-title">Language Skills</h4>
                            <div className="sc-elig-subtitle">Basic English Communication</div>
                            <p className="sc-elig-desc">Candidates should be comfortable communicating professionally in English.</p>
                        </div>
                        <div className="sc-elig-card">
                            <div className="sc-elig-icon sc-elig-icon-red">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                            </div>
                            <h4 className="sc-elig-title">Physical & Medical</h4>
                            <div className="sc-elig-subtitle">Medically Fit</div>
                            <p className="sc-elig-desc">Applicants must satisfy the medical fitness standards required for international employment.</p>
                        </div>
                        <div className="sc-elig-card">
                            <div className="sc-elig-icon sc-elig-icon-cyan">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            </div>
                            <h4 className="sc-elig-title">Document Readiness</h4>
                            <div className="sc-elig-subtitle">Preferred</div>
                            <p className="sc-elig-desc">A valid passport is recommended before final documentation and travel arrangements.</p>
                        </div>
                        <div className="sc-elig-card">
                            <div className="sc-elig-icon sc-elig-icon-pink">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            </div>
                            <h4 className="sc-elig-title">Special Requirements</h4>
                            <div className="sc-elig-subtitle">Positive Attitude & Teamwork</div>
                            <p className="sc-elig-desc">Strong interpersonal skills, customer service orientation, adaptability, and willingness to work in a multicultural environment.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* EARNINGS */}
            <section className="sc-earn-section">
                <div className="sc-container sc-earn-grid">
                    <div>
                        <div className="sc-eyebrow">EARNINGS</div>
                        <h2 className="sc-title" style={{ fontSize: '36px' }}>Competitive Salary & Employee Benefits</h2>
                        <p className="sc-earn-desc">Cruise ship careers offer attractive earning potential along with a comprehensive range of employee benefits designed to support crew members throughout their contract.</p>

                        <div className="sc-salary-card">
                            <div className="sc-salary-eyebrow">ESTIMATED MONTHLY SALARY</div>
                            <div className="sc-salary-amount">$1,800 - $4,500 / Month</div>

                            <div className="sc-salary-row">
                                <span className="sc-salary-label">Income Tax</span>
                                <span className="sc-salary-val green">0% (Tax-Free)</span>
                            </div>
                            <div className="sc-salary-row">
                                <span className="sc-salary-label">Allowances</span>
                                <span className="sc-salary-val">As per contract</span>
                            </div>
                            <div className="sc-salary-row" style={{ marginBottom: '24px' }}>
                                <span className="sc-salary-label">Overtime Benefits</span>
                                <span className="sc-salary-val">Full coverage</span>
                            </div>

                            <div className="sc-salary-footer">
                                Salary packages vary depending on employer, department, position, experience, and qualifications.
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="sc-benefits-header">Benefits Included</div>
                        <div className="sc-benefits-grid">
                            {[
                                { title: 'Accommodation Provided', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
                                { title: 'Daily Meals', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></svg> },
                                { title: 'Medical Assistance', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 5h-2V3a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" /><path d="M12 9v6" /><path d="M9 12h6" /></svg> },
                                { title: 'Professional Training', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" /><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" /></svg> },
                                { title: 'International Work Experience', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> },
                                { title: 'Career Development', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> },
                                { title: 'Paid Leave (Employer Policy)', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><path d="M9 16l2 2 4-4" /></svg> },
                                { title: 'Performance-Based Incentives', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="14" rx="2" ry="2" /><line x1="12" y1="8" x2="12" y2="22" /><path d="M19 8a5 5 0 0 0-10 0" /><path d="M5 8a5 5 0 0 1 10 0" /></svg> }
                            ].map((ben, i) => (
                                <div className="sc-benefit-card" key={i}>
                                    <div className="sc-benefit-icon">{ben.icon}</div>
                                    <div className="sc-benefit-content">
                                        <h4>{ben.title}</h4>
                                        <p>Provided by Employer</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="sc-benefits-note">* Benefits vary according to employer policies and employment contracts.</div>
                    </div>
                </div>
            </section>

            {/* PATHWAY */}
            <section className="sc-path-section">
                <div className="sc-container">
                    <div className="sc-section-header">
                        <div className="sc-eyebrow">FUTURE PROSPECTS</div>
                        <h2 className="sc-title">Career Growth Pathway</h2>
                        <p style={{ maxWidth: '600px', margin: '16px auto 0', color: '#666', lineHeight: '1.6' }}>
                            Cruise ship careers offer excellent opportunities for long-term professional development. Dedicated employees can progress into supervisory and management positions through performance, experience, and continuous learning.
                        </p>
                    </div>

                    <div className="sc-path-wrapper">
                        <div className="sc-path-card">
                            <div className="sc-path-header">
                                <div className="sc-path-badge">ENTRY LEVEL</div>
                                <div className="sc-path-num">01</div>
                            </div>
                            <h4 className="sc-path-title">Assistant Crew Member</h4>
                            <p className="sc-path-desc">Build practical experience, develop hospitality skills, and learn international service standards while supporting daily onboard operations.</p>
                            <div className="sc-path-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></div>
                        </div>

                        <div className="sc-path-card">
                            <div className="sc-path-header">
                                <div className="sc-path-badge">MID LEVEL</div>
                                <div className="sc-path-num">02</div>
                            </div>
                            <h4 className="sc-path-title">Department Supervisor</h4>
                            <p className="sc-path-desc">Lead a team, coordinate departmental activities, maintain service quality, and support operational excellence.</p>
                            <div className="sc-path-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></div>
                        </div>

                        <div className="sc-path-card">
                            <div className="sc-path-header">
                                <div className="sc-path-badge">LEADERSHIP</div>
                                <div className="sc-path-num">03</div>
                            </div>
                            <h4 className="sc-path-title">Assistant Manager</h4>
                            <p className="sc-path-desc">Take on increased responsibilities by assisting department managers in overseeing daily operations and mentoring team members.</p>
                            <div className="sc-path-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></div>
                        </div>

                        <div className="sc-path-card">
                            <div className="sc-path-header">
                                <div className="sc-path-badge">SENIOR LEVEL</div>
                                <div className="sc-path-num">04</div>
                            </div>
                            <h4 className="sc-path-title">Hotel Director / General Manager</h4>
                            <p className="sc-path-desc">Lead multiple departments, manage onboard hospitality operations, and deliver exceptional guest experiences across the ship.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="sc-faq-section">
                <div className="sc-container">
                    <div className="sc-faq-header">
                        <div className="sc-eyebrow">FAQ</div>
                        <h2 className="sc-title">Frequently Asked Questions</h2>
                    </div>
                    <div className="sc-faq-list">
                        {[
                            { q: "Can freshers apply for cruise ship jobs?", a: "Yes, there are numerous entry-level positions available in housekeeping, food & beverage, and guest services that do not require prior ship experience. We provide guidance to help build your profile." },
                            { q: "What is the minimum age requirement?", a: "Generally, applicants must be at least 18 years old to apply for cruise ship roles. However, some international cruise lines prefer candidates who are 21 years of age." },
                            { q: "Is a passport required before applying?", a: "A valid passport is highly recommended as it is essential for final documentation, visa processing, and securing joining arrangements." },
                            { q: "What educational qualifications are required?", a: "A high school diploma is usually the minimum requirement. Specific roles, especially in culinary or specialized hospitality, may require a degree or relevant certification." },
                            { q: "Do I need previous cruise ship experience?", a: "Previous ship experience is not mandatory for entry-level positions. Relevant land-based hospitality or customer service experience is often sufficient to qualify." }
                        ].map((faq, i) => (
                            <div className="sc-faq-item-wrap" key={i}>
                                <div className="sc-faq-q" onClick={() => toggleFaq(i)}>
                                    <span style={{ flex: 1 }}>{i + 1}. {faq.q}</span>
                                    <div className="icon">
                                        {faqOpen === i ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        )}
                                    </div>
                                </div>
                                {faqOpen === i && (
                                    <div className="sc-faq-a">{faq.a}</div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="sc-faq-action">
                        <Link to="/contact" className="sc-btn-solid">SHOW ALL FAQS</Link>
                    </div>
                </div>
            </section>

            {/* RELATED CAREERS */}
            <section className="sc-related-section">
                <div className="sc-container">
                    <div className="sc-section-header" style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0' }}>
                        <div>
                            <div className="sc-eyebrow">RELATED CAREERS</div>
                            <h2 className="sc-title">Explore Similar<br />International Careers</h2>
                        </div>
                        <p style={{ maxWidth: '400px', color: '#666', lineHeight: '1.6', marginBottom: '12px' }}>
                            Discover other premium recruitment pathways and global placements coordinated by Ecofusion's Nautical Ventures.
                        </p>
                    </div>
                    <div className="sc-related-grid">
                        <div className="sc-related-card">
                            <div className="sc-related-img">
                                <span className="sc-related-badge">AIR HOSTESS CAREERS</span>
                                <img src="/assets/img/flight.jpg" alt="Air Hostess" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80' }} />
                            </div>
                            <div className="sc-related-content">
                                <h4 className="sc-related-title">Air Hostess & Cabin Crew</h4>
                                <p className="sc-related-desc">Turn your passion for travel and exceptional customer service into a rewarding international aviation career. Join leading airlines, explore global destinations, meet people from around the world, and become part of a professional cabin crew dedicated to delivering safe and memorable travel experiences.</p>
                                <Link to="/services-aviation" className="sc-related-link">Explore Career Path &rarr;</Link>
                            </div>
                        </div>

                        <div className="sc-related-card">
                            <div className="sc-related-img">
                                <span className="sc-related-badge">MERCHANT NAVY CAREERS</span>
                                <img src="/assets/img/merchant.jpg" alt="Merchant Navy" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&w=600&q=80' }} />
                            </div>
                            <div className="sc-related-content">
                                <h4 className="sc-related-title">Merchant Navy Careers</h4>
                                <p className="sc-related-desc">Embark on a rewarding maritime career with leading international shipping companies. Work aboard modern commercial vessels, travel across global trade routes, gain valuable international experience, and build a stable career in one of the world's most essential industries.</p>
                                <Link to="/services-merchant" className="sc-related-link">Explore Career Path &rarr;</Link>
                            </div>
                        </div>

                        <div className="sc-related-card">
                            <div className="sc-related-img">
                                <span className="sc-related-badge">INTERNATIONAL SECURITY CAREERS</span>
                                <img src="/assets/img/security.jpg" alt="Security Guard" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80' }} />
                            </div>
                            <div className="sc-related-content">
                                <h4 className="sc-related-title">Security Guard Careers</h4>
                                <p className="sc-related-desc">Step into a profession built on responsibility, discipline, and trust. Work with internationally recognized organizations across airports, commercial facilities, hospitality, logistics, industrial sites, and private institutions while building a stable and rewarding career.</p>
                                <Link to="/services-security" className="sc-related-link">Explore Career Path &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="sc-cta-section">
                <div className="sc-cta-overlay"></div>
                <div className="sc-cta-content">
                    <div className="sc-cta-eyebrow">YOUR FUTURE AWAITS</div>
                    <h2 className="sc-cta-title">Begin Your Global Career Journey</h2>
                    <p className="sc-cta-desc">
                        Every successful international career begins with one confident step.<br />
                        Whether your dream is to travel the world, develop internationally recognized<br />
                        skills, or build a rewarding hospitality career at sea, Ecofusion's Nautical Ventures<br />
                        is here to support your journey with professional guidance and transparent<br />
                        recruitment.
                    </p>
                    <div className="sc-cta-buttons">
                        <Link to="/jobs" className="sc-btn-primary">FIND YOUR DREAM JOB &rarr;</Link>
                        <Link to="/contact" className="sc-btn-outline">BOOK FREE CONSULTATION</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
