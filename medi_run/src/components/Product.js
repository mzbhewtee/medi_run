import React from 'react';
import Button from './Button';

class Card extends React.Component {
  render() {
    return (
      <div className="rounded-lg shadow-sm mb-6 bg-white p-6">
        <img className="mx-auto mb-3 rounded-md" src={this.props.image} alt={this.props.alt} />
        <h2 className="text-lg text-pText font-bold mb-1">{this.props.header}</h2>
        <p className='text-justify text-pText'>{this.props.paragraph}</p>
        <div className='flex justify-center mt-4'>
          <Button>
            <a className='text-white' href={this.props.link}>Sign Up</a>
          </Button>
        </div>
      </div>
    );
  }
}

export default Card;
