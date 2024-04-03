import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsCheck2 } from "react-icons/bs";
import { FaAngleUp, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { HiMinusSmall, HiMiniPlusSmall } from "react-icons/hi2";

interface OrderSummaryProps {
  orderSummaryOpen: boolean;
  paymentOpen: boolean;
  setPaymentOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOrderSummaryOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  orderSummaryOpen,
  paymentOpen,
  setOrderSummaryOpen,
  setPaymentOpen,
}) => {
  return (
    <div
      className="w-full bg-white h-full rounded 
    flex flex-col gap-2 justify-center  "
    >
      <div>
        <span
          onClick={() => setOrderSummaryOpen(!orderSummaryOpen)}
          className="flex items-center justify-between w-full p-5 font-medium text-left border-b-2 "
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
        >
          <p className=" flex gap-2 items-center">
            <span className="font-semibold text-gray-800 uppercase">
              Order Summary
            </span>
            {/* {
              paymentOpen && (
                <BsCheck2 className=" text-2xl text-blue-500" />
              )
            } */}
            {/* <BsCheck2 className=" text-2xl text-blue-500" /> */}
          </p>
          {orderSummaryOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {orderSummaryOpen && (
        <div className=" w-full h-full  scroll flex flex-col gap-2 py-3">
          <article className=" w-full flex flex-col gap-3 items-start justify-start py-2 px-10">
            <div className=" flex gap-10 items-center pl-6">
              <span className="h-32 w-24 bg-slate-100 p-2">
                <img
                  src="/product/p1.webp"
                  className=" h-full w-full object-contain"
                  alt=""
                />
              </span>

              <span className=" flex flex-col gap-3">
                <p className="flex flex-col">
                  <span className="text-xl text-gray-800 font-semibold">
                    Wow Skin Face Mask
                  </span>
                  <span className="text-sm">ml: 200</span>
                </p>
                <p className="flex flex-col md:flex-row md:items-center gap-4">
                  <span className="text-sm line-through">₹599</span>
                  <span className="text-gray-800 font-semibold text-lg">
                    ₹461
                  </span>
                  <span className="text-center px-4 py-1 text-white bg-orange-600 rounded-md text-sm font-semibold">
                    23% Off
                  </span>
                </p>
                <p className=" font-semibold text-orange-600 uppercase cursor-pointer">
                  Remove
                </p>
              </span>
            </div>
            <div className="flex items-center gap-8 bg-slate-100 p-1 rounded-full">
              <HiMinusSmall className="p-2 bg-white rounded-full text-orange-600 text-4xl cursor-pointer" />
              <span>1</span>
              <HiMiniPlusSmall className="p-2 bg-white rounded-full text-orange-600 text-4xl cursor-pointer" />
            </div>
            <p className="w-full h-[0.11rem] bg-gray-300"></p>
            <p className=" w-full flex justify-end ">
              {/* <span
              onClick={()=>{
                setPaymentOpen(!paymentOpen)
                setOrderSummaryOpen(!orderSummaryOpen)

              }}
              className=" uppercase bg-orange-600 text-white px-5 py-2 rounded cursor-pointer">
                Continue
              </span> */}
              <span
                onClick={() => {
                  setPaymentOpen(!paymentOpen);
                  setOrderSummaryOpen(!orderSummaryOpen);
                }}
                className="rounded-md py-3  px-10 uppercase overflow-hidden relative group cursor-pointer border-2 font-medium bg-primary text-white"
              >
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gradient-to-r from-cyan-500 to-blue-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-white transition duration-300 group-hover:text-white ease font-semibold">
                  Continue
                </span>
              </span>
            </p>
          </article>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
