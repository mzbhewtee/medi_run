import React from 'react'

function Team(props) {
  return (
    <div className='m-7 rounded-lg shadow-md p-5 flex'>
        <img className="rounded-md w-1/3 justify-center" src={props.image} alt={props.alt} />
        <div className='ml-3'>
            <h2 className="text-md text-pText font-bold mb-0">{props.name}</h2>
            <p className='text-justify text-pText italic text-sm mb-1'>{props.role}</p>
            <p className='text-justify text-pText text-xs'>{props.description}</p>
        </div>
    </div>
  )
}

export default Team