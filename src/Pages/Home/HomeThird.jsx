import React from "react";
import Partner1 from "../../assets/Owner.png";
import Partner2 from "../../assets/Director.png";
import Partner3 from "../../assets/Hr.png";
import { Link } from "react-router-dom";

const HomeThird = () => {
  const Images = [
    {
      name: "Indhumathi",
      role: "Founder",
      img: Partner1,
    },
    {
      name: "Jayakumar",
      role: "Director",
      img: Partner2,
    },
    {
      name: "Sathya",
      role: "Manager",
      img: Partner3,
    },
  ];
  return (
    <>
      <div className="bg-linear-to-t from-[#6161c2]/30 to-white">
        <div className="place-items-center py-10">
          <div>
            <div className="text-center ">
              <h1 className=" text-2xl md:text-4xl lg:text-[42px] text-[#2A2A56]">
                Meet Our Leadership
              </h1>
              <div className="text-[14px] px-5 md:px-40 lg:px-80 py-5 lg:text-5">
                <p>
                  Our core team comprises experienced digital strategists and
                  creative experts. They guide Jix Agency with a clear vision,
                  ensuring every project delivers innovative design and
                  exceptional results.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 px-10 py-5 gap-3">
              {Images?.map((items, i) => (
                <div className="text-center" key={i}>
                  <img
                    src={items.img}
                    className="py-3"
                    alt="Our partner images"
                  />
                  <h1 className="text-[16px] poppins-semibold  md:text-[20px]">
                    {items.name}
                  </h1>
                  <h2 className="text-[14px] md:text-[16px]">{items.role}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeThird;
