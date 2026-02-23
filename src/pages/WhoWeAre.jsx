import React from 'react';

const WhoWeAre = () => {
    return (
        <main className="page-wrapper animate-fade-in" style={{ paddingTop: '100px', minHeight: '60vh' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 className="section-title">Who We Are</h1>
                </div>

                <div className="card" style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Our Vision</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                        Pursuing the transforming presence of Jesus
                    </p>
                </div>

                <div className="card">
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Our Mission</h2>
                    <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li>To equip and build families through Catch the fire core values.</li>
                        <li>To equip worshippers to be sensitive to the presence of the Holy Spirit.</li>
                        <li>Train the children to experience the presence and the love of God.</li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default WhoWeAre;
