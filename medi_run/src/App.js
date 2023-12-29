import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './pages/Products';
import WhyUs from './pages/WhyUs';
import Footer from './pages/Footer';
import AboutUs from './pages/AboutUs';

function App() {
  return (
      <>
      <Navbar />
      <Hero />
      <Products />
      <AboutUs />
      <WhyUs />
      <Footer />
      </>
  );
}

export default App;
