import React from "react";
import Back from "../../assets/Contact-Back.webp";
import Background from "../../Components/Background/Index";
import ContactFirst from "./ContactFirst";
import Quote from "../../Components/Quote/Index";

const Contact = () => {
  const Data = [
    {
      tittle: "Contact",
      about: "Contact for Premium Business Services",
      message:
        "Ready to start your amazing project? Reach out to Jix Digital Agency today. Let's discuss your vision and build your online future together.",
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
      <ContactFirst/>
      <Quote/>
    </>
  );
};

export default Contact;
