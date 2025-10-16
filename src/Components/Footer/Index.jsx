import React from "react";
import logo from "../../assets/Header-logo.png";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const Icon = [
    { id: 1, name: <FaFacebook />, link: "/" },
    { id: 2, name: <FaTwitter />, link: "/" },
    { id: 3, name: <FaGoogle />, link: "/" },
    { id: 4, name: <FaInstagram />, link: "/" },
    { id: 5, name: <FaLinkedin />, link: "/" },
  ];

  const Nav = [
    {
      title: "Company",
      N1: "Home",
      N2: "About",
      N3: "Services",
      N4: "Contact",
    },
    {
      title: "Business",
      N1: "Project",
      N2: "Our Team",
      N3: "Facts",
      N4: "Customers",
    },
  ];
  return (
    <>
      <div className="bg-[#242a56] grid  md:gap-5 lg:gap-3 grid-cols-1  border-b border-[#e6e6e691] md:grid-cols-2 lg:grid-cols-4 px-10 py-10 lg:py-20 text-white">
        <div className=" w-full flex flex-col   lg:px-10">
          <div className="w-[83px] items-center lg:w-[120px] py-[16px]">
            <img src={logo} alt="Website Logo" />
          </div>
          <div>
            <p className="text-[14px] w-full px-0.5 md:text-5">
              Jix Agency is your partner in building exceptional websites. We
              craft digital experiences that drive results for you.
            </p>
          </div>
          <div>
            <h1 className="flex">
              {Icon?.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="px-[10px] py-[10px] rounded-[100px]"
                >
                  {item.name}
                </a>
              ))}
            </h1>
          </div>
        </div>
        {Nav?.map((items, i) => (
          <div className="py-1 px-2 md:px-0 md:py-6 w-full" key={i}>
            <h1 className="text-[20px] poppins-semibold md:text-[22px] pb-[18px] md:pb-[22px]">
              {items.title}
            </h1>
            <div className="text-[14px] flex flex-col  md:text-[16px]">
              <a href="/">{items.N1}</a>
              <a href="About">{items.N2}</a>
              <a href="Services">{items.N3}</a>
              <a href="Contact">{items.N4}</a>
            </div>
          </div>
        ))}

        <div className="py-1 px-2 md:px-0 md:py-6 w-full">
          <h1 className="text-[20px] poppins-semibold md:text-[22px] pb-[18px] md:pb-[22px]">
            Get In Touch
          </h1>
          <div className="text-[14px] flex flex-col  md:text-[16px]">
            <h1>SH 210, Old Bus Stand, Pudukkottai</h1>
            <span>jayakumar@gmail.com</span>
            <h1>04371-245 678</h1>
            <h1>+91-4322-263748</h1>
          </div>
        </div>
      </div>
      <div className="bg-[#242a56] text-[14px] lg:text-[16px] text-center text-white py-5 md:py-10">
        <p className="px-15">Copyright &copy; 2025 Jix Agency | Powered by Jix Digital Agency</p>
      </div>
    </>
  );
};

export default Footer;
