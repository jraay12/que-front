import React from "react";

const PriorityNumber = (props) => {
   
  return (
    <div className="flex justify-center items-center  inset-0 fixed top-0 backdrop-blur-sm ">
      <div className="flex flex-col items-center h-96 xxl:h-[50%] xxl:w-[50%] bg-powderBlue w-96 border-2 border-black bg-cover bg-no-repeat rounded-3xl">
      <h1 className="font-extrabold text-black text-[35px] m-4 xxl:text-[60px]">PRIORITY NUMBER</h1>
        <h1 className="font-bold text-red-600 text-[200px] xxl:text-[300px]">
          {props.number}
        </h1>
      </div>
    </div>
  );
};

export default PriorityNumber;
