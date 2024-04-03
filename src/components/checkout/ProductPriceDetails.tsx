import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ProductPriceDetails = () => {
  const [couponOpen, setCouponOpen] = useState(false);
  return (
    <div className="w-full h-full flex flex-col gap-10 pb-5">
      <p className="p-5 text-2xl font-semibold text-gray-500 border-b">
        PRICE DETAILS
      </p>

      <div className="flex flex-col gap-5 border-b-2 border-dashed pb-5">
        <p className=" w-full justify-between flex items-center px-5  text-gray-500">
          <span>{`Price (1 Items)`}</span>
          <span>₹461</span>
        </p>
        <p className=" w-full justify-between flex items-center px-5 text-[1rem] font-semibold text-green-600">
          <span>You Save</span>
          <span>₹138.00</span>
        </p>
        <p className=" w-full justify-between flex items-center px-5  text-gray-500">
          <span>Delivery Charges</span>
          <span>₹25</span>
        </p>
        <div
          className={`w-full justify-between flex items-center px-5 text-gray-500 cursor-pointer ${
            couponOpen ? "border-t border-dashed pt-3" : ""
          }`}
          onClick={() => setCouponOpen(!couponOpen)}
        >
          <div className="flex items-center gap-3">
            <p>Apply Coupon</p>
            <p>
              {couponOpen ? (
                <FaChevronUp className="text-gray-800 text-xs" />
              ) : (
                <FaChevronDown className="text-gray-800 text-xs" />
              )}
            </p>
          </div>
          <span>- ₹0</span>
        </div>
        {couponOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full px-4 animate-collapse ease-in-out duration-300"
          >
            <div className="border-2 rounded p-2 w-full flex gap-3 items-center">
              <input
                type="text"
                placeholder="Enter Voucher Code"
                className="w-full outline-none ring-1 ring-gray-300 rounded py-1.5 px-4 text-sm"
              />
              <p className="text-green-600 cursor-pointer">Apply</p>
            </div>
          </motion.div>
        )}
      </div>

      <div className=" w-full justify-between flex items-center px-5  text-gray-500">
        <p className="flex flex-col">
          <span className="text-gray-800">Wallet Balance</span>
          <span className=" text-blue-700">20:00</span>
        </p>

        <span className="rounded py-1 px-3 text-sm uppercase overflow-hidden relative group cursor-pointer  font-medium  border border-green-400 text-white">
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gradient-to-r from-cyan-500 to-green-400 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-green-400 transition duration-300 group-hover:text-white ease font-semibold">
            Apply
          </span>
        </span>
      </div>

      <p className=" w-full justify-between flex items-center px-5 text-lg font-semibold text-gray-800">
        <span>Total Amount</span>
        <span>₹486</span>
      </p>
    </div>
  );
};

export default ProductPriceDetails;
