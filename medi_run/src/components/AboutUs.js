import React from 'react';
import imge from '../assets/images/a.png';
import imge2 from '../assets/images/b.png';
import imge3 from '../assets/images/c.png';
import AboutUsComponent from './AboutUsComponent';

function AboutUs() {
  return (
    <div className='relative'>
      <div className='flex flex-col justify-center items-center py-10'>
        <h2 className="text-xs text-pink-700">ABOUT US</h2>
        <h1 className="text-2xl mb-6 text-pText font-bold">Revolutionizing Healthcare</h1>

        <div className='w-full z-10'>
          <img className='mx-auto mt-1 w-72' src={imge2} alt='Our Mission' />
          <h2 className='text-md text-pText font-bold mt-5 ml-7'>Our Mission</h2>
          <p className='text-pText text-sm text-justify m-7 mt-0'>
            At Medi-Run, we are dedicated to transforming the healthcare landscape by addressing critical issues that impact patients, doctors, and pharmacies.
          </p>
        </div>

        <div className='w-full z-10'>
          <img className='mx-auto mt-1 w-72' src={imge3} alt='Our Vision' />
          <h2 className='text-md text-pText font-bold mt-5 ml-7'>Our Vision</h2>
          <p className='text-pText text-sm text-justify m-7 mt-0'>
            Our vision is to create a healthcare ecosystem that transcends boundaries, aligns with global sustainable development goals, and prioritizes accessibility, accuracy, and the well-being of every individual. We aspire to be the catalyst for positive change, redefining healthcare for a brighter, healthier future.          </p>
        </div>

        <div className='relative'>
          <div className='absolute top-7 right-2'>
            <AboutUsComponent title='SDG 3' text='Good Health and Well-being' alternateText='Improved access to authenticated medication' />
          </div>

          <div className='absolute top-28 left-2'>
            <AboutUsComponent title='SDG 13' text='Climate Actions' alternateText='Reduced carbon footprint by eliminating the need for extensive travel' />
          </div>

          <div className='absolute top-72 left-2'>
            <AboutUsComponent title='SDG 10' text='Reduced Inequalities' alternateText='Accessibility for people in remote areas' />
          </div>

          <div className='absolute top-60 right-2'>
            <AboutUsComponent title='SDG 8' text='Decent Work and Economic Growth' alternateText='Job creation through delivery services' />
          </div>

          <img className='mx-auto mt-1 w-96' src={imge} alt='About Us' />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
