import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Registration from './pages/Registration';
import AcademicResource from './pages/AcademicResource';
import Mathematics from './pages/Mathematics';
import English from './pages/English';
import Science from './pages/Science';
import ElevenPlus from './pages/ElevenPlus'; // Correct import for ElevenPlus page
import SATS from './pages/SATS'; // Correct import for SATS page
import GCSE from './pages/GCSE'; // Correct import for GCSE page
import ALevel from './pages/ALevel'; // Correct import for ALevel page
import ScrollToTop from './components/ScrollToTop';

import './styles/animations.css';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures the page scrolls to the top on route change */}
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fees" element={<Pricing />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/study-resource" element={<AcademicResource />} />
            <Route path="/mathematics" element={<Mathematics />} />
            <Route path="/english" element={<English />} />
            <Route path="/science" element={<Science />} />
            <Route path="/elevenplus" element={<ElevenPlus />} /> {/* Route for 11+ Programme */}
            <Route path="/sats" element={<SATS />} /> {/* Route for SATS */}
            <Route path="/gcse" element={<GCSE />} /> {/* Route for GCSE */}
            <Route path="/alevel" element={<ALevel />} /> {/* Route for A-Level */}
            <Route path="/alevels" element={<ALevel />} />
            <Route path="/gcses" element={<GCSE />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;