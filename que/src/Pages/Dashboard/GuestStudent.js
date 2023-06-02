import React, {useState} from 'react'
import Button from '../../components/Button'
import Container from '../../components/Container'
import SampleData from "../../SampleData/SampleData"
import { Outlet, useNavigate } from 'react-router-dom'
import { BsQrCodeScan } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import AddContainer from '../../components/AddContainer'

const GuestStudent = () => {
  const [qrOpen, setqrOpen] = useState(() => {
    return false
  })
   const [openModal , setopenModal] = useState(() => {
    return false
   })
  const navigate = useNavigate()

  const toggleOpen = () => {
    setqrOpen(!qrOpen)
  }
  
  const Modal = () => {
    setopenModal(true)
    
  }
  return (
      <div className='flex flex-col min-h-screen bg-background object-cover w-screen bg-black'>
        <div className='flex justify-evenly md:justify-end w-screen h-14'>
          <div className='text-white flex justify-center gap-28 md:gap-10 items-center mx-10 font-semibold'>
            <div className='flex flex-col items-center leading-3 text-2xl hover:cursor-pointer' > 
            <div className='flex' onClick={toggleOpen}>
              <BsQrCodeScan />
              {qrOpen ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
            </div>
            <p className='text-[10px] font-normal select-none	'>Generate QR code</p>
            </div>
          <div className='select-none font-bold'>
          <Button 
          buttonName = "LOGIN"
          onClick={() => navigate("/Login")}
          />
          </div>
          </div>
        </div>
        <hr />
        <div className='flex flex-col justify-evenly mx-7 items-center mt-16 md:flex-row sm:gap-10'>
          {SampleData.map((item, index) => (
           <Container 
           key = {index}
           name = {item.name}
           status = {item.status}
           image = {item.src}
           onClick = {() => navigate("/Dashboard/AddQue")}
           /> 
          ))}
          
        </div>
        
        {openModal && <AddContainer />}
        <Outlet />
      </div>
    
  )
}

export default GuestStudent