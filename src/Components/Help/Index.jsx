import React from 'react'
import {
  FaRegCreditCard,
  FaRegEdit,
  FaRegLightbulb,
  FaRegObjectGroup,
  FaRegPaperPlane,
} from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Help = () => {
    const Data = [
        {
          Icon: <FaRegEdit />,
          Title: "Design",
          About:
            " We deeply understand your users and business to build intuitive, efficient, and cohesive digital services that truly work.",
        },
        {
          Icon: <FaRegObjectGroup />,
          Title: "Development",
          About:
            " We use modern, robust technology to code your website perfectly, ensuring it is fast, secure, and ready to scale for the future.",
        },
        {
          Icon: <FaRegPaperPlane />,
          Title: "Marketing",
          About:
            " We craft targeted digital marketing strategies—including SEO and content—to boost your visibility and drive quality traffic and conversions.",
        },
        {
          Icon: <FaRegLightbulb />,
          Title: "Social Media",
          About:
            "We develop engaging social strategies to build your brand community, drive interaction, and turn followers into loyal, paying customers. ",
        },
        {
          Icon: <FaRegCreditCard />,
          Title: "E-Commerce",
          About:
            " We build secure, optimized online stores with seamless user experiences designed to maximize your sales and profitability.",
        },
        {
          Icon: <FaRegCircleUser />,
          Title: "Helps & Support",
          About:
            "We provide fast, reliable technical support and on-demand assistance to ensure your website is always running smoothly.",
        },
      ];
  return (
    <>
      <div className="bg-[#5c6396]/20 py-10 overflow-hidden">
        <div className="place-items-center py-10">
          <div className="text-center w-100 md:w-150 lg:w-200">
            <h1 className=" text-2xl md:text-4xl lg:text-[42px] text-[#2A2A56]">
              How can we help you?
            </h1>
            <div className="text-[14px] px-10 py-5 lg:text-5">
              <p>
                We design and build powerful, custom websites for Jix Agency.
                Let us define your brand's presence, attract customers, and
                drive tangible business growth with a digital solution tailored
                for success.
              </p>
            </div>
            <div className="py-5">
              <Link
                to={"/"}
                className="uppercase text-[14px] lg:text-5 px-5 py-3 bg-[#6878D6] hover:bg-blue-700 text-white rounded-md"
              >
                book a meeting
              </Link>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-5 pt-0 py-10 lg:px-20">
          {Data?.map((items, i) => (
            <div key={i} className="bg-white px-10 p-5 md:p-10">
              <h1 className="text-2xl md:text-4xl pb-4 text-blue-500">
                {items.Icon}
              </h1>
              <h1 className="poppins-semibold text-5 md:text-[20px] pb-5">
                {items.Title}
              </h1>
              <p className="text-[14px] md:text-5">{items.About}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Help