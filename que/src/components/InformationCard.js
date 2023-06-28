import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetPending } from "../customHooks/axios";
import { QueueStatus } from "../customHooks/axios";
import { NotifyQuery } from "../customHooks/axios";
import { AiOutlineClose } from "react-icons/ai";

const InformationCard = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const [email, setEmail] = useState("");

  const { data: GetInfo } = GetPending();
  const value = GetInfo?.filter((item) => item._id === _id);

  useEffect(() => {
    if (value && value.length > 0) {
      if (value[0]._id === _id) {
        setEmail(value[0].email);
      }
    }
  }, [GetInfo, _id]);

  if (!Array.isArray(value) || value.length === 0) {
    return null;
  }

  const { mutate: Notify } = NotifyQuery();

  const handleNotify = () => {
    const notify = { email };
    Notify(notify, {
      onSuccess: async () => {
        toast.success("Email Sent", {
          autoClose: 1000,
          theme: "dark",
          
        });
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  const { mutate: Queue } = QueueStatus();

  const handleDone = (e) => {
    e.preventDefault();
    const status = "Done";
    const params = new URLSearchParams();
    params.append("_id", _id);
    params.append("status", status);
    const value = params;
    Queue(value, {
      onSuccess: () => {
        navigate("/Faculty/PendingQueue");
      },
      onError: (err) => {
        console.error(err);
      },
    });
  };

  return (
    <div className="flex min-h-screen justify-center items-center absolute">
      <div className="max-w-full min-w-[400px] h-96 bg-white shadow-2xl shadow-blue xxl:min-w-[40%] xxl:max-w-[90%] xxl:mx-32 xxl:h-[800px] max-h-screen rounded-3xl">
        <div className="flex flex-col h-full items-center mt-4">
          <div
            className="flex justify-end w-full mr-5 hover:text-red-600 cursor-pointer text-xl"
            onClick={() => navigate("/Faculty/PendingQueue/")}
          >
            <AiOutlineClose />
          </div>
          <h1 className="xxl:mt-10 xxl:text-5xl text-2xl font-bold text-blue">
            Information
          </h1>
          <div className="flex flex-col items-start px-5 gap-6 xxl:text-4xl xxl:mt-20 xxl:gap-12 font-normal text-blue mt-10">
            <div className="flex gap-6 xxl:gap-10">
              <h1>ID Number:</h1>
              <h1 className="font-bold">
                {value[0].idNumber === null ? "N/A" : value[0].idNumber}
              </h1>
            </div>
            <div className="flex gap-10 xxl:gap-20">
              <h1>Name: </h1>
              <h1 className="font-bold">{value[0].name}</h1>
            </div>
            <div className="flex gap-10 xxl:gap-20">
              <h1>Email :</h1>
              <h1 className="font-bold whitespace-normal">{value[0].email}</h1>
            </div>
            <div className="flex gap-6">
              <h1>Purpose:</h1>
              <h1 className="whitespace-normal font-bold">
                {value[0].purpose}
              </h1>
            </div>
            <div className="flex justify-center w-full gap-10 font-semibold xxl:gap-20 xxl:mt-10">
              <div className="bg-blue text-white rounded-2xl xxl:h-20 xxl:w-40 h-10 w-20 flex justify-center items-center">
                <Button buttonName="Done" onClick={handleDone} />
              </div>
              <div className="bg-blue text-white rounded-2xl xxl:h-20 xxl:w-40 h-10 w-20 flex justify-center items-center">
                <Button buttonName="Notify" onClick={handleNotify} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 m-4">
        <ToastContainer className="w-80 h-48" />
      </div>
    </div>
  );
};

export default InformationCard;
