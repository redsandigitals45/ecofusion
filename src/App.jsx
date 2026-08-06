import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ServicesCruise from './pages/ServicesCruise';
import ServicesAviation from './pages/ServicesAviation';
import ServicesHospitality from './pages/ServicesHospitality';
import Reviews from './pages/Reviews';
import Blog from './pages/Blog';

function ScrollToTopAndReveal() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top
        window.scrollTo(0, 0);

        // Scroll reveal logic ported from main.js
        const revealEls = document.querySelectorAll('.reveal');
        if ('IntersectionObserver' in window) {
            const io = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in');
                        io.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15 });

            revealEls.forEach((el) => {
                el.classList.remove('in');
                io.observe(el);
            });
        } else {
            revealEls.forEach((el) => el.classList.add('in'));
        }
    }, [pathname]);

    return null;
}

function App() {
    return (
        <Router>
            <ScrollToTopAndReveal />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services-cruise" element={<ServicesCruise />} />
                    <Route path="/services-aviation" element={<ServicesAviation />} />
                    <Route path="/services-hospitality" element={<ServicesHospitality />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
