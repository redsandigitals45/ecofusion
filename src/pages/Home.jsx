import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

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

const jobs = [
    { id: 1, badge: 'AE', title: 'Cabin Crew — Emirates', category: 'Aviation', salary: 'AED 8,500/mo - Tax-Free', location: 'UAE', type: 'Full-Time', exp: 'Exp: 1+ yr', tags: ['Dubai', 'Airlines'] },
    { id: 2, badge: 'US', title: 'Cruise Ship Guest Associate', category: 'Cruise', salary: '$3,200/mo + Tips', location: 'USA', type: 'Contract', exp: 'Exp: 0-1 yr', tags: ['Miami', 'Royal Caribbean'] },
    { id: 3, badge: 'MY', title: 'Airport Security Officer', category: 'Security', salary: 'MYR 4,800/mo', location: 'Malaysia', type: 'Full-Time', exp: 'Exp: 1-3 yr', tags: ['Kuala Lumpur', 'Terminal Security'] },
    { id: 4, badge: 'EG', title: 'Marine Deck Cadet', category: 'Merchant Navy', salary: 'EGP 24,000/mo', location: 'Egypt', type: 'Contract', exp: 'Exp: Entry Level', tags: ['Suez Canal', 'Cargo Fleets'] },
    { id: 5, badge: 'SG', title: 'Marine Deck Officer', category: 'Merchant Navy', salary: 'SGD 5,500/mo', location: 'Singapore', type: 'Contract', exp: 'Exp: 2+ yr', tags: ['Singapore', 'Container Fleet'] },
    { id: 6, badge: 'AE', title: 'VIP Close Protection Officer', category: 'Security', salary: 'AED 12,000/mo', location: 'UAE', type: 'Full-Time', exp: 'Exp: 3+ yr', tags: ['Dubai', 'Corporate Security'] }
];

const JobCard = ({ job }) => (
    <div className="job-card">
        <div className="job-card-left">
            <div className="job-badge">{job.badge}</div>
            <div className="job-info">
                <h3>
                    {job.title}
                    <span className="visa-badge">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        VISA SPONSORED
                    </span>
                </h3>
                <div className="job-meta">
                    <span style={{ fontWeight: 600, color: 'var(--ink)' }}>{job.salary}</span>
                    <span style={{ opacity: 0.5 }}>|</span>
                    <span>{job.location}</span>
                    <span>{job.type}</span>
                    <span>{job.exp}</span>
                </div>
                <div className="job-tags">
                    {job.tags.map(tag => <span key={tag} className="job-tag">{tag}</span>)}
                </div>
            </div>
        </div>
        <div className="job-actions">
            <button className="btn-save">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
            </button>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 24px', borderRadius: '100px', fontSize: '14px', fontWeight: 'bold' }}>Apply Now</Link>
        </div>
    </div>
);

export default function Home() {
    const [bgIndex, setBgIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeLocation, setActiveLocation] = useState('All');
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
        { icon: '🩺', text: 'Medical Doctor cleared port entry compliance in Nassau, Bahamas', color: '#7C1B54' },
        { icon: '⚓', text: "Chief Housekeeper onboarded cruise ship 'Glow of the Seas'", color: '#5F0F40' },
        { icon: '🛳️', text: "Second Mate matched with cruise vessel 'Pacific Venture'", color: '#5F0F40' },
        { icon: '🛫', text: '15 Seafarers cleared visa compliance for Galveston Port boarding', color: '#7C1B54' },
        { icon: '🛡️', text: '4 Deckhands passed premium STCW Safety at Sea Certification', color: '#D9C5D1' },
        { icon: '👨‍✈️', text: "Chief Officer matched with cruise vessel 'Oceanic Explorer'", color: '#5F0F40' },
        { icon: '🍸', text: 'Food & Beverage Manager assigned to luxury suite fleet', color: '#26061A' }
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
        <div className="home-page">
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
                            <Link to="/contact" className="btn btn-primary">Start Your Career</Link>
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
                    background: 'rgba(38, 6, 26, 0.75)',
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
                                background: 'var(--maroon)',
                                width: '0%',
                                animation: 'fillBarProgress 5s linear forwards',
                                borderRadius: '2px'
                            }}
                        ></div>
                    </div>
                    <span className="hero-slide-counter-muted" style={{ fontSize: '16px', fontWeight: '500' }}>
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
                        <span className="pill-eyebrow">A Global Career Landscape</span>
                        <h2 className="heading-ink" style={{ fontSize: 'clamp(36px, 4vw, 48px)', fontWeight: '800', lineHeight: '1.2', marginBottom: '20px' }}>Three industries. One mission.</h2>
                        <p className="text-muted" style={{ fontSize: '17px', lineHeight: '1.6' }}>Cruise, aviation and hotel sectors all value trained, adaptable people who can work confidently in customer-facing, global-standard environments.</p>
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

            {/* HOT OPPORTUNITIES */}
            <section className="section section-pale" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div className="section-head" style={{ marginBottom: '40px' }}>
                        <span className="pill-eyebrow">NOW HIRING</span>
                        <h2 className="heading-ink" style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: '800', lineHeight: '1.2', marginBottom: '16px' }}>
                            Hot <span className="accent-maroon">Opportunities</span> Available Now
                        </h2>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                            <p className="text-muted" style={{ fontSize: '16px', lineHeight: '1.6', maxWidth: '600px', margin: 0 }}>
                                Explore a selection of current international career opportunities across hospitality, aviation, maritime, and security sectors.
                            </p>
                            <Link to="/careers" className="link-maroon" style={{ fontSize: '15px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                View All Opportunities <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </Link>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}>
                        <div className="filter-pills">
                            {['All', 'Aviation', 'Cruise', 'Merchant Navy', 'Security'].map(cat => (
                                <button key={cat} className={`filter-pill ${activeCategory === cat ? 'active-blue' : ''}`} onClick={() => setActiveCategory(cat)}>{cat}</button>
                            ))}
                        </div>
                        <div className="filter-pills">
                            {['All', 'UAE', 'Singapore', 'Malaysia', 'USA', 'Egypt'].map(loc => (
                                <button key={loc} className={`filter-pill ${activeLocation === loc ? 'active-dark' : ''}`} onClick={() => setActiveLocation(loc)}>{loc}</button>
                            ))}
                        </div>
                    </div>

                    <div>
                        {jobs.filter(job =>
                            (activeCategory === 'All' || job.category === activeCategory) &&
                            (activeLocation === 'All' || job.location === activeLocation)
                        ).map(job => (
                            <JobCard key={job.id} job={job} />
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '48px' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 36px', borderRadius: '100px', fontWeight: 'bold' }}>VIEW ALL OPPORTUNITIES ➔</Link>
                    </div>
                </div>
            </section>

            {/* OUR EXPERTISE (Modern Grid View) */}
            <section className="section section-white" style={{ padding: '100px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="reveal" style={{ maxWidth: '820px', margin: '0 auto 56px auto' }}>
                        <span className="pill-eyebrow">
                            OUR EXPERTISE
                        </span>
                        <h2 className="heading-ink" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '900', lineHeight: '1.2', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
                            More Than Recruitment.<br />
                            <span className="accent-maroon">We Build International Careers.</span>
                        </h2>
                        <p className="text-muted" style={{ fontSize: '1.15rem', lineHeight: '1.6' }}>
                            Every successful international career begins with the right guidance, the right opportunity, and the right recruitment partner. At Ecofusion Outsourcing, we help ambitious professionals prepare for rewarding careers with trusted employers across multiple industries. From career consultation to employer coordination, our recruitment process is designed to make your journey simple, transparent, and professional.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', textAlign: 'left' }}>
                        {/* Card 1 */}
                        <div className="reveal expertise-card" style={{ background: 'var(--white)', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow-card)', border: '1px solid var(--line)' }}>
                            <div className="ec-icon ec-icon-maroon" style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                                {/* Compass */}
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                            </div>
                            <h3 className="heading-ink" style={{ fontSize: '19px', fontWeight: '700', marginBottom: '12px' }}>Career Consultation</h3>
                            <p className="text-muted" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>Receive personalized guidance to identify career opportunities that match your qualifications, skills, and aspirations.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="reveal delay-1 expertise-card" style={{ background: 'var(--white)', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow-card)', border: '1px solid var(--line)' }}>
                            <div className="ec-icon ec-icon-maroon-light" style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                                {/* Globe */}
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                            </div>
                            <h3 className="heading-ink" style={{ fontSize: '19px', fontWeight: '700', marginBottom: '12px' }}>Employer Matching</h3>
                            <p className="text-muted" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>We connect eligible candidates with opportunities that align with their experience and career goals.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="reveal delay-2 expertise-card" style={{ background: 'var(--white)', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow-card)', border: '1px solid var(--line)' }}>
                            <div className="ec-icon ec-icon-aubergine" style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                                {/* Interview/User Desk */}
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                            <h3 className="heading-ink" style={{ fontSize: '19px', fontWeight: '700', marginBottom: '12px' }}>Interview Preparation</h3>
                            <p className="text-muted" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>Build confidence through professional interview guidance tailored to your chosen industry.</p>
                        </div>
                        {/* Card 4 */}
                        <div className="reveal expertise-card" style={{ background: 'var(--white)', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow-card)', border: '1px solid var(--line)' }}>
                            <div className="ec-icon ec-icon-lavender" style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                                {/* Document Support */}
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                            </div>
                            <h3 className="heading-ink" style={{ fontSize: '19px', fontWeight: '700', marginBottom: '12px' }}>Documentation Support</h3>
                            <p className="text-muted" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>Receive assistance with recruitment documentation and employer requirements.</p>
                        </div>
                        {/* Card 5 */}
                        <div className="reveal delay-1 expertise-card" style={{ background: 'var(--white)', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow-card)', border: '1px solid var(--line)' }}>
                            <div className="ec-icon ec-icon-maroon" style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                                {/* Career Planning (Briefcase) */}
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                            </div>
                            <h3 className="heading-ink" style={{ fontSize: '19px', fontWeight: '700', marginBottom: '12px' }}>Career Planning</h3>
                            <p className="text-muted" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>Understand your career options and develop a roadmap for long-term professional growth.</p>
                        </div>
                        {/* Card 6 */}
                        <div className="reveal delay-2 expertise-card" style={{ background: 'var(--white)', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow-card)', border: '1px solid var(--line)' }}>
                            <div className="ec-icon ec-icon-aubergine" style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                                {/* Heart */}
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            </div>
                            <h3 className="heading-ink" style={{ fontSize: '19px', fontWeight: '700', marginBottom: '12px' }}>Candidate Support</h3>
                            <p className="text-muted" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>Our recruitment team remains available to guide you throughout your recruitment journey.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DESTINATIONS SECTION */}
            <section className="section section-pale" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }} className="reveal">
                        <h2 className="heading-ink" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: '900', lineHeight: '1.15', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                            Where Will Your <span className="accent-maroon">Career</span><br />
                            <span className="accent-maroon">Take You?</span>
                        </h2>
                        <p className="text-muted" style={{ fontSize: '1.15rem', lineHeight: '1.6' }}>
                            International opportunities are available across some of the world's<br />most exciting destinations.
                        </p>
                    </div>

                    <div className="destinations-grid">
                        {/* UAE */}
                        <div className="dest-card reveal">
                            <div className="dest-img-box" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop)' }}>
                                <div className="dest-img-overlay"></div>
                                <div className="dest-title">
                                    <span className="dest-flag">
                                        <svg viewBox="0 0 36 36" width="24" height="24"><circle fill="#eee" cx="18" cy="18" r="18" /><path fill="#d21034" d="M0 9a18 18 0 0 1 36 0H0z" /><path fill="#00732f" d="M0 27h36a18 18 0 0 1-36 0z" /><path fill="#fff" d="M0 9h36v18H0z" /><path fill="#000" d="M0 9a18 18 0 0 0 0 18h12V9H0z" /></svg>
                                    </span>
                                    <h4>United Arab Emirates</h4>
                                </div>
                            </div>
                            <div className="dest-body">
                                <p className="dest-desc">Known for hospitality, aviation, and security careers.</p>
                                <div className="dest-stats-grid">
                                    <div className="dest-stat">
                                        <span className="dest-stat-label"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> LIVE JOBS</span>
                                        <strong>240+<br />Vacancies</strong>
                                    </div>
                                    <div className="dest-stat">
                                        <span className="dest-stat-label"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg> SECTOR</span>
                                        <strong style={{ color: 'var(--ink)' }}>Hospitality &amp;<br />Aviation</strong>
                                    </div>
                                </div>
                                <div className="dest-salary">
                                    <span className="dest-salary-label"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> AVERAGE SALARY</span>
                                    <strong>AED 6,000 – 12,000/mo</strong>
                                </div>
                                <Link to="/jobs/uae" className="dest-btn ua-grad">
                                    EXPLORE JOBS IN UAE ➔
                                </Link>
                            </div>
                        </div>

                        {/* Qatar */}
                        <div className="dest-card reveal delay-1">
                            <div className="dest-img-box" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1616854589255-a0bd00d922bc?q=80&w=600&auto=format&fit=crop)' }}>
                                <div className="dest-img-overlay"></div>
                                <div className="dest-title">
                                    <span className="dest-flag">
                                        <svg viewBox="0 0 36 36" width="24" height="24"><circle fill="#8a1538" cx="18" cy="18" r="18" /><path fill="#fff" d="M0 18a18 18 0 0 1 8.5-15.3l3 2 1-3.5 2 3 2.5-2.5 1 3.5 2.5-3 0 4 3-2-2 3.5 3-1-2.5 3 2 1-3 1.5 3 2.5-3.5-.5 1 3-3-1 2 2.5-3 0 1 3-3.5-1 2 2.5-3 0-1 4-2-2.5-2 3-1.5-3-2 3-1-3.5-2 2A18.1 18.1 0 0 1 0 18z" /></svg>
                                    </span>
                                    <h4>Qatar</h4>
                                </div>
                            </div>
                            <div className="dest-body">
                                <p className="dest-desc">Growing opportunities across multiple service industries.</p>
                                <div className="dest-stats-grid">
                                    <div className="dest-stat">
                                        <span className="dest-stat-label"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> LIVE JOBS</span>
                                        <strong>190+<br />Vacancies</strong>
                                    </div>
                                    <div className="dest-stat">
                                        <span className="dest-stat-label"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg> SECTOR</span>
                                        <strong style={{ color: 'var(--ink)' }}>Aviation &amp;<br />Services</strong>
                                    </div>
                                </div>
                                <div className="dest-salary">
                                    <span className="dest-salary-label"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> AVERAGE SALARY</span>
                                    <strong>QAR 5,500 – 11,000/mo</strong>
                                </div>
                                <Link to="/jobs/qatar" className="dest-btn qa-grad">
                                    EXPLORE JOBS IN QATAR ➔
                                </Link>
                            </div>
                        </div>

                        {/* Singapore */}
                        <div className="dest-card reveal delay-2">
                            <div className="dest-img-box" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1596422846543-7ec40a3fb628?q=80&w=600&auto=format&fit=crop)' }}>
                                <div className="dest-img-overlay"></div>
                                <div className="dest-title">
                                    <span className="dest-flag">
                                        <svg viewBox="0 0 36 36" width="24" height="24"><circle fill="#ed2939" cx="18" cy="18" r="18" /><path fill="#fff" d="M0 18a18 18 0 0 0 36 0H0z" /><circle fill="#fff" cx="11.5" cy="10" r="5" /><circle fill="#ed2939" cx="12.5" cy="10.5" r="4.5" /><path fill="#fff" d="M16 7l1 2 2 .5-1.5 1L18 13l-1.5-1-1.5 1 .5-2L14 9.5l2-.5zM20 6l1 2 2 .5-1.5 1L22 12l-1.5-1-1.5 1 .5-2L18 8.5l2-.5zM24 8l1 2 2 .5-1.5 1L26 14l-1.5-1-1.5 1 .5-2L22 10.5l2-.5z" /></svg>
                                    </span>
                                    <h4>Singapore</h4>
                                </div>
                            </div>
                            <div className="dest-body">
                                <p className="dest-desc">International hospitality and maritime opportunities.</p>
                                <div className="dest-stats-grid">
                                    <div className="dest-stat">
                                        <span className="dest-stat-label"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> LIVE JOBS</span>
                                        <strong>180+<br />Vacancies</strong>
                                    </div>
                                    <div className="dest-stat">
                                        <span className="dest-stat-label"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg> SECTOR</span>
                                        <strong style={{ color: 'var(--ink)' }}>Hospitality &amp;<br />Maritime</strong>
                                    </div>
                                </div>
                                <div className="dest-salary">
                                    <span className="dest-salary-label"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> AVERAGE SALARY</span>
                                    <strong>SGD 4,500 – 9,000/mo</strong>
                                </div>
                                <Link to="/jobs/singapore" className="dest-btn sg-grad">
                                    EXPLORE JOBS IN SINGAPORE ➔
                                </Link>
                            </div>
                        </div>

                        {/* Germany */}
                        <div className="dest-card reveal">
                            <div className="dest-img-box" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=600&auto=format&fit=crop)' }}>
                                <div className="dest-img-overlay"></div>
                                <div className="dest-title">
                                    <span className="dest-flag">
                                        <svg viewBox="0 0 36 36" width="24" height="24"><circle fill="#000" cx="18" cy="18" r="18" /><path fill="#dd0000" d="M0 12h36v12H0z" /><path fill="#ffce00" d="M0 24a18 18 0 0 0 36 0H0z" /></svg>
                                    </span>
                                    <h4>Germany</h4>
                                </div>
                            </div>
                            <div className="dest-body">
                                <p className="dest-desc">Technical and maritime career pathways.</p>
                                <div className="dest-stats-grid">
                                    <div className="dest-stat">
                                        <span className="dest-stat-label"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> LIVE JOBS</span>
                                        <strong>110+<br />Vacancies</strong>
                                    </div>
                                    <div className="dest-stat">
                                        <span className="dest-stat-label"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg> SECTOR</span>
                                        <strong style={{ color: 'var(--ink)' }}>Technical &amp;<br />Maritime</strong>
                                    </div>
                                </div>
                                <div className="dest-salary">
                                    <span className="dest-salary-label"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> AVERAGE SALARY</span>
                                    <strong>EUR 2,500 – 4,500/mo</strong>
                                </div>
                                <Link to="/jobs/germany" className="dest-btn de-grad">
                                    EXPLORE JOBS IN GERMANY ➔
                                </Link>
                            </div>
                        </div>

                        {/* Italy */}
                        <div className="dest-card reveal delay-1">
                            <div className="dest-img-box" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516483638261-f4ddaefa53f7?q=80&w=600&auto=format&fit=crop)' }}>
                                <div className="dest-img-overlay"></div>
                                <div className="dest-title">
                                    <span className="dest-flag">
                                        <svg viewBox="0 0 36 36" width="24" height="24"><circle fill="#009246" cx="18" cy="18" r="18" /><path fill="#fff" d="M12 0h12v36H12z" /><path fill="#ce2b37" d="M24 2.1a18 18 0 0 1 0 31.8V2.1z" /></svg>
                                    </span>
                                    <h4>Italy</h4>
                                </div>
                            </div>
                            <div className="dest-body">
                                <p className="dest-desc">Cruise operations and hospitality opportunities.</p>
                                <div className="dest-stats-grid">
                                    <div className="dest-stat">
                                        <span className="dest-stat-label"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> LIVE JOBS</span>
                                        <strong>140+<br />Vacancies</strong>
                                    </div>
                                    <div className="dest-stat">
                                        <span className="dest-stat-label"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg> SECTOR</span>
                                        <strong style={{ color: 'var(--ink)' }}>Cruise &amp;<br />Hospitality</strong>
                                    </div>
                                </div>
                                <div className="dest-salary">
                                    <span className="dest-salary-label"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> AVERAGE SALARY</span>
                                    <strong>EUR 2,200 – 3,800/mo</strong>
                                </div>
                                <Link to="/jobs/italy" className="dest-btn it-grad">
                                    EXPLORE JOBS IN ITALY ➔
                                </Link>
                            </div>
                        </div>

                        {/* Norway */}
                        <div className="dest-card reveal delay-2">
                            <div className="dest-img-box" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513515570324-4b533b38153d?q=80&w=600&auto=format&fit=crop)' }}>
                                <div className="dest-img-overlay"></div>
                                <div className="dest-title">
                                    <span className="dest-flag">
                                        <svg viewBox="0 0 36 36" width="24" height="24"><circle fill="#ef2b2d" cx="18" cy="18" r="18" /><path fill="#fff" d="M10 0h6v36h-6zM0 14h36v6H0z" /><path fill="#002868" d="M11.5 0h3v36h-3zM0 15.5h36v3H0z" /></svg>
                                    </span>
                                    <h4>Norway</h4>
                                </div>
                            </div>
                            <div className="dest-body">
                                <p className="dest-desc">Maritime and offshore career opportunities.</p>
                                <div className="dest-stats-grid">
                                    <div className="dest-stat">
                                        <span className="dest-stat-label"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> LIVE JOBS</span>
                                        <strong>95+<br />Vacancies</strong>
                                    </div>
                                    <div className="dest-stat">
                                        <span className="dest-stat-label"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg> SECTOR</span>
                                        <strong style={{ color: 'var(--ink)' }}>Maritime &amp;<br />Offshore</strong>
                                    </div>
                                </div>
                                <div className="dest-salary">
                                    <span className="dest-salary-label"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> AVERAGE SALARY</span>
                                    <strong>NOK 25,000 – 45,000/mo</strong>
                                </div>
                                <Link to="/jobs/norway" className="dest-btn no-grad">
                                    EXPLORE JOBS IN NORWAY ➔
                                </Link>
                            </div>
                        </div>

                    </div>
                    <style>{`
                        .destinations-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 32px; padding-top: 10px; }
                        .dest-card { background: var(--white); border-radius: 20px; overflow: hidden; box-shadow: var(--shadow-card); border: 1px solid var(--line); text-align: left; transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; }
                        .dest-card:hover { transform: translateY(-3px); box-shadow: 0 20px 40px -10px rgba(38, 6, 26, 0.12); }
                        .dest-img-box { position: relative; height: 190px; background-size: cover; background-position: center; border-radius: 20px 20px 0 0; }
                        .dest-img-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(38, 6, 26, 0) 20%, rgba(38, 6, 26, 0.88) 100%); }
                        .dest-title { position: absolute; bottom: 20px; left: 24px; right: 24px; display: flex; alignItems: center; gap: 12px; z-index: 2; }
                        .dest-flag { display: inline-flex; width: 30px; height: 30px; border-radius: 50%; overflow: hidden; border: 2px solid rgba(255,255,255,0.2); flex-shrink: 0; }
                        .dest-flag svg { width: 100%; height: 100%; object-fit: cover; }
                        .dest-title h4 { color: #fff; font-size: 21px; font-weight: 800; margin: 0; letter-spacing: -0.01em; }
                        .dest-body { padding: 24px; display: flex; flex-direction: column; flex: 1; }
                        .dest-desc { font-size: 15px; color: var(--ink-soft); line-height: 1.5; margin-bottom: 24px; min-height: 45px; }
                        .dest-stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
                        .dest-stat { background: var(--rose); border: 1px solid var(--line); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 8px; justify-content: center; }
                        .dest-stat-label { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ink-soft); display: flex; align-items: center; gap: 6px; }
                        .dest-stat strong { font-size: 14px; font-weight: 800; color: var(--maroon); line-height: 1.3; margin: 0; }
                        .dest-salary { background: var(--lavender-soft); border: 1px solid var(--lavender); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 6px; margin-bottom: 24px; }
                        .dest-salary-label { font-size: 10.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--maroon); display: flex; align-items: center; gap: 6px; }
                        .dest-salary strong { font-size: 16.5px; font-weight: 800; color: var(--ink); }
                        .dest-btn { display: flex; align-items: center; justify-content: center; padding: 16px; border-radius: 12px; color: #fff; font-size: 13.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; transition: opacity 0.3s ease; text-decoration: none; margin-top: auto; }
                        .dest-btn:hover { opacity: 0.9; color: #fff; }
                        .ua-grad, .qa-grad, .sg-grad, .de-grad, .it-grad, .no-grad { background: linear-gradient(135deg, #5F0F40, #26061A); }
                    `}</style>
                </div>
            </section>


            {/* SERVICE MODEL */}
            <section className="section on-dark" style={{
                position: 'relative',
                backgroundImage: 'url(/assets/img/urban-skyline-modern-buildings.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                zIndex: 1,
                backgroundColor: 'transparent'
            }}>
                <div className="service-model-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(38, 6, 26, 0.82)', zIndex: -1 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
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

            {/* CANDIDATE JOURNEY -> HOW IT WORKS */}
            <section className="section section-white" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }} className="reveal">
                        <span className="pill-eyebrow">
                            HOW IT WORKS
                        </span>
                        <h2 className="heading-ink" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '800', lineHeight: '1.2', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
                            Your Journey To A <span className="accent-maroon">Global Career</span>
                        </h2>
                        <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                            Our recruitment process is designed to be simple, transparent, and candidate-focused.
                        </p>
                    </div>

                    <div className="how-it-works-grid">
                        {/* Item 1 */}
                        <div className="hiw-item reveal">
                            <div className="hiw-circle-box blue-grad">
                                <div className="hiw-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                </div>
                                <span className="hiw-num">01</span>
                            </div>
                            <h3>Career Consultation</h3>
                            <p>Understand your goals and explore suitable opportunities.</p>
                        </div>
                        {/* Item 2 */}
                        <div className="hiw-item reveal delay-1">
                            <div className="hiw-circle-box indigo-grad">
                                <div className="hiw-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
                                </div>
                                <span className="hiw-num">02</span>
                            </div>
                            <h3>Profile Evaluation</h3>
                            <p>Review your qualifications and identify the right career pathway.</p>
                        </div>
                        {/* Item 3 */}
                        <div className="hiw-item reveal delay-2">
                            <div className="hiw-circle-box purple-grad">
                                <div className="hiw-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <span className="hiw-num">03</span>
                            </div>
                            <h3>Application Submission</h3>
                            <p>Prepare and submit your profile for employer review.</p>
                        </div>
                        {/* Item 4 */}
                        <div className="hiw-item reveal delay-3">
                            <div className="hiw-circle-box pink-halo-wrap">
                                <div className="hiw-circle-inner pink-grad">
                                    <div className="hiw-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
                                    </div>
                                    <span className="hiw-num">04</span>
                                </div>
                            </div>
                            <h3 className="accent-maroon">Interview Coordination</h3>
                            <p>Attend employer interviews with professional guidance and preparation.</p>
                        </div>
                        {/* Item 5 */}
                        <div className="hiw-item reveal">
                            <div className="hiw-circle-box rose-grad">
                                <div className="hiw-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                </div>
                                <span className="hiw-num">05</span>
                            </div>
                            <h3>Offer Letter</h3>
                            <p>Successful candidates receive an official employment offer.</p>
                        </div>
                        {/* Item 6 */}
                        <div className="hiw-item reveal delay-1">
                            <div className="hiw-circle-box orange-grad">
                                <div className="hiw-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <span className="hiw-num">06</span>
                            </div>
                            <h3>Documentation</h3>
                            <p>Complete employer-required documentation with our support.</p>
                        </div>
                        {/* Item 7 */}
                        <div className="hiw-item reveal delay-2">
                            <div className="hiw-circle-box yellow-green-grad">
                                <div className="hiw-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l5 5-3 3-3-1-1 1 3 3 1-1 3-3 5 5 1.2-.7c.4-.2.7-.6.6-1.1z"></path></svg>
                                </div>
                                <span className="hiw-num">07</span>
                            </div>
                            <h3>Travel Preparation</h3>
                            <p>Receive guidance before joining your international employer.</p>
                        </div>
                        {/* Item 8 */}
                        <div className="hiw-item reveal delay-3">
                            <div className="hiw-circle-box green-grad">
                                <div className="hiw-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                </div>
                                <span className="hiw-num">08</span>
                            </div>
                            <h3>Begin Your Career</h3>
                            <p>Start your international journey with confidence.</p>
                        </div>
                    </div>
                </div>
                <style>{`
                    .how-it-works-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px 20px; }
                    @media (max-width: 1024px) { .how-it-works-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; } }
                    @media (max-width: 640px) { .how-it-works-grid { grid-template-columns: 1fr; } }
                    .hiw-item { text-align: center; display: flex; flex-direction: column; align-items: center; }
                    .hiw-circle-box { width: 120px; height: 120px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 24px; position: relative; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); transition: transform 0.3s ease; }
                    .hiw-item:hover .hiw-circle-box { transform: translateY(-5px); }
                    .hiw-icon { margin-bottom: 4px; display: flex; justify-content: center; align-items: center; }
                    .hiw-icon svg { width: 36px; height: 36px; color: #fff; stroke-width: 1.5; }
                    .hiw-num { font-size: 13px; font-weight: 700; color: rgba(255, 255, 255, 0.9); letter-spacing: 1px; }
                    .hiw-item h3 { font-size: 18px; font-weight: 700; color: var(--ink); margin-bottom: 12px; }
                    .hiw-item p { font-size: 14px; color: var(--ink-soft); line-height: 1.5; }
                    .hiw-circle-box.blue-grad { background: linear-gradient(135deg, #5F0F40, #7C1B54); }
                    .hiw-circle-box.indigo-grad { background: linear-gradient(135deg, #26061A, #5F0F40); }
                    .hiw-circle-box.purple-grad { background: linear-gradient(135deg, #7C1B54, #3A0E29); }
                    .hiw-circle-box.pink-halo-wrap { background: transparent; box-shadow: none; position: relative; }
                    .hiw-circle-box.pink-halo-wrap::before { content: ''; position: absolute; inset: -12px; border-radius: 50%; background: var(--lavender); opacity: 0.5; z-index: 0; }
                    .hiw-circle-box.pink-halo-wrap::after { content: ''; position: absolute; inset: -24px; border-radius: 50%; background: var(--rose); opacity: 0.6; z-index: -1; }
                    .hiw-circle-inner.pink-grad { background: linear-gradient(135deg, #5F0F40, #26061A); width: 100%; height: 100%; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; z-index: 1; box-shadow: 0 10px 25px -5px rgba(95, 15, 64, 0.4); }
                    .hiw-circle-box.rose-grad { background: linear-gradient(135deg, #7C1B54, #5F0F40); }
                    .hiw-circle-box.orange-grad { background: linear-gradient(135deg, #5F0F40, #3A0E29); }
                    .hiw-circle-box.yellow-green-grad { background: linear-gradient(135deg, #D9C5D1, #5F0F40); }
                    .hiw-circle-box.green-grad { background: linear-gradient(135deg, #3A0E29, #26061A); }
                `}</style>
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
                    background: 'var(--white)',
                    borderRadius: '24px',
                    border: '1px solid var(--line)',
                    padding: '2.5rem',
                    boxShadow: 'var(--shadow-card)',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '3rem',
                    alignItems: 'stretch'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.5rem' }}>
                        <div>
                            <div className="ops-label-row" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--aubergine)' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity animate-pulse" aria-hidden="true" style={{ color: 'var(--maroon)', width: '16px', height: '16px' }}><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                                <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Live Operations Control</span>
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--maroon)', boxShadow: '0 0 6px var(--maroon-light)', display: 'inline-block' }}></span>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--aubergine)', marginBottom: '0.75rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>Global Crew &amp; Vessel Logistics</h3>
                            <p className="text-muted" style={{ fontSize: '0.85rem', lineHeight: 1.5 }}>Monitoring real-time seafarer deployments, visa compliance, and certified crew matches across our global cruise line fleet.</p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div className="ops-stat-box" style={{ borderRadius: '12px', padding: '1rem', position: 'relative' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users" aria-hidden="true" style={{ color: 'var(--maroon)', marginBottom: '0.35rem', width: '16px', height: '16px' }}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                                <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ink-soft)', letterSpacing: '0.05em' }}>Active Onboard</span>
                                <span className="ops-stat-value" style={{ fontSize: '1.25rem', fontWeight: 850, letterSpacing: '-0.03em', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.15rem' }}>1258<span className="ops-live-badge" style={{ fontSize: '0.65rem', fontWeight: 600, padding: '0.1rem 0.35rem', borderRadius: '4px' }}>LIVE</span></span>
                            </div>
                            <div className="ops-stat-box" style={{ borderRadius: '12px', padding: '1rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ship" aria-hidden="true" style={{ color: 'var(--aubergine)', marginBottom: '0.35rem', width: '16px', height: '16px' }}><path d="M12 10.189V14"></path><path d="M12 2v3"></path><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"></path><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
                                <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ink-soft)', letterSpacing: '0.05em' }}>Fleet Vessels</span>
                                <span style={{ fontSize: '1.25rem', fontWeight: 850, color: 'var(--aubergine)', letterSpacing: '-0.03em', display: 'block', marginTop: '0.15rem' }}>64</span>
                            </div>
                            <div className="ops-stat-box" style={{ borderRadius: '12px', padding: '1rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users" aria-hidden="true" style={{ color: 'var(--maroon-light)', marginBottom: '0.35rem', width: '16px', height: '16px' }}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                                <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ink-soft)', letterSpacing: '0.05em' }}>Talent Pool</span>
                                <span style={{ fontSize: '1.25rem', fontWeight: 850, color: 'var(--maroon-light)', letterSpacing: '-0.03em', display: 'block', marginTop: '0.15rem' }}>14,850+</span>
                            </div>
                            <div className="ops-stat-box" style={{ borderRadius: '12px', padding: '1rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check" aria-hidden="true" style={{ color: 'var(--maroon)', marginBottom: '0.35rem', width: '16px', height: '16px' }}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                                <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ink-soft)', letterSpacing: '0.05em' }}>STCW Compliance</span>
                                <span style={{ fontSize: '1.25rem', fontWeight: 850, color: 'var(--maroon)', letterSpacing: '-0.03em', display: 'block', marginTop: '0.15rem' }}>100%</span>
                            </div>
                        </div>
                    </div>

                    <div className="home-terminal" style={{ borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.25rem 1rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', boxShadow: 'inset 0 10px 30px rgba(0,0,0,0.35)', height: '100%', minHeight: 0, overflow: 'hidden' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--lavender)' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal term-accent" aria-hidden="true"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
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
                                <div key={log.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontFamily: 'monospace', fontSize: '0.8rem', lineHeight: 1.5, color: index === 0 ? 'var(--white)' : 'var(--lavender)', padding: '0.5rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', animation: index === 0 ? 'slideDownLog 0.3s ease-out' : 'none', opacity: 1 - (index * 0.15) }}>
                                    <span style={{ color: 'var(--lavender)', opacity: 0.7, flexShrink: 0 }}>[{log.time}]</span>
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

            {/* NEW HERO CTA SECTION */}
            <section className="section-cta-hero" style={{
                position: 'relative',
                backgroundImage: 'url(/assets/img/hero-cruise.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '100px 0 0 0',
                color: '#fff',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(38,6,26,0.85) 0%, rgba(38,6,26,0.65) 50%, rgba(38,6,26,0.98) 100%)',
                    zIndex: 1
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '800px' }}>
                    <div style={{ display: 'inline-block', border: '1px solid rgba(217,197,209,0.5)', borderRadius: '100px', padding: '6px 16px', marginBottom: '24px', fontSize: '11px', fontWeight: '800', letterSpacing: '2px', color: 'var(--lavender)', textTransform: 'uppercase' }}>
                        YOUR FUTURE STARTS TODAY
                    </div>

                    <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: '900', lineHeight: '1.1', marginBottom: '24px', letterSpacing: '-0.02em' }}>
                        The World Is Waiting.<br />
                        <span style={{ color: 'var(--lavender)' }}>Start Your Global Career</span><br />
                        Today.
                    </h2>

                    <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', marginBottom: '16px', fontWeight: '500' }}>
                        Your journey toward an international career begins with a single step.
                    </p>
                    <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', marginBottom: '16px', fontWeight: '500', lineHeight: '1.6' }}>
                        Whether you dream of working aboard a luxury cruise ship, joining a leading airline, building a maritime profession, or pursuing opportunities in international security, <strong style={{ color: '#fff' }}>Ecofusion Outsourcing</strong> is here to support you with trusted guidance and professional recruitment services.
                    </p>
                    <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', marginBottom: '40px', fontWeight: '500' }}>
                        Take the next step toward a future filled with new experiences, global opportunities, and long-term career growth.
                    </p>

                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '80px' }}>
                        <Link to="/contact" className="btn" style={{
                            background: 'var(--maroon)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '100px',
                            padding: '14px 28px',
                            fontWeight: '700',
                            fontSize: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            Find Your Dream Job ➔
                        </Link>
                        <Link to="/contact" className="btn" style={{
                            background: 'rgba(255,255,255,0.1)',
                            color: '#fff',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '100px',
                            padding: '14px 28px',
                            fontWeight: '700',
                            fontSize: '14px',
                            backdropFilter: 'blur(10px)'
                        }}>
                            Book Free Consultation
                        </Link>
                    </div>
                </div>

                <div style={{
                    position: 'relative',
                    zIndex: 2,
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(0,0,0,0.3)',
                    backdropFilter: 'blur(12px)',
                    padding: '30px 0'
                }}>
                    <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', maxWidth: '900px', width: '100%' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <span style={{ fontSize: '24px', fontWeight: '900', color: '#fff', marginBottom: '8px' }}>10,000+</span>
                                <span style={{ fontSize: '11px', fontWeight: '800', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', textTransform: 'uppercase' }}>CANDIDATES PLACED</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <span style={{ fontSize: '24px', fontWeight: '900', color: '#fff', marginBottom: '8px' }}>50+</span>
                                <span style={{ fontSize: '11px', fontWeight: '800', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', textTransform: 'uppercase' }}>EMPLOYER PARTNERS</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <span style={{ fontSize: '24px', fontWeight: '900', color: '#fff', marginBottom: '8px' }}>5</span>
                                <span style={{ fontSize: '11px', fontWeight: '800', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', textTransform: 'uppercase' }}>DESTINATION COUNTRIES</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <span style={{ fontSize: '24px', fontWeight: '900', color: '#fff', marginBottom: '8px' }}>95%</span>
                                <span style={{ fontSize: '11px', fontWeight: '800', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', textTransform: 'uppercase' }}>SUCCESS RATE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
