import React from 'react'

const Input = (props) => {
  return (
    <div className='flex flex-col gap-2'>
      <label className='font-serif text-xl'>{props.label}</label>
      
        <input className='rounded-lg px-2 py-2 w-full border-2' placeholder={props.placeholder} type={props.type} onChange={props.onChange}>{props.name}</input>
        
    </div>
  )
}

export default Input