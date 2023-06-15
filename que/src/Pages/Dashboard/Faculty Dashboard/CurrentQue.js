import React from "react";
import { currentData } from "../../../SampleData/SampleData";
import { Outlet, useNavigate } from "react-router-dom";
const CurrentQue = () => {

  const navigate = useNavigate()
  return (
    <div className="flex w-full bg-no-repeat bg-cover justify-center items-center min-h-screen bg-background backdrop-blur-lg">
      <div className="drop-shadow shadow-2xl bg-opacity-60 shadow-black backdrop-blur-sm rounded-3xl w-full max-h-[70%] overflow-auto bg-white min-h-[70%] mx-32">
        <table class="text-left w-full font-semibold">
          <thead class=" flex bg-yellow-300 text-black w-full sticky top-0">
            <tr class="flex w-full mb-4">
              <th class="p-4 w-1/4">Queue Number</th>
              <th class="p-4 w-1/4">Identity</th>
              <th class="p-4 w-1/4">Student/Guest Name</th>
              <th class="p-4 w-1/4">Purpose</th>
            </tr>
          </thead>
          <tbody class="flex flex-col items-center justify-between h-[50%] overflow-auto w-full ">
            {Array.isArray(currentData) &&
              currentData.map((item) => (
                <tr class="flex w-full mb-4 hover:bg-gray-500 hover:cursor-pointer" onClick={() => navigate("/Faculty/CurrentQue/Information")}>
                  <td class="p-4 w-1/4">{item.Queue}</td>
                  <td class="p-4 w-1/4">{item.Identity}</td>
                  <td class="p-4 w-1/4">{item.Name}</td>
                  <td class="p-4 w-1/4 whitespace-nowrap overflow-ellipsis overflow-x-hidden">{item.Purpose}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Outlet />
    </div>
  );
};

export default CurrentQue;
