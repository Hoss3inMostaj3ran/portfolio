import React from "react";
import motion from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <div className="relative flex justify-center items-center ">
      <div className="absolute border border-gray-500 rounded-full w-60 h-60 md:w-64 md:h-64 xl:w-72 xl:h-72 mt-52 animate-ping"></div>
      <div className="absolute border border-gray-600 rounded-full w-64 h-64 md:w-68 md:h-68 xl:w-75 xl:h-75 mt-52 animate-ping"></div>
      <div className="absolute border border-gray-700 rounded-full w-72 h-72 md:w-74 md:h-74 xl:w-78.5 xl:h-78.5 mt-52 animate-ping"></div>
      <div className="absolute border border-[#f7ab0a] opacity-20 rounded-full w-[29.4rem] h-[29.4rem] md:w-[32rem] md:h-[32rem] xl:w-[36rem] xl:h-[36rem] mt-52 animate-pulse"></div>
      <div className="absolute border border-gray-700 rounded-full w-[28rem] h-[28rem] md:w-[30rem] md:h-[30rem] xl:w-[33.5rem] xl:h-[33.5rem] mt-52 animate-pulse"></div>
    </div>
  );
};

export default BackgroundCircles;
