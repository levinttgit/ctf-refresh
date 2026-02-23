import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink as NavHashLink } from 'react-router-hash-link';
import { Facebook, Instagram, Youtube, MapPin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-grid">

                    <div className="footer-brand-col">
                        <h2 className="footer-logo">Catch The Fire Mississauga</h2>
                        <p className="footer-desc">
                            Building up people to grow together as God’s family, sharing talents, time and money to spread God’s love to our local communities.
                        </p>
                        <div className="footer-socials">
                            <a href="https://www.facebook.com/CTFMississauga/" target="_blank" rel="noreferrer"><Facebook /></a>
                            <a href="https://www.instagram.com/ctfmississauga/" target="_blank" rel="noreferrer"><Instagram /></a>
                            <a href="https://www.youtube.com/@catchthefiremississauga3202" target="_blank" rel="noreferrer"><Youtube /></a>
                        </div>
                    </div>

                    <div className="footer-links-col">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/who-we-are">Who We Are</Link></li>
                            <li><NavHashLink smooth to="/#connect">Connect Groups</NavHashLink></li>
                            <li><Link to="/give">Give Online</Link></li>
                            <li><a href="#live">Watch Live</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact-col">
                        <h3 className="footer-heading">Contact</h3>
                        <div className="contact-item">
                            <MapPin size={20} />
                            <span>2460 The Collegeway<br />Mississauga, ON L5L 1V3</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={20} />
                            <a href="mailto:mississauga@catchthefire.com">mississauga@catchthefire.com</a>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Catch The Fire Church Mississauga. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
