import React from 'react'

function Team(props) {
  return (
    <div className='m-5 rounded-lg shadow-md p-5 flex-1 md:w-1/3'>
      <img className="rounded-md w-1/3" src={props.image} alt={props.alt} />
      <div className='ml-3'>
        <div className='flex items-center gap-2'>
          <h2 className='text-sm md:text-lg text-pText font-bold'>{props.name}</h2>
          <p className='text-xs md:text-sm text-pText'>{props.role}</p>
        </div>
        <p className='text-justify text-pText text-xs md:text-sm'>{props.description}</p>
      </div>
    </div>
  );
}

export default Team