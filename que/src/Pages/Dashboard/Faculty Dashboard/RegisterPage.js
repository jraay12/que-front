import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    const params = new URLSearchParams()
    params.append("name", name)
    params.append("email", email)
    params.append("password", password)
    params.append("position", position)
    params.append("profilePic", picture)

  };
  return (
    <div className="w-full min-h-full justify-center items-center flex flex-col gap-4">
      <div className="max-w-max min-h-[400px] xxl:min-h-[700px] flex flex-col justify-start">
        <h1 className="m-4 font-bold text-3xl xxl:text-5xl text-white">
          Register User
        </h1>
        <div className="w-full rounded-3xl h-full bg-gradient-to-r py-10 from-sky-400 to-sky-50">
          <form onSubmit={handleRegister}>
            <div className="flex flex-col ">
              <div className="flex max-w-full">
                <div className="m-4 w-full">
                  <Input label="Name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="m-4 w-full">
                  <Input label="Email" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
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
                  <Input label="Position" placeholder="Position" type="text" value={position} onChange={(e) => setPosition(e.target.value)}/>
                </div>
                <div className="m-4 w-full">
                  <Input label="Picture" type="file" value={picture} onChange={(e) => setPicture(e.target.value)}/>
                </div>
              </div>
              <div className="bg-blue hover:bg-opacity-30 text-left text-white w-[20%] m-4 xxl:text-5xl xxl:h-20 rounded-3xl h-10">
                <Button type="submit" buttonName="Register" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
