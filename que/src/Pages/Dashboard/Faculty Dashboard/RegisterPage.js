import React, { useState, useRef, useEffect } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Register } from "../../../customHooks/axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  const { mutate: RegisterUser } = Register();

  const handleRegister = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("position", position);
    formdata.append("profilePic", picture);

    const value = formdata;
    RegisterUser(value, {
      onSuccess: async () => {
        toast.success("Registered Successfuly", {
          autoClose: 1000,
          theme: "dark",
        });
        setTimeout(() => {
          navigate("/Faculty/PendingQueue");
        }, 2000);
      },
      onError: (err) => {
        console.error(err);
      },
    });
  };
  return (
    <div className="w-full min-h-full justify-center items-center flex flex-col gap-4">
      <div className="max-w-max min-h-[400px] xxl:min-h-[700px] flex flex-col justify-start">
        <h1 className="m-4 font-bold text-3xl xxl:text-5xl text-white">
          Register User
        </h1>
        <div className="w-full rounded-3xl h-full bg-white">
          <form onSubmit={handleRegister} encType="multipart/form-data">
            <div className="flex flex-col ">
              <div className="flex max-w-full">
                <div className="m-4 w-full">
                  <Input
                    ref={inputRef}
                    label="Name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="m-4 w-full">
                  <Input
                    label="Email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mx-4">
                <Input
                  label="Password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="max-w-full flex">
                <div className="m-4 w-full">
                  <Input
                    label="Position"
                    placeholder="Position"
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                  />
                </div>
                <div className="m-4 w-full">
                  <Input
                    label="Picture"
                    type="file"
                    onChange={(e) => setPicture(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="bg-blue hover:bg-opacity-30 text-left text-white w-[20%] m-4 xxl:text-5xl xxl:h-20 rounded-3xl h-10">
                <Button type="submit" buttonName="Register" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterPage;
