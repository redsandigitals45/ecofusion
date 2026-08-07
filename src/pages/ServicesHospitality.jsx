import { Link } from 'react-router-dom';

export default function ServicesHospitality() {
    return (
        <>
            <section className="hero">
                <div className="blob-field"><div className="blob" style={{ width: '480px', height: '480px', top: '-220px', right: '-140px' }}></div></div>
                <div className="container hero-grid">
                    <div className="hero-copy">
                        <span className="eyebrow">Service · Hotel Management</span>
                        <h1 style={{ fontSize: 'clamp(34px,4.6vw,54px)' }}>Hospitality Management</h1>
                        <p className="lede">Front office, food &amp; beverage, housekeeping and guest-service roles across hotels and resorts — supported by training in operational standards and hospitality culture.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-primary">Apply Now</Link>
                            <a href="#roles" className="btn btn-ghost-dark">See Roles</a>
                        </div>
                    </div>
                    <div className="hero-media reveal">
                        <img src="/assets/img/A big thanks to all and know that I'm proud to work with you!!!��������� #fourseasons #hotel #hongkong #caprice #restaurant #kitchen #thankyou #somuch #amazing #birthdaycake #yummy #proud #best #pastry #team #hk #merc.jpg" alt="Hotel reception staff assisting a guest at the front desk" />
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container two-col">
                    <div>
                        <span className="eyebrow">Overview</span>
                        <h2 style={{ fontSize: 'clamp(28px,3.2vw,38px)', marginTop: '14px', lineHeight: 1.18 }}>Front office, F&amp;B, housekeeping &amp; full hotel operations</h2>
                        <p className="ink-soft" style={{ marginTop: '18px', fontSize: '16.5px' }}>Hotels and resorts run on consistency, warmth and operational discipline. Ecofusion places candidates into hospitality roles across departments and prepares them with training in service standards and hotel culture — so they're ready to represent a property from their very first shift.</p>
                        <div className="badge-row">
                            <div className="card-flat">
                                <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" /></svg></div>
                                <strong>Hotel &amp; Resort Placement</strong>
                            </div>
                            <div className="card-flat">
                                <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6" /><path d="M9 14l-2 7 5-3 5 3-2-7" /></svg></div>
                                <strong>Operational Standards Training</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-media reveal">
                        <img src="/assets/img/A big thanks to all and know that I'm proud to work with you!!!��������� #fourseasons #hotel #hongkong #caprice #restaurant #kitchen #thankyou #somuch #amazing #birthdaycake #yummy #proud #best #pastry #team #hk #merc.jpg" alt="Hotel front desk staff handing over a passport to a guest" />
                    </div>
                </div>
            </section>

            <section id="roles" className="section on-rose">
                <div className="container">
                    <div className="section-head">
                        <span className="eyebrow">Roles We Place</span>
                        <h2>Positions across every hotel department</h2>
                    </div>
                    <div className="grid grid-4">
                        <div className="card reveal">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" /></svg></div>
                            <h3 style={{ fontSize: '18px' }}>Front Office</h3>
                            <p className="ink-soft" style={{ marginTop: '10px', fontSize: '14.5px' }}>Reception, reservations &amp; concierge.</p>
                        </div>
                        <div className="card reveal">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 10h16M6 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4M5 10l1 10h12l1-10" /></svg></div>
                            <h3 style={{ fontSize: '18px' }}>Food &amp; Beverage</h3>
                            <p className="ink-soft" style={{ marginTop: '10px', fontSize: '14.5px' }}>Restaurants, banquets &amp; in-room dining.</p>
                        </div>
                        <div className="card reveal">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" /><path d="M4 9h16M9 4v16" /></svg></div>
                            <h3 style={{ fontSize: '18px' }}>Housekeeping</h3>
                            <p className="ink-soft" style={{ marginTop: '10px', fontSize: '14.5px' }}>Room &amp; property presentation standards.</p>
                        </div>
                        <div className="card reveal">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 12h8M8 12a4 4 0 1 1 4-4M16 12a4 4 0 1 1-4 4" /></svg></div>
                            <h3 style={{ fontSize: '18px' }}>Guest Services</h3>
                            <p className="ink-soft" style={{ marginTop: '10px', fontSize: '14.5px' }}>Guest relations &amp; on-property support.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container two-col reverse">
                    <div className="col-media reveal">
                        <img src="/assets/img/A big thanks to all and know that I'm proud to work with you!!!��������� #fourseasons #hotel #hongkong #caprice #restaurant #kitchen #thankyou #somuch #amazing #birthdaycake #yummy #proud #best #pastry #team #hk #merc.jpg" alt="Hospitality staff at hotel reception desk" />
                    </div>
                    <div>
                        <span className="eyebrow">Hotel Management Courses</span>
                        <h2 style={{ fontSize: 'clamp(28px,3.2vw,38px)', marginTop: '14px', lineHeight: 1.18 }}>Operational standards &amp; hospitality culture</h2>
                        <p className="ink-soft" style={{ marginTop: '18px', fontSize: '16.5px' }}>Our hotel management course builds the operational fluency and service mindset that hotel brands expect — covering departmental workflows, guest interaction standards and the culture of hospitality itself.</p>
                        <ul className="check-list" style={{ marginTop: '20px' }}>
                            <li><span className="check-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>Departmental operations &amp; service workflows</li>
                            <li><span className="check-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>Guest interaction &amp; hospitality culture</li>
                            <li><span className="check-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>Interview coaching &amp; documentation prep</li>
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
                        <div className="step reveal"><span className="num">01</span><h3>Guidance</h3><p>Career direction &amp; hotel-sector counselling.</p></div>
                        <div className="step reveal"><span className="num">02</span><h3>Training</h3><p>Operational standards &amp; hospitality-culture course.</p></div>
                        <div className="step reveal"><span className="num">03</span><h3>Screening</h3><p>Readiness assessment against hotel brand standards.</p></div>
                        <div className="step reveal"><span className="num">04</span><h3>Placement</h3><p>Matched to the right hotel &amp; department.</p></div>
                    </div>
                </div>
            </section>

            <section className="section-tight">
                <div className="container">
                    <div className="cta-band reveal">
                        <div className="blob-field"><div className="blob" style={{ width: '280px', height: '280px', top: '-120px', right: '10%' }}></div></div>
                        <div>
                            <h3>Ready to join hospitality's front line?</h3>
                            <p>Talk to our team about hotel openings and training.</p>
                        </div>
                        <Link to="/contact" className="btn" style={{ background: '#fff', color: 'var(--maroon)' }}>Apply Now</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
