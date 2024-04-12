import useMutation from "@/hooks/useMutation";
import Link from "next/link";
import { Fragment } from "react";
import { FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa";
import { HiMiniPlusSmall, HiMinusSmall } from "react-icons/hi2";
import { MdStarBorder } from "react-icons/md";
import { toast } from "react-toastify";

const OrderSummary = ({
  orderSummaryOpen,
  paymentOpen,
  setOrderSummaryOpen,
  setPaymentOpen,
  item,
  mutate,
  isValidating
}: any) => {
  return (
    <div
      className="w-full bg-white h-full rounded 
    flex flex-col gap-2 justify-center  "
    >
      <div>
        <span
          onClick={() => setOrderSummaryOpen(true)}
          className="flex items-center justify-between w-full p-5 font-medium text-left border-b-2 "
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
        >
          <p className=" flex gap-2 items-center">
            <span className="font-semibold text-gray-800 uppercase">
              Order Summary
            </span>
          </p>
          {orderSummaryOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {
        orderSummaryOpen && (
          <div className=" w-full h-full  scroll flex flex-col gap-2 py-3">
            <article className=" w-full flex flex-col gap-3 items-start justify-start py-2 ">
              <div className="w-full grid md:grid-cols-2 grid-cols-1 items-center gap-5">

                <CartCard item={item} isValidating={isValidating} mutate={mutate} />


              </div>
              <p className="w-full h-[0.11rem] bg-gray-300"></p>
              <p className=" w-full flex justify-end ">

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
        )
      }





    </div>
  );
};

export default OrderSummary;

const CartCard = ({ item, isValidating, mutate }: { item: any, isValidating: any; mutate: () => void }) => {
  const { mutation, isLoading } = useMutation()
  const handleRemoveProductFromCart = async (id: string) => {
    try {
      const res = await mutation(`cart/${id}`, {
        method: "DELETE",
        isAlert: true
      })
      if (res?.status === 200) {
        mutate()
        toast.success(res?.results?.msg)
      } else {
        toast.error(res?.results?.msg)
      }
    } catch (error) {
      toast.error(error instanceof Error)
    }
  }
  return (
    <article className=" w-full flex flex-col gap-3 md:items-start items-center justify-start  lg:px-10">
      <div className=" flex flex-col md:flex-row md:gap-7 gap-5 items-center ">
        <div className=" flex flex-col gap-3 items-center">
          <Link
            href={`/products/${item?.product?._id}`}
            className="md:h-32 h-fit md:w-24 w-40 rounded-lg bg-slate-100 p-2"
          >
            <img
              src={item?.product?.images?.[0]?.imageUrl || "/home/productimgenotavailable.jpg"}
              className=" h-full w-full object-contain rounded-lg"
              alt=""
            />
          </Link>

          <CartQuantity item={item} isValidating={isValidating} mutate={mutate} />
        </div>
        <div className=" flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-xl text-gray-800 font-semibold">
              {item?.product?.name}
            </span>
            <span className="text-sm">{item?.product?.description}</span>
            <span className="text-xs text-gray-400 font-light capitalize">Pack of {item?.quantity}, {item?.product?.color},{item?.product?.category?.name}</span>
            <p className="flex items-center gap-0.5">
              {[...Array(5)].map((_, index) => (
                <Fragment key={index}>
                  {item?.product?.star >= index + 1 ? (
                    <FaStar className=" text-amber-500" />
                  ) : (
                    <MdStarBorder fontSize="inherit" color="inherit" />
                  )}
                </Fragment>
              ))}
            </p>

          </div>
          <p className="flex flex-row md:items-center gap-2">
            <span className="text-sm line-through font-semibold text-gray-400">₹{item?.product?.price}</span>
            <span className="text-gray-800 font-semibold text-lg">
              ₹{item?.product?.salePrice}
            </span>
            <span className="text-center px-4 py-1 text-white bg-green-500 rounded-md text-xs font-semibold">
              {item?.product?.discount}% Off
            </span>

          </p>
          <div className="w-full flex items-center gap-5">
            <div onClick={() => handleRemoveProductFromCart(item?._id)} className="px-4 py-1 cursor-pointer rounded-md bg-red-500 text-white font-medium text-sm">
              {
                isLoading ? <div
                  className="w-5 h-5 rounded-full animate-spin
                      border-y border-solid border-white border-t-transparent shadow-md"
                ></div> : `Remove`
              }
            </div>

          </div>
        </div>
      </div>
    </article>
  );
};
const CartQuantity = ({ item, isValidating, mutate }: any) => {
  const { isLoading: increaseLoading, mutation: increaseMutation } = useMutation()
  const { isLoading: decreaseLoading, mutation: decreaseMutation } = useMutation()
  const handleIncreaseQuantity = async (id: string) => {
    try {
      const res = await increaseMutation(`cart/increase/${id}`, {
        method: "PUT",
        isAlert: true,
      })
      if (res?.status === 200) {
        mutate()
        toast.success(res?.results?.msg)
      } else {
        toast.error(res?.results?.msg)
      }
    } catch (error) {
      toast.error(error instanceof Error)
    }
  }
  const handleDecreaseQuantity = async (id: string) => {
    try {
      const res = await decreaseMutation(`cart/decrease/${id}`, {
        method: "PUT",
        isAlert: true,
      })
      if (res?.status === 200) {
        mutate()
        toast.success(res?.results?.msg)
      } else {
        toast.error(res?.results?.msg)
      }
    } catch (error) {
      toast.error(error instanceof Error)
    }
  }
  return (
    <p className=" flex  items-center gap-8 bg-slate-100 p-1 rounded-full">
      <HiMinusSmall
        onClick={() => handleDecreaseQuantity(item?._id)}
        className="p-2 bg-white rounded-full text-orange-600 text-4xl cursor-pointer"
      />

      {decreaseLoading || increaseLoading ? (
        <div
          className="w-3 h-3 rounded-full animate-spin
                    border-y border-solid border-green-500 border-t-transparent shadow-md"
        ></div>
      ) : (
        <span>{item?.quantity}</span>
      )}

      <HiMiniPlusSmall
        onClick={() => handleIncreaseQuantity(item?._id)}
        className="p-2 bg-white rounded-full text-orange-600 text-4xl cursor-pointer"
      />
    </p>
  )
}