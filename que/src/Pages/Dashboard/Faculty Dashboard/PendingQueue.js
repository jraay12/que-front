import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { GetPending } from "../../../customHooks/axios";
const PendingQueue = () => {

  const navigate = useNavigate()

  const {data:Pending} = GetPending()
  return (
    <div className="flex w-full bg-no-repeat bg-cover justify-center overflow-hidden items-center min-h-screen bg-background backdroplg:-blur-md">
      <div className="drop-shadow shadow-2xl bg-opacity-60 shadow-black backdrop-blur-sm rounded-3xl  overflow-auto bg-gradient-to-r from-sky-400 to-sky-50 min-h-[70%] w-full mx-10 overflow-x-hidden">
        <table className="text-left w-full font-semibold xxl:text-4xl">
          <thead className=" bg-yellow-300 text-black w-full sticky top-0">
            <tr className="flex  mb-4">
              <th className="p-4 w-1/4 ">ID Number</th>
              <th className="p-4 lg:w-1/4 md:w-[18%]">Student/Guest Name</th>
              <th className="p-4 lg:w-1/4 md:w-[18%]">Status</th>
              <th className="p-4 lg:w-1/4 md:w-[18%]">Purpose</th>
            </tr>
          </thead>
          <tbody className="flex flex-col items-center justify-between h-[50%] overflow-auto w-full ">
            {Array.isArray(Pending) &&
              Pending.map((item) => (
                <tr className="flex w-full mb-4 hover:bg-gray-500 hover:cursor-pointer" key={item.idNumber} onClick={() => navigate(`/Faculty/PendingQueue/Information/${item.name}`)}>
                  <td className="p-4 lg:w-1/4 md:w-[18%]">{item.idNumber}</td>
                  <td className="p-4 lg:w-1/4 md:w-[18%]">{item.name}</td>
                  <td className="p-4 lg:w-1/4 md:w-[18%]">{item.status}</td>
                  <td className="p-4 lg:w-1/4 md:w-[18%] whitespace-nowrap overflow-ellipsis overflow-x-hidden">{item.purpose}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Outlet />
    </div>
  );
};

export default PendingQueue;
