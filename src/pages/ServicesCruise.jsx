import { Link } from 'react-router-dom';

export default function ServicesCruise() {
    return (
        <>
            <section className="hero">
                <div className="blob-field"><div className="blob" style={{ width: '480px', height: '480px', top: '-220px', right: '-140px' }}></div></div>
                <div className="container hero-grid">
                    <div className="hero-copy">
                        <span className="eyebrow">Service · Cruise</span>
                        <h1 style={{ fontSize: 'clamp(34px,4.6vw,54px)' }}>Cruise Ship Careers</h1>
                        <p className="lede">Onboard roles on the world's leading cruise lines — guest relations, food &amp; beverage, housekeeping, entertainment and service positions, backed by industry-recognised readiness training.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-primary">Apply Now</Link>
                            <a href="#roles" className="btn btn-ghost-dark">See Roles</a>
                        </div>
                    </div>
                    <div className="hero-media reveal">
                        <img src="/assets/img/urban-skyline-modern-buildings.jpg" alt="Cruise ships and superyachts docked in a Mediterranean harbour" />
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container two-col">
                    <div>
                        <span className="eyebrow">Overview</span>
                        <h2 style={{ fontSize: 'clamp(28px,3.2vw,38px)', marginTop: '14px', lineHeight: 1.18 }}>Placement across hospitality, service &amp; guest relations</h2>
                        <p className="ink-soft" style={{ marginTop: '18px', fontSize: '16.5px' }}>Cruise lines look for confident, adaptable, service-minded people who can deliver a five-star guest experience at sea. Ecofusion connects candidates to cruise ship openings and prepares them with the onboard etiquette, safety awareness and service standards that international cruise operators expect from day one.</p>
                        <div className="badge-row">
                            <div className="card-flat">
                                <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h20M12 2c2.5 2.7 4 6.4 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6.4-4-10s1.5-7.3 4-10Z" /></svg></div>
                                <strong>Global Placement</strong>
                            </div>
                            <div className="card-flat">
                                <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6" /><path d="M9 14l-2 7 5-3 5 3-2-7" /></svg></div>
                                <strong>Readiness Certification</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-media reveal">
                        <img src="/assets/img/urban-skyline-modern-buildings.jpg" alt="Cruise ship at sea" />
                    </div>
                </div>
            </section>

            <section id="roles" className="section on-rose">
                <div className="container">
                    <div className="section-head">
                        <span className="eyebrow">Roles We Place</span>
                        <h2>Onboard positions across every department</h2>
                    </div>
                    <div className="grid grid-4">
                        <div className="card reveal">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 12h8M8 12a4 4 0 1 1 4-4M16 12a4 4 0 1 1-4 4" /></svg></div>
                            <h3 style={{ fontSize: '18px' }}>Guest Relations</h3>
                            <p className="ink-soft" style={{ marginTop: '10px', fontSize: '14.5px' }}>Front-desk, concierge &amp; guest services support.</p>
                        </div>
                        <div className="card reveal">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 10h16M6 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4M5 10l1 10h12l1-10" /></svg></div>
                            <h3 style={{ fontSize: '18px' }}>Food &amp; Beverage</h3>
                            <p className="ink-soft" style={{ marginTop: '10px', fontSize: '14.5px' }}>Dining rooms, bars, galley &amp; specialty restaurants.</p>
                        </div>
                        <div className="card reveal">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" /><path d="M4 9h16M9 4v16" /></svg></div>
                            <h3 style={{ fontSize: '18px' }}>Housekeeping</h3>
                            <p className="ink-soft" style={{ marginTop: '10px', fontSize: '14.5px' }}>Cabin &amp; public-area service standards.</p>
                        </div>
                        <div className="card reveal">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18V6l10 6-10 6Z" /><path d="M5 4v16" /></svg></div>
                            <h3 style={{ fontSize: '18px' }}>Entertainment</h3>
                            <p className="ink-soft" style={{ marginTop: '10px', fontSize: '14.5px' }}>Activities, events &amp; guest engagement teams.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container two-col reverse">
                    <div className="col-media reveal">
                        <img src="/assets/img/urban-skyline-modern-buildings.jpg" alt="Cruise ship and yachts in harbour" />
                    </div>
                    <div>
                        <span className="eyebrow">Cruise Working Certifications</span>
                        <h2 style={{ fontSize: 'clamp(28px,3.2vw,38px)', marginTop: '14px', lineHeight: 1.18 }}>Industry-recognised readiness credentials</h2>
                        <p className="ink-soft" style={{ marginTop: '18px', fontSize: '16.5px' }}>Our cruise working certification prepares candidates for the realities of life and work at sea — service standards, shipboard safety awareness, teamwork under pressure and guest-facing etiquette — so they step onboard confident and job-ready.</p>
                        <ul className="check-list" style={{ marginTop: '20px' }}>
                            <li><span className="check-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>Onboard service &amp; guest-etiquette training</li>
                            <li><span className="check-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>Shipboard safety &amp; teamwork orientation</li>
                            <li><span className="check-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>Interview &amp; documentation readiness</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section on-dark">
                <div className="blob-field"><div className="blob" style={{ width: '420px', height: '420px', top: '-180px', left: '35%' }}></div></div>
                <div className="container">
                    <div className="section-head center">
                        <span className="eyebrow">Candidate Journey</span>
                        <h2>From guidance to placement</h2>
                    </div>
                    <div className="grid grid-4">
                        <div className="step reveal"><span className="num">01</span><h3>Guidance</h3><p>Career direction &amp; cruise-sector counselling.</p></div>
                        <div className="step reveal"><span className="num">02</span><h3>Training</h3><p>Cruise working certification &amp; service skills.</p></div>
                        <div className="step reveal"><span className="num">03</span><h3>Screening</h3><p>Readiness assessment against cruise-line standards.</p></div>
                        <div className="step reveal"><span className="num">04</span><h3>Placement</h3><p>Matched to the right ship &amp; department.</p></div>
                    </div>
                </div>
            </section>

            <section className="section-tight">
                <div className="container">
                    <div className="cta-band reveal">
                        <div className="blob-field"><div className="blob" style={{ width: '280px', height: '280px', top: '-120px', right: '10%' }}></div></div>
                        <div>
                            <h3>Ready to set sail on your career?</h3>
                            <p>Talk to our team about cruise ship openings and certification.</p>
                        </div>
                        <Link to="/contact" className="btn" style={{ background: '#fff', color: 'var(--maroon)' }}>Apply Now</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
