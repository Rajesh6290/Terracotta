/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { HiOutlinePlusSm } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";

interface IProduct {
  id: string;
  image: string;
  name: string;
}

const ProductCard = ({ item }: { item: IProduct }) => {
  return (
    <div
      className="relative h-full group overflow-hidden  w-full flex flex-col gap-2 justify-between items-center  bg-white shadow-[0px_0px_4px_0px_#00000024] rounded-lg p-4"
      key={item?.id}
    >
      <p className=" absolute z-10 top-2 left-2 text-xs bg-orange-500/50 text-white font-medium px-4 py-1 rounded-md">
        10% off
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
        <Link href={`/products/${item?.id}`}>
          <img
            src={item?.image}
            className=" w-full object-contain md:h-36 h-24 object-fil rounded-lg cursor-pointer group-hover:scale-105 duration-300 "
            alt=""
          />
        </Link>
        <div className=" flex w-full flex-col gap-2">
          <div className=" flex md:flex-row flex-col md:items-center items-start justify-between">
            <p className=" flex items-center  gap-1">
              <span className="uppercase text-primary/80 font-medium text-sm">
                brand:
              </span>
              <span className=" text-xs capitalize text-gray-600">
                Alive Core
              </span>
            </p>
            <p className=" text-xs font-medium px-4 py-1 bg-green-500/50 text-white rounded-md">
              Instock
            </p>
          </div>
          <p className="  md:font-semibold font-medium md:text-base text-sm  text-gray-700">
            {item?.name}
          </p>
          <p className="text-sm flex items-center gap-1">
            <FaStar className=" text-amber-500" />
            <FaStar className=" text-amber-500" />
            <FaStar className=" text-amber-500" />
            <FaStar className=" text-amber-500" />
            <FaStar className=" text-amber-500" />
          </p>
          <div className=" flex justify-between items-center  ">
            <p className=" flex flex-col sm:flex-row items-center gap-1">
              <span className="text-gray-800 font-semibold">₹999.12</span>
              <span className="line-through text-xs  text-gray-400">
                ₹2999.00
              </span>
            </p>
            <Link href="/cart">
              <p className=" w-10 h-10 rounded-md cursor-pointer  hover:bg-primary border duration-300 border-primary flex items-center justify-center">
                <MdOutlineShoppingCart className=" text-primary hover:text-white text-xl " />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
