import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

// For Register
const registerHeaders = {
  "Content-Type": "multipart/form-data",
};

// For Login
const facultyLogin = async (credentials) => {
  return await axios.post(
    `https://ustp-queueing-system.onrender.com/auth/login`,
    credentials
  );
};

export const MutateLogin = () => {
  return useMutation(facultyLogin);
};



// For Dashboard Data
const dashboardQuery = async () => {
  const value = await axios.get(
    "https://ustp-queueing-system.onrender.com/queue/count"
  );
  return value.data;
};

export const GetFaculty = () => {
  return useQuery(["faculty"], dashboardQuery);
};


// For reset Password

const resetPassword = async (value, headers) => {
  return await axios.post(
    `https://ustp-queueing-system.onrender.com/auth/resetPassword`,
    value,
    { headers }
  );
};

export const ResetPassword = () => {
  const queryClient = useQueryClient();
  const validation = sessionStorage.getItem("access_token");
  const headers = {
    Authorization: `Bearer ${validation}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };
  return useMutation((value) => resetPassword(value, headers), {
    onSuccess: () => {
      queryClient.invalidateQueries("faculty");
      console.log("success");
    },
  });
};

// For Pending Data
const pendingQuery = async (headers) => {
  const value = await axios.get(
    "https://ustp-queueing-system.onrender.com/queue/pending",
    { headers }
  );
  return value.data;
};

export const GetPending = () => {
  const validation = sessionStorage.getItem("access_token");
  const headers = {
    Authorization: `Bearer ${validation}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };
  return useQuery(["pending"], () => pendingQuery(headers), {
    refetchIntervalInBackground: true,
    refetchInterval: 2000,
  });
};


// For Add Queue
const addQue = async (value, headers) => {
  return await axios.post(
    `https://ustp-queueing-system.onrender.com/queue/`,
    value,
    { headers }
  );
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
  const value = await axios.get(
    "https://ustp-queueing-system.onrender.com/queue/done",
    { headers }
  );
  return value.data;
};

export const GetHistory = () => {
  const validation = sessionStorage.getItem("access_token");
  const headers = {
    Authorization: `Bearer ${validation}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };
  return useQuery(["history"], () => queueHistory(headers));
};

// For Sending Email
const sendEmail = async (notify, headers) => {
  return await axios.post(
    "https://ustp-queueing-system.onrender.com/queue/notify",
    notify,
    { headers }
  );
};

export const NotifyQuery = () => {
  const validation = sessionStorage.getItem("access_token");
  const headers = {
    Authorization: `Bearer ${validation}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  return useMutation((notify) => sendEmail(notify, headers));
};

// For Update Queue Status
const queueStatus = async (value, headers) => {
  return await axios.put(
    `https://ustp-queueing-system.onrender.com/queue/`,
    value,
    { headers }
  );
};

export const QueueStatus = () => {
  const queryClient = useQueryClient();
  const validation = sessionStorage.getItem("access_token");
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
  return await axios.post(
    `https://ustp-queueing-system.onrender.com/auth/register`,
    value,
    { headers: registerHeaders }
  );
};

export const Register = () => {
  const queryClient = useQueryClient();
  return useMutation((value) => register(value, registerHeaders), {
    onSuccess: () => {
      queryClient.invalidateQueries("faculty");
    },
  });
};

// For Status
const status = async (value, headers) => {
  return await axios.post(
    `https://ustp-queueing-system.onrender.com/user/status`,
    value,
    { headers }
  );
};

export const Status = () => {
  const queryClient = useQueryClient();
  const validation = sessionStorage.getItem("access_token");
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

// Clear Token
export const clearToken = () => {
  sessionStorage.removeItem("access_token");
  sessionStorage.removeItem("auth");
};
