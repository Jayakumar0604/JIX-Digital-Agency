import React from "react";
import Background from "../../Components/Background/Index";
import Back from "../../assets/About-Back.webp";
import { FaCaretRight } from "react-icons/fa";
import AboutFirst from "./AboutFirst";
import AboutSecond from "./AboutSecond";
import Achievement from "../../Components/Achievement/Index";
import Quote from "../../Components/Quote/Index";

const About = () => {
  const Data = [
    {
      tittle: "About Us",
      about: "Welcome to The Jix Digital Agency",
      message:
        "We're a team of passionate web experts dedicated to building your success. We combine creative design, perfect development, and smart strategy to grow your business online.",
    },
  ];

  const Ques = [
    {
      tittle: "Who Are We",
      about:
        "We are the Jix Digital Agency, a dedicated team specializing in crafting amazing, high-performance business websites. We deliver strategic design and development focused solely on your measurable growth.",
    },
    {
      tittle: "Our Mission",
      about:
        "Our mission is to empower businesses with amazing, custom digital solutions. We blend cutting-edge technology with strategic design to ensure your online presence drives tangible success.",
    },
    {
      tittle: "What We Do",
      list: [
        "UI UX Design",
        "Website Development",
        "Marketing",
        "Social Media",
        "E-Commerce Store",
        "Tech Support",
      ],
    },
  ];
  return (
    <>
      {Data?.map((items, i) => (
        <div key={i}>
          <Background
            Back={Back}
            Title={items.tittle}
            About={items.about}
            Message={items.message}
          />
        </div>
      ))}
      <div className="grid md:grid-cols-3 gap-5 py-10 px-10 bg-[#e1e5f7]">
        {Ques?.map((items, i) => (
          <div key={i} className="py-5 bg-white px-5 lg:px-10">
            <span className="px-5 border-b-5 border-blue-500"></span>
            <h1 className="text-[#242A56] py-5 poppins-semibold text-[20px] md:text-2xl lg:text-[28px]">
              {items.tittle}
            </h1>
            {items.about && (
              <h2 className="text-[14px] pr-5 md:text-[16px]">{items.about}</h2>
            )}
            {items.list && (
              <ul className="mt-2">
                {items.list.map((service, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-blue-500">
                      <FaCaretRight />
                    </span>
                    <span className="ml-2">{service}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <AboutFirst/>
      <AboutSecond/>
      <Achievement/>
      <Quote />
    </>
  );
};

export default About;
