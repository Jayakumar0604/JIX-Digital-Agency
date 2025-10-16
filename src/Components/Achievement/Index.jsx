import React from "react";

const Achievement = () => {
  const Data = [
    {
      title: "Satisfied Clients",
      count: "87",
    },
    {
      title: "Projects Completed",
      count: "157",
    },
    {
      title: "Accolades Earned",
      count: "28",
    },
    {
      title: "Lines of Code",
      count: "56K+",
    },
  ];
  return (
    <>
      <div className="py-10  md:px-10 xl:flex bg-[#6878D6]/20">
        <div className="place-items-center text-center py-5">
          <div>
            <h1 className="text-[16px] md:text-[18px] pb-5 poppins-semibold lg:text-[20px]">
              Some Numbers
            </h1>
            <p className="text-[14px] lg:text-[16px] text-gray-800 mb-6">
              See the amazing results we have achieved for our clients.
            </p>
          </div>
        </div>
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-2 xl:grid-cols-4">
          {Data?.map((items, i) => (
            <div key={i} className="flex items-center gap-3 px-10">
              <h1 className="text-[35px] md:text-[40px] text-blue-800/70 pb-5 font-extrabold lg:text-[45px]">
                {items.count}
              </h1>
              <h1 className="text-[16px] md:text-[18px] pb-5  poppins-semibold lg:text-[20px]">
                {items.title}
              </h1>
            </div>
          ))}

          {/* <div className="flex items-center gap-2">
            <h1 className="text-[16px] md:text-[35px] text-blue-500 pb-5 font-extrabold lg:text-[45px]">
              56K+
            </h1>
            <h1 className="text-[16px] md:text-[18px] pb-5 poppins-semibold lg:text-[20px]">
              Line of Code
            </h1>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Achievement;
