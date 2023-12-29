import React from 'react';
import heroImage from '../assets/images/hero/hero.svg';
import Button from './Button';

function Hero() {
  return (
    <div className='relative h-screen'>
      <div className='md:flex items-center justify-between absolute top-0 left-0 w-full h-full'>
        <div className='relative mt-32 md:w-2/3 flex justify-center'>
          <img src={heroImage} alt='hero' className='w-full md:w-1/2 max-w-sm' />
        </div>
        <div className='ml-7 top-40 md:w-1/3 md:mt-0 relative'>
          <div className='md:flex md:flex-col md:justify-between md:h-full'>
            <div>
              <h1 className='font-bold text-2xl mb-1 mr-7 text-pText'>Your Health, Our Concern</h1>
              <p className='font-normal text-sm mr-7 text-justify text-pText'>Welcome to Medi-Run, where your healthcare choices are in your hands. With our user-friendly platform, you have the power to manage your prescriptions and pharmacies seamlessly. Take control of your healthcare journey by accessing everything you need in one centralized location.</p>
            </div>
            <div className='mt-4 md:mt-0'>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
