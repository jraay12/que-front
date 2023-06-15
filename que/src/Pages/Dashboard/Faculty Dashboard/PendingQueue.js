import React from "react";
//import { currentData } from "../../../SampleData/SampleData";
import { Outlet, useNavigate } from "react-router-dom";
import { GetPending } from "../../../customHooks/axios";
const PendingQueue = () => {

  const navigate = useNavigate()

  const {data:Pending} = GetPending()
  console.log(Pending)
  return (
    <div className="flex w-full bg-no-repeat bg-cover justify-center items-center min-h-screen bg-background backdrop-blur-lg">
      <div className="drop-shadow shadow-2xl bg-opacity-60 shadow-black backdrop-blur-sm rounded-3xl w-full max-h-[70%] overflow-auto bg-white min-h-[70%] mx-32">
        <table className="text-left w-full font-semibold xxl:text-4xl">
          <thead className=" flex bg-yellow-300 text-black w-full sticky top-0">
            <tr className="flex w-full mb-4">
              <th className="p-4 w-1/4">Queue Number</th>
              <th className="p-4 w-1/4">Student/Guest Name</th>
              <th className="p-4 w-1/4">Status</th>
              <th className="p-4 w-1/4">Purpose</th>
            </tr>
          </thead>
          <tbody className="flex flex-col items-center justify-between h-[50%] overflow-auto w-full ">
            {Array.isArray(Pending) &&
              Pending.map((item) => (
                <tr className="flex w-full mb-4 hover:bg-gray-500 hover:cursor-pointer" key={item.id} onClick={() => navigate(`/Faculty/PendingQueue/Information/${item.name}`)}>
                  <td className="p-4 w-1/4">{item.Queue}</td>
                  <td className="p-4 w-1/4">{item.name}</td>
                  <td className="p-4 w-1/4">{item.status}</td>
                  <td className="p-4 w-1/4 whitespace-nowrap overflow-ellipsis overflow-x-hidden">{item.purpose}</td>
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
