import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Differentiators from './components/Differentiators';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Service from './components/Service';

function App() {
  return (
    <Router>
     
      <Header />
      <Hero />
      <AboutUs/>
      <Service/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/differentiators" element={<Differentiators />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
