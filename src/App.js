import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import JoinUs from './pages/JoinUs';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import './i18n'; // Must be before any React components that use translations
import Mission from './pages/Mission'; // ✅ newly added

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/mission" element={<Mission />} /> {/* ✅ New route */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
