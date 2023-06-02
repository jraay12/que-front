import React from 'react'
import {AiOutlineClose} from "react-icons/ai"
import Button from './Button'
import { useNavigate } from 'react-router-dom'
const AddContainer = () => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center min-h-screen w-screen absolute backdrop-blur-sm'>
        <div className='min-w-[300px] min-h-[200px] bg-white rounded-2xl'>
        <div className='hover:cursor-pointer flex justify-end mx-4 mt-2 ' onClick={() => navigate("/Dashboard")}>
              <AiOutlineClose />
            </div>
          <div className='flex flex-col gap-4 justify-center items-center'>
          <h1  className='text-blue text-2xl font-bold select-none'>Add Queue</h1>
          <h1  className='text-blue text-2xl font-medium select-none'>I'm a ________ .</h1>
          </div>
          <div className='flex justify-evenly '>
            <div className=' text-white font-bold py-2 mt-4 rounded-2xl hover:opacity-70 bg-blue w-[100px] flex justify-center'>
            <Button 
            buttonName = "Guest"
            type= "submit"
            />
            </div>
            <div className='text-white font-bold py-2 mt-4 rounded-2xl hover:opacity-70 bg-blue w-[100px] flex justify-center'>
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