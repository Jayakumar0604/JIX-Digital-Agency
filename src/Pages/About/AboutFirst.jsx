import React from "react";

const AboutFirst = () => {
  const Data = [
    {
      Sno: "01.",
      Title: "Discover",
      About:
        "We analyze your brand, market, and goals to clearly understand project requirements and define the optimal path forward.",
    },
    {
      Sno: "02.",
      Title: "Define",
      About:
        "We establish a clear project scope and strategy, setting priorities and creating a detailed roadmap for measurable, successful outcomes.",
    },
    {
      Sno: "03.",
      Title: "Design",
      About:
        "We create an amazing, intuitive user experience (UX) and a visually stunning interface (UI) tailored to engage your target audience.",
    },
    {
      Sno: "04.",
      Title: "Develop",
      About:
        "Our expert team writes clean, scalable code using cutting-edge technology to build a fast, secure, and robust digital platform.",
    },
    {
      Sno: "05.",
      Title: "Deploy",
      About:
        "We meticulously test and seamlessly launch your new website, ensuring a smooth, secure, and flawless transition to live servers.",
    },
    {
      Sno: "06.",
      Title: "Deliver",
      About:
        "We provide ongoing support, training, and strategic insights to ensure your new digital solution consistently meets and exceeds your business goals.",
    },
  ];
  return (
    <>
      <div className="py-10">
        <h1 className=" text-2xl md:text-4xl text-center poppins-bold lg:text-[42px] text-[#2A2A56]">
          Our 6-D Process
        </h1>
        <div className="grid md:grid-cols-3 px-7 lg:px-15 py-5 gap-3">
          {Data?.map((items, Dt) => (
            <div key={Dt} className="px-10 lg:px-20">
              <h1 className="text-[#242a5610] text-[100px] poppins-bold">
                {items.Sno}
              </h1>
              <h2 className="text-[16px] md:text-[18px] pb-5 poppins-semibold lg:text-[20px]">
                {items.Title}
              </h2>
              <p className="text-[14px] lg:text[16px]">{items.About}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutFirst;
