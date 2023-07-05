import React from "react";
import { GetHistory } from "../../../customHooks/axios";

const QueHistory = () => {
  const { data: History } = GetHistory();

  const sortedHistory = History?.sort((a, b) => a.timestamp - b.timestamp);
  return (
    <div className="flex w-full justify-center overflow-hidden items-center min-h-screen">
      <div className="drop-shadow shadow-2xl max-h-[80%] bg-white shadow-black backdrop-blur-sm  overflow-auto  min-h-[70%] w-full pb-10 mx-10 overflow-x-hidden">
        <table className="text-left w-full font-semibold xxl:text-4xl">
          <thead className="bg-powderBlue sticky top-0">
            <tr className="font-bold text-lg xxl:text-4xl">
              <th className="p-4">ID Number</th>
              <th className="p-4">Name</th>
              <th className="p-4">Status</th>
              <th className="p-4">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(sortedHistory) &&
              sortedHistory.map((item) => (
                <tr
                  className="hover:ease-in cursor-pointer text-black  transition ease-in duration-75 font-semibold hover:border-2 hover:shadow-black hover:shadow-md"
                  key={item?.idNumber}
                >
                  <td className="p-4 ">
                    {item?.idNumber === null ? "N/A" : item.idNumber}
                  </td>
                  <td className="p-4  ">{item?.name}</td>
                  <td className="p-4  ">{item?.status}</td>
                  <td className="max-w-[100px] font-semibold text-sm truncate overflow-x-hidden whitespace-nowrap">
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
