import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

//headers
let validation = sessionStorage.getItem("access_token");
const headers = {
  Authorization: `Bearer ${validation}`,
  "Content-Type": "application/x-www-form-urlencoded",
};

//For Login
const facultyLogin = async (credentials) => {
  return await axios.post(
    `https://ustp-queueing-system.onrender.com/auth/login`,
    credentials
  );
};
export const MutateLogin = () => {
  return useMutation(facultyLogin);
};

//For Add Queue
const addQue = async (value) => {
  return await axios.post(
    `https://ustp-queueing-system.onrender.com/queue/`,
    value,
    { headers }
  );
};

export const MutateQue = () => {
  return useMutation(addQue);
};

//For Dashboard Data
const dashboardQuery = async () => {
  const value = await axios.get(
    "https://ustp-queueing-system.onrender.com/user/"
  );
  return value.data;
};

export const GetFaculty = () => {
  return useQuery(["faculty"], dashboardQuery);
};

//For Queue Count
// const count = async () => {
//   const response = await axios.get(
//     `https://ustp-queueing-system.onrender.com/queue/count`
//   );
//   return response.data;w
// };

// export const GetCount = () => {
//   return useQuery(["count"], count);
// };

//For Pending Data
const pendingQuery = async () => {
  const value = await axios.get(
    "https://ustp-queueing-system.onrender.com/queue/pending"
  );
  return value.data;
};

export const GetPending = () => {
  return useQuery(["pending"], pendingQuery, {});
};

//For Sending Email
const sendEmail = async (notify) => {
  return await axios.post(
    "https://ustp-queueing-system.onrender.com/queue/notify",
    notify,
    { headers }
  );
};

export const NotifyQuery = () => {
  return useMutation(sendEmail);
};

//For Update Queue Status
const queueStatus = async (value) => {
  return await axios.put(
    `https://ustp-queueing-system.onrender.com/queue/`,
    value,
    { headers }
  );
};

export const QueueStatus = () => {
  return useMutation(queueStatus);
};
