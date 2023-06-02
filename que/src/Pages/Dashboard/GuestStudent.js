import React from 'react'
import Button from '../../components/Button'
import Container from '../../components/Container'
import SampleData from "../../SampleData/SampleData"
import { BsQrCodeScan } from 'react-icons/bs'
const GuestStudent = () => {
  return (
      <div className='flex flex-col min-h-screen bg-background object-cover w-screen'>
        <div className='flex justify-end w-screen h-14' >
          <div className='text-white flex justify-center  gap-10 items-center mx-4 font-semibold'>
            <div className=''> 
            <BsQrCodeScan />
            </div>
          <Button 
          buttonName = "LOGIN"
          />
          </div>
        </div>
        <hr />
        <div className='flex justify-evenly mx-7 items-center mt-16'>
          {SampleData.map((item, index) => (
           <Container 
           key = {index}
           name = {item.name}
           status = {item.status}
           /> 
          ))}
          
        </div>
      </div>
    
  )
}

export default GuestStudent