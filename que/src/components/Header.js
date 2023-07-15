import React, { useState } from "react";
import { Status } from "../customHooks/axios";

const Header = () => {
  const [status, setStatus] = useState("");

  const { mutate: UserStatus } = Status();

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();
    const newStatus = event.target.value;
    setStatus(newStatus);
    params.append("status", newStatus);
    const value = params;
    UserStatus(value);
  };

  return (
    <div className="absolute  z-10 flex h-10 w-full items-center justify-end gap-2 bg-newBlue xxl:h-20">
      <label className="text-sm font-bold text-white xxl:text-3xl">
        Status
      </label>
      <form onSubmit={handleSubmit}>
        <div htmlFor="options">
          <select
            id="options"
            value={status}
            onChange={handleSubmit}
            className="bg-ivory h-full w-full rounded-2xl text-black outline-none xxl:text-3xl"
          >
            <option value=""></option>
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Header;
