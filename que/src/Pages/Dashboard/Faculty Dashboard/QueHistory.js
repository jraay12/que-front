import React from "react";
import { GetHistory } from "../../../customHooks/axios";

const QueHistory = () => {
  const { data: History } = GetHistory();
  return (
    <div className="flex w-full justify-center overflow-hidden items-center min-h-screen">
      <div className="drop-shadow shadow-2xl bg-opacity-60 max-h-[80%] shadow-black backdrop-blur-sm rounded-3xl  overflow-auto bg-gradient-to-r from-sky-400 to-sky-50 min-h-[70%] w-full mx-10 overflow-x-hidden">
        <table className="text-left w-full font-semibold xxl:text-4xl">
          <thead className=" bg-yellow-400 text-black w-full sticky top-0">
            <tr className="flex justify-evenly mb-4">
              <th className="p-4 w-1/4 ">ID Number</th>
              <th className="p-4 w-1/4 ">Student/Guest Name</th>
              <th className="p-4 w-1/4 ">Status</th>
              <th className="p-4 w-1/4 ">Purpose</th>
            </tr>
          </thead>
          <tbody className="flex flex-col items-center h-[50%] overflow-auto w-full ">
            {Array.isArray(History) &&
              History.map((item) => (
                <tr
                  className="flex w-full mb-4 hover:bg-gray-500 hover:cursor-pointer"
                  key={item?.idNumber}
                >
                  <td className="p-4 w-1/4 ">
                    {item?.idNumber === null ? "Guest" : item.idNumber}
                  </td>
                  <td className="p-4 w-1/4 ">
                    {item?.name}
                  </td>
                  <td className="p-4 w-1/4 ">
                    {item?.status}
                  </td>
                  <td className="p-4 w-1/4 ">
                    {item?.purpose}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QueHistory;
