import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { MutateLogin } from "../../customHooks/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate } = MutateLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    mutate(credentials, {
      onSuccess: () => {
        console.log("Success");
        navigate("/Faculty/CurrentQue");
      },
      onError: (error) => {
        console.error(error);
        console.log("Invalid password");
      },
    });
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex">
        <div className="h-screen w-[60%] bg-background bg-black"></div>
        <div className="h-screen w-[50%] flex justify-center items-center">
          <div className="min-h-[80%] w-[70%]">
            <div className="flex flex-col items-center gap-16">
              <h1 className="font-bold text-5xl text-blue">LOGIN</h1>
              <div className="w-full flex flex-col gap-5 text-blue">
                <form onSubmit={handleLogin}>
                  <div className="w-full flex flex-col gap-4">
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
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="w-20 h-10 rounded-lg flex justify-center  items-center font-bold bg-blue hover:bg-opacity-60 text-white text-lg py-2 mt-2">
                    <Button buttonName="Login" type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
