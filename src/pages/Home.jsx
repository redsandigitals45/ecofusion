import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const reviewsRow1 = [
    { id: 1, text: "I've always dreamed of working on a cruise ship. They matched me with the perfect culinary role and even helped with my STCW certification.", name: "Keiko Tanaka", role: "Chef • Celebrity Cruises" },
    { id: 2, text: "Professional, reliable, and genuinely care about your success. Got placed in Singapore within 10 weeks. Amazing support throughout.", name: "Carlos Mendoza", role: "Aviation Security • Changi Airport" },
    { id: 3, text: "The grooming sessions and interview preparation were spot on. I passed the Etihad assessment on my first attempt. Forever grateful!", name: "Fatima Al-Zahra", role: "Cabin Crew • Etihad Airways" },
    { id: 4, text: "Seamless process from start to finish. The team even helped me negotiate my contract terms. I'm now exploring the Caribbean daily!", name: "Lucas Ferreira", role: "Deck Officer • Norwegian Cruise" },
    { id: 5, text: "Absolutely incredible service! The team guided me through every step, from CV to contract. Now flying tax-free to 40+ destinations!", name: "Priya Sharma", role: "Cabin Crew • Qatar Airways" }
];

const reviewsRow2 = [
    { id: 6, text: "I had zero experience in the maritime industry. Ecofusion's team trained me, prepped me, and placed me in 3 months. Life-changing!", name: "James Okafor", role: "Steward • MSC Cruises" },
    { id: 7, text: "Found an incredible job in Malaysia. Their visa assistance made the process stress-free. Best decision of my life.", name: "Maria Santos", role: "Security Officer • Kuala Lumpur Airport" },
    { id: 8, text: "From Mumbai to Dubai in 6 weeks! The placement team was transparent, professional, and always available to answer my questions.", name: "Ahmed Al-Rashid", role: "Corporate Security • Dubai Hub" },
    { id: 9, text: "Could not recommend them highly enough. From initial training to final placement on a luxury liner, everything was handled perfectly.", name: "Sarah Jenkins", role: "Guest Relations • Royal Caribbean" },
    { id: 10, text: "The hotel management placement process was incredibly smooth. They found a role that perfectly matched my 5-star resort background.", name: "David Chen", role: "Front Desk Manager • Hilton Sydney" }
];

export default function Home() {
    const [bgIndex, setBgIndex] = useState(0);
    const bgImages = [
        '/assets/img/hero-cruise.jpg',
        '/assets/img/hero-aviation.jpg',
        '/assets/img/hero-hospitality.jpg',
        '/assets/img/hero-cruise.jpg'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setBgIndex(prev => (prev + 1) % bgImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const allLogs = [
        { icon: '🩺', text: 'Medical Doctor cleared port entry compliance in Nassau, Bahamas', color: 'rgb(139, 92, 246)' },
        { icon: '⚓', text: "Chief Housekeeper onboarded cruise ship 'Glow of the Seas'", color: 'rgb(0, 85, 255)' },
        { icon: '🛳️', text: "Second Mate matched with cruise vessel 'Pacific Venture'", color: 'rgb(0, 85, 255)' },
        { icon: '🛫', text: '15 Seafarers cleared visa compliance for Galveston Port boarding', color: 'rgb(139, 92, 246)' },
        { icon: '🛡️', text: '4 Deckhands passed premium STCW Safety at Sea Certification', color: 'rgb(16, 185, 129)' },
        { icon: '👨‍✈️', text: "Chief Officer matched with cruise vessel 'Oceanic Explorer'", color: 'rgb(0, 85, 255)' },
        { icon: '🍸', text: 'Food & Beverage Manager assigned to luxury suite fleet', color: 'rgb(245, 158, 11)' }
    ];

    const [liveLogs, setLiveLogs] = useState([]);

    useEffect(() => {
        const initial = allLogs.slice(0, 5).map(log => ({
            ...log,
            id: Math.random(),
            time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
        }));
        setLiveLogs(initial);

        const interval = setInterval(() => {
            const randomLog = allLogs[Math.floor(Math.random() * allLogs.length)];
            const timeStr = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const newLog = { ...randomLog, id: Math.random(), time: timeStr };

            setLiveLogs(prev => {
                const updated = [newLog, ...prev];
                if (updated.length > 5) updated.pop();
                return updated;
            });
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* HERO */}
            <section className="hero-fullbg" style={{ position: 'relative', background: 'transparent' }}>
                {bgImages.map((img, i) => (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `url(${img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: i === bgIndex ? 1 : 0,
                            transition: 'opacity 1.5s ease-in-out',
                            zIndex: 0
                        }}
                    />
                ))}
                <div className="hero-overlay" style={{ zIndex: 1, position: 'absolute', inset: 0 }}></div>

                <div className="container hero-grid-new" style={{ zIndex: 2, position: 'relative' }}>
                    <div className="hero-copy">
                        <span className="eyebrow" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)' }}>Recruitment &amp; Training Consultancy</span>
                        <h1 style={{ color: '#fff' }}>Careers that go<br />further than the<br />horizon.</h1>
                        <p className="lede" style={{ color: 'rgba(255,255,255,0.85)' }}>Ecofusion Outsourcing places and prepares talent for careers at sea, in the air, and across the world's hotels — one guided pathway from training to placement.</p>

                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-primary" style={{ background: 'var(--maroon, #5c0f38)', color: '#fff', border: 'none' }}>Start Your Career</Link>
                            <Link to="/about" className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)' }}>How It Works</Link>
                        </div>
                    </div>

                    <div className="hero-cards-right">
                        <div className="floating-card delay-1">
                            <div className="fc-icon blue">⚓</div>
                            <div className="fc-content">
                                <h3>Cruise</h3>
                                <p>Careers at sea</p>
                                <span className="fc-badge blue">CRUISE</span>
                            </div>
                        </div>

                        <div className="floating-card delay-2 align-right">
                            <div className="fc-icon green">✈</div>
                            <div className="fc-content">
                                <h3>Aviation</h3>
                                <p>In the air</p>
                                <span className="fc-badge green">AVIATION</span>
                            </div>
                        </div>

                        <div className="floating-card delay-3">
                            <div className="fc-icon orange">🏨</div>
                            <div className="fc-content">
                                <h3>Hotel Management</h3>
                                <p>Across the world</p>
                                <span className="fc-badge orange">HOSPITALITY</span>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
                    @keyframes fillBarProgress {
                        0% { width: 0%; }
                        100% { width: 100%; }
                    }
                `}</style>
                <div className="hero-slide-progress" style={{
                    position: 'absolute',
                    bottom: '40px',
                    right: '40px',
                    zIndex: 5,
                    background: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(12px)',
                    padding: '10px 24px',
                    borderRadius: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                }}>
                    <span style={{ color: '#fff', fontWeight: '800', fontSize: '16px' }}>
                        0{bgIndex + 1}
                    </span>
                    <div style={{ width: '60px', height: '2px', background: 'rgba(255,255,255,0.2)', position: 'relative', borderRadius: '2px', overflow: 'hidden' }}>
                        <div
                            key={bgIndex}
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                height: '100%',
                                background: '#5c0f38',
                                width: '0%',
                                animation: 'fillBarProgress 5s linear forwards',
                                borderRadius: '2px'
                            }}
                        ></div>
                    </div>
                    <span style={{ color: '#64748b', fontSize: '16px', fontWeight: '500' }}>
                        0{bgImages.length}
                    </span>
                </div>
            </section>

            {/* TRUSTED EMPLOYERS MARQUEE */}
            <section className="trusted-employers-section">
                <div className="container">
                    <p className="trusted-eyebrow">TRUSTED BY LEADING GLOBAL EMPLOYERS</p>
                </div>
                <div className="marquee-container">
                    <div className="marquee-track">
                        {/* Using an array twice to create a seamless infinite loop */}
                        {[...Array(2)].map((_, i) => (
                            <div key={i} style={{ display: 'flex', gap: '60px' }}>
                                <div className="marquee-item"><span className="m-icon">✈</span> ETIHAD AIRWAYS</div>
                                <div className="marquee-item"><span className="m-icon hotel">🏨</span> HILTON</div>
                                <div className="marquee-item"><span className="m-icon diamond">♦</span> MARRIOTT</div>
                                <div className="marquee-item"><span className="m-icon star">⭐</span> CELEBRITY CRUISES</div>
                                <div className="marquee-item"><span className="m-icon wave">🌊</span> COSTA CRUISES</div>
                                <div className="marquee-item"><span className="m-icon ship">🛳️</span> ROYAL CARIBBEAN</div>
                                <div className="marquee-item"><span className="m-icon anchor">⚓</span> MSC CRUISES</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THREE INDUSTRIES */}
            <section className="section on-rose" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="container">
                    <div className="section-head" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
                        <span className="eyebrow" style={{ color: '#38bdf8', padding: '6px 16px', background: '#f0f9ff', borderRadius: '99px', display: 'inline-block', marginBottom: '20px', fontWeight: '800', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>A Global Career Landscape</span>
                        <h2 style={{ fontSize: 'clamp(36px, 4vw, 48px)', fontWeight: '800', lineHeight: '1.2', marginBottom: '20px', color: '#0f172a' }}>Three industries. One mission.</h2>
                        <p style={{ fontSize: '17px', color: '#64748b', lineHeight: '1.6' }}>Cruise, aviation and hotel sectors all value trained, adaptable people who can work confidently in customer-facing, global-standard environments.</p>
                    </div>

                    <div className="grid immersive-cards-grid reveal stagger-group">
                        <div className="immersive-card">
                            <img className="ic-bg" src="/assets/img/hero-cruise.jpg" alt="" />
                            <div className="ic-overlay"></div>
                            <div className="ic-content">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                    <span className="modern-circle-icon">
                                        <svg viewBox="0 0 640 512" fill="currentColor"><path d="M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 118.4 255.7 232.6c-8.6 14.4-24.5 23.4-41.4 23.4H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h147.2L282.8 18.2c13.7-22.9 40.5-22.9 54.3 0L440.8 192H588c17.7 0 32 14.3 32 32s-14.3 32-32 32H425.7zM623 351.4c-9.8-19.1-34.7-22.9-49.8-7.5l-42.5 43.1L489.1 346c-13.6-13.3-34.7-13.3-48.3 0l-41.5 41-41.5-41c-13.6-13.3-34.7-13.3-48.3 0l-41.5 41-41.5-41c-13.6-13.3-34.7-13.3-48.3 0l-41.5 41-41.5-41c-13.6-13.3-34.7-13.3-48.3 0L49.2 387 6.8 343.8c-15.1-15.3-40-11.6-49.8 7.5S-28 393.7-12.9 409l64 64.9c13.6 13.8 35.1 13.8 48.7 0L141.2 432l41.5 41c13.6 13.3 34.7 13.3 48.3 0l41.5-41 41.5 41c13.6 13.3 34.7 13.3 48.3 0l41.5-41 41.5 41c13.6 13.3 34.7 13.3 48.3 0l41.5-41 42.5 43.1c15.1 15.3 40 11.6 49.8-7.5s-24-43.2-12.9-27.9-.1-27.9 11-42.5z" /></svg>
                                    </span>
                                    <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.9)' }}>CRUISE PLACEMENT</span>
                                </div>
                                <h3>Cruise</h3>
                                <p>Guest relations, F&amp;B, housekeeping, entertainment &amp; onboard service roles.</p>
                                <Link to="/services/cruise" className="ic-btn">EXPLORE CAREERS <span>→</span></Link>
                            </div>
                        </div>

                        <div className="immersive-card">
                            <img className="ic-bg" src="/assets/img/hero-aviation.jpg" alt="" />
                            <div className="ic-overlay"></div>
                            <div className="ic-content">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                    <span className="modern-circle-icon">
                                        <svg viewBox="0 0 576 512" fill="currentColor"><path d="M482.3 192c34 0 93.7 29 93.7 64c0 36-59.7 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z" /></svg>
                                    </span>
                                    <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.9)' }}>AVIATION PLACEMENT</span>
                                </div>
                                <h3>Aviation</h3>
                                <p>Cabin crew, airport operations, ground service &amp; passenger-facing roles.</p>
                                <Link to="/services/aviation" className="ic-btn">EXPLORE CAREERS <span>→</span></Link>
                            </div>
                        </div>

                        <div className="immersive-card span-last">
                            <img className="ic-bg" src="/assets/img/hero-hospitality.jpg" alt="" />
                            <div className="ic-overlay"></div>
                            <div className="ic-content">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                    <span className="modern-circle-icon">
                                        <svg viewBox="0 0 384 512" fill="currentColor"><path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32zm80-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16zm96 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32zM64 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32zm80-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16zm96 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32z" /></svg>
                                    </span>
                                    <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.9)' }}>HOSPITALITY PLACEMENT</span>
                                </div>
                                <h3>Hotel Management</h3>
                                <p>Front office, housekeeping, F&amp;B and full hotel operations.</p>
                                <Link to="/services/hospitality" className="ic-btn">EXPLORE CAREERS <span>→</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT ECOFUSION (Modern Grid View) */}
            <section className="section" style={{ background: '#fafbfc', padding: '100px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="reveal" style={{ maxWidth: '820px', margin: '0 auto 56px auto' }}>
                        <span style={{
                            display: 'inline-block',
                            fontSize: '11px',
                            fontWeight: '800',
                            textTransform: 'uppercase',
                            letterSpacing: '1.5px',
                            color: 'var(--maroon)',
                            border: '1px solid rgba(92, 15, 56, 0.3)',
                            padding: '6px 16px',
                            borderRadius: '100px',
                            marginBottom: '20px'
                        }}>
                            ABOUT ECOFUSION
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '900', color: '#0b1a4a', lineHeight: '1.2', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>A career partner — not just a recruiter.</h2>
                        <p style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: '1.6' }}>
                            Ecofusion Outsourcing is a professional recruitment and training consultancy that helps candidates build careers in cruise ships, aviation and hotel management. Unlike agencies that focus on placement alone, we build a complete talent-development journey — a stronger path for candidates, and a stronger pipeline for employers.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        {/* Card 1 */}
                        <div className="reveal why-choose-card-modern">
                            <div className="wc-icon-box">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--maroon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px' }}><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5Z" /><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" /></svg>
                            </div>
                            <h3>Train</h3>
                            <p>Build job-ready skills through specialised, industry-aligned courses.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="reveal delay-1 why-choose-card-modern">
                            <div className="wc-icon-box">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--maroon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px' }}><circle cx="12" cy="8" r="6" /><path d="M9 14l-2 7 5-3 5 3-2-7" /></svg>
                            </div>
                            <h3>Certify</h3>
                            <p>Award recognised certifications that meet international service standards.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="reveal delay-2 why-choose-card-modern">
                            <div className="wc-icon-box">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--maroon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px' }}><path d="M8 12h8M8 12a4 4 0 1 1 4-4M16 12a4 4 0 1 1-4 4" /></svg>
                            </div>
                            <h3>Place</h3>
                            <p>Matched to the right role in cruise, aviation or hotel management.</p>
                        </div>
                    </div>

                    <div className="reveal delay-3" style={{ marginTop: '48px' }}>
                        <Link to="/about" className="btn" style={{ background: 'var(--maroon)', color: '#fff', padding: '16px 36px', borderRadius: '100px', fontWeight: 'bold' }}>More About Us</Link>
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
            <section className="section" style={{ padding: '100px 0', background: 'linear-gradient(to bottom, #f8fafc 0%, #fff 100%)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }} className="reveal">
                        <span style={{
                            display: 'inline-block',
                            fontSize: '11px',
                            fontWeight: '800',
                            textTransform: 'uppercase',
                            letterSpacing: '1.5px',
                            color: 'var(--maroon)',
                            border: '1px solid rgba(92, 15, 56, 0.3)',
                            padding: '6px 16px',
                            borderRadius: '100px',
                            marginBottom: '20px'
                        }}>
                            CANDIDATE JOURNEY
                        </span>
                        <h2 style={{ fontSize: 'clamp(32px, 4vw, 42px)', fontWeight: '800', color: '#0b1a4a', lineHeight: '1.2', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>From guidance to placement</h2>
                        <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.6' }}>
                            A clear journey that shows Ecofusion is not simply a recruiter, but a complete career support system.
                        </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        <div className="journey-card-modern reveal">
                            <div className="j-icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M16 8l-3 7-3-2 6-5Z" /></svg>
                            </div>
                            <h3>1. Guidance</h3>
                            <p>Candidates receive career direction and sector counselling.</p>
                        </div>
                        <div className="journey-card-modern reveal delay-1">
                            <div className="j-icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5Z" /><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" /></svg>
                            </div>
                            <h3>2. Training</h3>
                            <p>Skill-building and certification aligned to industry needs.</p>
                        </div>
                        <div className="journey-card-modern reveal delay-2">
                            <div className="j-icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                            </div>
                            <h3>3. Screening</h3>
                            <p>Readiness assessment against employer expectations.</p>
                        </div>
                        <div className="journey-card-modern reveal delay-3">
                            <div className="j-icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 12h8M8 12a4 4 0 1 1 4-4M16 12a4 4 0 1 1-4 4" /></svg>
                            </div>
                            <h3>4. Placement</h3>
                            <p>Matched to the right role in cruise, aviation or hotels.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* REVIEWS MARQUEE */}
            <section className="reviews-section">
                <div className="container">
                    <div className="reviews-head">
                        <span className="reviews-pill">Candidate Feedback</span>
                        <div className="reviews-rating">
                            <div className="stars">★★★★★</div>
                            <span>4.8</span>
                        </div>
                        <h2 className="reviews-title">What Candidates <span>Are Saying</span></h2>
                    </div>
                </div>

                <div className="reviews-track-container">
                    {/* Top Row - Scrolls Left */}
                    <div className="reviews-track left">
                        {[...reviewsRow1, ...reviewsRow1, ...reviewsRow1].map((review, i) => (
                            <div className="review-card" key={`r1-${i}`}>
                                <div className="stars">★★★★★</div>
                                <p className="review-text">"{review.text}"</p>
                                <div className="review-author">
                                    <h4>{review.name}</h4>
                                    <p>{review.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row - Scrolls Right */}
                    <div className="reviews-track right">
                        {[...reviewsRow2, ...reviewsRow2, ...reviewsRow2].map((review, i) => (
                            <div className="review-card" key={`r2-${i}`}>
                                <div className="stars">★★★★★</div>
                                <p className="review-text">"{review.text}"</p>
                                <div className="review-author">
                                    <h4>{review.name}</h4>
                                    <p>{review.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container">
                    <div className="reviews-action">
                        <Link to="/reviews" className="btn-blue">READ MORE REVIEWS</Link>
                    </div>
                </div>
            </section>

            {/* LIVE OPERATIONS CONTROL */}
            <section className="container" style={{ paddingBottom: '80px' }}>
                <div className="home-live-ops" style={{
                    marginTop: '2.5rem',
                    marginBottom: '2rem',
                    background: 'var(--card-bg, #fff)',
                    borderRadius: '24px',
                    border: '1px solid var(--border, rgba(0, 22, 122, 0.1))',
                    padding: '2.5rem',
                    boxShadow: '0 20px 40px rgba(0, 22, 122, 0.02)',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '3rem',
                    alignItems: 'stretch'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.5rem' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#00167A' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity animate-pulse" aria-hidden="true" style={{ color: '#10b981', width: '16px', height: '16px' }}><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                                <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Live Operations Control</span>
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 6px #10b981', display: 'inline-block' }}></span>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00167A', marginBottom: '0.75rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>Global Crew &amp; Vessel Logistics</h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--muted, #64748b)', lineHeight: 1.5 }}>Monitoring real-time seafarer deployments, visa compliance, and certified crew matches across our global cruise line fleet.</p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div style={{ background: 'rgba(0, 22, 122, 0.01)', border: '1px solid var(--border, rgba(0, 22, 122, 0.1))', borderRadius: '12px', padding: '1rem', position: 'relative' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users" aria-hidden="true" style={{ color: '#00167A', marginBottom: '0.35rem', width: '16px', height: '16px' }}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                                <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted, #64748b)', letterSpacing: '0.05em' }}>Active Onboard</span>
                                <span style={{ fontSize: '1.25rem', fontWeight: 850, color: '#00167A', letterSpacing: '-0.03em', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.15rem' }}>1258<span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#10b981', background: 'rgba(16,185,129,0.1)', padding: '0.1rem 0.35rem', borderRadius: '4px' }}>LIVE</span></span>
                            </div>
                            <div style={{ background: 'rgba(0, 22, 122, 0.01)', border: '1px solid var(--border, rgba(0, 22, 122, 0.1))', borderRadius: '12px', padding: '1rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ship" aria-hidden="true" style={{ color: '#ff7a00', marginBottom: '0.35rem', width: '16px', height: '16px' }}><path d="M12 10.189V14"></path><path d="M12 2v3"></path><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"></path><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
                                <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted, #64748b)', letterSpacing: '0.05em' }}>Fleet Vessels</span>
                                <span style={{ fontSize: '1.25rem', fontWeight: 850, color: '#ff7a00', letterSpacing: '-0.03em', display: 'block', marginTop: '0.15rem' }}>64</span>
                            </div>
                            <div style={{ background: 'rgba(0, 22, 122, 0.01)', border: '1px solid var(--border, rgba(0, 22, 122, 0.1))', borderRadius: '12px', padding: '1rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users" aria-hidden="true" style={{ color: '#8b5cf6', marginBottom: '0.35rem', width: '16px', height: '16px' }}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                                <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted, #64748b)', letterSpacing: '0.05em' }}>Talent Pool</span>
                                <span style={{ fontSize: '1.25rem', fontWeight: 850, color: '#8b5cf6', letterSpacing: '-0.03em', display: 'block', marginTop: '0.15rem' }}>14,850+</span>
                            </div>
                            <div style={{ background: 'rgba(0, 22, 122, 0.01)', border: '1px solid var(--border, rgba(0, 22, 122, 0.1))', borderRadius: '12px', padding: '1rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check" aria-hidden="true" style={{ color: '#10b981', marginBottom: '0.35rem', width: '16px', height: '16px' }}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                                <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted, #64748b)', letterSpacing: '0.05em' }}>STCW Compliance</span>
                                <span style={{ fontSize: '1.25rem', fontWeight: 850, color: '#10b981', letterSpacing: '-0.03em', display: 'block', marginTop: '0.15rem' }}>100%</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: '#090d1a', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)', padding: '1.25rem 1rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', boxShadow: 'inset 0 10px 30px rgba(0,0,0,0.5)', height: '100%', minHeight: 0, overflow: 'hidden' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#94a3b8' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal" aria-hidden="true" style={{ color: '#38bdf8' }}><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
                                <span style={{ fontFamily: 'monospace', fontSize: '0.8rem', fontWeight: 700 }}>crew-matching-core.sh</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.35rem' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></span>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#eab308' }}></span>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></span>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, overflow: 'hidden' }}>
                            {liveLogs.map((log, index) => (
                                <div key={log.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontFamily: 'monospace', fontSize: '0.8rem', lineHeight: 1.5, color: index === 0 ? 'rgb(248, 250, 252)' : 'rgb(148, 163, 184)', padding: '0.5rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.03)', animation: index === 0 ? 'slideDownLog 0.3s ease-out' : 'none', opacity: 1 - (index * 0.15) }}>
                                    <span style={{ color: 'rgb(100, 116, 139)', flexShrink: 0 }}>[{log.time}]</span>
                                    <span style={{ flexShrink: 0 }}>{log.icon}</span>
                                    <span style={{ flex: '1 1 0%' }}>{log.text}</span>
                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: log.color, boxShadow: `0 0 8px ${log.color}`, flexShrink: 0, marginTop: '0.35rem' }}></span>
                                </div>
                            ))}
                        </div>
                        <style>{`
                            @keyframes slideDownLog {
                                0% { opacity: 0; transform: translateY(-10px); }
                                100% { opacity: 1; transform: translateY(0); }
                            }
                            @media (max-width: 900px) {
                                .home-live-ops {
                                    grid-template-columns: 1fr !important;
                                    padding: 1.5rem !important;
                                    gap: 2rem !important;
                                }
                            }
                        `}</style>
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

            {/* CAREER GUIDANCE SECTION */}
            <section className="cg-section">
                <div className="container" style={{ position: 'relative' }}>
                    <div className="cg-header">
                        <div className="cg-header-text">
                            <h2>Career Guidance</h2>
                            <p>Learn about different departments in the maritime industry and discover the best career path for you.</p>
                        </div>
                        <div className="cg-nav">
                            <button className="cg-btn" onClick={(e) => { e.currentTarget.closest('.container').querySelector('.cg-slider-track').scrollBy({ left: -364, behavior: 'smooth' }); }}>❮</button>
                            <button className="cg-btn next" onClick={(e) => { e.currentTarget.closest('.container').querySelector('.cg-slider-track').scrollBy({ left: 364, behavior: 'smooth' }); }}>❯</button>
                        </div>
                    </div>

                    <div className="cg-slider-container">
                        <div className="cg-slider-track">
                            <Link to="/blog/cv-writing" className="cg-card">
                                <img src="/assets/img/hero-cruise.jpg" alt="Cruise ship at sea" />
                                <div className="cg-card-content">
                                    <h3>CV Writing for Cruise Ship Jobs: A Complete Guide</h3>
                                    <p>Learn how to format your CV, highlight relevant maritime experience, and stand out to luxury cruise line recruiters.</p>
                                    <span className="cg-read-more">Read Article <span>→</span></span>
                                </div>
                            </Link>

                            <Link to="/blog/life-on-board" className="cg-card">
                                <img src="/assets/img/hero-hospitality.jpg" alt="Yacht at sea" />
                                <div className="cg-card-content">
                                    <h3>Life on Board: What It's Really Like to Work on a Cruise Ship</h3>
                                    <p>Discover the daily routine, accommodation, crew privileges, and social life that come with working on a...</p>
                                    <span className="cg-read-more">Read Article <span>→</span></span>
                                </div>
                            </Link>

                            <Link to="/blog/departments" className="cg-card">
                                <img src="/assets/img/hero-hospitality.jpg" alt="Restaurant interior" />
                                <div className="cg-card-content">
                                    <h3>Cruise Ship Careers: Guide to Departments and Job Roles</h3>
                                    <p>Unpack the different departments on board—from Marine and Deck to Hotel, Entertainment, and Wellness—to find...</p>
                                    <span className="cg-read-more">Read Article <span>→</span></span>
                                </div>
                            </Link>

                            <Link to="/blog/interview" className="cg-card">
                                <img src="/assets/img/hero-aviation.jpg" alt="People on laptops" />
                                <div className="cg-card-content">
                                    <h3>Mastering the Cruise Line Interview: Tips & Strategies</h3>
                                    <p>Prepare for your video and in-person interviews with top cruise lines. Learn about typical questions and how to...</p>
                                    <span className="cg-read-more">Read Article <span>→</span></span>
                                </div>
                            </Link>

                            <Link to="/blog/finance" className="cg-card">
                                <img src="/assets/img/hero-cruise.jpg" alt="Tropical resort" />
                                <div className="cg-card-content">
                                    <h3>Financial Freedom: How to Save and Manage Money...</h3>
                                    <p>Learn about tax-free earnings, zero living expenses, and smart saving strategies that make maritime careers incredibly...</p>
                                    <span className="cg-read-more">Read Article <span>→</span></span>
                                </div>
                            </Link>
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
