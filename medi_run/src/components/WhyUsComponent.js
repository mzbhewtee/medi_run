import React from 'react';

class WUC extends React.Component {
    render() {
        return (
            <div className="mb-4 w-full md:w-1/3 flex space-x-2 border md:flex-col p-7 md:ml-10 md:mr-10 shadow-md rounded-md bg-white">
                <div className='w-2/12 md:w-full md:mb-6 flex items-center justify-start md:justify-center text-pink-800'>
                    {this.props.icon}
                </div>
                <div className='w-10/12 md:w-full'>
                    <h2 className="text-lg text-pText font-bold mb-1 text-center">{this.props.header}</h2>
                    <p className='text-justify text-pText text-sm'>{this.props.paragraph}</p>
                </div>
            </div>
        );
    }
}

export default WUC;

