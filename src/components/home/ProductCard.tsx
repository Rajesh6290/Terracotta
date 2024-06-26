/* eslint-disable @next/next/no-img-element */
import useAuth from "@/hooks/useAuth";
import useMutation from "@/hooks/useMutation";
import useSwr from "@/hooks/useSwr";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart, MdStarBorder } from "react-icons/md";
import { toast } from "react-toastify";


const ProductCard = ({ item }: { item: Product }) => {
  const { user } = useAuth()
  const { mutation, isLoading } = useMutation();
  const { data, isValidating, mutate } = useSwr(!user?._id ? `` : `cart`);
  const cartData = data?.data?.data
  const router = useRouter()
  const addToCart = async (id: string) => {
    try {
      const findFirst = cartData?.filter((pre: any) => pre?.product?._id === id);


      if (findFirst?.length > 0) {
        return router.push('/cart')
      }
      const res = await mutation(`cart/${id}`, {
        method: "POST",
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
    <div
      className="relative h-full group overflow-hidden  w-full flex flex-col gap-2 justify-between items-center  bg-white shadow-[0px_0px_4px_0px_#00000024] rounded-lg p-4"
      key={item?._id}
    >
      <p className=" absolute z-10 top-2 left-2 text-xs bg-orange-500/50 text-white font-medium px-4 py-1 rounded-md">
        {item?.discount}% off
      </p>
      <Link href="/wishlist">
        <p className=" absolute z-10 top-2  group-hover:right-2 -right-14  duration-200 w-8 h-8 cursor-pointer  rounded-lg flex items-center justify-center bg-orange-500/50 bg-opacity-60">
          <AiFillHeart className=" hover:scale-125 duration-200 text-white" />
        </p>
      </Link>

      <Link href="#">
        <p className=" absolute z-10 top-12  group-hover:right-2 -right-16  duration-300 w-8 h-8 cursor-pointer  rounded-lg flex items-center justify-center bg-orange-500/50 bg-opacity-60">
          <AiFillEye className=" hover:scale-125 duration-200 text-white" />
        </p>
      </Link>

      <div className=" w-full flex  flex-col gap-4">
        <Link href={`/products/${item?._id}`}>
          <img
            src={item?.images?.[0]?.imageUrl || "NotImage.jpg"}
            className=" w-full object-contain md:h-36 h-24 object-fil rounded-lg cursor-pointer group-hover:scale-105 duration-300 "
            alt=""
          />
        </Link>
        <div className=" flex w-full flex-col gap-2 relative">
          {
            item?.sold === false ?
              <p className=" absolute md:top-0 -top-[0.2rem] md:right-1 -right-2 text-xs font-medium md:px-4 px-2 py-1 bg-green-500/50 text-white rounded-md">
                InStock
              </p> : <p className=" absolute md:top-0 -top-[0.2rem] md:right-1 -right-2 text-xs font-medium md:px-4 px-2 py-1 bg-red-500/50 text-white rounded-md">
                Out Of Stock
              </p>

          }

          <p className=" flex flex-col gap-1 w-full" >
            <span className="uppercase text-primary/80 font-medium text-sm">
              Category:
            </span>
            <span className=" text-xs capitalize text-gray-600">
              {item?.categoryName}
            </span>
          </p>


          <p className="  md:font-semibold font-medium md:text-base text-sm  text-gray-700">
            {item?.name}
          </p>
          <p className="flex items-center gap-0.5">
            {[...Array(5)].map((_, index) => (
              <Fragment key={index}>
                {item?.star >= index + 1 ? (
                  <FaStar className=" text-amber-400" />
                ) : (
                  <MdStarBorder fontSize="inherit" color="inherit" />
                )}
              </Fragment>
            ))}
          </p>
          <div className=" flex justify-between items-center  ">
            <p className=" flex flex-col sm:flex-row items-center gap-1">
              <span className="text-gray-800 font-semibold">₹{item?.salePrice}</span>
              <span className="line-through text-xs  text-gray-400">
                ₹{item?.price}
              </span>
            </p>
            <div onClick={() => {
              if (!user?._id) {
                router.push('/')
              } else {
                addToCart(item?._id)
              }
            }}>
              <p className=" w-10 h-10 rounded-md cursor-pointer  group-hover:bg-primary border duration-300 border-primary flex items-center justify-center">
                {
                  isLoading ? <div
                    className="w-3 h-3 rounded-full animate-spin
                            border-y border-solid border-primary group-hover:border-white border-t-transparent shadow-md"
                  ></div> :
                    <MdOutlineShoppingCart className=" text-primary group-hover:text-white text-xl " />
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
