import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useNavigate, useParams } from "react-router-dom";
import { MutateQue } from "../customHooks/axios";
import axios from "axios";
const AddQueFormStudent = () => {
  const navigate = useNavigate();
  const { _id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [purpose, setPurpose] = useState("");

  const { mutate } = MutateQue();

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append("userId", _id);
    params.append("name", name);
    params.append("idNumber", idNumber);
    params.append("email", email);
    params.append("purpose", purpose);
    const value = params;
    console.log(value);
    mutate(value, {
      onSuccess: () => {
        console.log("success");
        navigate('/Dashboard')
      },
      onError: (err) => {
        console.error(err);
      },
    });
  };



  return (
    <div className="flex justify-center items-center w-screen h-screen bg-cover bg-no-repeat bg-background backdrop-blur-lg absolute ">
      <div className="container bg-slate-300 flex flex-col xxl:h-[70%] shadow-2xl drop-shadow-2xl xxl:w-[30%] h-[90%] xl:h-[65%] w-[40%] rounded-3xl">
        <div className="flex mt-10 items-center flex-col">
          <h1 className="font-extrabold md:text-lg lg:text-2xl xl:text-4xl ">
            Add Queue
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-full px-10 flex flex-col gap-4 mt-6">
            <Input
              label="Guest Name"
              py={3}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="ID Number"
              py={3}
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
            />
            <Input
              label="Guest Email"
              py={3}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Purpose"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />
          </div>
          <div className="flex justify-evenly gap-4 mt-10">
            <div className="bg-blue hover:bg-red-600 text-white rounded-2xl xxl:h-14 xxl:w-28 xxl:text-4xl h-10 w-20 flex justify-center items-center">
              <Button
                buttonName="Cancel"
                onClick={() => navigate("/Dashboard")}
              />
            </div>
            <div className="bg-blue text-white rounded-2xl h-10 w-20 flex xxl:h-14 xxl:w-28 xxl:text-4xl justify-center items-center">
              <Button buttonName="Submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQueFormStudent;
