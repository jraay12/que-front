import React from 'react'

const Button = (props) => {
  return (
    <>
         <button type={props.type} placeholder={props.placeholder}>{props.buttonName} </button>
    
    </>
  )
}

export default Button