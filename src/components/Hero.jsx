import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-overlay"></div>
            <div className="container hero-content animate-fade-in">
                <h1 className="hero-title">Experience God's Love Together</h1>
                <p className="hero-subtitle">
                    We gather weekly to worship, learn from the Scriptures, serve one another, and make space for God's grace in Mississauga.
                </p>
                <div className="hero-actions">
                    <button className="btn btn-primary">
                        Plan Your Visit
                    </button>
                    <button className="btn btn-outline hero-btn-outline">
                        <PlayCircle size={20} style={{ marginRight: '8px' }} />
                        Watch Latest Message
                    </button>
                </div>
            </div>

            {/* Decorative gradient blob for modern feel */}
            <div className="hero-gradient-blob"></div>
        </section>
    );
};

export default Hero;
