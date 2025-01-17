import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
import {
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

const AddContainer = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const location = useLocation();

  return (
    <div className="fixed top-0 inset-0 z-20 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[30%] h-96 container bg-white shadow-2xl drop-shadow-2xl  rounded-2xl">
        <div
          className="hover:cursor-pointer flex justify-end mx-4 mt-2 "
          onClick={() => navigate("/Dashboard")}
        >
          <AiOutlineClose />
        </div>
        <div className="flex flex-col justify-center items-center mt-16">
          <h1 className="text-blue text-2xl font-bold select-none">
            Add Queue
          </h1>
          <h1 className="text-blue text-2xl font-medium select-none">
            I'm a ________ .
          </h1>
        </div>
        <div className="flex justify-evenly mt-10">
          <div className=" text-white font-bold   mt-4 rounded-full hover:cursor-pointer hover:opacity-70 bg-blue w-[100px] flex justify-center">
            <Button
              buttonName="Guest"
              type="submit"
              onClick={() => navigate(`/Dashboard/AddQue/Guest/${_id}`, {state: {from: location}})}
            />
          </div>
          <div className="text-white font-bold mt-4 rounded-full hover:cursor-pointer hover:opacity-70 h-16 bg-blue w-[100px] flex justify-center">
            <Button
              buttonName="Student"
              type="submit"
              onClick={() => navigate(`/Dashboard/AddQue/Student/${_id}`, {state: {from: location}})}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContainer;
