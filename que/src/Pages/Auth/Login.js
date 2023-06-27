import React, { useState, useContext } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { MutateLogin } from "../../customHooks/axios";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/Logo.png";
import AuthContext from "../../context/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate } = MutateLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    mutate(credentials, {
      onSuccess: (data) => {
        const access_token = data.data.accessToken;
        sessionStorage.setItem("access_token", access_token);
        console.log(access_token)
        const authName = data.data.user.name
        // const authEmail = data.data.user.email
        // const authPosition = data.data.user.position
        const id = data?.data?.user._id
        setAuth({email, password, id, authName})
        navigate("/Faculty/PendingQueue");
      },
      onError: (error) => {
        console.error(error);
        console.log("Invalid password");
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
              <h1 className="xxl:text-4xl">Forgot Password</h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
