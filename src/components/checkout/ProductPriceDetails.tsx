import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ProductPriceDetails = ({ totalAmount, totalSaleAmount, totalDiscount, allCart }: any) => {


  return (
    <div className="w-full h-full flex flex-col gap-10 pb-5">
      <p className="p-5 text-2xl font-semibold text-gray-500 border-b">
        PRICE DETAILS
      </p>

      <div className="flex flex-col gap-5 border-b-2 border-dashed pb-5">
        <p className=" w-full justify-between flex items-center px-5  text-gray-500">
          <span>{`Price (${allCart?.length} Items)`}</span>
          <span>₹{totalAmount}</span>
        </p>
        <p className=" w-full justify-between flex items-center px-5 text-[1rem] font-semibold text-green-600">
          <span>You Save</span>
          <span>₹{totalAmount - totalSaleAmount}</span>
        </p>
        <p className=" w-full justify-between flex items-center px-5  text-gray-500">
          <span>Delivery Charges</span>
          <span>Free</span>
        </p>
        {/* <div
          className={`w-full justify-between flex items-center px-5 text-gray-500 cursor-pointer ${couponOpen ? "border-t border-dashed pt-3" : ""
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
          <span>- ₹{couponAmount?.amount}</span>
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
                type="number"
                placeholder="Enter Voucher Code"
                className="w-full outline-none ring-1 ring-gray-300 rounded py-1.5 px-4 text-sm"
                onChange={(e) => setCouponValue(e?.target?.value)}
              />
              <p onClick={operation} className="text-green-600 cursor-pointer">Apply</p>
            </div>
          </motion.div>
        )} */}
      </div>



      <p className=" w-full justify-between flex items-center px-5 text-lg font-semibold text-gray-800">
        <span>Total Amount</span>
        <span>₹{totalSaleAmount}</span>
      </p>
    </div>
  );
};

export default ProductPriceDetails;
