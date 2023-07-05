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
    <div className="flex justify-end w-full h-10 xxl:h-20 bg-blue absolute z-10 items-center gap-2">
      <label className="font-bold text-sm text-white xxl:text-3xl">
        Status
      </label>
      <form onSubmit={handleSubmit}>
        <div htmlFor="options">
          <select
            id="options"
            value={status}
            onChange={handleSubmit}
            className="w-full h-full rounded-2xl xxl:text-3xl bg-ivory text-black outline-none"
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
