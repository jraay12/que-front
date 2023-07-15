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

  const value = GetInfo?.filter((item) => item?._id === _id);

  useEffect(() => {
    if (Array.isArray(value) && value?.length > 0) {
      setEmail(value[0]?.email);
    }
  }, [GetInfo]);

  const { mutate: Notify } = NotifyQuery();

  const handleNotify = () => {
    const notify = { email };
    Notify(notify, {
      onSuccess: async () => {
        toast.success("Email Sent", {
          autoClose: 500,
          theme: "dark",
        });
        setTimeout(() => {
          navigate("/Faculty/PendingQueue");
        }, 1500);
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

  if (!Array.isArray(value) || value.length === 0) {
    return null;
  }

  return (
    <div className="absolute flex min-h-screen max-w-full items-center justify-center ">
      <div className="min-w-[400px] max-w-[1000px] rounded-3xl bg-white pb-5 shadow-2xl shadow-blue xxl:mx-32 xxl:h-[800px] xxl:min-w-[40%]  xxl:max-w-[90%] ">
        <div className="mt-4 flex h-full flex-col items-center">
          <div
            className="mr-5 flex w-full  cursor-pointer justify-end text-xl hover:text-red-600"
            onClick={() => navigate("/Faculty/PendingQueue/")}
          >
            <AiOutlineClose />
          </div>
          <h1 className="text-2xl font-bold text-blue xxl:mt-10 xxl:text-5xl">
            Information
          </h1>
          <div className="mt-10 flex max-w-[1000px] flex-col items-start gap-6 break-all px-5 font-normal text-blue xxl:mt-20 xxl:gap-12 xxl:text-4xl">
            <div className="flex gap-3 xxl:gap-10">
              <h1>ID Number:</h1>
              <h1 className="font-bold">
                {value[0].idNumber === null ? "N/A" : value[0].idNumber}
              </h1>
            </div>
            <div className="flex gap-12 xxl:gap-20">
              <h1>Name: </h1>
              <h1 className="font-bold">{value[0].name}</h1>
            </div>
            <div className="flex gap-12 xxl:gap-20">
              <h1>Email :</h1>
              <h1 className="whitespace-normal font-bold">{value[0].email}</h1>
            </div>
            <div className="flex gap-6">
              <h1 className="min-w-[70px]">Purpose:</h1>
              <h1 className="whitespace-normal font-bold">
                {value[0].purpose}
              </h1>
            </div>
            <div className="flex w-full justify-center gap-10 font-semibold xxl:mt-10 xxl:gap-20">
              <div className="flex h-10 w-20 items-center justify-center rounded-2xl bg-blue text-white xxl:h-20 xxl:w-40">
                <Button buttonName="Done" onClick={handleDone} />
              </div>
              <div className="flex h-10 w-20 items-center justify-center rounded-2xl bg-blue text-white xxl:h-20 xxl:w-40">
                <Button buttonName="Notify" onClick={handleNotify} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 m-4">
        <ToastContainer className="h-48 w-80" />
      </div>
    </div>
  );
};

export default InformationCard;
