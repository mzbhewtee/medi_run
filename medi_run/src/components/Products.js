import React from 'react';
import Card from './Product';
import Image1 from '../assets/images/Image1.png';
import Image2 from '../assets/images/Image2.png';
import Image3 from '../assets/images/Image3.png';

function Products() {
    const cardElement1 = (
        <Card
            image={Image1}
            header="For Pharmacies"
            paragraph="Connect with a wider customer base, manage orders efficiently, and increase your sales. Our app provides a seamless platform for you to display your products and services to a larger audience. With real-time updates you can focus on what you do best - providing essential medications to those in need."
            link="https://example.com"
        />
    );

    const cardElement2 = (
        <Card
            image={Image2}
            header="For Patients"
            paragraph="Get your prescribed medications delivered right to your doorstep. View your prescriptions, choose from trusted pharmacies, and track your orders - all in one place. Our app ensures that your healthcare needs are met conveniently and promptly."
            link="https://example.com"
        />
    );

    const cardElement3 = (
        <Card
            image={Image3}
            header="For Hospitals"
            paragraph="Create and manage prescriptions digitally for your patients. Our app allows you to send prescriptions directly to patients and associated pharmacies, ensuring accuracy and timely availability of medications. Embrace the digital transformation and enhance patient care."
            link="https://example.com"
        />
    );

    return (
        <div className='bg-gText mt-5 p-4'>
            {cardElement1}
            {cardElement2}
            {cardElement3}
        </div>
    );
}

export default Products;