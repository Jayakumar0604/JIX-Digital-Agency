import React from "react";
import { Link } from "react-router-dom";

const Quote = () => {
  return (
    <>
      <div className="md:flex justify-between px-5 lg:px-10 py-10">
        <div className="md:py-10 md:w-200 lg:w-full md:px-10">
          <h1 className="text-[20px] md:text-[24px] lg:text-[28px] poppins-semibold text-[#6878D6]">
            Would you like to start a project with us?
          </h1>
          <h3 className="text-[14px] py-5 md:text-[16px]">
            Ready to build an amazing business website? Let Jix Digital Agency
            turn your vision into a reality. Contact us today to discuss your
            project and get started!
          </h3>
        </div>
        <div className="py-10 md:w-100 place-content-center  lg:px-10">
          <Link to={"/"} className="bg-[#6878D6] text-[13px] lg:text-[15px] px-10 py-4 rounded-md uppercase text-white hover:bg-blue-800">
            get a quote
          </Link>
        </div>
      </div>
    </>
  );
};

export default Quote;
