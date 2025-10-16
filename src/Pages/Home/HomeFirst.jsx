import React from "react";
import { Link } from "react-router-dom";
import Client1 from "../../assets/Home-portfolio1.webp";
import Client2 from "../../assets/Home-portfolio2.webp";
import Client3 from "../../assets/Home-portfolio3.webp";
import Client4 from "../../assets/Home-portfolio4.webp";

const HomeFirst = () => {
  const Images = [
    { img: Client1 },
    { img: Client2 },
    { img: Client3 },
    { img: Client4 },
  ];
  return (
    <>
      <div className=" overflow-hidden">
        <div className="place-items-center py-10">
          <div>
            <div className="text-center ">
              <h1 className=" text-2xl md:text-4xl lg:text-[42px] text-[#2A2A56]">
                Portfolio
              </h1>
              <div className="text-[14px] px-5 md:px-40 lg:px-80 py-5 lg:text-5">
                <p>
                  Explore our diverse portfolio showcasing successful,
                  high-impact digital solutions we've crafted for clients across
                  various industries. See how Jix Digital Agency delivers
                  tangible results.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 px-10 py-5 gap-3">
              {Images?.map((items, i) => (
                <div key={i}>
                  <img src={items.img} alt="Our portfolio images" />
                </div>
              ))}
            </div>
            <div className="py-5 text-center">
              <Link
                to={"/"}
                className="uppercase text-[14px] lg:text-5 px-5 py-3 bg-[#6878D6] hover:bg-blue-700 text-white rounded-md"
              >
                explore more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFirst;
