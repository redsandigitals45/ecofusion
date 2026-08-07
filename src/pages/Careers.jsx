import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Careers.css';

const allJobs = [
    { id: 101, badge: 'US', title: 'Guest Service Associate', category: 'Cruise', salary: '$2,500/MO + TIPS', location: 'Miami, USA (Worldwide Fleet)', type: 'Contract (6 Months)', exp: 'Exp: 0-2 Years', tags: ['Visa Support', 'Accommodation Included', 'Meals Included', 'Medical Cover'] },
    { id: 102, badge: 'IT', title: 'Food & Beverage Associate', category: 'Cruise', salary: '$2,200/MO + TIPS', location: 'Mediterranean Routes', type: 'Contract (6 Months)', exp: 'Exp: 1-3 Years', tags: ['Visa Support', 'Accommodation Included', 'Meals Included', 'Travel Tickets'] },
    { id: 103, badge: 'MV', title: 'Housekeeping Associate', category: 'Cruise', salary: '$1,900/MO', location: 'Caribbean Fleet', type: 'Contract (8 Months)', exp: 'Exp: 0-2 Years', tags: ['Visa Support', 'Accommodation Included', 'Meals Included', 'Uniform Provided'] },
    { id: 104, badge: 'NO', title: 'Commis Chef', category: 'Cruise', salary: '$2,800/MO', location: 'Norwegian Fjords Routes', type: 'Contract (6 Months)', exp: 'Exp: 1-3 Years', tags: ['Visa Support', 'Accommodation Included', 'Meals Included', 'Flights Paid'] },
    { id: 105, badge: 'AE', title: 'VIP Cabin Crew', category: 'Aviation', salary: 'AED 12,000/MO', location: 'Dubai, UAE', type: 'Full-Time', exp: 'Exp: 2+ Years', tags: ['Visa Support', 'Accommodation Included', 'Tax Free'] },
    { id: 106, badge: 'SG', title: 'Marine Deck Officer', category: 'Merchant Navy', salary: 'SGD 5,500/MO', location: 'Singapore', type: 'Contract', exp: 'Exp: 3+ Years', tags: ['Visa Support', 'Flights Paid'] },
    { id: 107, badge: 'MY', title: 'Security Officer', category: 'Security', salary: 'MYR 4,800/MO', location: 'Kuala Lumpur', type: 'Full-Time', exp: 'Exp: 1-3 Years', tags: ['Accommodation Assistance', 'Medical Cover'] }
];

const JobCard = ({ job }) => (
    <div className="job-card">
        <div className="job-card-left">
            <div className="job-badge">{job.badge}</div>
            <div className="job-info">
                <h3>
                    {job.title} <span style={{ fontSize: '12px', color: '#94a3b8', background: '#f1f5f9', padding: '2px 8px', borderRadius: '4px', border: '1px solid #e2e8f0', marginLeft: '6px' }}>{job.category.toUpperCase()}</span>
                    <span className="visa-badge" style={{ marginLeft: '12px' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        VISA SPONSORED
                    </span>
                </h3>
                <div className="job-meta">
                    <span style={{ fontWeight: 800, color: '#0f172a' }}>{job.salary}</span>
                    <span style={{ opacity: 0.3 }}>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> {job.location}</span>
                    <span style={{ opacity: 0.3 }}>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> {job.type}</span>
                    <span style={{ opacity: 0.3 }}>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> {job.exp}</span>
                </div>
                <div className="job-tags" style={{ marginTop: '12px', display: 'flex', gap: '12px' }}>
                    {job.tags.map(tag => (
                        <span key={tag} style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>{tag}</span>
                    ))}
                </div>
            </div>
        </div>
        <div className="job-actions">
            <button style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#fff', color: '#94a3b8', cursor: 'pointer' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
            </button>
            <button style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#fff', color: '#94a3b8', cursor: 'pointer' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            </button>
            <Link to="/contact" className="btn" style={{ background: '#0f172a', color: '#fff', padding: '10px 24px', borderRadius: '100px', fontSize: '13px', fontWeight: '700', marginLeft: '12px' }}>APPLY NOW ➔</Link>
        </div>
    </div>
);

export default function Careers() {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [countryFilter, setCountryFilter] = useState('All');
    const [expFilter, setExpFilter] = useState('All');

    const filteredJobs = allJobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCat = categoryFilter === 'All' || job.category === categoryFilter;
        return matchesSearch && matchesCat;
    });

    const handleCategorySelect = (category) => {
        setCategoryFilter(category);
        document.getElementById('jobs-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="careers-page">
            <div className="r-breadcrumb-bar">
                <div className="container">
                    <span className="r-icon">⌂</span> <Link to="/">Home</Link> <span className="r-sep">›</span> <strong>Careers</strong>
                </div>
            </div>

            <section className="c-hero">
                <div className="container text-center">
                    <div className="c-pill">EXPLORE CAREER CATEGORIES</div>
                    <h1 className="c-hero-title">Choose Your Career Path</h1>
                    <p className="c-hero-subtitle">Discover career opportunities designed for ambitious professionals who are ready to build successful international careers.</p>

                    <div className="c-categories-grid">
                        <div className="c-cat-card">
                            <div className="c-cat-img-wrapper">
                                <img src="/assets/img/herosection/hero-cruise.jpg" alt="Cruise" />
                                <div className="c-cat-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.4 13.9 22 17H2l2.6-3.1"/><path d="M14.9 13.9 14 8c-.2-1.5-1.5-2.7-3.1-2.7h-2.1c-.8 0-1.6.4-2.1 1.1L3.9 13.9"/><path d="M8 8V5a3 3 0 1 1 6 0v3"/></svg></div>
                            </div>
                            <div className="c-cat-content">
                                <h3>Cruise Ship Careers</h3>
                                <p>Work aboard world-class cruise ships while exploring beautiful destinations across the globe.</p>
                                <span onClick={() => handleCategorySelect('Cruise')} style={{ cursor: 'pointer' }} className="c-cat-link">View Jobs ➔</span>
                            </div>
                        </div>

                        <div className="c-cat-card">
                            <div className="c-cat-img-wrapper">
                                <img src="/assets/img/herosection/hero-aviation.jpg" alt="Aviation" />
                                <div className="c-cat-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.5l-2.2 3.3c-.2.3 0 .7.3.9l5.5 2.5-3.2 3.2-2.8-.9c-.3-.1-.7 0-.9.2l-1.6 1.6c-.3.3-.3.7 0 .9l4 2 2 4c.2.3.6.3.9 0l1.6-1.6c.2-.2.3-.6.2-.9l-.9-2.8 3.2-3.2 2.5 5.5c.2.3.6.5.9.3l3.3-2.2c.3-.2.5-.6.5-1.1z"/></svg></div>
                            </div>
                            <div className="c-cat-content">
                                <h3>Air Hostess Careers</h3>
                                <p>Join leading airlines and build a rewarding career in the aviation industry.</p>
                                <span onClick={() => handleCategorySelect('Aviation')} style={{ cursor: 'pointer' }} className="c-cat-link">View Jobs ➔</span>
                            </div>
                        </div>

                        <div className="c-cat-card">
                            <div className="c-cat-img-wrapper">
                                <img src="/assets/img/threeindustriessection/white-cruise.jpg" alt="Merchant Navy" />
                                <div className="c-cat-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="5" r="3" /><line x1="12" y1="22" x2="12" y2="8" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" /></svg></div>
                            </div>
                            <div className="c-cat-content">
                                <h3>Merchant Navy Careers</h3>
                                <p>Build a successful maritime career with international shipping companies.</p>
                                <span onClick={() => handleCategorySelect('Merchant Navy')} style={{ cursor: 'pointer' }} className="c-cat-link">View Jobs ➔</span>
                            </div>
                        </div>

                        <div className="c-cat-card">
                            <div className="c-cat-img-wrapper">
                                <img src="/assets/img/herosection/hero-hospitality.jpg" alt="Security" />
                                <div className="c-cat-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
                            </div>
                            <div className="c-cat-content">
                                <h3>Security Guard Careers</h3>
                                <p>Explore international security opportunities with trusted employers.</p>
                                <span onClick={() => handleCategorySelect('Security')} style={{ cursor: 'pointer' }} className="c-cat-link">View Jobs ➔</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="c-filter-section">
                <div className="c-filter-bar">
                    <input
                        type="text"
                        placeholder="Search by job title, skills..."
                        className="c-search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select className="c-select" value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
                        <option value="All">Category: All</option>
                        <option value="Cruise">Cruise</option>
                        <option value="Aviation">Aviation</option>
                        <option value="Merchant Navy">Merchant Navy</option>
                        <option value="Security">Security</option>
                    </select>
                    <select className="c-select" value={countryFilter} onChange={e => setCountryFilter(e.target.value)}>
                        <option value="All">Country: All</option>
                        <option value="USA">USA</option>
                        <option value="UAE">UAE</option>
                        <option value="Singapore">Singapore</option>
                    </select>
                    <select className="c-select" value={expFilter} onChange={e => setExpFilter(e.target.value)}>
                        <option value="All">Experience: All</option>
                        <option value="0-2">0-2 Years</option>
                        <option value="3+">3+ Years</option>
                    </select>
                    <select className="c-select">
                        <option>Contract Type: All</option>
                    </select>
                    <select className="c-select">
                        <option>Salary: All</option>
                    </select>
                    <button className="c-btn-reset" onClick={() => { setSearchTerm(''); setCategoryFilter('All'); setCountryFilter('All'); setExpFilter('All'); }}>RESET</button>
                    <button className="c-btn-search">SEARCH</button>
                </div>
            </section>

            <section className="c-jobs-section" id="jobs-section">
                <div className="container">
                    <div className="c-jobs-header">
                        <div>
                            <div className="c-pill" style={{ marginBottom: '12px' }}>FEATURED OPENINGS</div>
                            <h2>Featured Career Opportunities</h2>
                        </div>
                        <div className="c-jobs-count">{filteredJobs.length} POSITIONS FOUND</div>
                    </div>

                    <div className="c-jobs-list">
                        {filteredJobs.map(job => <JobCard key={job.id} job={job} />)}
                    </div>
                </div>
            </section>
        </div>
    );
}
