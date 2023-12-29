import React from 'react';
import Button from './Button';
import Logo from './Logo';

function Navbar() {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'Product', link: '/contact' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/login' },
  ];

  let [show, setShow] = React.useState(false);

  return (
    <div className='shadow-sm shadow-pink-950 w-full fixed top-0 left-0 z-20'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-8 px-5'>
        <div className=''>
          <Logo textColor="pText" iconColor="pink-700" size="text-sm md:text-lg" />
        </div>
        <div onClick={() => setShow(!show)} className='text-2xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon className='text-pText' name={show ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center text-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${show ? 'top-20' : 'top-[-490px]'} md:justify-center`}>
          {
            Links.map((link, index) => (
              <li key={index} className='md:mr-12 text-md font-normal md:my-0 my-7'>
                <a href={link.link} className='font-medium text-pink-800 hover:text-pink-500 duration-500'>
                  {link.name}
                </a>
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
