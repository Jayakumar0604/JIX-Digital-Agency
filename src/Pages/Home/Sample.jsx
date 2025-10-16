import React from "react";
import S1 from "../../assets/logo-1.svg";
import S2 from "../../assets/logo-2.svg";
import S3 from "../../assets/logo-3.svg";
import S4 from "../../assets/logo-4.svg";

const Sample = () => {
  const Images = [
    { img: S1, text: "Hi How are you", btn: "Submit" },
    { img: S2, text: "hfkcmndncvdlk", btn: "Click" },
    { img: S3, text: "bejokldcbdjcbjjo", btn: "Press" },
    { img: S4, text: "jbckmll", btn: "Add" },
  ];
  return (
    <>
      <div className="grid grid-cols-4">
        {Images?.map((items, pic) => (
          <div key={pic} className="px-5 text-center place-items-center py-5">
            <img src={items.img} alt="" />
            {/* <h1 className="text-center">{items.text}</h1> */}
            <button className="border">{items.btn}</button>
            <a href={items.btn}>{items.text} </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sample;
