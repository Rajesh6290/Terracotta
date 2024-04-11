import React, { Fragment, useEffect } from "react";
import Link from "next/link";
import { PublicLayout } from "@/layouts";
import { HiMinusSmall, HiMiniPlusSmall } from "react-icons/hi2";
import { toast } from "react-toastify";
import useSwr from "@/hooks/useSwr";
import useMutation from "@/hooks/useMutation";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { BiStar } from "react-icons/bi";
import { MdStarBorder } from "react-icons/md";
import { FaArrowDown, FaStar } from "react-icons/fa";

const Cart = () => {
  const { user } = useAuth()
  const router = useRouter()
  const { data, isValidating, mutate } = useSwr(!user?._id ? `` : `cart`)
  const item = data?.data?.data
  const amountData = item?.map((data: any) => {
    const totalAmount = data?.product?.price * data?.quantity
    const totalSaleAmount = data?.product?.salePrice * data?.quantity
    return {
      totalAmount: totalAmount,
      totalSaleAmount: totalSaleAmount,
      totalDiscount: Math.round(((totalAmount - totalSaleAmount) / totalAmount) * 100)
    }
  })
  const totalAmount = amountData?.reduce((sum: any, amount: any) => sum + amount.totalAmount, 0)
  const totalSaleAmount = amountData?.reduce((sum: any, amount: any) => sum + amount.totalSaleAmount, 0);
  const totalDiscount = Math.ceil(((totalAmount - totalSaleAmount) / totalAmount) * 100)


  useEffect(() => {
    if (!user?._id) {
      router.push('/')
    }
  }, [user])
  return (
    <PublicLayout title="Cart | Terracotta Craft">
      <section className="main-container py-10 ">
        <main className=" w-full flex flex-col gap-2">
          <h1 className=" text-gray-800 text-2xl font-semibold px-2">
            My Cart {`(${item?.length})`}
          </h1>

          <div className="w-full flex flex-col md:flex-row md:gap-10 gap-5 items-start ">
            {/* Left Part */}
            <div className="lg:w-[70%] md:w-[80%] w-full md:hidden flex flex-col gap-3">
              <hr />
              {
                item?.length > 0 ?
                  item?.map((curEle: any, index: number) => {
                    return (
                      <Fragment key={curEle?._id}>
                        <CartMobileViewCard item={curEle} isValidating={isValidating} mutate={mutate} />
                        <hr />
                      </Fragment>
                    );
                  }) :
                  <div className="w-full h-full flex items-center justify-center">
                    <img src="/emptyProduct.webp" className="w-full h-full object-contain" alt="" />
                  </div>

              }
            </div>
            <div className="lg:w-[70%] md:w-[80%] w-full hidden md:flex flex-col gap-3">
              <hr />
              {
                item?.length > 0 ?
                  item?.map((curEle: any, index: number) => {
                    return (
                      <Fragment key={curEle?._id}>
                        <CartCard item={curEle} isValidating={isValidating} mutate={mutate} />
                        <hr />
                      </Fragment>
                    );
                  })
                  : <div className="w-full h-full flex items-center justify-center">
                    <img src="/emptyProduct.webp" className="w-full h-full object-contain" alt="" />
                  </div>
              }
            </div>

            <div className="md:w-[50%] w-full p-2 sticky top-20 bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg p-4">
              <div className=" flex flex-col gap-4">
                <div className=" w-full flex items-center justify-between gap-2">

                  <h2 className="text-2xl text-gray-500 font-semibold uppercase">
                    Price Details
                  </h2>
                  {
                    item?.length > 0 && <p className="lg:px-6 px-2.5 py-1 lg:text-base text-xs rounded-md bg-green-400 text-white font-medium">
                      {totalDiscount}% Off
                    </p>
                  }

                </div>
                <hr />
                <div className="flex justify-between">
                  <span>Price ({item?.length} items)</span>
                  <span>₹{totalAmount}</span>
                </div>
                <div className="flex justify-between ">
                  <span>Discount</span>
                  <span className=" font-medium text-green-500 ">-₹{totalAmount - totalSaleAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-500 font-normal">FREE Delivery</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg">
                  <span className="font-semibold text-gray-600">Total Amount</span>
                  <span className="font-semibold">₹{totalSaleAmount}</span>
                </div>
                <hr />
                <div className="text-green-600 font-medium ">
                  You will save ₹{totalAmount - totalSaleAmount} on this order
                </div>
                <hr />
                <div className=" flex justify-end">
                  <button className="btn-primary lg:py-2 py-1 px-4 lg:px-8 rounded-lg   uppercase lg:text-lg  font-medium">
                    Proceed to Checkout
                  </button>
                </div>

              </div>
            </div>
          </div>
        </main>
      </section>
    </PublicLayout>
  );
};


export default Cart;
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
            <div onClick={() => handleRemoveProductFromCart(item?._id)} className="px-4 py-1 rounded-md bg-red-500 text-white font-medium text-sm">
              {
                isLoading ? <div
                  className="w-5 h-5 rounded-full animate-spin
                      border-y border-solid border-white border-t-transparent shadow-md"
                ></div> : `Remove`
              }
            </div>
            <div className="px-4 py-1 rounded-md bg-yellow-400 text-white font-medium text-sm">Buy Bow</div>
          </div>
        </div>
      </div>
    </article>
  );
};

const CartMobileViewCard = ({ item, isValidating, mutate }: { item: any, isValidating: any; mutate: () => void }) => {
  const router = useRouter()
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
    <div className="w-full h-fit flex  items-center gap-5 rounded-md bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-5">

      <div className="flex flex-col gap-3 items-center">
        <img onClick={() => router?.push(`/products/${item?.product?._id}`)} src={item?.product?.images?.[0]?.imageUrl} className="w-16 h-fit  object-fill rounded-lg" alt="" />
        <CartMobileViewQuantity item={item} isValidating={isValidating} mutate={mutate} />
      </div>
      <div className="w-full flex items-start flex-col gap-2">
        <p className="text-gray-900 text-lg font-semibold">{item?.product?.name}</p>
        <p className="text-xs text-gray-400 font-light ">{item?.product?.description?.slice(0, 20)}....</p>
        <p className="text-xs text-gray-400 font-light capitalize">Pack of {item?.quantity}, {item?.product?.color},{item?.product?.category?.name}</p>
        <p className="flex items-center">
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
        <div className="flex items-center gap-2">
          <p className="flex items-center">
            <FaArrowDown className="text-green-500" />
            <span className="font-semibold text-green-500">{item?.product?.discount}%</span>
          </p>
          <p className=" font-semibold text-gray-400  line-through">₹{item?.product?.price}</p>
          <p className=" font-semibold text-lg text-gray-900  ">₹{item?.product?.salePrice}</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <div onClick={() => handleRemoveProductFromCart(item?._id)} className="px-4 py-1 rounded-md bg-red-500 text-white font-medium text-sm">
            {
              isLoading ? <div
                className="w-5 h-5 rounded-full animate-spin
                      border-y border-solid border-white border-t-transparent shadow-md"
              ></div> : `Remove`
            }
          </div>
          <div className="px-4 py-1 rounded-md bg-yellow-400 text-white font-medium text-sm">Buy Bow</div>
        </div>
      </div>

    </div>
  )

}


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
const CartMobileViewQuantity = ({ item, isValidating, mutate }: any) => {
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
    <p className=" flex  items-center gap-5 bg-slate-100 p-1 rounded-full">
      <HiMinusSmall
        onClick={() => handleDecreaseQuantity(item?._id)}
        className="p-2 bg-white rounded-full text-orange-600 text-3xl cursor-pointer"
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
        className="p-2 bg-white rounded-full text-orange-600 text-3xl cursor-pointer"
      />
    </p>
  )
}