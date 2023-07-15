import React, { useContext, useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { QueueStatus } from "../../../customHooks/axios";
import AuthContext from "../../../context/AuthProvider";
import Button from "../../../components/Button";
import { io } from "socket.io-client";
import { GetPending } from "../../../customHooks/axios";

const PendingQueue = () => {
  const token = sessionStorage.getItem("access_token");
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const value = Object.values(auth);
  const { mutate: Status } = QueueStatus();
  const [statuses, setStatuses] = useState({});

  const { data, refetch } = GetPending();

  useEffect(() => {
    if (!token) return;

    const socket = io.connect("http://localhost:5000/queue/pending", {
      transports: ["websocket"],
      query: {
        token: token,
      },
    });

    socket.on("queue", () => {
      refetch();
    });
  }, [token, refetch]);

  const handleOnHold = (id) => {
    setStatuses((prevStatuses) => ({
      ...prevStatuses,
      [id]: !prevStatuses[id],
    }));
    const status = statuses[id] ? "Pending" : "On Hold";
    const params = new URLSearchParams();
    params.append("_id", id);
    params.append("status", status);
    const value = params;
    Status(value, {
      onError: (err) => {
        console.error(err);
      },
    });
  };

  const filterData = data?.filter((item) => item.userId === value[2]);

  return (
    <div className="flex min-h-screen w-full  items-center justify-center overflow-hidden">
      <div className="mx-10  max-h-[80%] min-h-[70%] w-full overflow-auto overflow-x-hidden pb-10">
        <table className="w-full text-left font-semibold xxl:text-4xl">
          <thead className=" sticky top-0 bg-newBlue">
            <tr className="text-lg font-bold text-white xxl:text-4xl">
              <th className="p-4 ">ID #</th>
              <th className="p-4">Priority Number</th>
              <th className="p-4">Name</th>
              <th className="p-4">Status</th>
              <th>Purpose</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(filterData) &&
              filterData.map((item) => (
                <React.Fragment key={item._id}>
                  <hr className="mt-4 border-none" />
                  <tr
                    className={`cursor-pointer text-base font-normal text-black duration-75 ease-in hover:scale-[1.01]  hover:shadow-md  hover:shadow-black hover:ease-in ${
                      item.status === "On Hold" ? "bg-slate-400" : "bg-white"
                    }`}
                  >
                    <td
                      className="p-4"
                      onClick={() =>
                        navigate(
                          `/Faculty/PendingQueue/Information/${item._id}`,
                        )
                      }
                    >
                      {item.idNumber === null ? "N/A" : item.idNumber}
                    </td>
                    <td
                      className="p-4"
                      onClick={() =>
                        navigate(
                          `/Faculty/PendingQueue/Information/${item._id}`,
                        )
                      }
                    >
                      {item.priorityNumber}
                    </td>
                    <td
                      className="p-4"
                      onClick={() =>
                        navigate(
                          `/Faculty/PendingQueue/Information/${item._id}`,
                        )
                      }
                    >
                      {item.name}
                    </td>
                    <td
                      className="p-4"
                      onClick={() =>
                        navigate(
                          `/Faculty/PendingQueue/Information/${item._id}`,
                        )
                      }
                    >
                      {item.status}
                    </td>
                    <td
                      className="max-w-[100px] overflow-x-hidden truncate whitespace-nowrap"
                      onClick={() =>
                        navigate(
                          `/Faculty/PendingQueue/Information/${item._id}`,
                        )
                      }
                    >
                      {item.purpose}
                    </td>
                    <td className="h-10">
                      <Button
                        className={` font-bold text-white ${
                          statuses[item._id] ? "bg-blue" : "bg-red-600"
                        } `}
                        buttonName={statuses[item._id] ? "Unhold" : "Hold"}
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
