import React, { useEffect, useState, useRef } from "react";
import Input from "./Input";
import Button from "./Button";
import { useNavigate, useParams } from "react-router-dom";
import { MutateQue } from "../customHooks/axios";
import PriorityNumber from "../components/PriorityNumber";

const AddQueFormGuest = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const inputRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [priorityNumber, setPriorityNumber] = useState("");
  const { mutate } = MutateQue();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append("userId", _id);
    params.append("name", name);
    params.append("email", email);
    params.append("purpose", purpose);
    const value = params;
    mutate(value, {
      onSuccess: async (data) => {
        setIsSuccess(true);
        setPriorityNumber(data.data.priorityNumber);
        setTimeout(() => {
          setIsSuccess(false);
          navigate("/Dashboard");
        }, 3000);
      },
      onError: (err) => {
        console.error(err);
      },
    });
  };

  return (
    <div className="absolute flex h-screen w-screen items-center justify-center bg-background bg-cover bg-no-repeat backdrop-blur-lg ">
      <div className="container flex w-[40%] flex-col  rounded-3xl bg-slate-300 shadow-2xl drop-shadow-2xl xxl:max-h-full xxl:max-w-[30%]">
        <div className="mt-10 flex flex-col items-center">
          <h1 className="font-extrabold md:text-lg lg:text-2xl xl:text-4xl">
            Add Queue
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-6 flex w-full flex-col gap-4 px-10 ">
            <Input
              ref={inputRef}
              label="Guest Name"
              py={3}
              value={name}
              onChange={(e) => setName(e.target.value)}
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
          <div className="mt-10 flex justify-evenly gap-4 pb-10">
            <div className="flex h-10 w-20 items-center justify-center rounded-2xl bg-blue text-white hover:bg-red-600 xxl:h-14 xxl:w-28 xxl:text-4xl">
              <Button
                buttonName="Cancel"
                onClick={() => navigate("/Dashboard")}
              />
            </div>
            <div className="flex h-10 w-20 items-center justify-center rounded-2xl bg-blue text-white xxl:h-14 xxl:w-28 xxl:text-4xl">
              <Button buttonName="Submit" />
            </div>
          </div>
        </form>
      </div>
      {isSuccess && <PriorityNumber number={priorityNumber} />}
    </div>
  );
};

export default AddQueFormGuest;
