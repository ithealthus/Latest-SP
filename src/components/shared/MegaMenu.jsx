// MegaMenu.jsx
import { useState } from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const MegaMenu = ({ type = "specialities", data = {}, label = "Menu" }) => {
  const [activeTab, setActiveTab] = useState("treatment");

  const currentItems =
    type === "specialities"
      ? activeTab === "treatment"
        ? data.treatment || []
        : data.department || []
      : data.items || [];

  return (
    <div className="absolute top-full left-0 w-full bg-[#FDF2F9] text-dark shadow-xl p-10 py-16 hidden group-hover:flex z-50 transition-all duration-300">
      {type === "specialities" ? (
        <>
          <div className="min-w-[300px] pr-6 border-r-2 border-[#94A0A3] space-y-4">
            <div
              onMouseEnter={() => setActiveTab("treatment")}
              className={`font-semibold flex justify-between items-center text-lg cursor-pointer ${
                activeTab === "treatment" ? "text-[#d4007f]" : "text-black"
              }`}
            >
              Treatment Services <IoIosArrowForward className="text-xl" />
            </div>
            <div
              onMouseEnter={() => setActiveTab("department")}
              className={`font-semibold flex justify-between items-center text-lg cursor-pointer ${
                activeTab === "department" ? "text-[#d4007f]" : "text-black"
              }`}
            >
              Departments <IoIosArrowForward className="text-xl" />
            </div>
          </div>

          <div className="pl-6">
            <div className="grid grid-rows-8 grid-flow-col gap-x-20 gap-y-6 w-full">
              {currentItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="text-base w-full text-gray-800 hover:text-primary hover:font-medium whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="min-w-[300px] pr-6 border-r-2 border-[#94A0A3] space-y-4">
            <div className="font-semibold flex justify-between items-center text-lg cursor-pointer text-[#d4007f]">
              {label} <IoIosArrowForward className="text-xl" />
            </div>
          </div>

          <div className="pl-6">
            <div className="grid grid-rows-8 grid-flow-col gap-x-20 gap-y-6 w-full">
              {currentItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="text-lg w-full text-gray-800 hover:text-primary hover:font-medium whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MegaMenu;
