import React from 'react';
import Logo from '../components/Logo';
import ListItem from '../components/FooterComponents';


function Footer() {
    return (
        <div>
            <div className='border-t border-pink-700 pl-6 pr-6 pb-6'>
                <Logo textColor="pText" iconColor="pink-700" size="text-1xl" />
                <p className='text-pText text-justify text-xs'>Your prescriptions, your pharmacies, your choice. We provide a platform for you to manage your healthcare needs, all in one place.</p>
                <div className='flex justify-center mt-5'>
                    <div className='flex justify-around'>
                        <ListItem title='Product' paragraphs={[
                            { text: 'Overview', link: '/product/overview' },
                            { text: 'Features', link: '/product/features' },
                            { text: 'Solutions', link: '/product/solutions' },
                            { text: 'Tutorials', link: '/product/tutorials' },
                        ]} />
                        <ListItem title='Company' paragraphs={[
                            { text: 'About Us', link: '/company/about' },
                            { text: 'Careers', link: '/company/careers' },
                            { text: 'Press', link: '/company/press' },
                            { text: 'News', link: '/company/news' },
                        ]} />
                        <ListItem title='Resources' paragraphs={[
                            { text: 'Blog', link: '/resources/blog' },
                            { text: 'Newsletter', link: '/resources/newsletter' },
                            { text: 'Events', link: '/resources/events' },
                            { text: 'Help Center', link: '/resources/help-center' },
                        ]} />
                    </div>
                </div>
            </div>
            <div className='bg-pink-900 text-white p-6 flex justify-between'>
                <p className='text-xs'>© 2023 Medi-Run. All Rights Reserved.</p>
                <div className='flex space-x-2'>
                    <ion-icon name="logo-facebook"></ion-icon> 
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-linkedin"></ion-icon>

                </div>
            </div>
        </div>
    );
}

export default Footer;
