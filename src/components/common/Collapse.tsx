import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/router";

interface Props {
  isFull: boolean;
  children: React.ReactNode;
  title?: string;
  icon?: React.ReactElement;
  customClass?: string;
  data?: any;
}

const Collapse = ({
  isFull,
  children,
  title,
  icon,
  customClass,
  data,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const updateIsOpen = () => {
    const newIsOpen =
      data?.route === router?.asPath ||
      data?.submenus?.some(
        (subItem: any) => subItem.route === router?.asPath
      ) ||
      false;
    setIsOpen(newIsOpen);
  };

  useEffect(() => {
    updateIsOpen();
  }, [data?.route, data?.submenus, router?.asPath]);

  return (
    <div
      className={`w-full flex flex-col relative ${
        data?.link === router?.asPath
          ? "bg-white text-black"
          : isOpen
          ? `bg-primary/5  text-primary rounded-lg`
          : "text-gray-500  hover:bg-primary/5 duration-300 rounded-lg py-1"
      } `}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center  cursor-pointer justify-between  p-2"
      >
        <div className=" flex items-center gap-5">
          <p className=" text-primary flex items-center justify-center">
            {icon}
          </p>
          {isFull ? null : <p className="font-medium">{title}</p>}
        </div>
        {isFull ? null : (
          <IoIosArrowDown
            className={`   ${
              isOpen ? " -rotate-180 duration-300" : "duration-300"
            }`}
          />
        )}
      </div>
      <div className={`content-container ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
