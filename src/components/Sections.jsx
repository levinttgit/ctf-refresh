import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink as NavHashLink } from 'react-router-hash-link';
import { Clock, MapPin, Users, Heart } from 'lucide-react';

const Sections = () => {
    return (
        <div className="content-sections">
            {/* Join The Family Section */}
            <section className="invitations-section container" id="connect">
                <div className="section-header">
                    <h2 className="section-title">Join The Family</h2>
                    <p className="section-subtitle">Take your next step with Catch The Fire Mississauga.</p>
                </div>

                <div className="cards-grid">

                    <div className="card feature-card">
                        <div className="card-icon-wrapper">
                            <MapPin className="card-icon" />
                        </div>
                        <h3 className="card-title">Plan Your Visit</h3>
                        <p className="card-desc">Join our in-person service this Sunday. We'd love to welcome you home.</p>
                        <NavHashLink smooth to="/#visit" className="card-link">Get Directions &rarr;</NavHashLink>
                    </div>

                    <div className="card feature-card">
                        <div className="card-icon-wrapper">
                            <Users className="card-icon" />
                        </div>
                        <h3 className="card-title">Connect Groups</h3>
                        <p className="card-desc">Gathering together is more important than ever. Find a group in your neighborhood.</p>
                        <NavHashLink smooth to="/#connect" className="card-link">Find a Group &rarr;</NavHashLink>
                    </div>

                    <div className="card feature-card">
                        <div className="card-icon-wrapper">
                            <Heart className="card-icon" />
                        </div>
                        <h3 className="card-title">Sow Into The Kingdom</h3>
                        <p className="card-desc">We share our talents, time, and money to spread God's love to our local communities.</p>
                        <Link to="/give" className="card-link">Give Now &rarr;</Link>
                    </div>

                </div>
            </section>

            {/* Service Times Section with deep Indigo background */}
            <section className="service-times-section" id="visit">
                <div className="container service-times-content">
                    <div className="service-text">
                        <h2>Sundays at Catch The Fire</h2>
                        <p className="service-detail">
                            We gather every week to encounter God's presence, hear an inspiring message, and build community.
                        </p>
                        <div className="time-location-badge">
                            <Clock size={20} className="badge-icon" />
                            <span>10:30 AM Service</span>
                        </div>
                        <div className="time-location-badge">
                            <MapPin size={20} className="badge-icon" />
                            <span>2460 The Collegeway, Mississauga</span>
                        </div>
                        <button className="btn btn-primary" style={{ marginTop: '2rem' }}>
                            Watch Live Online
                        </button>
                    </div>

                    <div className="service-image-placeholder">
                        <div className="image-overlay-card">
                            <h3>Encounter His Presence</h3>
                            <p>Come completely as you are.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Sections;
