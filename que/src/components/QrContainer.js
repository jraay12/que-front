import React from 'react'
import code from "../images/qrcode.png"
const QrContainer = (props) => {
  return (
    <div className='min-h-screen w-screen absolute flex rounded-3xl items-center justify-center backdrop-blur-sm'>
        <div className=' bg-white object-contain h-[300px] w-[300px]'>
            <img src={code} /> 
            
        </div>
    </div>
  )
}

export default QrContainer