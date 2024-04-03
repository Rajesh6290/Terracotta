import Link from "next/link";
import React, { useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { HiMinusSmall, HiMiniPlusSmall } from "react-icons/hi2";
// import Swal from "sweetalert2";
interface PaymentProps {
  paymentOpen: boolean;
  setPaymentOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Payment: React.FC<PaymentProps> = ({
  paymentOpen,

  setPaymentOpen,
}) => {
  const [selectedOption, setSelectedOption] = useState("selectoptionhere");
  const [confirmPaymentOption, setConfirmPaymentOption] = useState(false);

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.id);
  };
  const handelOrderPlaced = async () => {
    // await Swal.fire({
    //   title: "Congrats! Your Order Placed",
    //   text: "Thank you for Shopping. Visit again!",
    //   icon: "success",
    //   confirmButtonText: "Okay",
    // }).then(() => {
    //   // Redirect to another page after clicking "OK"
    //   window.location.href = "/my-account/orders/id=#sh523nmnnb32mmb2n33dskBJDn"; // Replace with your desired URL
    // });
  };
  return (
    <div
      className="w-full bg-white h-full rounded 
    flex flex-col gap-2 justify-center  "
    >
      <div>
        <span
          onClick={() => setPaymentOpen(!paymentOpen)}
          className="flex items-center justify-between w-full p-5 font-medium text-left border-b-2"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
        >
          <p className=" flex gap-2 items-center">
            <span className="font-semibold text-gray-800 uppercase">
              Payment
            </span>
            {/* {confirmPaymentOption && (
              <BsCheck2 className=" text-2xl text-blue-500" />
            )} */}
          </p>
          {paymentOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {paymentOpen && (
        <div className="w-full h-full scroll flex flex-col gap-2 py-3 px-4">
          <span id="selectoptionhere">Select Payment option :</span>
          <span className="flex items-center gap-3">
            <input
              type="radio"
              name="paymentOption"
              id="onlinepayment"
              className="w-4 h-4"
              checked={selectedOption === "onlinepayment"}
              onChange={handleOptionChange}
              onClick={() => setConfirmPaymentOption(!confirmPaymentOption)}
            />
            <label htmlFor="onlinepayment" className="cursor-pointer">
              Online Payment
            </label>
          </span>
          <span className="flex items-center gap-3">
            <input
              type="radio"
              name="paymentOption"
              id="cod"
              className="w-4 h-4"
              checked={selectedOption === "cod"}
              onChange={handleOptionChange}
              onClick={() => setConfirmPaymentOption(!confirmPaymentOption)}
            />
            <label htmlFor="cod" className="cursor-pointer">
              Cash On Delivery
            </label>
          </span>
          <span className=" w-full flex justify-end">
            {/* <Link href="/my-account/my-order/id" className=" uppercase bg-orange-600 py-3 cursor-pointer px-5 text-white rounded">
            Confirm Order
          </Link> */}
            <p
              onClick={handelOrderPlaced}
              // href="/my-account/my-order/id"
              className="rounded-md py-3  px-10 uppercase overflow-hidden relative group cursor-pointer border-2 font-medium bg-primary text-white"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gradient-to-r from-cyan-500 to-blue-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-white transition duration-300 group-hover:text-white ease font-semibold">
                Confirm Order
              </span>
            </p>
          </span>
        </div>
      )}
    </div>
  );
};

export default Payment;
