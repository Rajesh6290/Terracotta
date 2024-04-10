// components/Accordion.tsx
import Link from "next/link";
import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  icon?: JSX.Element;
}

const MenuCollapse: React.FC<AccordionProps> = ({ title, children, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" w-full flex flex-col">
      <div
        className="w-full  text-gray-800 cursor-pointer "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-full p-5 common-transition  capitalize font-semibold tracking-wide flex items-center justify-between
        ${isOpen
              ? " text-gray-600 rounded-t-xl  bg-white shadow-[0px_0px_6px_0px_#00000024] hover:bg-orange-500/10 "
              : "text-gray-600 rounded-xl  bg-white shadow-[0px_0px_6px_0px_#00000024] hover:bg-orange-500/10 "
            }
        `}
        >
          <div className=" flex items-center gap-5">
            {icon}
            {title}
          </div>

          {isOpen ? (
            <MdOutlineKeyboardArrowUp className=" text-xl text-gray-800 common-transition duration-500" />
          ) : (
            <MdOutlineKeyboardArrowDown className=" text-xl text-gray-800 common-transition duration-500" />
          )}
        </div>
        <div
          className={`animate-collapse grid common-transition ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] "
            }`}
        >
          <div className="overflow-hidden description text-sm md:text-base">
            <Link href="">
              <div className="group hover:text-primary flex items-center gap-1  p-4 hover:bg-orange-500/5  text-sm common-transition border border-t-0 rounded-b-xl  ">
                {children}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCollapse;
