import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Reviews.css';

const allReviews = [
    { id: 1, text: "The guidance I received during the recruitment process was extremely helpful. I felt prepared for every stage, and the communication was always professional.", name: "Neha Verma", role: "CABIN CREW", initials: "NV", color: "#f43f5e" },
    { id: 2, text: "The recruitment consultants were supportive and encouraging from day one. Their interview tips helped me perform with confidence.", name: "Anjali Kapoor", role: "CABIN CREW", initials: "AK", color: "#f97316" },
    { id: 3, text: "I really appreciated the professionalism of the team. They answered all my questions and kept me updated throughout the process.", name: "Pooja Singh", role: "CABIN CREW", initials: "PS", color: "#10b981" },
    { id: 4, text: "The recruitment process was well organized from the beginning. Every step was explained clearly, and I felt confident throughout the journey. Working onboard has been a wonderful learning experience, and I'm grateful for the support I received.", name: "Rahul Sharma", role: "GUEST SERVICE", initials: "RS", color: "#0ea5e9" },
    
    { id: 5, text: "I was looking for a professional recruitment company, and I'm glad I chose Ecofusion. The entire process was straightforward and transparent.", name: "Vikram Singh", role: "GALLEY UTILITY", initials: "VS", color: "#f43f5e" },
    { id: 6, text: "The recruitment team explained every requirement clearly and guided me through the documentation process. Their support made everything much easier.", name: "Karan Mehta", role: "DECK CADET", initials: "KM", color: "#f59e0b" },
    { id: 7, text: "I appreciate how responsive the team was throughout the recruitment process. They kept me informed and answered every question promptly.", name: "Nitin Sharma", role: "MARINE TRAINEE", initials: "NS", color: "#ec4899" },
    { id: 8, text: "My experience with the recruitment team was excellent. They maintained clear communication and provided useful career guidance.", name: "Mohit Chauhan", role: "CABIN STEWARD", initials: "MC", color: "#8b5cf6" },
    
    { id: 9, text: "I was nervous about applying for an international role, but the entire process was handled professionally. The team kept me informed throughout and helped me prepare well.", name: "Sneha Gupta", role: "CABIN CREW", initials: "SG", color: "#0ea5e9" },
    { id: 10, text: "The documentation support was excellent. I always received quick responses whenever I had questions. I'm happy with the opportunity and excited about my future growth.", name: "Riya Malhotra", role: "CABIN CREW", initials: "RM", color: "#8b5cf6" },
    { id: 11, text: "My experience was smooth and well organized. The career guidance and grooming advice gave me the confidence to pursue my dream.", name: "Kavya Jain", role: "CABIN CREW", initials: "KJ", color: "#06b6d4" },
    { id: 12, text: "The recruitment process was transparent and easy to understand. I always knew what the next step would be, which made the journey much less stressful.", name: "Nisha Patel", role: "CABIN CREW", initials: "NP", color: "#a855f7" }
];

const ReviewCard = ({ review }) => (
    <div className="r-card">
        <div className="r-card-stars">
            {/* 5 stars */}
            {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            ))}
        </div>
        <p className="r-card-text">"{review.text}"</p>
        <div className="r-card-author">
            <div className="r-card-avatar" style={{ backgroundColor: review.color }}>{review.initials}</div>
            <div className="r-card-author-info">
                <strong>{review.name}</strong>
                <span>{review.role}</span>
            </div>
        </div>
        <div className="r-card-quote-bg">‚Äú</div>
    </div>
);

export default function Reviews() {
    // Split into 3 rows for marquee
    const row1 = allReviews.slice(0, 4);
    const row2 = allReviews.slice(4, 8);
    const row3 = allReviews.slice(8, 12);
    
    // We duplicate the lists to make endless loop
    
    return (
        <div className="reviews-page">
            {/* BREADCRUMB */}
            <div className="r-breadcrumb-bar">
                <div className="container">
                    <span className="r-icon">‚åÇ</span> <Link to="/">Home</Link> <span className="r-sep">‚Ä∫</span> <strong>Reviews</strong>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="r-hero">
                <div className="container text-center">
                    <Link to="/" className="r-back-link">‚Äπ BACK TO HOME</Link>
                    <div className="r-badge"><span style={{marginRight: '6px', fontSize: '13px', color: '#0070bc'}}>‚òÖ</span> CANDIDATE TESTIMONIALS</div>
                    <h1 className="r-hero-title">Trusted by Candidates<br />Across <span className="r-hero-highlight">All Career Sectors</span></h1>
                    <p className="r-hero-subtitle">Read what candidates who pursued international career opportunities through Ecofusion's Nautical Ventures have to say about their experience.</p>
                    
                    <div className="r-sample-note">
                        <strong>Note:</strong> The testimonials below are sample candidate reviews for website preview purposes. They will be replaced with verified feedback from actual candidates.
                    </div>

                    <div className="r-stats-board">
                        <div className="r-stat">
                            <h3>5.0/5</h3>
                            <span>AVERAGE RATING</span>
                        </div>
                        <div className="r-stat-div"></div>
                        <div className="r-stat">
                            <h3>30+</h3>
                            <span>SAMPLE REVIEWS</span>
                        </div>
                        <div className="r-stat-div"></div>
                        <div className="r-stat">
                            <h3>4</h3>
                            <span>CAREER CATEGORIES</span>
                        </div>
                        <div className="r-stat-div"></div>
                        <div className="r-stat">
                            <h3>100%</h3>
                            <span>CANDIDATE FOCUSED</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT OUR CANDIDATES SAY */}
            <section className="r-board-section">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <div className="r-badge-small">CANDIDATE BOARD</div>
                    <h2 className="r-board-title">What Our Candidates Say</h2>
                    <p className="r-board-subtitle">Hover over any card to pause. Use the category tabs below to filter by sector.</p>
                </div>

                <div className="r-marquees-wrapper">
                    {/* ROW 1: Right to Left */}
                    <div className="r-marquee-row">
                        <div className="r-marquee-track right-to-left">
                            {row1.map(r => <ReviewCard key={`r1a-${r.id}`} review={r} />)}
                            {row1.map(r => <ReviewCard key={`r1b-${r.id}`} review={r} />)}
                            {/* Adding more to ensure it fills wide screens */}
                            {row1.map(r => <ReviewCard key={`r1c-${r.id}`} review={r} />)}
                        </div>
                    </div>

                    {/* ROW 2: Left to Right */}
                    <div className="r-marquee-row">
                        <div className="r-marquee-track left-to-right">
                            {row2.map(r => <ReviewCard key={`r2a-${r.id}`} review={r} />)}
                            {row2.map(r => <ReviewCard key={`r2b-${r.id}`} review={r} />)}
                            {row2.map(r => <ReviewCard key={`r2c-${r.id}`} review={r} />)}
                        </div>
                    </div>

                    {/* ROW 3: Right to Left */}
                    <div className="r-marquee-row">
                        <div className="r-marquee-track right-to-left">
                            {row3.map(r => <ReviewCard key={`r3a-${r.id}`} review={r} />)}
                            {row3.map(r => <ReviewCard key={`r3b-${r.id}`} review={r} />)}
                            {row3.map(r => <ReviewCard key={`r3c-${r.id}`} review={r} />)}
                        </div>
                    </div>
                </div>
            </section>

            {/* BROWSE BY CATEGORY */}
            <section className="r-browse-section">
                <div className="container">
                    <div className="r-tabs">
                        <div className="r-tab active"><span className="r-icon">‚ùñ</span> All Reviews <small>(31)</small></div>
                        <div className="r-tab"><span className="r-icon">Ìª≥Ô∏è</span> Cruise Ship <small>(8)</small></div>
                        <div className="r-tab"><span className="r-icon">‚úà</span> Air Hostess <small>(8)</small></div>
                        <div className="r-tab"><span className="r-icon">‚öì</span> Merchant Navy <small>(7)</small></div>
                        <div className="r-tab"><span className="r-icon">Ìª°</span> Security Guard <small>(8)</small></div>
                    </div>

                    <h2 className="text-center" style={{marginTop: '60px', marginBottom: '40px', fontWeight: '800', fontSize: '28px', color: 'var(--ink)'}}>Browse by Career Sector</h2>
                    
                    <div className="r-cats-grid">
                        <div className="r-cat-card">
                            <div className="r-cat-icon blue">Ìª≥Ô∏è</div>
                            <h4>Cruise Ship</h4>
                            <span>8 reviews</span>
                            <div className="r-cat-link blue-text">View ‚ûî</div>
                        </div>
                        <div className="r-cat-card">
                            <div className="r-cat-icon purple">‚úà</div>
                            <h4>Air Hostess</h4>
                            <span>8 reviews</span>
                            <div className="r-cat-link blue-text">View ‚ûî</div>
                        </div>
                        <div className="r-cat-card">
                            <div className="r-cat-icon green">‚öì</div>
                            <h4>Merchant Navy</h4>
                            <span>7 reviews</span>
                            <div className="r-cat-link blue-text">View ‚ûî</div>
                        </div>
                        <div className="r-cat-card">
                            <div className="r-cat-icon orange">Ìª°</div>
                            <h4>Security Guard</h4>
                            <span>8 reviews</span>
                            <div className="r-cat-link blue-text">View ‚ûî</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BIG CTA FOOTER BLOCK */}
            <section className="r-big-cta">
                <div className="r-cta-bg" style={{backgroundImage: 'url(/assets/img/urban-skyline-modern-buildings.jpg)'}}></div>
                <div className="r-cta-overlay"></div>
                <div className="r-cta-content container text-center">
                    <h2>READY TO START YOUR<br/>JOURNEY?</h2>
                    <p>Join candidates who have taken the first step toward an international<br/>career. Begin your journey with Ecofusion Outsourcing today.</p>
                    <div className="r-cta-actions">
                        <Link to="/careers" className="btn btn-primary r-btn-blue">BROWSE ACTIVE JOBS ‚ûî</Link>
                        <Link to="/contact" className="btn r-btn-outline">CONTACT OUR TEAM</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
