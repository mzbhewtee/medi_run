import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

function App() {
  return (
      <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
      <WhyUs />
      <Footer />
      </>
  );
}

export default App;
