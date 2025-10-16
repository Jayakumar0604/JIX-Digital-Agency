import React from "react";
import Back from "../../assets/Home-Back.webp";
import { Link } from "react-router-dom";
import HomeFirst from "./HomeFirst";
import HomeThird from "./HomeThird";
import Help from "../../Components/Help/Index";
import Customer from "../../Components/Customer/Index";
import Quote from "../../Components/Quote/Index";

const Home = () => {
  return (
    <>
      <div className="relative w-full h-100 md:h-screen bg-[#f0eded] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Back})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#242a56]/70"></div>

          {/* Content */}
          <div className="relative z-10 flex   h-full px-10  text-black">
            {/* First */}
            <div className="text-white md:py-30 lg:py-10 text-center md:text-left  lg:px-10 md:pr-30 lg:w-1/2">
              <div className="py-5 md:py-20">
                <h1 className="text-5 md:text-xl py-2 poppins-regular">
                  Fastest And Most Lightweight WP Theme
                </h1>
                <h1 className="text-[28px] md:text-5xl py-2 poppins-semibold">
                  Create Amazing Business Websites
                </h1>
                <p className="md:pr-60 lg:pr-30 py-5 text-[14px] md:text-5">
                  Our Jix Digital Agency expertly creates amazing,
                  results-driven business websites. We build your powerful
                  online presence, driving growth and success.
                </p>
              </div>
              <Link
                to={"/"}
                className="uppercase bg-[#6878D6] hover:bg-blue-700 text-[13px] md:text-[14px] px-5 py-3 md:px-10 md:py-5 rounded-md"
              >
                Book A Meeting
              </Link>
            </div>

            {/* Second */}
            <div className="w-1/2 hidden lg:block "></div>
          </div>
        </div>
      </div>
      <Help />
      <HomeFirst />
      <Customer />
      <HomeThird />
      <Quote />
      {/* <Sample/> */}
    </>
  );
};

export default Home;
