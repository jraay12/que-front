import React, { useRef, useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import History from "../images/history.png";
import Current from "../images/Vector.png";
import Logout from "../images/Logout.png";
import Toggle from "../images/Toggle.png";
import Add from "../images/icons8-add-user-50.png";
import AuthContext from "../context/AuthProvider";
import { clearToken, SetLimit } from "../customHooks/axios";
import { toast, ToastContainer } from "react-toastify";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const { auth } = useContext(AuthContext);
  const [queueLimit, setQueueLimit] = useState(() => {
    return "";
  });

  const navigate = useNavigate();
  const { mutate: Limit } = SetLimit();

  const sidebarRef = useRef(null);

  const handleLogout = () => {
    clearToken();
    navigate("/Login");
  };

  useEffect(() => {
    setQueueLimit(auth?.limit);
  }, []);

  const handleLimit = (e) => {
    e.preventDefault();
    const newLimit = e.target.value;
    setQueueLimit(newLimit);
    const params = new URLSearchParams();
    params.append("userId", auth?.id);
    params.append("queueLimit", queueLimit);
    console.log(JSON.stringify(Object.fromEntries(params))); // Log the params object
    const value = params;
    Limit(value, {
      onSuccess: async () => {
        toast.success("Queue Limit Changed", {
          autoClose: 1000,
          theme: "dark",
        });
      },
    });
  };
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
      path: `/Faculty/PendingQueue`,
      name: "Pending Queue",
      src: Current,
    },
    {
      path: `/Faculty/QueueHistory`,
      name: "Queue History",
      src: History,
    },
    {
      path: `/Faculty/Register`,
      name: "Register User",
      src: Add,
    },
  ];
  return (
    <div className="flex shadow-2xl bg-blue text-white  z-20">
      <div
        ref={sidebarRef}
        className={`${
          open ? "w-52 xxl:w-96" : "w-20 xxl:w-36"
        } bg-dark-purple h-screen p-5 pt-8 relative duration-300 ease-in md:${!open}`}
      >
        <div
          className={`${
            open && "flex justify-center items-center xxl:mt-20"
          } w-32 h-32 m-auto xxl:w-56 xxl:h-56`}
        >
          <img
            src={auth.profilePic}
            alt="my-picture"
            className={`${
              !open && "h-10 w-10 mt-20 xxl:h-28 xxl:w-28"
            } rounded-full`}
          />
        </div>
        <div className="flex justify-center items-center mt-4">
          <h1
            className={`${
              !open && "hidden"
            } origin-left duration-200 text-xl xxl:text-4xl`}
          >
            {auth.authName}
          </h1>
        </div>
        <div className={`flex justify-end ${!open && "justify-center"}`}>
          <img
            src={Toggle}
            className={`absolute cursor-pointer top-9 w-4 xxl:w-7 border-dark-purple
           ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
            alt="Toggle Sidebar"
          />
        </div>
        <div className="flex gap-x-4 items-center"></div>
        <div className="flex flex-col flex-grow items-center ">
          <ul className="pt-6 flex-grow xxl:mt-96 ">
            <form onSubmit={handleLimit}>
              <div className="flex justify-center gap-2 xxl:text-4xl ">
                <h1 className={` ${!open && "hidden"} font-bold`}>Limit</h1>

                <input
                  className="w-full rounded-sm outline-none ml-2 text-black"
                  value={queueLimit}
                  type="number"
                  onChange={(e) => setQueueLimit(e.target.value)}
                />
              </div>
            </form>

            {menuItem.map((items, index) => (
              <NavLink
                key={index}
                to={items.path}
                className={`flex rounded-md p-2 cursor-pointer xxl:text-3xl hover:bg-light-white font-semibold  text-md items-center gap-x-4 
              ${items.gap ? "mt-9" : "mt-4"} ${
                  index === 0 && "bg-light-white"
                }`}
              >
                <img
                  src={items.src}
                  alt={items.name}
                  className="w-5 h-5 xxl:h-10 xxl:w-10 xxl:mt-10"
                />

                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 xxl:mt-10`}
                >
                  {items.name}
                </span>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <div className="flex justify-center items-center">
            <img
              src={Logout}
              className="object-contain h-5 w-5 xxl:h-7 xxl:w-7"
              alt="Logout"
            />

            <span className={`${!open && "hidden"} `}>
              <button
                className="text-white text-lg font-semibold ml-4 xxl:text-3xl rounded-lg outline-none"
                onClick={handleLogout}
              >
                Logout
              </button>
            </span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Sidebar;
