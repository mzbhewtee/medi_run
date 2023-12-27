import React, { useState } from 'react';

function AboutUsComponent(props) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const buttonStyle = {
    width: '140px',
    height: '80px',
    background: clicked ? 'darkblue' : 'white',
    border: clicked ? '0px' : '1px solid darkblue',
    color: clicked ? 'white' : 'darkblue',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div>
      <button
        style={buttonStyle}
        className={` text-pText rounded ${clicked ? 'clicked' : ''}`}
        onClick={handleClick}
      >
        {clicked ? null : <h3 className='font-bold text-sm'>{props.title}</h3>}
        <p className='text-xs'>{clicked ? props.alternateText : props.text}</p>
      </button>
    </div>
  );
}

export default AboutUsComponent;
