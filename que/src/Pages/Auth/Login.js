import React, { useState, useContext } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {
  MutateLogin,
  ResetPassword,
} from "../../customHooks/axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [modal, setModal] = useState(false);
  const { mutate: Reset } = ResetPassword();
  const { mutate } = MutateLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    mutate(credentials, {
      onSuccess: (data) => {
        const access_token = data.data.accessToken;
        sessionStorage.setItem("access_token", access_token);
        const authName = data.data.user.name;
        const limit = data.data.user.queueLimit
        const profilePic = data.data.user.profilePic
        // const authEmail = data.data.user.email
        // const authPosition = data.data.user.position
        const id = data?.data?.user._id;
        setAuth({ email, password, id, authName, profilePic, limit});
        navigate("/Faculty/PendingQueue");
      },
      onError: async () => {
        toast.error("Invalid Credentials", {
          autoClose: 1000,
          theme: "dark",
        });
      },
    });
  };

  const handleReset = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append("email", email);
    params.append("password", newPassword);
    const value = params;

    Reset(value, {
      onSuccess: async () => {
        toast.success("Password Change successfully", {
          autoClose: 1000,
          theme: "dark",
        });
        setModal(false);
      },
      onError: async () => {
        toast.error("Email doesnt exist", {
          autoClose: 1000,
          theme: "dark",
        });
      },
    });
  };
  return (
    <div className="flex justify-center items-center min-h-screen h-screen min-w-max bg-gradient-to-l from-white via-cyan-300 to-cyan-400">
      <div className="flex min-w-[90%] max-w-full rounded-3xl h-[80%] shadow-2xl drop-shadow-2xl shadow-blue bg-white">
        <div className="w-full min-h-full rounded-l-3xl bg-background bg-no-repeat bg-cover"></div>
        <div className="flex flex-col xxl:gap-52 gap-20 justify-center items-center w-full min-h-full rounded-r-3xl bg-slate-300">
          <h1 className="font-black text-blue text-4xl xxl:text-8xl">
            QUEUE SYSTEM
          </h1>
          {modal ? (
            <form onSubmit={handleReset}>
              <div className="flex w-[400px] xxl:w-[1000px] font-medium  flex-col gap-2">
                <Input
                  label="Email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                  label="New Password"
                  type="password"
                  value={newPassword}
                  placeholder="New Password"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <div className="flex gap-10">
                  <div className="w-full h-10 xxl:h-20 xxl:text-4xl rounded-lg  flex justify-center items-center font-bold bg-blue hover:bg-opacity-60 text-white text-lg xxl:mt-10 mt-2">
                    <Button buttonName="Reset Password" type="submit" />
                  </div>
                  <div className="w-full h-10 xxl:h-20 xxl:text-4xl rounded-lg  flex justify-center items-center font-bold bg-red-700 hover:bg-opacity-60 text-white text-lg xxl:mt-10 mt-2">
                    <Button
                      buttonName="Cancel"
                      type="submit"
                      onClick={() => setModal(false)}
                    />
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <form onSubmit={handleLogin}>
              <div className="flex w-[400px] xxl:w-[1000px] font-medium  flex-col gap-4">
                <Input
                  label="Email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  label="Password"
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="w-full h-10 xxl:h-20 xxl:text-4xl rounded-lg  flex justify-center items-center font-bold bg-blue hover:bg-opacity-60 text-white text-lg xxl:mt-10 mt-2">
                  <Button buttonName="Login" type="submit" />
                </div>
                <div className="w-full flex flex-col items-start">
                  <button
                    className="xxl:text-4xl hover:text-red-600"
                    onClick={() => setModal(true)}
                  >
                    Forgot Password?
                  </button>
                  <button
                    className="xxl:text-4xl hover:text-blue"
                    onClick={() => navigate("/Dashboard")}
                  >
                    Guest or Student?
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
