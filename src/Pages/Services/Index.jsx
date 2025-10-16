import React from "react";
import Back from "../../assets/Services-Back.jpg";
import Background from "../../Components/Background/Index";
import Help from "../../Components/Help/Index";
import Customer from "../../Components/Customer/Index";
import Quote from "../../Components/Quote/Index";

const Services = () => {
  const Data = [
    {
      tittle: "Services",
      about: "Welcome to The Jix Digital Agency",
      message:
        "We offer a full suite of digital services including design, development, e-commerce, and strategic marketing. Let us craft a complete, custom solution to ensure your success.",
    },
  ];
  return (
    <>
      <div>
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
        <Help />
        <Customer />
        <Quote />
      </div>
    </>
  );
};

export default Services;
