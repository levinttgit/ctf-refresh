import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="/" className="navbar-brand">
                    <span className="logo-text">Catch The Fire</span>
                    <span className="logo-subtext">Mississauga</span>
                </a>

                {/* Desktop Menu */}
                <div className="navbar-links desktop-only">
                    <a href="#about" className="nav-link">About Us</a>
                    <a href="#services" className="nav-link">Times & Location</a>
                    <a href="#connect" className="nav-link">Connect</a>
                    <button className="btn btn-primary">Plan A Visit</button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle mobile-only"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <a href="#about" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
                <a href="#services" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Times & Location</a>
                <a href="#connect" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Connect</a>
                <button className="btn btn-primary mobile-btn">Plan A Visit</button>
            </div>
        </nav>
    );
};

export default Navbar;
