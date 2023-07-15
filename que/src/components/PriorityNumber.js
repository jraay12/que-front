import React from "react";

const PriorityNumber = (props) => {
  return (
    <div className="fixed inset-0 top-0  flex items-center justify-center backdrop-blur-sm ">
      <div className="flex h-96 w-96 flex-col items-center rounded-3xl border-2 border-black bg-powderBlue bg-cover bg-no-repeat xxl:h-[50%] xxl:w-[50%]">
        <h1 className="m-4 text-[35px] font-extrabold text-black xxl:text-[60px]">
          PRIORITY NUMBER
        </h1>
        <h1 className="text-[200px] font-bold text-red-600 xxl:text-[300px]">
          {props.number}
        </h1>
      </div>
    </div>
  );
};

export default PriorityNumber;
