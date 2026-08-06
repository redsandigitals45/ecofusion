import { Link } from 'react-router-dom';

export default function Reviews() {
    return (
        <>
            <section className="page-hero">
                <div className="blob-field"><div className="blob" style={{ width: '420px', height: '420px', top: '-180px', right: '-100px' }}></div></div>
                <div className="container">
                    <div className="breadcrumb"><Link to="/">Home</Link> / Reviews</div>
                    <span className="eyebrow" style={{ marginTop: '18px' }}>Reviews</span>
                    <h1>Trusted by candidates &amp; hiring partners</h1>
                    <p>Real feedback from people who trained, certified and placed their careers through Ecofusion.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-3">
                        <div className="card reveal">
                            <div className="pull" style={{ fontSize: '19px' }}>"The training gave me real confidence before I ever stepped onboard. I knew exactly what to expect."</div>
                            <div className="divider" style={{ margin: '24px 0' }}></div>
                            <strong>Sample Candidate</strong>
                            <p className="ink-soft" style={{ fontSize: '14px', marginTop: '2px' }}>Placed — Cruise, Guest Services</p>
                        </div>
                        <div className="card reveal">
                            <div className="pull" style={{ fontSize: '19px' }}>"From my first counselling call to my final interview prep, someone was guiding me the whole way."</div>
                            <div className="divider" style={{ margin: '24px 0' }}></div>
                            <strong>Sample Candidate</strong>
                            <p className="ink-soft" style={{ fontSize: '14px', marginTop: '2px' }}>Placed — Cabin Crew</p>
                        </div>
                        <div className="card reveal">
                            <div className="pull" style={{ fontSize: '19px' }}>"Ecofusion candidates arrive briefed and workplace-ready. It's noticeably cut our onboarding time."</div>
                            <div className="divider" style={{ margin: '24px 0' }}></div>
                            <strong>Sample Hiring Partner</strong>
                            <p className="ink-soft" style={{ fontSize: '14px', marginTop: '2px' }}>Hotel Group, HR Lead</p>
                        </div>
                        <div className="card reveal">
                            <div className="pull" style={{ fontSize: '19px' }}>"The certification process was structured and genuinely useful — not just a formality."</div>
                            <div className="divider" style={{ margin: '24px 0' }}></div>
                            <strong>Sample Candidate</strong>
                            <p className="ink-soft" style={{ fontSize: '14px', marginTop: '2px' }}>Placed — Hotel Front Office</p>
                        </div>
                        <div className="card reveal">
                            <div className="pull" style={{ fontSize: '19px' }}>"They understood exactly what our airline partners needed and prepared candidates accordingly."</div>
                            <div className="divider" style={{ margin: '24px 0' }}></div>
                            <strong>Sample Hiring Partner</strong>
                            <p className="ink-soft" style={{ fontSize: '14px', marginTop: '2px' }}>Aviation Recruitment Lead</p>
                        </div>
                        <div className="card reveal">
                            <div className="pull" style={{ fontSize: '19px' }}>"I felt supported at every stage — this didn't feel like a transactional recruitment process."</div>
                            <div className="divider" style={{ margin: '24px 0' }}></div>
                            <strong>Sample Candidate</strong>
                            <p className="ink-soft" style={{ fontSize: '14px', marginTop: '2px' }}>Placed — Cruise, F&amp;B</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section on-lavender">
                <div className="container">
                    <div className="grid grid-4" style={{ textAlign: 'center' }}>
                        <div className="reveal">
                            <h2 style={{ fontSize: '40px', color: 'var(--maroon)' }}>3</h2>
                            <p className="ink-soft" style={{ marginTop: '6px', fontSize: '14.5px' }}>Sectors served</p>
                        </div>
                        <div className="reveal">
                            <h2 style={{ fontSize: '40px', color: 'var(--maroon)' }}>Recruit</h2>
                            <p className="ink-soft" style={{ marginTop: '6px', fontSize: '14.5px' }}>Train · Certify · Place</p>
                        </div>
                        <div className="reveal">
                            <h2 style={{ fontSize: '40px', color: 'var(--maroon)' }}>Global</h2>
                            <p className="ink-soft" style={{ marginTop: '6px', fontSize: '14.5px' }}>Placement reach</p>
                        </div>
                        <div className="reveal">
                            <h2 style={{ fontSize: '40px', color: 'var(--maroon)' }}>1</h2>
                            <p className="ink-soft" style={{ marginTop: '6px', fontSize: '14.5px' }}>Flexible hiring partner</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-tight">
                <div className="container">
                    <div className="cta-band reveal">
                        <div className="blob-field"><div className="blob" style={{ width: '280px', height: '280px', top: '-120px', right: '10%' }}></div></div>
                        <div>
                            <h3>Want to be our next success story?</h3>
                            <p>Start your career journey with Ecofusion today.</p>
                        </div>
                        <Link to="/contact" className="btn" style={{ background: '#fff', color: 'var(--maroon)' }}>Get in Touch</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
