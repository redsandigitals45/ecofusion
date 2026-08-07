import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
    const [bgIndex, setBgIndex] = useState(0);
    const bgImages = [
        '/assets/img/urban-skyline-modern-buildings.jpg',
        '/assets/img/Aviation Courses After 12th (2026 Guide) ✈️ Careers, Fees & Opportunities in Kannur.jpg',
        "/assets/img/A big thanks to all and know that I'm proud to work with you!!!��������� #fourseasons #hotel #hongkong #caprice #restaurant #kitchen #thankyou #somuch #amazing #birthdaycake #yummy #proud #best #pastry #team #hk #merc.jpg",
        '/assets/img/urban-skyline-modern-buildings.jpg'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setBgIndex(prev => (prev + 1) % bgImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
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
                    <span className="eyebrow" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)' }}>Recruitment & Training Consultancy</span>
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
                        <div className="fc-icon orange">���</div>
                        <div className="fc-content">
                            <h3>Hotel Management</h3>
                            <p>Across the world</p>
                            <span className="fc-badge orange">HOSPITALITY</span>
                        </div>
                    </div>
                </div>
            </div>

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
                            background: 'var(--maroon, #5c0f38)', 
                            width: '0%',
                            animation: 'fillBar 5s linear forwards',
                            borderRadius: '2px'
                        }}
                    ></div>
                </div>
                <span style={{ color: '#64748b', fontSize: '16px', fontWeight: '500' }}>
                    0{bgImages.length}
                </span>
            </div>
        </section>
    );
}
