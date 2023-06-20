import React from "react";

const Container = (props) => {
  return (
    <div
      className="container bg-white rounded-3xl inset-0 text-left flex justify-center items-center h-[300px] xxl:min-h-[400px] hover:cursor-pointer "
      onClick={props.onClick}
    >
      <img src={props.image} />
      <div className="flex flex-col justify-start">
        <h1 className="font-bold text-lg xxl:text-4xl ">{props.name}</h1>
        <h1 className=" text-md ">
          <span className="font-bold">Position</span> : {props.position}
        </h1>
      </div>
    </div>
  );
};

export default Container;
