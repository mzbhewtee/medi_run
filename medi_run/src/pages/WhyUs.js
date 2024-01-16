import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist, faSquareCheck, faStar} from '@fortawesome/free-solid-svg-icons';
import WUC from '../components/WhyUsComponent';

function WhyUs() {
    const convenienceElement = (
        <WUC
            icon={<FontAwesomeIcon icon={faStar} size="2x" />} // Adjust the size as needed
            header="Convenience"
            paragraph="Access all your healthcare information in one place, making it easier than ever to stay organized and on top of your prescriptions."
        />
    );

    const choiceElement = (
        <WUC
            icon={<FontAwesomeIcon icon={faSquareCheck} size="2x" />} // Adjust the size as needed
            header="Choice"
            paragraph="Select from a wide range of pharmacies based on your preferences, ensuring that you receive the care you deserve from locations that matter to you."
        />
    );

    const empowermentElement = (
        <WUC
            icon={<FontAwesomeIcon icon={faHandFist} size="2x" />} // Adjust the size as needed
            header="Empowerment"
            paragraph="Take charge of your healthcare journey by having the tools and information you need right at your fingertips."
        />
    );

    return (
        <div className="text-center p-10 bg-gradient-to-l from-pink-100 via-white to-white">
            <h2 className="text-xs md:text-lg text-pink-700">WHY CHOOSE US?</h2>
            <h1 className="text-xl md:text-3xl mb-6 text-pText font-bold">We Offer The Best Options</h1>
            <div className="flex flex-col sm:flex-row sm:justify-around">
                {convenienceElement}
                {choiceElement}
                {empowermentElement}
            </div>
            <p className="mt-4 mb-4 text-sm md:text-lg text-justify text-pText md:ml-10 md:mr-10">
                Join Medi-Run today and experience a new level of healthcare management. Your prescriptions, your pharmacies, your choice – all brought together for your convenience. Welcome to a simpler, more personalized healthcare experience.
            </p>
        </div>
    );
}

export default WhyUs;
