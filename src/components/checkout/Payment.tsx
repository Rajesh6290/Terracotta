import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Swal from "sweetalert2";

const Payment = ({
  paymentOpen,

  setPaymentOpen,
  setOrderConfirmed
}: any) => {
  const [selectedOption, setSelectedOption] = useState("selectoptionhere");
  const [confirmPaymentOption, setConfirmPaymentOption] = useState(false);

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.id);
  };
  const handelOrderPlaced = async () => {
    await Swal.fire({
      title: "Confirmations !",
      text: "Are you sure you want to order ...",
      icon: "info",
      confirmButtonText: "Yes, order",
    }).then(async (results) => {
      if (results.isConfirmed) {
        setOrderConfirmed(true)
        setPaymentOpen(false)
      }
    })
  };
  return (
    <>
      <div
        className="w-full bg-white h-full rounded 
    flex flex-col gap-2 justify-center  "
      >
        <div>
          <span
            // onClick={() => setPaymentOpen(!paymentOpen)}
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
    </>
  );
};

export default Payment;

