import React, { useRef, useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import History from "../images/history.png";
import Logout from "../images/Logout.png";
import Toggle from "../images/Toggle.png";
import Add from "../images/add.png";
import Pending from "../../src/images/pending.png";
import AuthContext from "../context/AuthProvider";
import { SetLimit, MutateLogout } from "../customHooks/axios";
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

  const handleLogout = async () => {
    MutateLogout();
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
      src: Pending,
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
    <div className="z-20 flex select-none bg-white  text-black shadow-2xl">
      <div
        ref={sidebarRef}
        className={`${
          open ? "w-52 xxl:w-96" : "w-24 xxl:w-36"
        } bg-dark-purple relative h-screen p-5 pt-8 duration-300 ease-in md:${!open}`}
      >
        <div
          className={`${
            open && "flex items-center justify-center xxl:mt-20"
          } m-auto h-32 w-32 xxl:h-56 xxl:w-56`}
        >
          <img
            src={auth.profilePic}
            alt="my-picture"
            className={`${
              !open && "mt-20 h-10 w-10 xxl:h-28 xxl:w-28"
            } rounded-full`}
          />
        </div>
        <div className="mt-4 flex items-center justify-center">
          <h1
            className={`${
              !open && "hidden"
            } origin-left text-xl font-bold duration-200 xxl:text-4xl`}
          >
            {auth.authName}
          </h1>
        </div>
        <div className={`flex justify-end ${!open && "justify-center"}`}>
          <img
            src={Toggle}
            className={`border-dark-purple absolute top-9 w-4 cursor-pointer xxl:w-7
           ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
            alt="Toggle Sidebar"
          />
        </div>
        <div className="flex flex-grow flex-col items-center ">
          <ul className="flex-grow pt-6 xxl:mt-40 ">
            <form onSubmit={handleLimit}>
              <div className="flex justify-center gap-2 xxl:text-4xl ">
                <h1 className={` ${!open && "hidden"} font-bold `}>Limit</h1>

                <input
                  className="ml-2 w-full  rounded-sm border-[1px] border-black pl-3 text-black"
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
                className={`hover:bg-light-white flex cursor-pointer items-center gap-x-4 rounded-md p-2  text-base  font-semibold focus:bg-powderBlue xxl:text-3xl 
              ${items.gap ? "mt-9" : "mt-4"} ${
                index === 0 && "bg-light-white"
              }`}
              >
                <img
                  src={items.src}
                  alt={items.name}
                  className="h-5 w-5 text-black xxl:mt-10 xxl:h-10 xxl:w-10"
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
          <div className="flex items-center justify-center">
            <img
              src={Logout}
              className="h-5 w-5 object-contain xxl:h-7 xxl:w-7"
              alt="Logout"
            />

            <span className={`${!open && "hidden"} `}>
              <button
                className="ml-4 rounded-lg text-lg font-semibold text-black outline-none xxl:text-3xl"
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
