import React from "react";
import { GetFaculty } from "../customHooks/axios";
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Display = () => {
  const { data: faculty } = GetFaculty();
  const slidesPerView = Math.min(faculty?.length, 2);

  return (
    <div className="flex flex-col justify-center max-w-screen-xxl min-h-screen bg-background bg-cover bg-no-repeat backdrop-blur-sm">
      <div className="flex justify-center ">
        <h1 className="text-Ivory text-5xl font-extrabold xxl:text-9xl">PRIORITY NUMBERS</h1>
      </div>
      <div className="flex justify-center items-center p-20 xxl:p-96 ">
        <Swiper
          spaceBetween={50}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          slidesPerView={slidesPerView}
        >
          {Array.isArray(faculty) &&
            faculty.map((item) => (
              <SwiperSlide>
                <div className=" bg-powderBlue rounded-md min-w-max ">
                  <div className="flex items-center justify-center border-b-2 border-black pb-2">
                    <img
                      src={item.profilePic}
                      className="max-h-20  min-w-0 rounded-full m-4 object-contain"
                    />
                    <h1 className="font-bold text-3xl">{item.name}</h1>
                  </div>

                  <div className="text-center text-[150px]">
                    <h1>
                      {item.priorityNumber === undefined
                        ? "0"
                        : item.priorityNumber}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Display;
