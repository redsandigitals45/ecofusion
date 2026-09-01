import { Link } from 'react-router-dom';

export default function Blog() {
    return (
        <>
            <section className="page-hero">
                <div className="blob-field"><div className="blob" style={{ width: '420px', height: '420px', top: '-180px', right: '-100px' }}></div></div>
                <div className="container">
                    <div className="breadcrumb"><Link to="/">Home</Link> / Blog</div>
                    <span className="eyebrow" style={{ marginTop: '18px' }}>Blog</span>
                    <h1>Career advice &amp; industry insight</h1>
                    <p>Guidance on cruise, aviation and hospitality careers — from application to onboarding.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-3">
                        <Link to="#" className="media-card reveal">
                            <div className="media"><img src="/assets/img/download (4).jpg" alt="Cruise ship at sea" /></div>
                            <div className="body">
                                <span className="eyebrow" style={{ fontSize: '11px' }}>Cruise</span>
                                <h3 style={{ marginTop: '10px' }}>What to Expect in Your First Cruise Ship Interview</h3>
                                <p>A walkthrough of how cruise line interviews are structured, and how to prepare.</p>
                            </div>
                        </Link>
                        <Link to="#" className="media-card reveal">
                            <div className="media"><img src="/assets/img/I went on the bucket list Alaskan cruise where you spot bear cubs, sea lions and whales from onboard.jpg" alt="Alaskan cruise adventure" /></div>
                            <div className="body">
                                <span className="eyebrow" style={{ fontSize: '11px' }}>Aviation</span>
                                <h3 style={{ marginTop: '10px' }}>Grooming Standards Every Cabin Crew Applicant Should Know</h3>
                                <p>The presentation details airlines actually look for at assessment days.</p>
                            </div>
                        </Link>
                        <Link to="#" className="media-card reveal">
                            <div className="media"><img src="/assets/img/The Moments Worth Holding Onto.jpg" alt="The Moments Worth Holding Onto" /></div>
                            <div className="body">
                                <span className="eyebrow" style={{ fontSize: '11px' }}>Hotel Management</span>
                                <h3 style={{ marginTop: '10px' }}>Front Office to Management: Mapping a Hotel Career Path</h3>
                                <p>How entry-level hotel roles can lead toward department and property leadership.</p>
                            </div>
                        </Link>
                        <Link to="#" className="media-card reveal">
                            <div className="media"><img src="/assets/img/download (5).jpg" alt="Cruise ship deck" /></div>
                            <div className="body">
                                <span className="eyebrow" style={{ fontSize: '11px' }}>Cruise</span>
                                <h3 style={{ marginTop: '10px' }}>Life at Sea: What New Crew Members Should Prepare For</h3>
                                <p>Practical guidance on contracts, routines and adjusting to shipboard life.</p>
                            </div>
                        </Link>
                        <Link to="#" className="media-card reveal">
                            <div className="media"><img src="/assets/img/Set sail with MSC.jpg" alt="Set sail with MSC" /></div>
                            <div className="body">
                                <span className="eyebrow" style={{ fontSize: '11px' }}>Aviation</span>
                                <h3 style={{ marginTop: '10px' }}>Documents You'll Need Before Your Cabin Crew Application</h3>
                                <p>A checklist to avoid last-minute delays in the aviation hiring process.</p>
                            </div>
                        </Link>
                        <Link to="#" className="media-card reveal">
                            <div className="media"><img src="/assets/img/Rotterdam_ Tripulación.jpg" alt="Rotterdam Tripulación" /></div>
                            <div className="body">
                                <span className="eyebrow" style={{ fontSize: '11px' }}>Hotel Management</span>
                                <h3 style={{ marginTop: '10px' }}>Why Hotel Brands Value Certified, Job-Ready Candidates</h3>
                                <p>What hiring managers told us they look for beyond a résumé.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section-tight">
                <div className="container">
                    <div className="cta-band reveal">
                        <div className="blob-field"><div className="blob" style={{ width: '280px', height: '280px', top: '-120px', right: '10%' }}></div></div>
                        <div>
                            <h3>Have a question we haven't covered?</h3>
                            <p>Reach out and our team will point you in the right direction.</p>
                        </div>
                        <Link to="/contact" className="btn" style={{ background: '#fff', color: 'var(--maroon)' }}>Contact Us</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
