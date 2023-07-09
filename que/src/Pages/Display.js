import React, { useEffect, useRef, useState } from "react";
import { GetFaculty } from "../customHooks/axios";
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Howl } from "howler";
import Notification from "../sound/Notification.mp3";

const Display = () => {
  const { data: faculty } = GetFaculty();
  const [prevPriorityNumber, setPrevPriorityNumber] = useState(null);

  const slidesPerView = Math.min(faculty?.length, 2);

  const sound = useRef(null);

  useEffect(() => {
    const handleUserGesture = () => {
      if (!sound.current) {
        sound.current = new Howl({
          src: [Notification],
          autoplay: false,
          volume: 0.5,
          onplayerror: () => {
            sound.current.once("unlock", () => {
              sound.current.play();
            });
          },
        });
      }
    };

    document.addEventListener("mousedown", handleUserGesture);

    return () => {
      document.removeEventListener("mousedown", handleUserGesture);
    };
  }, []);

  useEffect(() => {
    const currentPriorityNumbers = faculty?.map((item) => item.priorityNumber);

    if (
      currentPriorityNumbers &&
      !arraysEqual(currentPriorityNumbers, prevPriorityNumber)
    ) {
      if (sound.current && sound.current.play) {
        sound.current.play();
      }

      setPrevPriorityNumber(currentPriorityNumbers);
    }
  }, [faculty]);

  const arraysEqual = (a, b) => {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }

    return true;
  };

  return (
    <div className="flex flex-col justify-center max-w-screen-xxl min-h-screen bg-background bg-cover bg-no-repeat backdrop-blur-sm">
      <div className="flex justify-center ">
        <h1 className="text-Ivory text-5xl font-extrabold xxl:text-9xl">
          PRIORITY NUMBERS
        </h1>
      </div>
      <div className="flex justify-center items-center p-20 xxl:p-96 ">
        <Swiper
          spaceBetween={50}
          modules={[Autoplay]}
          slidesPerView={slidesPerView}
        >
          {Array.isArray(faculty) &&
            faculty.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-powderBlue rounded-md min-w-max">
                  <div className="flex items-center justify-center border-b-2 border-black pb-2">
                    <img
                      src={item.profilePic}
                      className="max-h-20 min-w-0 rounded-full m-4 object-contain"
                      alt={item.name}
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
