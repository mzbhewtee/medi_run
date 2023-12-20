import React from 'react';
import heroImage from '../assets/images/hero.png';
import Button from './Button';

function Hero() {
    return (
        <div className='relative h-screen bg-themePrimary'>
            <div className='md:flex flex-row-reverse absolute top-0 left-0 w-full h-full'>
                <div className='relative mt-32'>
                    <img src={heroImage} alt='hero' className='w-full absolute mb-8 left-1/2 transform -translate-x-1/2' />
                </div>
                <div className='ml-7 top-40 mt-80 relative'>
                    <h1 className='font-bold text-3xl mb-1 mr-7 text-pText'>Your Health, Our Concern</h1>
                    <p className='font-normal text-md mr-7 text-justify italic text-pText'>Welcome to Medi-Run, where your healthcare choices are in your hands. 
                    With our user-friendly platform, you have the power to manage your prescriptions and pharmacies 
                    seamlessly. Take control of your healthcare journey by accessing everything you need in one centralized location.</p>
                </div>
                <div className='relative mt-44 ml-7 '>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
