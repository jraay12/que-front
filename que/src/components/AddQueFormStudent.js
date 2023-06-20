import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const AddQueFormStudent = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-cover bg-no-repeat bg-background backdrop-blur-lg absolute ">
      <div className="container bg-slate-300 flex flex-col xxl:h-[70%] shadow-2xl drop-shadow-2xl xxl:w-[30%] h-[90%] xl:h-[65%] w-[40%] rounded-3xl">
        <div className="flex mt-10 items-center flex-col">
          <h1 className="font-extrabold md:text-lg lg:text-2xl xl:text-4xl ">
            Add Queue
          </h1>
        </div>
        <div className="w-full px-10 flex flex-col gap-4 mt-6">
          <Input label="Student Number" py={3} />
          <Input label="Student Name" py={3} />
          <Input label="Student Email" py={3} />
          <Input label="Purpose" py={3} />
        </div>
        <div className="flex justify-evenly gap-4 leading-none mt-6  xxl:mt-10 ">
          <div className="bg-blue hover:bg-red-600 text-white rounded-2xl h-10 w-20 xxl:h-14 xxl:w-28 xxl:text-4xl flex justify-center items-center">
            <Button
              buttonName="Cancel"
              onClick={() => navigate("/Dashboard")}
            />
          </div>
          <div className="bg-blue text-white  rounded-2xl h-10 w-20 flex justify-center xxl:h-14 xxl:w-28 xxl:text-4xl items-center">
            <Button buttonName="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQueFormStudent;
