import React from 'react';

const Give = () => {
    return (
        <main className="page-wrapper animate-fade-in" style={{ paddingTop: '100px', minHeight: '60vh' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 className="section-title">Giving</h1>
                </div>

                <div className="card" style={{ marginBottom: '2rem' }}>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                        At Catch the Fire Mississauga, we believe that bringing our tithes and offerings to the Lord releases powerful generational family blessings. With joy and faith, we teach that obedient, heartfelt giving opens the door for God’s favour, protection, provision, and breakthrough—not just for us today, but for our children, grandchildren, and the generations to come.
                        <br /><br />
                        As we honour the Lord with our first and best, He pours out blessings that overflow through our family line, breaking curses, restoring destiny, and establishing a legacy of His goodness for years ahead.
                        <br /><br />
                        <em>“Bring the whole tithe into the storehouse… and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it.” (Malachi 3:10)</em>
                        <br /><br />
                        <strong>We give to see families flourish—for now and for generations to come.</strong>
                    </p>
                </div>

                <div className="card" style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-dark)', textAlign: 'center' }}>
                        3 Ways to Give
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <div style={{ padding: '1.5rem', backgroundColor: 'var(--background)', borderRadius: '8px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>1. Church Center</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                Give securely and easily using our online platform.
                            </p>
                            <a
                                href="https://ctfmississauga.churchcenter.com/giving"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ display: 'inline-block' }}
                            >
                                Give Online Now
                            </a>
                        </div>

                        <div style={{ padding: '1.5rem', backgroundColor: 'var(--background)', borderRadius: '8px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>2. INTERAC e-Transfer</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                You can give directly from your bank using email transfer to:<br />
                                <strong>giving.mississauga@catchthefire.com</strong>
                            </p>
                        </div>

                        <div style={{ padding: '1.5rem', backgroundColor: 'var(--background)', borderRadius: '8px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>3. In-Person</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                On Sundays from 10:00 AM to 12:00 PM at<br />
                                <strong>2460 The Collegeway,<br />Mississauga, ON, L5L 1V3</strong>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Download the Church Center App</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        Get access to church updates, pre-registration, and seamless online giving.
                    </p>
                    <a
                        href="https://churchcenter.com/setup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        style={{ display: 'inline-block', borderColor: 'var(--primary)', color: 'var(--primary)' }}
                    >
                        Click here to Download
                    </a>
                </div>
            </div>
        </main>
    );
};

export default Give;
