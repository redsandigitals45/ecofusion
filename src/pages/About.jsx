import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
            <section className="page-hero">
                <div className="blob-field"><div className="blob" style={{ width: '420px', height: '420px', top: '-180px', right: '-100px' }}></div></div>
                <div className="container">
                    <div className="breadcrumb"><Link to="/">Home</Link> / About</div>
                    <span className="eyebrow" style={{ marginTop: '18px' }}>About Ecofusion</span>
                    <h1>A career partner — not just a recruiter.</h1>
                    <p>We build complete talent-development journeys for candidates entering cruise, aviation and hotel management careers — not one-off placements.</p>
                </div>
            </section>

            <section className="section">
                <div className="container two-col">
                    <div>
                        <span className="eyebrow">Company Overview</span>
                        <h2 style={{ fontSize: 'clamp(28px,3.2vw,38px)', marginTop: '14px', lineHeight: 1.18 }}>Recruitment, training and certification — under one roof.</h2>
                        <p className="ink-soft" style={{ marginTop: '18px', fontSize: '16.5px' }}>Ecofusion Outsourcing is a professional recruitment and training consultancy that helps candidates build careers in cruise ships, aviation and hotel management. We support both job placement and skill development, so candidates arrive ready — not just referred.</p>
                        <p className="ink-soft" style={{ marginTop: '16px', fontSize: '16.5px' }}>Unlike companies that focus only on placement, Ecofusion builds a complete talent-development journey, making us a stronger partner for both candidates and employers seeking well-prepared professionals.</p>
                        <div className="hero-actions" style={{ marginTop: '30px' }}>
                            <Link to="/contact" className="btn btn-primary">Start Your Career</Link>
                            <Link to="/reviews" className="btn btn-ghost">Read Reviews</Link>
                        </div>
                    </div>
                    <div className="col-media reveal">
                        <img src="/assets/img/hero-aviation.jpg" alt="Cabin crew member smiling in an airport terminal" />
                    </div>
                </div>
            </section>

            <section className="section on-rose">
                <div className="container">
                    <div className="section-head center">
                        <span className="eyebrow">What We Do</span>
                        <h2>Train. Certify. Place.</h2>
                    </div>
                    <div className="grid grid-3">
                        <div className="card reveal">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5Z" /><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" /></svg></div>
                            <h3 style={{ fontSize: '20px' }}>Train</h3>
                            <p className="ink-soft" style={{ marginTop: '10px', fontSize: '15px' }}>Specialised, industry-aligned courses that build practical, real-world workplace skills.</p>
                        </div>
                        <div className="card reveal">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6" /><path d="M9 14l-2 7 5-3 5 3-2-7" /></svg></div>
                            <h3 style={{ fontSize: '20px' }}>Certify</h3>
                            <p className="ink-soft" style={{ marginTop: '10px', fontSize: '15px' }}>Recognised certifications that meet international service standards across each sector.</p>
                        </div>
                        <div className="card reveal">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 12h8M8 12a4 4 0 1 1 4-4M16 12a4 4 0 1 1-4 4" /></svg></div>
                            <h3 style={{ fontSize: '20px' }}>Place</h3>
                            <p className="ink-soft" style={{ marginTop: '10px', fontSize: '15px' }}>Direct connections into cruise, aviation and hotel roles matched to each candidate's readiness.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container two-col reverse">
                    <div className="col-media reveal">
                        <img src="/assets/img/hero-hospitality.jpg" alt="Hotel reception staff assisting guests" />
                    </div>
                    <div>
                        <span className="eyebrow">Market Position</span>
                        <h2 style={{ fontSize: 'clamp(28px,3.2vw,38px)', marginTop: '14px', lineHeight: 1.18 }}>Our differentiation</h2>
                        <p className="ink-soft" style={{ marginTop: '18px', fontSize: '16.5px' }}>The cruise, aviation and hospitality recruitment market includes established, trust-driven agencies and training institutes — a competitive, credibility-based category. We compete on service breadth, training support, candidate preparation and sector specialisation, not company size alone.</p>
                        <ul className="check-list" style={{ marginTop: '20px' }}>
                            <li><span className="check-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>Cruise-focused staffing with international reach</li>
                            <li><span className="check-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>Training-plus-placement model building employability first</li>
                            <li><span className="check-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>One flexible partner across three sectors</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section on-dark">
                <div className="blob-field"><div className="blob" style={{ width: '440px', height: '440px', bottom: '-220px', left: '-100px' }}></div></div>
                <div className="container">
                    <div className="section-head">
                        <span className="eyebrow">Our Advantage</span>
                        <h2>What makes Ecofusion different</h2>
                        <p>An integrated approach — recruitment, training and certification under one roof — guiding candidates from skill-building to final placement.</p>
                    </div>
                    <div className="grid grid-4">
                        <div className="card-flat reveal" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'var(--line-on-dark)' }}>
                            <div className="icon-badge light"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2 4 5v6c0 5 3.4 8.4 8 11 4.6-2.6 8-6 8-11V5l-8-3Z" /></svg></div>
                            <h3 style={{ fontSize: '17px', color: '#fff' }}>Career Partner, Not Just a Recruiter</h3>
                            <p style={{ marginTop: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.72)' }}>Candidates become employable, certified, and placement-ready.</p>
                        </div>
                        <div className="card-flat reveal" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'var(--line-on-dark)' }}>
                            <div className="icon-badge light"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="6" cy="19" r="2" /><circle cx="18" cy="5" r="2" /><path d="M8 19h6a4 4 0 0 0 4-4V9" /></svg></div>
                            <h3 style={{ fontSize: '17px', color: '#fff' }}>Complete Pathway</h3>
                            <p style={{ marginTop: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.72)' }}>Recruit, train and certify — a full journey, not isolated services.</p>
                        </div>
                        <div className="card-flat reveal" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'var(--line-on-dark)' }}>
                            <div className="icon-badge light"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 17l6-6 4 4 8-8" /><path d="M17 7h4v4" /></svg></div>
                            <h3 style={{ fontSize: '17px', color: '#fff' }}>Better Outcomes</h3>
                            <p style={{ marginTop: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.72)' }}>Stronger placement results from real workplace-ready preparation.</p>
                        </div>
                        <div className="card-flat reveal" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'var(--line-on-dark)' }}>
                            <div className="icon-badge light"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9Z" /></svg></div>
                            <h3 style={{ fontSize: '17px', color: '#fff' }}>Flexible Hiring Partner</h3>
                            <p style={{ marginTop: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.72)' }}>Serves cruise lines, airline-related organisations &amp; hotel businesses.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-tight">
                <div className="container">
                    <p className="pull center" style={{ maxWidth: '760px' }}>"Empowering careers. Enabling global opportunity."</p>
                </div>
            </section>

            <section className="section-tight">
                <div className="container">
                    <div className="cta-band reveal">
                        <div className="blob-field"><div className="blob" style={{ width: '280px', height: '280px', top: '-120px', right: '10%' }}></div></div>
                        <div>
                            <h3>Ready to start your journey?</h3>
                            <p>Speak with our team about training, certification or placement.</p>
                        </div>
                        <Link to="/contact" className="btn" style={{ background: '#fff', color: 'var(--maroon)' }}>Get in Touch</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
