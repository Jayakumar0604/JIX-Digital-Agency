import React from "react";
import Form from "./Form";
import { FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { RiSmartphoneFill } from "react-icons/ri";

const ContactFirst = () => {
  const List = [
    {
      title: "Reach Us",
      list: [
        {
          Text: "123/B, Anna Salai, Near Old Bus Stand, Pudukkottai, Tamil Nadu 622001, India",
          Icon: <FaLocationDot />,
        },
        {
          Text: "admin.jix@gmail.com",
          Icon: <IoMail />,
        },
        {
          Text: "+91 22 4567 8901",
          Icon: <FaPhoneVolume />,
        },
        {
          Text: "+91 1234567890",
          Icon: <RiSmartphoneFill />,
        },
      ],
    },
  ];

  return (
    <div className="px-5 md:px-10 py-10 bg-gradient-to-t from-[#6161c2]/20 to-white">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Section: Form + Map */}
        <div className="flex-1">
          <h1 className="text-xl md:text-2xl lg:text-[28px] poppins-bold text-[#2A2A56]">
            Request Free Consultation
          </h1>

          <div className="flex flex-col lg:flex-row py-10">
            <div className="w-full lg:w-1/2">
              <Form />
            </div>

            <div className="w-full lg:w-1/2 h-[300px] lg:h-auto relative">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15697.925625386833!2d78.7898292445985!3d10.383286335879516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00782d25029679%3A0x4503e2d3b4a3897f!2sPudukkottai%2C%20Tamil%20Nadu%20622003%2C%20India!5e0!3m2!1sen!2sus!4v1760078208534!5m2!1sen!2sus"
                className="absolute top-0 left-0 w-full h-full rounded-md shadow-md"
                frameBorder="0"
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Info */}
        <div className="w-full px-10 lg:w-[400px]">
          <h1 className="text-xl md:text-2xl lg:text-[28px] poppins-bold text-[#2A2A56]">
            Get In Touch
          </h1>
          {List.map((item, i) => (
            <div key={i} className="py-10">
              <h2 className="text-[14px] text-[#2A2A56] md:text-[16px] pb-5 poppins-bold">
                {item.title}
              </h2>
              <ul className="space-y-5">
                {item.list.map((service, idx) => (
                  <li key={idx} className="flex items-center text-[#2A2A56]">
                    <p className="text-blue-500">{service.Icon}</p>
                    <span className="ml-2 text-[14px] lg:text-[16px]">
                      {service.Text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <h2 className="text-[14px] text-[#2A2A56] md:text-[16px] pb-5 poppins-bold">
            Call us Toll Free
          </h2>
          <span className=" text-[14px] poppins-bold text-blue-500 text-xl md:text-2xl lg:text-[28px]">
            1800-11-22-33
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactFirst;
