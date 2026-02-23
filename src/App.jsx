import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Give from './pages/Give';

function App() {
    return (
        <HashRouter>
            <div className="app-wrapper">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/who-we-are" element={<WhoWeAre />} />
                    <Route path="/give" element={<Give />} />
                </Routes>
                <Footer />
            </div>
        </HashRouter>
    );
}

export default App;
