import React, { useState } from "react";
import Button from "../components/Button";
import { useParams, useNavigate } from "react-router-dom";
import { GetPending, NotifyQuery } from "../customHooks/axios";

const InformationCard = () => {
  const { name } = useParams();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const { data: GetInfo } = GetPending();

  const value = GetInfo?.filter((item) => item.name == name);

  if (!Array.isArray(value) || value.length === 0) {
    return null;
  }

  const { mutate } = NotifyQuery();

  const handleNotify = () => {
    setEmail(value[0].email);
    const notify = { email };
    mutate(notify, {
      onSuccess: () => {
        console.log("success");
        navigate("/Faculty/PendingQueue");
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  return (
    <div className="flex min-h-screen w-full justify-center items-center absolute backdrop-blur-sm">
      <div className="w-96 h-96 bg-white bg-opacity-90 xxl:w-[800px] xxl:h-[800px] rounded-3xl">
        <div className="flex flex-col h-full items-center mt-4">
          <h1 className="xxl:mt-10 xxl:text-5xl text-2xl font-bold text-blue">
            Information
          </h1>
          <div className="flex flex-col items-start px-5 gap-6 xxl:text-4xl xxl:mt-20 xxl:gap-12 font-normal text-blue mt-10">
            <div className="flex gap-6">
              <h1>Student Number:</h1>
              <h1 className="font-bold">{value[0].idNumber}</h1>
            </div>
            <div className="flex gap-10 xxl:gap-20">
              <h1>Student Name: </h1>
              <h1 className="font-bold">{value[0].name}</h1>
            </div>
            <div className="flex gap-10 xxl:gap-20">
              <h1>Student Email :</h1>
              <h1 className="font-bold whitespace-normal">{value[0].email}</h1>
            </div>
            <div className="flex gap-4">
              <h1>Purpose:</h1>
              <h1 className="whitespace-normal font-bold">
                {value[0].purpose}
              </h1>
            </div>
            <div className="flex justify-center w-full gap-10 font-semibold xxl:gap-20 xxl:mt-10">
              <div className="bg-blue text-white  rounded-2xl xxl:h-20 xxl:w-40 h-10 w-20 flex justify-center items-center">
                <Button buttonName="Done" />
              </div>
              <div className="bg-blue text-white  rounded-2xl xxl:h-20 xxl:w-40 h-10 w-20 flex justify-center items-center">
                <Button buttonName="Notify" onClick={handleNotify} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
