import React from 'react';
import imge from '../assets/images/about/SDG.png';
import imge2 from '../assets/images/about/b.png';
import imge3 from '../assets/images/about/c.png';
import imge4 from '../assets/images/about/Background1.png';
import beauty from '../assets/images/about/Beauty.png';
import melissa from '../assets/images/about/Melissa.png';
import millicent from '../assets/images/about/Millicent.png';
import AboutUsComponent from '../components/AboutUsComponent';
import Team from '../components/Team';

function AboutUs() {
  return (
    <div className='relative'>
      <img className='absolute top-0 right-0 w-10' src={imge4} alt='About Us' />
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

        <div className='w-full'>
          <img className='absolute w-10' src={imge4} alt='About Us' />
          <img className='mx-auto mt-1 w-72' src={imge3} alt='Our Vision' />
          <h2 className='text-md text-pText font-bold mt-5 ml-7'>Our Vision</h2>
          <p className='text-pText text-sm text-justify m-7 mt-0'>
            Our vision is to create a healthcare ecosystem that transcends boundaries, aligns with global sustainable development goals, and prioritizes accessibility, accuracy, and the well-being of every individual. We aspire to be the catalyst for positive change, redefining healthcare for a brighter, healthier future.          </p>
        </div>

        <div className='w-full'>
          <h2 className='text-md text-pText font-bold mt-5 ml-7 text-start'>Our Impact</h2>
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

        <div className='w-full'>
          <h2 className='text-md text-pText font-bold mt-20 ml-7 text-start'>Our Team</h2>
          <p className='text-pText text-sm text-justify m-7 mt-0'>
            Our team is comprised of passionate individuals who are committed to making a difference. We are dedicated to creating a 
            platform that is accessible, user-friendly, and efficient. We are constantly striving to improve our services and enhance 
            the user experience.</p>
          <div>
            <Team 
            image={beauty} 
            name='Beauty Ikudehinbu' 
            role='Co-Founder'
            description='Beauty is a software developer, a machine learning expert and she 
            has experience in the field of medicine.'></Team> 
            <Team
            image={melissa}
            name='Melissa Ncube'
            role='Co-Founder'
            description='Melissa is a software developer, a machine learning expert and she
            has experience in the field of medicine.'></Team>
            <Team
            image={millicent}
            name='Millicent Malinga'
            role='Co-Founder'
            description='Millicent is a software developer, a machine learning expert and she
            has experience in the field of medicine.'></Team>        
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
