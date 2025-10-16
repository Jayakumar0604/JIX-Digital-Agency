import React from "react";
import { Link } from "react-router-dom";

const Background = ({ Back, Title, About, Message }) => {
  return (
    <>
      {/* <div
        style={{ backgroundImage: `url(${Back})` }}
        className="w-full h-[420px] md:h-150 bg-cover bg-right md:bg-center flex items-end"
      ></div> */}
      <div className="relative w-full h-100 md:h-150 bg-[#f0eded] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Back})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#242a56]/70"></div>

          {/* Content */}
          <div className="relative z-10 flex justify-center items-center text-center text-white  h-full px-10">
            <div className="w-200">
              <h1 className="text-[28px] md:text-[40px] lg:text-5xl poppins-semibold">
                {Title}
              </h1>
              <h2 className="poppins-semibold text-[16px] md:text-[18px] lg:text-[20px] py-3 md:py-5">
                {About}
              </h2>
              <h3 className="text-[14px]  lg:text-[16px]  ">{Message}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
