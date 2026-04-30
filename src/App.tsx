import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
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
import ElevenPlus from './pages/ElevenPlus';
import SATS from './pages/SATS';
import GCSE from './pages/GCSE';
import ALevel from './pages/ALevel';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

import './styles/animations.css';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
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
              <Route path="/register" element={<Registration />} />
              <Route path="/study-resource" element={<AcademicResource />} />
              <Route path="/mathematics" element={<Mathematics />} />
              <Route path="/english" element={<English />} />
              <Route path="/science" element={<Science />} />
              <Route path="/elevenplus" element={<ElevenPlus />} />
              <Route path="/sats" element={<SATS />} />
              <Route path="/gcse" element={<GCSE />} />
              <Route path="/alevel" element={<ALevel />} />
              <Route path="/alevels" element={<ALevel />} />
              <Route path="/gcses" element={<GCSE />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;