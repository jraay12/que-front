import React, { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { GetPending, QueueStatus } from "../../../customHooks/axios";
import AuthContext from "../../../context/AuthProvider";
import Button from "../../../components/Button";

const PendingQueue = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const value = Object.values(auth);
  const { data: Pending } = GetPending();
  const { mutate: Status } = QueueStatus();

  const handleOnHold = (id) => {
    const status = "On Hold";
    const params = new URLSearchParams();
    params.append("_id", id);
    params.append("status", status);
    const value = params;
    Status(value, {
      onSuccess: () => {
        console.log("success");
      },
      onError: (err) => {
        console.error(err);
      },
    });
  };

  const filterData = Pending?.filter((item) => item.userId === value[2]);

  return (
    <div className="flex w-full justify-center overflow-hidden items-center min-h-screen">
      <div className="drop-shadow-2xl shadow-2xl bg-opacity-60 max-h-[80%] shadow-blue backdrop-blur-sm rounded-3xl  overflow-auto  min-h-[70%] w-full pb-10 mx-10 overflow-x-hidden">
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
                  className={`hover:ease-in cursor-pointer bg-blue text-white transition ease-in duration-75 font-semibold border-y-2 border-white ${item?.status === "On Hold" && "bg-red-700"}`}
                  key={item?.idNumber}
                >
                  <td
                    className="p-4 "
                    onClick={() =>
                      navigate(`/Faculty/PendingQueue/Information/${item._id}`)
                    }
                  >
                    {item?.idNumber === null ? "N/A" : item.idNumber}
                  </td>
                  <td
                    className="p-4  "
                    onClick={() =>
                      navigate(`/Faculty/PendingQueue/Information/${item._id}`)
                    }
                  >
                    {item?.priorityNumber}
                  </td>

                  <td
                    className="p-4  "
                    onClick={() =>
                      navigate(`/Faculty/PendingQueue/Information/${item._id}`)
                    }
                  >
                    {item?.name}
                  </td>
                  <td
                    className="p-4  "
                    onClick={() =>
                      navigate(`/Faculty/PendingQueue/Information/${item._id}`)
                    }
                  >
                    {item?.status}
                  </td>
                  <td
                    className="max-w-[100px] truncate overflow-x-hidden whitespace-nowrap"
                    onClick={() =>
                      navigate(`/Faculty/PendingQueue/Information/${item._id}`)
                    }
                  >
                    {item?.purpose}
                  </td>
                  <td className="h-10 border-l-2">
                    <Button
                      
                      buttonName="Hold"
                      onClick={() => handleOnHold(item?._id)}
                    />
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
