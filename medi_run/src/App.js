import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import WhyUs from './components/WhyUs';

function App() {
  return (
      <>
      <Navbar />
      <Hero />
      <WhyUs />
      <Products />
      </>
  );
}

export default App;
