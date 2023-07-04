import React from "react";

const PriorityNumber = (props) => {
    
  return (
    <div className="flex justify-center items-center inset-0 fixed top-0 backdrop-blur-sm ">
      <div className="flex justify-center items-center h-96 xxl:h-[50%] xxl:w-[50%] w-96 border-2 border-black bg-cover bg-no-repeat rounded-3xl">
        <h1 className="font-extrabold text-red-600 text-[200px] xxl:text-[600px]">
            
          {props.number}
        </h1>
      </div>
    </div>
  );
};

export default PriorityNumber;
