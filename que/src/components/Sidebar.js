import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import History from "../images/history.png";
import Current from "../images/Vector.png";
import Logout from "../images/Logout.png";
import Toggle from "../images/Toggle.png";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuItem = [
    {
      path: `/Faculty/CurrentQue`,
      name: "Current Que",
      src: Current,
    },
    {
      path: `/Faculty/QueueHistory`,
      name: "Queue History",
      src: History,
    },
  ];
  return (
    <div className="flex shadow-2xl bg-blue text-white  ">
      <div
        ref={sidebarRef}
        className={`${
          open ? "w-52 xxl:w-96" : "w-20 xxl:w-36"
        } bg-dark-purple h-screen p-5 pt-8 relative duration-300 ease-in md:${!open}`}
      >
        <h1 className={`${!open && "hidden"} origin-left duration-200 text-xl xxl:text-3xl`}>SIR ROJO</h1>
        <div className={`flex justify-end ${!open && "justify-center"}`}>
          <img
            src={Toggle}
            className={`absolute cursor-pointer top-9 w-4 xxl:w-7 border-dark-purple
           ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
            alt="Toggle Sidebar"
          />
        </div>
        <div className="flex gap-x-4 items-center">
          
        </div>
        <div className="flex flex-col flex-grow items-center">
          <ul className="pt-6 mt-20 flex-grow ">
            {menuItem.map((items, index) => (
              <NavLink
                key={index}
                to={items.path}
                className={`flex rounded-md p-2 cursor-pointer xxl:text-3xl xxl:mt-10 hover:bg-light-white font-semibold text-md items-center gap-x-4 
              ${items.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                }`}
              >
                <img src={items.src} alt={items.name} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {items.name}
                </span>
              </NavLink>
            ))}
          </ul>
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <div className="flex justify-center items-center">
            <img src={Logout} className="object-contain h-5 w-5 xxl:h-7 xxl:w-7" alt="Logout" />

            <span className={`${!open && "hidden"} `}>
              <button className="text-white text-lg font-semibold ml-4 xxl:text-3xl rounded-lg outline-none">
                Logout
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
