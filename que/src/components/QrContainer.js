import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import code from "../images/qrcode.png";
const QrContainer = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-screen absolute  flex flex-col  backdrop-blur-sm">
      <div
        className="hover:cursor-pointer h-10 flex justify-end mx-3 pt-3 text-4xl"
        onClick={() => navigate("/Dashboard")}
      >
        <AiOutlineClose />
      </div>
      <div className="flex h-full w-full justify-center items-center">
        <div className="h-80 w-80">
          <img src={code} />
        </div>
      </div>
    </div>
  );
};

export default QrContainer;
