import React from "react";

const Container = (props) => {
  return (
    <div
      className="container inset-0 flex h-[450px] flex-col items-center justify-center rounded-3xl border-[1px] border-black bg-white text-left hover:cursor-pointer xxl:min-h-[600px] "
      onClick={props.onClick}
    >
      <img
        src={props.image}
        className="mb-10 h-32 w-32 rounded-full border-2 xxl:h-52 xxl:w-52"
      />
      <div className="flex flex-col justify-start gap-6">
        <div>
          <h1 className="text-lg font-bold xxl:text-4xl ">{props.name}</h1>
          <h1 className=" text-md xxl:text-2xl">
            <span className="font-bold ">Position</span> : {props.position}
          </h1>
        </div>
        <h1 className={`${props.className} text-md xxl:text-2xl `}>
          <span className="font-bold text-black">Status</span> : {props.status}
        </h1>
        <h1 className=" text-md xxl:text-2xl">
          <span className="font-bold ">Priority Number</span> :{" "}
          {props.latestPriorityNumber}
        </h1>
        <h1 className=" text-md xxl:text-2xl">
          <span className="font-bold ">Current Queue Count</span> :{" "}
          {props.count}
        </h1>
        <h1 className=" text-md xxl:text-2xl">
          <span className="font-bold ">Queue Limit</span> : {props.limit}
        </h1>
      </div>
    </div>
  );
};

export default Container;
