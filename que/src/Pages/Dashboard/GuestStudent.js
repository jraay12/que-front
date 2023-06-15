import React, { useState } from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import SampleData from "../../SampleData/SampleData";
import { GetFaculty } from "../../customHooks/axios";
import { Outlet, useNavigate } from "react-router-dom";
import { BsQrCodeScan } from "react-icons/bs";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import AddContainer from "../../components/AddContainer";
import QrContainer from "../../components/QrContainer";
import code from "../../images/qrcode.png";

const GuestStudent = () => {
  const qrOpen = false;

  const openModal = false;
  const navigate = useNavigate();

  const { data: getUser } = GetFaculty();
  console.log(getUser)
  return (
    <div className="flex flex-col min-h-screen max-h-screen bg-background bg-cover bg-no-repeat w-screen">
      <div className="flex justify-evenly md:justify-end w-screen h-14 xxl:h-32 bg-yellow-400 ">
        <div className="text-black font-serif flex justify-center gap-28 md:gap-10 items-center mx-10 font-semibold">
          <div className="flex flex-col items-center leading-3 text-2xl hover:cursor-pointer xxl:text-4xl">
            <div className="flex" onClick={() => navigate("/Dashboard/QrCode")}>
              <BsQrCodeScan />
              {qrOpen ? (
                <MdOutlineKeyboardArrowDown />
              ) : (
                <MdOutlineKeyboardArrowUp />
              )}
            </div>
            <p className="text-[10px] font-light select-none	xxl:text-2xl">
              Generate QR code
            </p>
          </div>
          <div className="select-none font-bold xxl:text-4xl">
            <Button buttonName="LOGIN" onClick={() => navigate("/Login")} />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col mx-7 h-screen mt-16 md:flex-row sm:gap-10 md:justify-evenly items-center">
        {Array.isArray(getUser) && getUser.map((item, index) => (
          <Container
            key={index}
            name={item.name}
            position={item.position}
            image={item.src}
            onClick={() => navigate("/Dashboard/AddQue")}
          />
        ))}
      </div>

      {openModal && <AddContainer />}
      {qrOpen && <QrContainer />}
      <Outlet />
    </div>
  );
};

export default GuestStudent;
