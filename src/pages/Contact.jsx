import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Contact() {
    // Injecting inline styles from contact.html
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
      .form-field { margin-bottom: 18px; }
      .form-field label { display: block; font-size: 13.5px; font-weight: 600; margin-bottom: 8px; color: var(--ink); }
      .form-field input, .form-field select, .form-field textarea {
        width: 100%; padding: 13px 16px; border-radius: 12px; border: 1.5px solid var(--line);
        font-family: var(--font-body); font-size: 15px; background: #fff; color: var(--ink);
        transition: border-color .25s ease;
      }
      .form-field input:focus, .form-field select:focus, .form-field textarea:focus {
        outline: none; border-color: var(--maroon);
      }
      .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
      @media (max-width: 640px) { .form-row { grid-template-columns: 1fr; } }
      .contact-info-item { display: flex; gap: 16px; align-items: flex-start; }
    `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic
    };

    return (
        <>
            <section className="page-hero" style={{ paddingBottom: '60px' }}>
                <div className="blob-field"><div className="blob" style={{ width: '420px', height: '420px', top: '-180px', right: '-100px' }}></div></div>
                <div className="container">
                    <div className="breadcrumb"><Link to="/">Home</Link> / Contact</div>
                    <span className="eyebrow" style={{ marginTop: '18px' }}>Contact</span>
                    <h1>Let's start your journey</h1>
                    <p>Whether you're a candidate or a hiring partner, our team is ready to help.</p>
                </div>
            </section>

            <section className="section" style={{ paddingTop: '60px' }}>
                <div className="container two-col" style={{ alignItems: 'flex-start' }}>
                    <div>
                        <span className="eyebrow">Get in Touch</span>
                        <h2 style={{ fontSize: 'clamp(24px,2.6vw,30px)', marginTop: '14px' }}>Reach us directly</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '28px' }}>
                            <div className="contact-info-item">
                                <div className="icon-badge" style={{ margin: 0 }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" /><path d="m4 6 8 7 8-7" /></svg></div>
                                <div>
                                    <strong style={{ display: 'block', fontSize: '15px' }}>Email</strong>
                                    <span className="ink-soft">hr@ecofusionoutsourcing.in</span>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="icon-badge" style={{ margin: 0 }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" /></svg></div>
                                <div>
                                    <strong style={{ display: 'block', fontSize: '15px' }}>Phone</strong>
                                    <span className="ink-soft">+91 9821944685</span>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="icon-badge" style={{ margin: 0 }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg></div>
                                <div>
                                    <strong style={{ display: 'block', fontSize: '15px' }}>Office</strong>
                                    <span className="ink-soft">Sector 83, Noida, UP, India</span>
                                </div>
                            </div>
                        </div>

                        <div className="divider" style={{ margin: '32px 0' }}></div>

                        <h3 style={{ fontSize: '16px' }}>Office Hours</h3>
                        <ul className="check-list" style={{ marginTop: '10px' }}>
                            <li style={{ display: 'flex', justifyContent: 'space-between', border: 'none', padding: '6px 0' }}><span className="ink-soft">Monday – Friday</span><span>9:00 AM – 6:00 PM</span></li>
                            <li style={{ display: 'flex', justifyContent: 'space-between', border: 'none', padding: '6px 0' }}><span className="ink-soft">Saturday</span><span>10:00 AM – 4:00 PM</span></li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3 style={{ fontSize: '20px' }}>Send us a message</h3>
                        <p className="ink-soft" style={{ marginTop: '6px', fontSize: '14.5px' }}>We typically respond within 1–2 business days.</p>
                        <form style={{ marginTop: '24px' }} onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-field">
                                    <label htmlFor="fname">Full Name</label>
                                    <input id="fname" type="text" name="name" placeholder="Your full name" required />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="phone">Phone</label>
                                    <input id="phone" type="tel" name="phone" placeholder="Your phone number" />
                                </div>
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" name="email" placeholder="you@example.com" required />
                            </div>
                            <div className="form-field">
                                <label htmlFor="interest">I'm interested in</label>
                                <select id="interest" name="interest">
                                    <option>Cruise Ship Careers</option>
                                    <option>Air Hostess &amp; Cabin Crew</option>
                                    <option>Hospitality Management</option>
                                    <option>Merchant Navy</option>
                                    <option>Security Guard</option>
                                    <option>Something else</option>
                                </select>
                            </div>
                            <div className="form-field">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="4" placeholder="Tell us a little about your goals..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    </div>

                </div>
            </section>

            <section className="section-tight on-rose">
                <div className="container" style={{ textAlign: 'center' }}>
                    <span className="eyebrow center" style={{ justifyContent: 'center' }}>Find Us</span>
                    <h2 style={{ marginTop: '12px' }}>Noida, India</h2>
                    <div style={{ marginTop: '28px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '16/6', border: '1px solid var(--line)', background: 'var(--lavender-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="ink-soft" style={{ fontSize: '14px' }}>[Map embed — add office location]</span>
                    </div>
                </div>
            </section>
        </>
    );
}
