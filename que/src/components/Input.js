import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <div className="flex flex-col gap-2 xxl:gap-6 ">
      <label className=" text-base font-normal  leading-3 md:text-[15px] xxl:text-4xl">
        {props.label}
      </label>
      <input
        className="rounded-xl border-[1px] border-[#0000006f] px-4 py-3 outline-none focus:border-blue xxl:rounded-full xxl:py-9 xxl:text-4xl"
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
