import React from 'react';

class WUC extends React.Component {
    render() {
        return (
            <div className="mb-1 flex p-2">
                <div className='w-2/12 flex items-center justify-start text-pink-800'>
                    {this.props.icon}
                </div>
                <div className='w-10/12'>
                    <h2 className="text-lg text-pText font-bold mb-1 text-start">{this.props.header}</h2>
                    <p className='text-justify text-pText text-sm'>{this.props.paragraph}</p>
                </div>
            </div>
        );
    }
}

export default WUC;

