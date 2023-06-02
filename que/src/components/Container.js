import React from 'react'


const Container = (props) => {
  return (
    <div className='w-72 bg-white opacity-60 h-96 rounded-lg flex flex-col items-start pl-6 text-left justify-center'>
        <h1 className='font-bold text-lg '>{props.name}</h1>
        <h1 className=' text-md font-serif'><span className='font-bold'>Status</span> : {props.status}</h1>

    </div>
  )
}

export default Container