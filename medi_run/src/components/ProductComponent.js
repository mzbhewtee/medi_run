import React from 'react';
import Button from './Button';

class Card extends React.Component {
  render() {
    return (
      <div className="rounded-lg shadow-lg mb-6 md:ml-5 bg-white/50 backdrop-blur-sm p-7 md:w-1/3">
        <img className="mx-auto mb-3 rounded-md h-60 w-full" src={this.props.image} alt={this.props.alt} />
        <h2 className="text-md text-pText font-bold mb-1">{this.props.header}</h2>
        <p className='text-justify text-pText text-sm'>{this.props.paragraph}</p>
        <div className='flex justify-start mt-4'>
          <Button>
            <a className='text-white' href={this.props.link}>Sign Up</a>
          </Button>
        </div>
      </div>
    );
  }
}

export default Card;
