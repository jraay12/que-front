import React, { useState } from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import { GetFaculty } from "../../customHooks/axios";
import { Outlet, useNavigate } from "react-router-dom";
import { BsQrCodeScan } from "react-icons/bs";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import AddContainer from "../../components/AddContainer";
import QrContainer from "../../components/QrContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import "swiper/swiper-bundle.min.css";

const GuestStudent = () => {
  const qrOpen = false;

  const openModal = false;
  const navigate = useNavigate();

  const { data: getUser } = GetFaculty();
  
  

  return (
    <div className="flex flex-col min-h-screen max-h-screen bg-no-repeat w-screen bg-background bg-cover bg-black ">
      <div className="flex justify-evenly md:justify-end w-screen h-14 xxl:h-32 ">
        <div className="text-white font-bold flex justify-center gap-28 md:gap-10 items-center mx-10 ">
          <div className="flex flex-col items-center leading-3 text-2xl hover:cursor-pointer xxl:text-4xl">
            <div className="flex" onClick={() => navigate("/Dashboard/QrCode")}>
              <BsQrCodeScan />
              {qrOpen ? (
                <MdOutlineKeyboardArrowDown />
              ) : (
                <MdOutlineKeyboardArrowUp />
              )}
            </div>
            <p className="text-[10px] font-bold select-none	xxl:text-2xl">
              Generate QR code
            </p>
          </div>
          <div className="select-none font-bold xxl:text-4xl">
            <Button buttonName="LOGIN" onClick={() => navigate("/Login")} />
          </div>
        </div>
      </div>
      <div className="flex mx-7 inset-0 justify-center h-screen items-center">
        <Swiper
          spaceBetween={50}
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
          pagination={{ clickable: true }}
          navigation
          slidesPerView={3}
          className="z-10"
        >
          {Array.isArray(getUser) &&
            getUser.map((item, index) => (
              <SwiperSlide>
                <Container
                  key={index}
                  name={item.name}
                  position={item.position}
                  image={item.profilePic}
                  status={item.status}
                  // count={count}
                  onClick={() => navigate(`/Dashboard/AddQue/${item._id}`)}
                />
              </SwiperSlide>
            ))}
        </Swiper>
        {qrOpen && <QrContainer />}
      </div>

      {openModal && <AddContainer />}
      <Outlet />
    </div>
  );
};

export default GuestStudent;
