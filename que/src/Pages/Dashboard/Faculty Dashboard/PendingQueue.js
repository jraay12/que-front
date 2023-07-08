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
  const [statuses, setStatuses] = useState({});

  const handleOnHold = (id) => {
    setStatuses((prevStatuses) => ({
      ...prevStatuses,
      [id]: !prevStatuses[id], // Toggle the hold status
    }));

    const status = statuses[id] ? "Pending" : "On Hold";

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
    <div className="flex w-full justify-center  overflow-hidden items-center min-h-screen">
      <div className="drop-shadow-2xl shadow-2xl bg-white max-h-[80%] backdrop-blur-sm overflow-auto min-h-[70%] w-full pb-10 mx-10 overflow-x-hidden">
        <table className="text-left w-full font-semibold xxl:text-4xl">
          <thead className="border-2 text-white bg-powderBlue sticky top-0">
            <tr className="font-bold text-lg text-black xxl:text-4xl">
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
                <React.Fragment key={item._id}>
                  <tr
                    className={`hover:ease-in cursor-pointer text-black n ease-in duration-75 font-semibold hover:border-0 hover:scale-[1.01]  hover:shadow-black hover:shadow-md ${
                      item.status === "On Hold" && "bg-darkgray"
                    }`}
                  >
                    <td
                      className="p-4"
                      onClick={() =>
                        navigate(
                          `/Faculty/PendingQueue/Information/${item._id}`
                        )
                      }
                    >
                      {item.idNumber === null ? "N/A" : item.idNumber}
                    </td>
                    <td
                      className="p-4"
                      onClick={() =>
                        navigate(
                          `/Faculty/PendingQueue/Information/${item._id}`
                        )
                      }
                    >
                      {item.priorityNumber}
                    </td>
                    <td
                      className="p-4"
                      onClick={() =>
                        navigate(
                          `/Faculty/PendingQueue/Information/${item._id}`
                        )
                      }
                    >
                      {item.name}
                    </td>
                    <td
                      className="p-4"
                      onClick={() =>
                        navigate(
                          `/Faculty/PendingQueue/Information/${item._id}`
                        )
                      }
                    >
                      {item.status}
                    </td>
                    <td
                      className="max-w-[100px] truncate overflow-x-hidden whitespace-nowrap"
                      onClick={() =>
                        navigate(
                          `/Faculty/PendingQueue/Information/${item._id}`
                        )
                      }
                    >
                      {item.purpose}
                    </td>
                    <td className="h-10">
                      <Button
                        className={` text-white font-bold ${
                          statuses[item._id] ? "bg-blue" : "bg-red-900"
                        } `}
                        buttonName={statuses[item._id] ? "UnHold" : "Hold"}
                        onClick={() => handleOnHold(item._id)}
                      />
                    </td>
                  </tr>
                  <hr className="mb-3 border-none" />
                </React.Fragment>
              ))}
          </tbody>
        </table>
      </div>
      <Outlet />
    </div>
  );
};

export default PendingQueue;
