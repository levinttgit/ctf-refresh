import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink as NavHashLink } from 'react-router-hash-link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHomePage = location.pathname === '/';
    const isSolid = isScrolled || !isHomePage;

    return (
        <nav className={`navbar ${isSolid ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-brand">
                    <span className="logo-text">Catch The Fire</span>
                    <span className="logo-subtext">Mississauga</span>
                </Link>

                {/* Desktop Menu */}
                <div className="navbar-links desktop-only">
                    <Link to="/who-we-are" className="nav-link">Who We Are</Link>
                    <NavHashLink smooth to="/#connect" className="nav-link">Connect</NavHashLink>
                    <Link to="/give" className="nav-link">Give</Link>
                    <NavHashLink smooth to="/#visit" className="btn btn-primary">Plan A Visit</NavHashLink>
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
                <Link to="/who-we-are" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Who We Are</Link>
                <NavHashLink smooth to="/#connect" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Connect</NavHashLink>
                <Link to="/give" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Give</Link>
                <NavHashLink smooth to="/#visit" className="btn btn-primary mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>Plan A Visit</NavHashLink>
            </div>
        </nav>
    );
};

export default Navbar;
