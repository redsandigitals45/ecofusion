import { Link } from 'react-router-dom';

export default function Careers() {
    return (
        <>
            <section className="page-hero">
                <div className="blob-field"><div className="blob" style={{ width: '420px', height: '420px', top: '-180px', right: '-100px' }}></div></div>
                <div className="container">
                    <div className="breadcrumb"><Link to="/">Home</Link> / Careers</div>
                    <span className="eyebrow" style={{ marginTop: '18px' }}>Careers</span>
                    <h1>Current openings</h1>
                    <p>Live opportunities across cruise, aviation and hotel management — placed and prepared by Ecofusion.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: '1fr', gap: '18px' }}>
                        <div className="card reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div className="icon-badge" style={{ margin: 0 }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5Z" /><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" /></svg></div>
                                <div>
                                    <h3 style={{ fontSize: '19px' }}>Guest Services Associate — Cruise</h3>
                                    <p className="ink-soft" style={{ fontSize: '14px', marginTop: '4px' }}>Onboard · Full-time · [Location]</p>
                                </div>
                            </div>
                            <Link to="/contact" className="btn btn-ghost btn-sm">Apply</Link>
                        </div>
                        <div className="card reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div className="icon-badge" style={{ margin: 0 }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 16l20-8-8 20-3-9-9-3Z" /></svg></div>
                                <div>
                                    <h3 style={{ fontSize: '19px' }}>Cabin Crew — Aviation</h3>
                                    <p className="ink-soft" style={{ fontSize: '14px', marginTop: '4px' }}>Airline Partner · Full-time · [Location]</p>
                                </div>
                            </div>
                            <Link to="/contact" className="btn btn-ghost btn-sm">Apply</Link>
                        </div>
                        <div className="card reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div className="icon-badge" style={{ margin: 0 }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" /></svg></div>
                                <div>
                                    <h3 style={{ fontSize: '19px' }}>Front Office Executive — Hotel</h3>
                                    <p className="ink-soft" style={{ fontSize: '14px', marginTop: '4px' }}>Hotel Partner · Full-time · [Location]</p>
                                </div>
                            </div>
                            <Link to="/contact" className="btn btn-ghost btn-sm">Apply</Link>
                        </div>
                        <div className="card reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div className="icon-badge" style={{ margin: 0 }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 10h16M6 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4M5 10l1 10h12l1-10" /></svg></div>
                                <div>
                                    <h3 style={{ fontSize: '19px' }}>F&amp;B Service Crew — Cruise</h3>
                                    <p className="ink-soft" style={{ fontSize: '14px', marginTop: '4px' }}>Onboard · Full-time · [Location]</p>
                                </div>
                            </div>
                            <Link to="/contact" className="btn btn-ghost btn-sm">Apply</Link>
                        </div>
                    </div>
                    <p className="ink-soft" style={{ marginTop: '24px', fontSize: '14.5px' }}>Don't see the right fit? We add new openings regularly — <Link to="/contact" style={{ color: 'var(--maroon)', fontWeight: 600 }}>get in touch</Link> and our team will match you when a suitable role opens up.</p>
                </div>
            </section>

            <section className="section on-rose">
                <div className="container">
                    <div className="section-head">
                        <span className="eyebrow">How to Apply</span>
                        <h2>A simple four-step process</h2>
                    </div>
                    <div className="grid grid-4">
                        <div className="step reveal" style={{ background: 'var(--maroon)' }}><span className="num">01</span><h3>Guidance</h3><p>Talk to our team about your goals &amp; fit.</p></div>
                        <div className="step reveal" style={{ background: 'var(--maroon)' }}><span className="num">02</span><h3>Training</h3><p>Complete the relevant certification course.</p></div>
                        <div className="step reveal" style={{ background: 'var(--maroon)' }}><span className="num">03</span><h3>Screening</h3><p>Readiness assessment against employer needs.</p></div>
                        <div className="step reveal" style={{ background: 'var(--maroon)' }}><span className="num">04</span><h3>Placement</h3><p>Matched to the right opening for you.</p></div>
                    </div>
                </div>
            </section>

            <section className="section-tight">
                <div className="container">
                    <div className="cta-band reveal">
                        <div className="blob-field"><div className="blob" style={{ width: '280px', height: '280px', top: '-120px', right: '10%' }}></div></div>
                        <div>
                            <h3>Don't see the right role yet?</h3>
                            <p>Send us your details and we'll reach out when a fit opens up.</p>
                        </div>
                        <Link to="/contact" className="btn" style={{ background: '#fff', color: 'var(--maroon)' }}>Submit Your Details</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
