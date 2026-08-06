import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            {/* HERO */}
            <section className="hero-fullbg" style={{ backgroundImage: 'url(/assets/img/hero-cruise.jpg)' }}>
                <div className="hero-overlay"></div>

                <div className="container hero-grid-new">
                    <div className="hero-copy">
                        <span className="eyebrow" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)' }}>Recruitment &amp; Training Consultancy</span>
                        <h1 style={{ color: '#fff' }}>Careers that go<br />further than the<br />horizon.</h1>
                        <p className="lede" style={{ color: 'rgba(255,255,255,0.85)' }}>Ecofusion Outsourcing places and prepares talent for careers at sea, in the air, and across the world's hotels — one guided pathway from training to placement.</p>

                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-primary" style={{ background: '#fff', color: 'var(--blue)' }}>Start Your Career</Link>
                            <Link to="/about" className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)' }}>How It Works</Link>
                        </div>

                        <div className="hero-tags" style={{ color: '#fff' }}>
                            <span className="hero-tag" style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}>⚓ Cruise</span>
                            <span className="hero-tag" style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}>✈ Aviation</span>
                            <span className="hero-tag" style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}>🏨 Hotel Management</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* THREE INDUSTRIES */}
            <section className="section on-rose">
                <div className="container">
                    <div className="section-head">
                        <span className="eyebrow">A Global Career Landscape</span>
                        <h2>Three industries. One mission.</h2>
                        <p>Cruise, aviation and hotel sectors all value trained, adaptable people who can work confidently in customer-facing, global-standard environments.</p>
                    </div>
                    <div className="grid grid-3">
                        <div className="media-card reveal">
                            <div className="media"><img src="/assets/img/hero-cruise.jpg" alt="Cruise ship at sea" /></div>
                            <div className="body">
                                <h3>Cruise</h3>
                                <p>Guest relations, F&amp;B, housekeeping, entertainment &amp; onboard service roles.</p>
                            </div>
                        </div>
                        <div className="media-card reveal">
                            <div className="media"><img src="/assets/img/hero-aviation.jpg" alt="Cabin crew member at an airport terminal" /></div>
                            <div className="body">
                                <h3>Aviation</h3>
                                <p>Cabin crew, airport operations, ground service &amp; passenger-facing roles.</p>
                            </div>
                        </div>
                        <div className="media-card reveal">
                            <div className="media"><img src="/assets/img/hero-hospitality.jpg" alt="Hotel reception staff assisting a guest" /></div>
                            <div className="body">
                                <h3>Hotel Management</h3>
                                <p>Front office, housekeeping, F&amp;B and full hotel operations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT TEASER */}
            <section className="section">
                <div className="container two-col">
                    <div className="col-media reveal">
                        <img src="/assets/img/hero-hospitality.jpg" alt="Hospitality staff assisting a guest at reception" />
                    </div>
                    <div>
                        <span className="eyebrow">About Ecofusion</span>
                        <h2 style={{ fontSize: 'clamp(28px,3.2vw,40px)', marginTop: '14px', lineHeight: 1.15 }}>A career partner — not just a recruiter.</h2>
                        <p className="ink-soft" style={{ marginTop: '18px', fontSize: '16.5px' }}>Ecofusion Outsourcing is a professional recruitment and training consultancy that helps candidates build careers in cruise ships, aviation and hotel management. Unlike agencies that focus on placement alone, we build a complete talent-development journey — a stronger path for candidates, and a stronger pipeline for employers.</p>
                        <div className="badge-row">
                            <div className="card-flat">
                                <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5Z" /><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" /></svg></div>
                                <strong>Train</strong>
                            </div>
                            <div className="card-flat">
                                <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6" /><path d="M9 14l-2 7 5-3 5 3-2-7" /></svg></div>
                                <strong>Certify</strong>
                            </div>
                            <div className="card-flat">
                                <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 12h8M8 12a4 4 0 1 1 4-4M16 12a4 4 0 1 1-4 4" /></svg></div>
                                <strong>Place</strong>
                            </div>
                        </div>
                        <Link to="/about" className="btn btn-ghost" style={{ marginTop: '32px' }}>More About Us</Link>
                    </div>
                </div>
            </section>

            {/* SERVICE MODEL */}
            <section className="section on-dark">
                <div className="blob-field"><div className="blob" style={{ width: '460px', height: '460px', top: '-200px', left: '40%' }}></div></div>
                <div className="container">
                    <div className="section-head">
                        <span className="eyebrow">Our Service Model</span>
                        <h2>Recruit. Train. Certify.</h2>
                        <p>A complete career pathway rather than isolated services — this is what makes Ecofusion both a hiring partner and a training partner.</p>
                    </div>
                    <div className="grid grid-3">
                        <div className="step reveal">
                            <span className="num">01 — Recruit</span>
                            <h3>Recruit</h3>
                            <p>Identify and connect skilled candidates with cruise, aviation and hotel opportunities.</p>
                        </div>
                        <div className="step reveal">
                            <span className="num">02 — Train</span>
                            <h3>Train</h3>
                            <p>Build job-ready skills through specialised, industry-aligned courses.</p>
                        </div>
                        <div className="step reveal">
                            <span className="num">03 — Certify</span>
                            <h3>Certify</h3>
                            <p>Award recognised certifications that meet international service standards.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CANDIDATE JOURNEY */}
            <section className="section">
                <div className="container">
                    <div className="section-head center">
                        <span className="eyebrow">Candidate Journey</span>
                        <h2>From guidance to placement</h2>
                        <p className="ink-soft" style={{ marginLeft: 'auto', marginRight: 'auto' }}>A clear journey that shows Ecofusion is not simply a recruiter, but a complete career support system.</p>
                    </div>
                    <div className="grid grid-4">
                        <div className="card reveal">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M16 8l-3 7-3-2 6-5Z" /></svg></div>
                            <h3 style={{ fontSize: '19px' }}>1. Guidance</h3>
                            <p className="ink-soft" style={{ marginTop: '10px', fontSize: '14.5px' }}>Candidates receive career direction and sector counselling.</p>
                        </div>
                        <div className="card reveal">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5Z" /><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" /></svg></div>
                            <h3 style={{ fontSize: '19px' }}>2. Training</h3>
                            <p className="ink-soft" style={{ marginTop: '10px', fontSize: '14.5px' }}>Skill-building and certification aligned to industry needs.</p>
                        </div>
                        <div className="card reveal">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg></div>
                            <h3 style={{ fontSize: '19px' }}>3. Screening</h3>
                            <p className="ink-soft" style={{ marginTop: '10px', fontSize: '14.5px' }}>Readiness assessment against employer expectations.</p>
                        </div>
                        <div className="card reveal">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 12h8M8 12a4 4 0 1 1 4-4M16 12a4 4 0 1 1-4 4" /></svg></div>
                            <h3 style={{ fontSize: '19px' }}>4. Placement</h3>
                            <p className="ink-soft" style={{ marginTop: '10px', fontSize: '14.5px' }}>Matched to the right role in cruise, aviation or hotels.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="section on-lavender">
                <div className="container">
                    <div className="section-head">
                        <span className="eyebrow">Value Delivered</span>
                        <h2>Built for candidates and hiring partners</h2>
                    </div>
                    <div className="grid grid-2">
                        <div className="card reveal">
                            <h3 style={{ fontSize: '21px' }}>For Job Seekers</h3>
                            <ul className="check-list" style={{ marginTop: '18px' }}>
                                <li><span className="check-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>Career direction and sector counselling</li>
                                <li><span className="check-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>Industry-relevant training &amp; certification support</li>
                                <li><span className="check-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>Real placement opportunities across 3 sectors</li>
                                <li><span className="check-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>Greater confidence and international readiness</li>
                            </ul>
                        </div>
                        <div className="card reveal" style={{ background: 'var(--maroon)', color: '#fff', border: 'none' }}>
                            <h3 style={{ fontSize: '21px', color: '#fff' }}>For Hiring Partners</h3>
                            <ul className="check-list on-maroon" style={{ marginTop: '18px' }}>
                                <li><span className="check-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>Access to candidates already industry-briefed</li>
                                <li><span className="check-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>Reduced training time &amp; improved hiring quality</li>
                                <li><span className="check-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>Better workforce readiness from day one</li>
                                <li><span className="check-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>One flexible partner across cruise, aviation &amp; hotels</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-tight">
                <div className="container">
                    <div className="cta-band reveal">
                        <div className="blob-field"><div className="blob" style={{ width: '280px', height: '280px', top: '-120px', right: '10%' }}></div></div>
                        <div>
                            <h3>Empowering careers. Enabling global opportunity.</h3>
                            <p>Talk to our team about recruitment, training or certification — for candidates or hiring partners.</p>
                        </div>
                        <Link to="/contact" className="btn" style={{ background: '#fff', color: 'var(--maroon)' }}>Get in Touch</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
