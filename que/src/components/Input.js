import React from "react";

const Input = (props) => {
  return (
    <div className="flex flex-col gap-2 xxl:gap-6 ">
      <label className="font-bold text-xl ml-2 md:text-[15px] leading-3 xxl:text-4xl">
        {props.label}
      </label>
      <input
        className="rounded-3xl xxl:rounded-full px-4 py-3 border-2 xxl:py-9 xxl:text-4xl border-black"
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        required
      >
        {props.name}
      </input>
    </div>
  );
};

export default Input;
