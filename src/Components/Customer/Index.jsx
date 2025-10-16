import React from "react";
import Client1 from "../../assets/logo-1.svg";
import Client2 from "../../assets/logo-2.svg";
import Client3 from "../../assets/logo-3.svg";
import Client4 from "../../assets/logo-4.svg";
import CLient5 from "../../assets/b3.webp";

const Customer = () => {
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
                Our Customers
              </h1>
              <div className="text-[14px] px-5 md:px-40 lg:px-80 py-5 lg:text-5">
                <p>
                  We partner with diverse businesses—from ambitious startups to
                  established enterprises. See the success stories and real
                  results Jix Digital Agency has delivered for clients like you.
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
          </div>
        </div>
      </div>
      <div className="bg-[#5c6396]/20 w-full py-10 overflow-hidden">
        <div className="place-items-center ">
          <div className="text-center w-100 md:w-150 lg:w-200">
            <h1 className=" text-[20px] px-5 md:text-[28px] poppins-semibold lg:text-[42px] text-[#2A2A56]">
              "Amazing Designs and Quality Work!"
            </h1>
            <div className="text-[15px] px-10 py-5 lg:text-[18px">
              <p>
                Jix Agency transformed our online presence quickly and
                efficiently. Their team delivered an amazing website design that
                exceeded expectations, backed by truly high-quality development
                work. We highly recommend their expert services!
              </p>
            </div>
          </div>
          <div className="py-5 space-y-2 px-5 place-items-center text-center">
            <div>
              <img
                src={CLient5}
                alt="Customer Image"
                className="w-20 rounded-full"
              />
            </div>
            <h1 className="text-[14px] md:text-[16px] font-semibold">
              Jhone Doe
            </h1>
            <h2 className="uppercase text-[13px]">ceo, acme inc.</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
