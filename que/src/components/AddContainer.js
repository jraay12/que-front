import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const AddContainer = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const location = useLocation();

  return (
    <div className="fixed inset-0 top-0 z-20 flex items-center justify-center backdrop-blur-sm">
      <div className="container h-96 w-[30%] rounded-2xl bg-white shadow-2xl  drop-shadow-2xl">
        <div
          className="mx-4 mt-2 flex justify-end hover:cursor-pointer "
          onClick={() => navigate("/Dashboard")}
        >
          <AiOutlineClose />
        </div>
        <div className="mt-16 flex flex-col items-center justify-center">
          <h1 className="select-none text-2xl font-bold text-blue">
            Add Queue
          </h1>
          <h1 className="select-none text-2xl font-medium text-blue">
            I'm a ________ .
          </h1>
        </div>
        <div className="mt-10 flex justify-evenly">
          <div className=" mt-4 flex   w-[100px] justify-center rounded-full bg-blue font-bold text-white hover:cursor-pointer hover:opacity-70">
            <Button
              buttonName="Guest"
              type="submit"
              onClick={() =>
                navigate(`/Dashboard/AddQue/Guest/${_id}`, {
                  state: { from: location },
                })
              }
            />
          </div>
          <div className="mt-4 flex h-16 w-[100px] justify-center rounded-full bg-blue font-bold text-white hover:cursor-pointer hover:opacity-70">
            <Button
              buttonName="Student"
              type="submit"
              onClick={() =>
                navigate(`/Dashboard/AddQue/Student/${_id}`, {
                  state: { from: location },
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContainer;
