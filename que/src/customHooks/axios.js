import axios from "axios";
import { useMutation, useQuery } from "react-query";

//headers
let validation = sessionStorage.getItem("access_token");
const headers = {
  Authorization: `Bearer ${validation}`,
  "Content-Type": "application/json",
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

//For Dashboard Data
const dashboardQuery = async () => {
  const value = await axios.get(
    "https://ustp-queueing-system.onrender.com/user/"
  );
  return value.data;
};

export const GetFaculty = () => {
  return useQuery(["faculty"], dashboardQuery, {
    
  });
};

//For Pending Data
const pendingQuery = async () => {
  const value = await axios.get(
    "https://ustp-queueing-system.onrender.com/queue/pending"
  );
  return value.data;
};

export const GetPending = () => {
  return useQuery(["pending"], pendingQuery, {
    
  });
};

//For Sending Email
const sendEmail = async(notify) => {
  return await axios.post(
    "https://ustp-queueing-system.onrender.com/queue/notify",
    notify,
    { headers }
  );
};  

export const NotifyQuery = () => {
  return useMutation(sendEmail);
};
