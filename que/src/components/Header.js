import React, { useState } from "react";
import { Status } from "../customHooks/axios";

const Header = () => {
  const [status, setStatus] = useState("");

  const { mutate: UserStatus } = Status();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStatus = event.target.value;
    setStatus(newStatus);
    const params = new URLSearchParams();
    params.append("status", newStatus);
    const value = params;
    UserStatus(value, {
      onSuccess: () => {
        console.log("success");
      },
    });
  };

  return (
    <div className="flex justify-end w-full h-10 bg-blue absolute z-10 items-center gap-2">
      <label className="font-bold text-sm text-white">Status</label>
      <form onSubmit={handleSubmit}>
        <div htmlFor="options">
          <select
            id="options"
            value={status}
            onChange={handleSubmit}
            className="w-full h-full rounded-2xl bg-blue text-white outline-none"
          >
            <option value=""></option>
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
            <option value="Present but not Available">
              Present but not Available
            </option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Header;