import React from "react";

const Container = (props) => {
  return (
    <div
      className="container bg-white rounded-3xl inset-0 text-left flex flex-col justify-center items-center h-[400px] xxl:min-h-[600px] hover:cursor-pointer "
      onClick={props.onClick}
    >
      <img
        src={props.image}
        className="h-32 w-32 xxl:h-52 xxl:w-52 border-2 mb-10 rounded-full"
      />
      <div className="flex flex-col justify-start gap-6">
        <div>
          <h1 className="font-bold text-lg xxl:text-4xl ">{props.name}</h1>
          <h1 className=" text-md xxl:text-2xl">
            <span className="font-bold ">Position</span> : {props.position}
          </h1>
        </div>
        <h1 className=" text-md xxl:text-2xl">
          <span className="font-bold ">Status</span> : {props.status}
        </h1>
        <h1 className=" text-md xxl:text-2xl">
          <span className="font-bold ">Current Queue</span> : {props.count}
        </h1>
      </div>
    </div>
  );
};

export default Container;
