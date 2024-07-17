import React from 'react';
import heroImage from '../assets/images/hero/hero.png';
import Button from './Button';

function Hero() {
  return (
    <div id='home-section' className='relative bg-gradient-to-r from-pink-100 via-white to-white overflow-hidden'>
      <div className='md:flex md:ml-10 md:mr-10 items-center md:flex-row-reverse justify-between w-full h-full'>
        <div className='md:w-1/2 flex justify-center mr-10 ml-10'>
          <img src={heroImage} alt='hero' className='w-full md:max-w-md mt-32' />
        </div>
        <div className='ml-7 md:ml-10 mt-10 md:w-1/2'>
          <div className='md:flex md:flex-col md:justify-between md:h-full'>
              <h1 className='font-bold text-2xl md:text-5xl mb-1 md:mb-4 mr-7 text-pText'>Your Health, Our Concern</h1>
              <p className='font-normal text-sm md:text-lg md:mb-5 mr-7 text-justify text-pText'>Welcome to Medi-Run, where your healthcare choices are in your hands. With our user-friendly platform, you have the power to manage your prescriptions and pharmacies seamlessly. Take control of your healthcare journey by accessing everything you need in one centralized location.</p>
            <div className='mt-4 mb-10 md:mb-0 md:mt-0 z-10'>
              <Button>
                Get Started
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
