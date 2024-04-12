import useSwr from "@/hooks/useSwr";
import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import AddressCard from "../cards/AddressCard";
interface AddressDetailsProps {
  orderSummaryOpen: boolean;
  addressOpen: boolean;
  setOrderSummaryOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAddressOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddressDetails = ({
  addressOpen,
  orderSummaryOpen,
  setOrderSummaryOpen,
  setAddressOpen,
  AllAddress,
  mutate,
  checkedAddress,
  setCheckedAddress
}: any) => {
  return (
    <div
      className="w-full bg-white h-full rounded 
    flex flex-col gap-2 justify-center  "
    >
      <div>
        <span
          onClick={() => setAddressOpen(true)}
          className="flex items-center justify-between w-full p-5 font-medium text-left border-b-2"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
        >
          <p className=" flex gap-2 items-center">
            <span className="font-semibold text-gray-800 uppercase">
              DELIVERY ADDRESS
            </span>
            {/* {
              checkAddress && (
                <BsCheck2 className=" text-2xl text-blue-500" />
              )
            } */}
          </p>
          {addressOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {addressOpen && (
        <div className=" w-full h-full  scroll  flex flex-col gap-2 p-1">
          {
            AllAddress?.map((item: any) => (
              <article className=" flex flex-col py-1">
                <div className=" flex gap-3 items-start p-2">
                  <input
                    onClick={() => {
                      setCheckedAddress(item?._id)
                    }}
                    type="radio"
                    name=""
                    id=""
                    checked={item?._id === checkedAddress}
                    className=" cursor-pointer w-6 h-6"
                  />

                  <AddressCard mutate={mutate} item={item} key={item?._id} />

                </div>

              </article>
            ))
          }
          {checkedAddress?.length > 0 && (
            <p className=" w-full flex items-center justify-end ">

              <span
                onClick={() => {
                  setOrderSummaryOpen(!orderSummaryOpen);
                  setAddressOpen(!addressOpen);
                }}
                className="rounded-md py-3  px-10 uppercase overflow-hidden relative group cursor-pointer border-2 font-medium bg-primary text-white"
              >
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gradient-to-r from-cyan-500 to-blue-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-white transition duration-300 group-hover:text-white ease font-semibold">
                  Deliver here
                </span>
              </span>
            </p>
          )}
          <hr />
        </div>
      )}
    </div>
  );
};

export default AddressDetails;

