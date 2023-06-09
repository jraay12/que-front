import React from 'react'

const Button = (props) => {
  return (
    <>
      <button type={props.type}  onClick={props.onClick} className='select-none w-full py-4 px-4 rounded-full' >{props.buttonName} </button>
    </>
  )
}

export default Button