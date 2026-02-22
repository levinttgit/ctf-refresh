import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app-wrapper">
            <Navbar />
            <main>
                <Hero />
                <Sections />
            </main>
            <Footer />
        </div>
    );
}

export default App;
