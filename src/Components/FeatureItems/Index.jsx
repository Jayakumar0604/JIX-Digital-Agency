import React, { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const FeatureItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4  rounded-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-3  flex justify-between items-center"
      >
        <span className="text-[#242A56] text-[14px] md:text-[16px] font-semibold">{title}</span>
        <span className="text-xl">{isOpen ? <FaMinusCircle/> : <FaPlusCircle/>}</span>
      </button>
      {isOpen && (
        <div className="px-4 py-3 text-sm bg-gray-50 text-gray-700">
          {children}
        </div>
      )}
    </div>
  );
};

export default FeatureItem;