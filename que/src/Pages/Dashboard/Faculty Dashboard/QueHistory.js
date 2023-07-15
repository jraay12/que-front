import React from "react";
import { GetHistory } from "../../../customHooks/axios";

const QueHistory = () => {
  const { data: History } = GetHistory();

  const sortedHistory = History?.sort((a, b) => a.timestamp - b.timestamp);
  return (
    <div className="flex min-h-screen w-full items-center justify-center overflow-hidden">
      <div className="mx-10 max-h-[80%] min-h-[70%] w-full overflow-auto overflow-x-hidden  bg-white  pb-10 shadow-2xl shadow-black drop-shadow backdrop-blur-sm">
        <table className="w-full text-left font-semibold xxl:text-4xl">
          <thead className="sticky top-0 bg-newBlue">
            <tr className="text-lg font-bold text-white xxl:text-4xl">
              <th className="p-4">ID #</th>
              <th className="p-4">Name</th>
              <th className="p-4">Status</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(sortedHistory) &&
              sortedHistory.map((item) => (
                <tr
                  className="cursor-pointer font-normal text-black  transition duration-75 ease-in hover:border-2 hover:shadow-md hover:shadow-black hover:ease-in"
                  key={item?.idNumber}
                >
                  <td className="p-4 ">
                    {item?.idNumber === null ? "N/A" : item.idNumber}
                  </td>
                  <td className="p-4  ">{item?.name}</td>
                  <td className="p-4  ">{item?.status}</td>
                  <td className="max-w-[100px] overflow-x-hidden truncate whitespace-nowrap text-sm font-semibold">
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
