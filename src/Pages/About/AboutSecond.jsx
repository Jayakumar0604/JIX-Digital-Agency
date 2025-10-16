import React from "react";
import Back from "../../assets/AboutBack-2.webp";
import FeatureItem from "../../Components/FeatureItems/Index";

const AboutSecond = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 bg-[#6878D6]/20">
        <div className="relative w-full h-100 md:h-150 bg-[#f0eded] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${Back})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#242a56]/70"></div>
          </div>
        </div>
        <div className="px-10 py-10 ">
          <h1 className="text-[#242A56] py-5 poppins-semibold text-[20px] md:text-2xl lg:text-[28px]">
            Why Choose Us?
          </h1>
          <p className="text-[14px] lg:text-[16px] text-gray-800 mb-6">
            We provide amazing, custom web solutions with clear strategy,
            ensuring your project is delivered perfectly, every time.
          </p>

          {/* Expandable Features */}
          <div className="bg-white px-5 py-5">
            <FeatureItem title="Best Quality Designs">
              We commit to building websites with the highest standards of
              quality, ensuring your platform is flawless, reliable, and
              durable.
            </FeatureItem>
            <FeatureItem title="24x7 Live Support">
              Our team offers round-the-clock technical support and immediate
              assistance, ensuring your website is always running smoothly and
              optimally.
            </FeatureItem>
            <FeatureItem title="Result Oriented Projects">
              Every project we undertake is focused on measurable results,
              designed to directly boost your business growth and success.
            </FeatureItem>
            <FeatureItem title="Award Winning Support Team">
              You get exceptional service from our award-winning support team,
              dedicated to providing fast and effective solutions when you need
              them.
            </FeatureItem>
            <FeatureItem title="Best ROI Techniques">
              We implement proven, strategic techniques designed to give you the
              maximum Return on Investment, ensuring profitable digital spend.
            </FeatureItem>
            <FeatureItem title="Experienced Professionals">
              Our agency is powered by seasoned, creative professionals who
              bring years of expertise to guarantee amazing project delivery.
            </FeatureItem>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSecond;
