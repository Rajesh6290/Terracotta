import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { IoCall, IoSearchSharp } from "react-icons/io5";
import { MdClose, MdOutlineShoppingCart } from "react-icons/md";
import MobileNavbar from "./MobileNavbar";
import useSwr from "@/hooks/useSwr";
interface IProduct {
  id: string;
  image: string;
  name: string;
  category: string;
}
const PRODUCT_ARR: IProduct[] = [
  {
    id: "1",
    image: "/product/p1.webp",
    name: "Red poterrry clay Port",
    category: "Red Poterry ",
  },
  {
    id: "1",
    image: "/product/p2.webp",
    name: "Red poterrry clay Port",
    category: "Red Poterry ",
  },
  {
    id: "1",
    image: "/product/p3.webp",
    name: "Red poterrry clay Port",
    category: "Red Poterry ",
  },
  {
    id: "1",
    image: "/product/p4.webp",
    name: "Red poterrry clay Port",
    category: "Red Poterry ",
  },
  {
    id: "1",
    image: "/product/p5.webp",
    name: "Red poterrry clay Port",
    category: "Red Poterry ",
  },
  {
    id: "1",
    image: "/product/p6.webp",
    name: "Red poterrry clay Port",
    category: "Red Poterry ",
  },
  {
    id: "1",
    image: "/product/p7.webp",
    name: "Red poterrry clay Port",
    category: "Red Poterry ",
  },
  {
    id: "1",
    image: "/product/p7.webp",
    name: "Red poterrry clay Port",
    category: "Red Poterry ",
  },
  {
    id: "1",
    image: "/product/p8.webp",
    name: "Red poterrry clay Port",
    category: "Red Poterry ",
  },
  {
    id: "1",
    image: "/product/p9.webp",
    name: "Red poterrry clay Port",
    category: "Red Poterry ",
  },
  {
    id: "1",
    image: "/product/p10.webp",
    name: "Red poterrry clay Port",
    category: "Red Poterry ",
  },
];
const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const { user } = useAuth()

  let url = `product?sortBy=desc`
  searchText && (url += `&search=${searchText}`)

  const { data, isValidating } = useSwr(url)
  const { data: cartData, isValidating: cardValidating } = useSwr(user?._id ? `cart` : ``)
  useEffect(() => {
    const keyOperation = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "K") {
        setSearchOpen(true);
      } else if (e.key === "Escape") {
        setSearchOpen(false);
        setSearchText("");
      }
    };
    document.addEventListener("keydown", keyOperation);
    return () => {
      document.removeEventListener("keydown", keyOperation);
    };
  }, []);
  return (
    <>
      <nav className="w-full h-fit bg-gray-50 flex flex-col sticky top-0 z-[999]">
        <div className=" xl:block hidden flex    gap-2  flex-col w-full">
          <div className="w-full bg-gradient-to-bl from-rose-400 to-orange-600">
            <div className="w-full py-3 main-container flex items-center gap-5 justify-between">
              <img
                src="/logo1.png"
                className="w-72 h-12 object-contain cursor-pointer"
                alt=""
                onClick={() => router?.push("/")}
              />

              <div className="flex items-center gap-7">
                <Link
                  href="/"
                  className="font-medium navbar__link relative text-lg tracking-wide text-white  cursor-pointer "
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="font-medium navbar__link relative text-lg tracking-wide text-white  cursor-pointer "
                >
                  Products
                </Link>

                <p className="font-medium navbar__link relative text-lg tracking-wide text-white  cursor-pointer ">
                  Testimonials
                </p>
                <p className="font-medium navbar__link relative text-lg tracking-wide text-white  cursor-pointer ">
                  Blogs
                </p>
                <p className="font-medium navbar__link relative text-lg tracking-wide text-white  cursor-pointer ">
                  About Us
                </p>
              </div>
              <div className="flex items-center gap-5">
                <div
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="w-11 h-11 bg-slate-100 cursor-pointer rounded-full flex items-center justify-center relative"
                >
                  <IoSearchSharp className="text-gray-600 text-xl " />
                </div>
                <Link
                  href={!user?._id ? "/login" : '/cart'}
                  className="w-11 h-11 bg-slate-100 cursor-pointer rounded-full flex items-center justify-center relative"
                >
                  {
                    !user?._id ? null : isValidating ? null :

                      <p className=" absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center bg-red-500 text-white font-semibold text-xs">
                        {cartData?.data?.data?.length}
                      </p>
                  }
                  <MdOutlineShoppingCart className="text-gray-600 text-xl " />
                </Link>
                <Link
                  href="/wishlist"
                  className="w-11 h-11 bg-slate-100 cursor-pointer rounded-full flex items-center justify-center relative"
                >
                  <p className=" absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center bg-red-500 text-white font-semibold text-xs">
                    5
                  </p>
                  <AiOutlineHeart className="text-gray-600 text-xl " />
                </Link>
                <Link href={!user?._id ? `/login` : user?.role === "ADMIN" ? `/admin` : `/my-account`}
                  className="w-11 h-11 bg-slate-100 cursor-pointer rounded-full flex items-center justify-center"
                >
                  <FaRegUser className="text-gray-600 text-lg " />
                </Link>
                <Link
                  href="/contact"
                  className="flex shake items-center gap-2 shake py-2 px-3 rounded-lg bg-primary  shadow-md shadow-primary/70 cursor-pointer"
                >
                  <IoCall className="text-white shake-animation text-lg  shake-animation " />
                  <p className=" text-white font-medium ">Contact Us</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <MobileNavbar />
      </nav>
      {searchOpen && (
        <div className="w-full flex items-center justify-center">
          <div className="fixed inset-0 flex justify-center z-[9999] bg-black bg-opacity-80  ">
            <div className="p-4 rounded-md  flex flex-col gap-5 w-[60%]">
              <div
                className="bg-white  items-center justify-between w-full flex rounded-2xl pl-3 shadow-lg p-2 "
                style={{ top: 5 }}
              >
                <input
                  autoFocus
                  className="font-semibold tracking-wider  rounded-full w-full py-4 pl-6 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
                  type="text"
                  placeholder="Search Products"
                  onChange={(e) => setSearchText(e.target.value)}
                />

                <div
                  onClick={() => { setSearchOpen(false); setSearchText("") }}
                  className="bg-gray-600 p-2 hover:bg-theme duration-300 cursor-pointer mx-2 rounded-full"
                >
                  <MdClose className=" text-xl text-white" />
                </div>
              </div>

              {searchText && (
                <div className="overflow-hidden w-full h-[27rem]  overflow-y-auto scroll rounded-xl border border-gray-200    text-center  bg-white p-5">
                  <div className=" w-full flex flex-col gap-5 ">
                    {
                      isValidating ? (<>
                        <div className="w-full h-20 px-5 rounded-xl bg-slate-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] flex items-center justify-between">
                          <div className="flex items-center gap-5">
                            <p className="w-12 h-12 rounded-lg bg-slate-300 animate-pulse"></p>
                            <p className="w-44 p-3 rounded-md bg-slate-300 animate-pulse"></p>
                          </div>
                          <p className="w-20 p-4 rounded-lg bg-slate-300 animate-pulse"></p>
                        </div>
                        <div className="w-full h-20 px-5 rounded-xl bg-slate-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] flex items-center justify-between">
                          <div className="flex items-center gap-5">
                            <p className="w-12 h-12 rounded-lg bg-slate-300 animate-pulse"></p>
                            <p className="w-44 p-3 rounded-md bg-slate-300 animate-pulse"></p>
                          </div>
                          <p className="w-20 p-4 rounded-lg bg-slate-300 animate-pulse"></p>
                        </div>
                        <div className="w-full h-20 px-5 rounded-xl bg-slate-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] flex items-center justify-between">
                          <div className="flex items-center gap-5">
                            <p className="w-12 h-12 rounded-lg bg-slate-300 animate-pulse"></p>
                            <p className="w-44 p-3 rounded-md bg-slate-300 animate-pulse"></p>
                          </div>
                          <p className="w-20 p-4 rounded-lg bg-slate-300 animate-pulse"></p>
                        </div>
                        <div className="w-full h-20 px-5 rounded-xl bg-slate-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] flex items-center justify-between">
                          <div className="flex items-center gap-5">
                            <p className="w-12 h-12 rounded-lg bg-slate-300 animate-pulse"></p>
                            <p className="w-44 p-3 rounded-md bg-slate-300 animate-pulse"></p>
                          </div>
                          <p className="w-20 p-4 rounded-lg bg-slate-300 animate-pulse"></p>
                        </div>
                      </>) :
                        data?.data?.data?.length > 0 ? (
                          data?.data?.data?.map((item: any, index: number) => {
                            return (
                              <div
                                key={index}
                                // href={`products/productId=${item.id}`}
                                className="w-full flex  bg-slate-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  justify-between  p-3 items-center rounded-xl  duration-500"
                              >
                                <div className="flex gap-5 items-center">
                                  <img
                                    src={item.images?.[0]?.imageUrl}
                                    alt="productImage"
                                    className=" w-20 h-20 rounded-lg object-contain"
                                  />

                                  <p className=" flex flex-col gap-1 items-start">
                                    <span className=" text-lg font-medium text-gray-600">
                                      {item?.name}
                                    </span>
                                    <span className=" text-sm font-medium text-gray-500">
                                      Category : {item?.categoryName}
                                    </span>
                                  </p>
                                </div>
                                <Link
                                  href={`/products?${item?._id}`}
                                  className=" font-medium px-5 py-2  bg-gradient-to-bl from-rose-400 to-orange-600 text-white rounded-md "
                                >
                                  View Details
                                </Link>
                              </div>
                            );
                          })
                        ) : (
                          <div className="w-full flex flex-col items-center p-4 ">
                            <img
                              src="/emptyProduct.webp" // Replace with your image path
                              alt="No Results"
                              className=" w-[16rem] h-[16rem] object-contain"
                            />
                            <h1 className=" font-bold text-lg text-center">
                              Product Not Available
                            </h1>
                          </div>
                        )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
