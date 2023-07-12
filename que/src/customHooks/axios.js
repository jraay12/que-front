import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";


const validation = sessionStorage.getItem("access_token");
const BASEURL = "http://192.168.1.8:5000";


// For Register
const registerHeaders = {
  "Content-Type": "multipart/form-data",
};

// For Login
const facultyLogin = async (credentials) => {
  return await axios.post(`${BASEURL}/auth/login`, credentials);
};

export const MutateLogin = () => {
  return useMutation(facultyLogin);
};

// For Dashboard Data
const dashboardQuery = async () => {
  const value = await axios.get(`${BASEURL}/queue/count`);
  return value.data;
};

export const GetFaculty = () => {
  return useQuery(["faculty"], dashboardQuery, {
    refetchInterval: 10000,
    refetchIntervalInBackground: true
  });
};

// For reset Password

const resetPassword = async (value, headers) => {
  return await axios.post(`${BASEURL}/auth/resetPassword`, value, { headers });
};

export const ResetPassword = () => {
  const queryClient = useQueryClient();
  const headers = {
    Authorization: `Bearer ${validation}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };
  return useMutation((value) => resetPassword(value, headers), {
    onSuccess: () => {
      queryClient.invalidateQueries("faculty");
    },
  });
};

// For Pending Data
const pendingQuery = async (headers) => {
  const value = await axios.get(`${BASEURL}/queue/pending`, { headers });
  return value.data;
};

export const GetPending = () => {
  const headers = {
    Authorization: `Bearer ${validation}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };
  return useQuery(["pending"], () => pendingQuery(headers));
};

// For Add Queue
const addQue = async (value, headers) => {
  return await axios.post(`${BASEURL}/queue/`, value, { headers });
};

export const MutateQue = () => {
  const queryClient = useQueryClient();
  return useMutation(addQue, {
    onSuccess: () => {
      queryClient.invalidateQueries("pending");
    },
  });
};

// For Queue History Data
const queueHistory = async (headers) => {
  const value = await axios.get(`${BASEURL}/queue/done`, { headers });
  return value.data;
};

export const GetHistory = () => {
  const headers = {
    Authorization: `Bearer ${validation}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };
  return useQuery(["history"], () => queueHistory(headers));
};

// For Sending Email
const sendEmail = async (notify, headers) => {
  return await axios.post(`${BASEURL}/queue/notify`, notify, { headers });
};

export const NotifyQuery = () => {
  const headers = {
    Authorization: `Bearer ${validation}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  return useMutation((notify) => sendEmail(notify, headers));
};

// For Update Queue Status
const queueStatus = async (value, headers) => {
  return await axios.put(`${BASEURL}/queue/`, value, { headers });
};

export const QueueStatus = () => {
  const queryClient = useQueryClient();
  const headers = {
    Authorization: `Bearer ${validation}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  return useMutation((value) => queueStatus(value, headers), {
    onSuccess: () => {
      queryClient.invalidateQueries("pending");
    },
  });
};

// For Register
const register = async (value, registerHeaders) => {
  return await axios.post(`${BASEURL}/auth/register`, value, {
    headers: registerHeaders,
  });
};

export const Register = () => {
  const queryClient = useQueryClient();
  return useMutation((value) => register(value, registerHeaders), {
    onSuccess: () => {
      queryClient.invalidateQueries("faculty");
    },
  });
};

//for Set limit queue
const setLimit = async (value) => {
  const headers = {
    Authorization: `Bearer ${validation}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };
  return await axios.post(`${BASEURL}/user/limit`, value, { headers });
};

export const SetLimit = () => {
  const queryClient = useQueryClient();
  return useMutation(setLimit, {
    onSuccess: () => {
      queryClient.invalidateQueries("faculty");
    },
  });
};

// For Status
const status = async (value, headers) => {
  return await axios.post(`${BASEURL}/user/status`, value, { headers });
};

export const Status = () => {
  const queryClient = useQueryClient();
  const headers = {
    Authorization: `Bearer ${validation}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  return useMutation((value) => status(value, headers), {
    onSuccess: () => {
      queryClient.invalidateQueries("faculty");
    },
  });
};

//For Logout
export const MutateLogout = async () => {
  const headers = {
    Authorization: `Bearer ${validation}`,
  };
  return await axios
    .post(`${BASEURL}/auth/logout`, null, {
      headers,
    })
    .then((res) => {
      sessionStorage.removeItem("access_token");
      sessionStorage.removeItem("auth");
    })
    .catch((err) => console.error(err));
};

