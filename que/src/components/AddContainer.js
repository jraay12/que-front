import React from 'react'
import {AiOutlineClose} from "react-icons/ai"
import Button from './Button'
const AddContainer = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen absolute'>
        <div className='min-w-[350px] min-h-[200px] bg-white rounded-2xl'>
        <div className='hover:cursor-pointer flex justify-end mx-4 mt-2'>
              <AiOutlineClose />
            </div>
          <div className='flex flex-col gap-4 justify-center items-center'>
          <h1  className='text-blue text-2xl font-bold'>Add Queue</h1>
          <h1  className='text-blue text-2xl font-medium'>I'm a ________ .</h1>
          </div>
          <div className='flex justify-evenly '>
            <div className=' text-white py-2 mt-4 rounded-2xl bg-blue w-[100px] flex justify-center'>
            <Button 
            buttonName = "Guest"
            type= "submit"
            />
            </div>
            <div className='text-white py-2 mt-4 rounded-2xl bg-blue w-[100px] flex justify-center'>
            <Button 
            buttonName = "Student"
            type= "submit"
            />
            </div>

          </div>
        </div>
    </div>
  )
}

export default AddContainer