import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Button from './Button';
import Logo from './Logo';

function Navbar() {
  const links = [
    { name: 'Home', to: 'home-section' },
    { name: 'Product', to: 'product-section' },
    { name: 'About', to: 'about-section' },
    { name: 'Contact', to: 'contact-section' },
  ];

  const [show, setShow] = useState(false);

  const handleCloseNavbar = () => {
    setShow(false);
  };

  return (
    <div className='w-full fixed top-0 left-0 z-20'>
      <div className='md:flex md:pl-20 md:pr-20 items-center justify-between bg-white py-4 md:px-8 px-5'>
        <div className=''>
          <Logo textColor="pText" iconColor="pink-700" size="text-sm md:text-lg" />
        </div>
        <div onClick={() => setShow(!show)} className='text-2xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon className='text-pText' name={show ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center text-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${show ? 'top-20' : 'top-[-490px]'} md:justify-center`}>
          {
            links.map((link, index) => (
              <li key={index} className='md:mr-12 text-md font-normal md:my-0 my-7'>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className='font-medium text-pink-800 hover:text-pink-500 duration-500'
                  onClick={handleCloseNavbar}
                >
                  {link.name}
                </Link>
              </li>
            ))
          }
          <div>
            <Button className='md:ml-8'>
              Blog
            </Button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
