import React from 'react'

function Button(props) {
  return (
    <button className='bg-pink-800 shadow-sm shadow-black text-white font-semibold py-2 px-10 rounded-lg hover:bg-pink-400 hover:text-black '>
        {props.children}
    </button>
  )
}

export default Button