import React from "react";
import { FaStar } from "react-icons/fa6";

const CustomerRatings = () => {
  return (
    <form action="#" className="flex flex-col gap-2 justify-center px-5">
      <div className="flex gap-3 items-center ">
        <input type="checkbox" name="" id="4*" className=" w-4 h-4" />
        <label
          htmlFor="4*"
          className="flex items-center gap-1 cursor-pointer text-sm"
        >
          4 <FaStar className=" text-amber-400 text-sm" /> & above
        </label>
      </div>
      <div className="flex gap-3 items-center ">
        <input type="checkbox" name="" id="3*" className=" w-4 h-4" />
        <label
          htmlFor="3*"
          className="flex items-center gap-1 cursor-pointer text-sm"
        >
          3 <FaStar className=" text-amber-400 text-sm" /> & above
        </label>
      </div>
      <div className="flex gap-3 items-center ">
        <input type="checkbox" name="" id="2*" className=" w-4 h-4" />
        <label
          htmlFor="2*"
          className="flex items-center gap-1 cursor-pointer text-sm"
        >
          2 <FaStar className=" text-amber-400 text-sm" /> & above
        </label>
      </div>
      <div className="flex gap-3 items-center ">
        <input type="checkbox" name="" id="1*" className=" w-4 h-4" />
        <label
          htmlFor="1*"
          className="flex items-center gap-1 cursor-pointer text-sm"
        >
          1 <FaStar className=" text-amber-400 text-sm" /> & above
        </label>
      </div>
      <div className="flex gap-3 items-center ">
        <input type="checkbox" name="" id="0*" className=" w-4 h-4" />
        <label
          htmlFor="0*"
          className="flex items-center gap-1 cursor-pointer text-sm"
        >
          0 <FaStar className=" text-amber-400 text-sm" /> & above
        </label>
      </div>
    </form>
  );
};

export default CustomerRatings;
