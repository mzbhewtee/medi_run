import React from 'react'

function Button(props) {
  return (
    <button className='bg-pink-800 text-white font-semibold py-2 px-10 rounded hover:bg-pink-400 hover:text-black '>
        {props.children}
    </button>
  )
}

export default Button