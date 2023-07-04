import React, { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { GetPending } from "../../../customHooks/axios";
import AuthContext from "../../../context/AuthProvider";
import PriorityNumber from "../../../components/PriorityNumber";
import Button from "../../../components/Button"

export const useDoneState = () => {
  const [done, setDone] = useState(false);
  return { done, setDone };
};

const PendingQueue = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const { done, setDone } = useDoneState();
  const value = Object.values(auth);
  const { data: Pending } = GetPending();

  const filterData = Pending?.filter((item) => item.userId === value[2]);

  return (
    <div className="flex w-full justify-center overflow-hidden items-center min-h-screen">
      <div className="drop-shadow shadow-2xl bg-opacity-60 max-h-[80%] shadow-black backdrop-blur-sm rounded-3xl  overflow-auto bg-gradient-to-r from-sky-400 to-sky-50 min-h-[70%] w-full pb-10 mx-10 overflow-x-hidden">
        <table className="text-left w-full font-semibold xxl:text-4xl">
          <thead className="bg-yellow-300 ">
            <tr className="font-bold text-lg xxl:text-4xl">
              <th className="p-4">ID Number</th>
              <th className="p-4">Priority Number</th>
              <th className="p-4">Name</th>
              <th className="p-4">Status</th>
              <th className="p-4">Purpose</th>
              <th className="p-4">Option</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(filterData) &&
              filterData.map((item) => (
                <tr
                  className="hover:ease-in cursor-pointer bg-blue text-white transition ease-in duration-75 font-semibold border-y-2 border-white"
                  key={item?.idNumber}
                  onClick={() =>
                    navigate(`/Faculty/PendingQueue/Information/${item._id}`)
                  }
                >
                  <td className="p-4 ">
                    {item?.idNumber === null ? "N/A" : item.idNumber}
                  </td>
                  <td className="p-4  ">{item?.priorityNumber}</td>

                  <td className="p-4  ">{item?.name}</td>
                  <td className="p-4  ">{item?.status}</td>
                  <td className="max-w-[100px] truncate overflow-x-hidden whitespace-nowrap">
                    {item?.purpose}
                  </td>
                  <td className="p-4">
                      <Button 
                      className="bg-red-600 rounded-xl"
                      buttonName ="On Hold"/>
                    </td>
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
