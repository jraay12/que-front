import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <div className="flex flex-col gap-2 xxl:gap-6 ">
      <label className=" text-base font-normal  md:text-[15px] leading-3 xxl:text-4xl">
        {props.label}
      </label>
      <input
        className="rounded-xl xxl:rounded-full px-4 outline-none focus:border-blue py-3 border-[1px] xxl:py-9 xxl:text-4xl border-[#0000006f]"
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        ref={ref}
        required
      >
        {props.name}
      </input>
    </div>
  );
});

export default Input;
