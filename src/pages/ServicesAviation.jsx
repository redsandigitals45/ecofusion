import { Link } from 'react-router-dom';

export default function ServicesAviation() {
    return (
        <>
            <section className="hero">
                <div className="blob-field"><div className="blob" style={{ width: '480px', height: '480px', top: '-220px', right: '-140px' }}></div></div>
                <div className="container hero-grid">
                    <div className="hero-copy">
                        <span className="eyebrow">Service · Aviation</span>
                        <h1 style={{ fontSize: 'clamp(34px,4.6vw,54px)' }}>Air Hostess &amp; Cabin Crew</h1>
                        <p className="lede">Cabin crew, ground service and passenger-facing airport roles — paired with grooming, communication and service-skill training built for aviation's standards.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-primary">Apply Now</Link>
                            <a href="#roles" className="btn btn-ghost-dark">See Roles</a>
                        </div>
                    </div>
                    <div className="hero-media reveal">
                        <img src="/assets/img/hero-aviation.jpg" alt="Cabin crew member smiling in an airport terminal" />
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container two-col">
                    <div>
                        <span className="eyebrow">Overview</span>
                        <h2 style={{ fontSize: 'clamp(28px,3.2vw,38px)', marginTop: '14px', lineHeight: 1.18 }}>Airport operations &amp; customer service roles</h2>
                        <p className="ink-soft" style={{ marginTop: '18px', fontSize: '16.5px' }}>Aviation careers demand poise, precision and calm under pressure. Ecofusion places candidates into cabin crew and airport-facing roles, and prepares them beforehand with grooming standards, communication training and service-skill coaching aligned to airline and ground-handling expectations.</p>
                        <div className="badge-row">
                            <div className="card-flat">
                                <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 16l20-8-8 20-3-9-9-3Z" /></svg></div>
                                <strong>Airline &amp; Ground Roles</strong>
                            </div>
                            <div className="card-flat">
                                <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6" /><path d="M9 14l-2 7 5-3 5 3-2-7" /></svg></div>
                                <strong>Grooming &amp; Service Training</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-media reveal">
                        <img src="/assets/img/hero-aviation.jpg" alt="Cabin crew member in an airport lounge" />
                    </div>
                </div>
            </section>

            <section id="roles" className="section on-rose">
                <div className="container">
                    <div className="section-head">
                        <span className="eyebrow">Roles We Place</span>
                        <h2>In-flight &amp; airport-facing positions</h2>
                    </div>
                    <div className="grid grid-3">
                        <div className="card reveal">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 16l20-8-8 20-3-9-9-3Z" /></svg></div>
                            <h3 style={{ fontSize: '18px' }}>Cabin Crew</h3>
                            <p className="ink-soft" style={{ marginTop: '10px', fontSize: '14.5px' }}>In-flight safety, service &amp; guest experience.</p>
                        </div>
                        <div className="card reveal">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9Z" /></svg></div>
                            <h3 style={{ fontSize: '18px' }}>Ground Operations</h3>
                            <p className="ink-soft" style={{ marginTop: '10px', fontSize: '14.5px' }}>Check-in, boarding &amp; airport coordination.</p>
                        </div>
                        <div className="card reveal">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 12h8M8 12a4 4 0 1 1 4-4M16 12a4 4 0 1 1-4 4" /></svg></div>
                            <h3 style={{ fontSize: '18px' }}>Passenger Services</h3>
                            <p className="ink-soft" style={{ marginTop: '10px', fontSize: '14.5px' }}>Lounge, customer support &amp; guest assistance.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container two-col reverse">
                    <div className="col-media reveal">
                        <img src="/assets/img/hero-aviation.jpg" alt="Cabin crew member walking through an airport" />
                    </div>
                    <div>
                        <span className="eyebrow">Aviation Courses</span>
                        <h2 style={{ fontSize: 'clamp(28px,3.2vw,38px)', marginTop: '14px', lineHeight: 1.18 }}>Grooming, communication &amp; service-skill training</h2>
                        <p className="ink-soft" style={{ marginTop: '18px', fontSize: '16.5px' }}>Our aviation course prepares candidates to meet the polish and professionalism airlines and airports expect — from personal presentation to passenger communication and safety-conscious service delivery.</p>
                        <ul className="check-list" style={{ marginTop: '20px' }}>
                            <li><span className="check-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>Grooming &amp; personal presentation standards</li>
                            <li><span className="check-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>Passenger communication &amp; conflict handling</li>
                            <li><span className="check-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>Interview coaching &amp; airline documentation prep</li>
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
                        <div className="step reveal"><span className="num">01</span><h3>Guidance</h3><p>Career direction &amp; aviation-sector counselling.</p></div>
                        <div className="step reveal"><span className="num">02</span><h3>Training</h3><p>Grooming, communication &amp; service-skill course.</p></div>
                        <div className="step reveal"><span className="num">03</span><h3>Screening</h3><p>Readiness assessment against airline standards.</p></div>
                        <div className="step reveal"><span className="num">04</span><h3>Placement</h3><p>Matched to cabin crew or ground-service roles.</p></div>
                    </div>
                </div>
            </section>

            <section className="section-tight">
                <div className="container">
                    <div className="cta-band reveal">
                        <div className="blob-field"><div className="blob" style={{ width: '280px', height: '280px', top: '-120px', right: '10%' }}></div></div>
                        <div>
                            <h3>Ready for take-off?</h3>
                            <p>Talk to our team about aviation openings and training.</p>
                        </div>
                        <Link to="/contact" className="btn" style={{ background: '#fff', color: 'var(--maroon)' }}>Apply Now</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
