import useMutation from "@/hooks/useMutation";
import { Dialog } from "@mui/material";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Congratulation from "../core/Congratulation";
import Button from "../core/Button";
import { useRouter } from "next/router";

const Payment = ({
  paymentOpen,
  setPaymentOpen,
  checkedAddress,
  item,
  totalAmount,
  totalSaleAmount,
  totalDiscount,
  totalQuantity
}: any) => {

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [selectedOption, setSelectedOption] = useState("selectoptionhere");
  const [confirmPaymentOption, setConfirmPaymentOption] = useState(false);
  const [response, setResponse] = useState<string>("");
  const { mutation, isLoading } = useMutation()
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
        try {
          const product = item?.map((pre: any) => {
            const amount = pre?.product?.price * pre?.quantity
            const saleAmount = pre?.product?.salePrice * pre?.quantity
            const discount = ((amount - saleAmount) / amount) * 100
            return {
              id: pre?.product?._id,
              name: pre?.product?.name,
              price: pre?.product?.price,
              discountPrice: pre?.product?.salePrice,
              quantity: pre?.quantity,
              totalPrice: amount,
              totalSalePrice: saleAmount,
              totalDiscount: Math.ceil(discount),
              color: pre?.product?.color,
              category: pre?.product?.category?.name,
              description: pre?.product?.description,
              image: pre?.product?.images?.[0]?.imageUrl
            }
          })
          const res = await mutation(`order`, {
            method: "POST",
            body: {
              product: product,
              amount: {
                totalAmount: totalAmount,
                totalSaleAmount: totalSaleAmount,
                discountAmount: totalAmount - totalSaleAmount,
                deliveryCharge: 0,
                discount: totalDiscount,
                totalQuantity: totalQuantity
              },
              address: checkedAddress

            },
            isAlert: true,
          })
          console.log(res)
          if (res?.status === 200) {
            setResponse(res?.results?.data?._id)
            setOrderConfirmed(true)
            setPaymentOpen(false)
            toast.success(res?.results?.msg)
          } else {
            toast.error(res?.results?.msg)
          }
        } catch (error) {
          toast.error(error instanceof Error)
        }
      }
    })
  };
  return (
    <>
      <Congratulations open={orderConfirmed} close={setOrderConfirmed} response={response} />
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

const Congratulations = ({ open, close, response }: any) => {
  const router = useRouter()
  return (
    <Dialog open={open} maxWidth="lg" PaperProps={{
      style: {
        borderRadius: 18, // Adjust the value according to your preference
      },
    }}>
      <div className="md:w-[34rem] w-full h-fit md:p-10 p-5 bg-white flex flex-col gap-5 items-center">
        <Congratulation />
        <p className="md:text-3xl text-lg font-semibold text-gray-900">Congrats! Your Order Placed...</p>
        <p className=" text-gray-600">Thank you for Shopping. Visit again!</p>
        <Button onClick={() => {
          close(false)
          router.push(`/my-account/orders/${response}`)
        }} className="px-6 py-1.5 text-lg font-semibold">
          Okay
        </Button>
      </div>
    </Dialog>
  )
}