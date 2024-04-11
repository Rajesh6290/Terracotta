import MenuCollapse from "@/components/common/MenuCollapse";
import useAuth from "@/hooks/useAuth";
import useMutation from "@/hooks/useMutation";
import useSwr from "@/hooks/useSwr";
import { Collapse, Drawer } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaHome, FaSignInAlt, FaUserTie } from "react-icons/fa";
import { HiMenuAlt1, HiOutlineShoppingCart } from "react-icons/hi";
import { MdClose, MdContacts } from "react-icons/md";
import { PiUserFill } from "react-icons/pi";
import { RiMenu3Fill } from "react-icons/ri";
import { TbLogout2, TbSitemap } from "react-icons/tb";
import { toast } from "react-toastify";

const MobileNavbar = () => {
  const { user, logout } = useAuth()
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { data } = useSwr(`category`);
  const { mutation } = useMutation()
  const item = data?.data?.data

  let url = `product?sortBy=desc`
  searchText && (url += `&search=${searchText}`)

  const { data: products, isValidating } = useSwr(url)



  const MENU_ARR = [
    {
      id: "1",
      name: "Home",
      path: "/",
      haveList: false,
      icon: <FaHome className=" text-3xl text-orange-500/40" />,
    },
    {
      id: "2",
      name: "All Category",
      haveList: true,
      path: "/category",
      icon: <TbSitemap className=" text-3xl text-orange-500/40" />,
      list: item && item?.length > 0 ?
        item?.map((pre: any) => {
          return {
            id: String(pre._id),
            name: pre.name,
            image: pre?.imageUrl,
            path: `/products?category=${pre?.name}`,

          }
        }) : [],
    },
    {
      id: "3",
      name: "Products",
      path: "/products",
      haveList: false,
      icon: <BsFillHandbagFill className=" text-3xl text-orange-500/40" />,
    },
    {
      id: "4",
      name: "About Us",
      haveList: false,
      icon: <FaUserTie className=" text-3xl text-orange-500/40" />,
      path: "/",
    },
    {
      id: "5",
      name: "Contact Us",
      haveList: false,
      icon: <MdContacts className=" text-3xl text-orange-500/40" />,
      path: "/contact",
    },

    {
      id: "7",
      name: "My Wishlist",
      haveList: false,
      icon: <MdContacts className=" text-3xl text-orange-500/40" />,
      path: "/wishlist",
    },
    ...(user?._id ? [{
      id: "8",
      name: "My Account",
      haveList: false,
      icon: <PiUserFill className=" text-3xl text-orange-500/40" />,
      path: "/my-account",
    }] : [
      {
        id: "9",
        name: "SignIn",
        haveList: false,
        icon: <FaSignInAlt className=" text-3xl text-orange-500/40" />,
        path: "/login",
      }
    ]),

  ];
  const router = useRouter();
  const handleLogout = async () => {
    const res = await mutation("customer/update", {
      method: "PUT",
      isAlert: true,
      body: {
        isOnline: false,
      },
    });
    if (res?.status === 200) {
      router.push("/");
      toast.success("Logout Successful");
      logout();
    } else {
      toast.error(res?.results?.msg);
    }
  };

  return (
    <>
      <section className="block xl:hidden main-container py-4  bg-gradient-to-bl from-rose-400 to-orange-600 text-white">
        <div className="flex justify-between items-center">
          <div className=" flex gap-5 items-center">
            <p
              onClick={() => setOpen(true)}
              className=" w-10 h-10 rounded-lg bg-white text-orange-500 cursor-pointer p-1 flex items-center justify-center"
            >
              <HiMenuAlt1 className=" text-2xl" />
            </p>
            <Link href="/" className="">
              <img
                src="/logo1.png"
                alt="TerracottaCraft"
                className="w-fit h-10 md:w-40"
              />
            </Link>
          </div>
          <div className=" flex items-center gap-3">
            <p
              className=" w-10 h-10 rounded-lg  duration-300 bg-white cursor-pointer p-1 flex items-center justify-center"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <BiSearch className=" text-2xl  text-orange-500/50 cursor-pointer" />
            </p>

            <Link href="/cart">
              <p className=" relative w-10 h-10 rounded-lg  duration-300 bg-white cursor-pointer p-1 flex items-center justify-center">
                <span className=" absolute -top-3 -right-2 bg-red-500 w-5 h-5 rounded-full flex items-center justify-center text-white font-medium text-xs">
                  0
                </span>
                <HiOutlineShoppingCart className=" text-2xl  text-orange-500/50 cursor-pointer" />
              </p>
            </Link>
            <Link href={!user?._id ? `/login` : user?.role === "ADMIN" ? `/admin` : `/my-account`}  >
              <p className=" w-10 h-10 rounded-lg duration-300 bg-white cursor-pointer p-1 flex items-center justify-center">
                <AiOutlineUser className="  text-2xl  text-orange-500/50 cursor-pointer" />
              </p>
            </Link>
          </div>
        </div>

        {searchOpen && (
          <div className="fixed inset-0 flex justify-center z-[9999] bg-black bg-opacity-80  ">
            <div className="p-4 rounded-md w-full flex flex-col gap-5">
              <div
                className="bg-white  items-center justify-between w-full flex rounded-2xl pl-3 shadow-lg p-2 "
                style={{ top: 5 }}
              >
                <input
                  autoFocus
                  className="font-semibold tracking-wider  rounded-full w-full py-4 pl-6 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
                  type="text"
                  placeholder="Navigates to page"
                  onChange={(e) => setSearchText(e.target.value)}
                />

                <div
                  onClick={() => { setSearchOpen(false); setSearchText("") }}
                  className="bg-gray-600 p-2 hover:bg-theme duration-300 cursor-pointer mx-2 rounded-full"
                >
                  <MdClose className=" text-xl text-white" />
                </div>
              </div>

              <Collapse in={searchText?.length > 0}>
                <div className=" rounded-2xl w-full h-fit max-h-[35rem] p-2 overflow-hidden bg-white flex items-center flex-col justify-center">
                  <div className=" w-full h-full  overflow-y-auto flex flex-col gap-5 ">
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
                        products?.data?.data?.length > 0 ? (
                          products?.data?.data?.map((item: any, index: number) => {
                            return (
                              <Link href={`/products/${item?._id}`}
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

                              </Link>
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
              </Collapse>
            </div>
          </div>
        )}
      </section>
      <Drawer open={open} onClose={() => setOpen(false)} anchor={"left"}>
        <div className="w-full h-full flex flex-col justify-between ">
          <div className=" w-full h-fit justify-between items-center flex bg-gradient-to-bl from-rose-400 to-orange-600 p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <img
              src="/logo1.png"
              className=" w-fit h-10 object-contain"
              alt=""
            />
            <p
              onClick={() => setOpen(false)}
              className=" w-10 h-10 md:w-14 md:h-14 rounded-lg bg-white duration-300  cursor-pointer p-1 flex items-center justify-center"
            >
              <RiMenu3Fill className="  text-2xl md:text-3xl   text-orange-500/50 cursor-pointer" />
            </p>
          </div>
          <div className="w-full h-full overflow-y-auto ">
            <div className=" w-full h-full flex flex-col gap-3 py-3 px-5">
              {MENU_ARR.map((item) =>
                item?.haveList ? (
                  <MenuCollapse
                    key={item?.id}
                    title={item?.name}
                    icon={item?.icon}
                  >
                    <div className=" w-full flex flex-col gap-2 ">
                      {item?.list?.map((data: any) => (
                        <div
                          onClick={() => router.push(data?.path)}
                          key={data?.id}
                        >
                          <div className="w-full flex items-center gap-5 border hover:shadow-[0px_0px_6px_0px_#00000024] hover:bg-white duration-300 rounded-lg p-3">
                            <img
                              src={data?.image}
                              className=" w-8 h-8 object-contain"
                              alt=""
                            />
                            <p className=" text-lg font-semibold text-gray-800">
                              {data?.name}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </MenuCollapse>
                ) : (
                  <Link href={item.path} key={item?.id}>
                    <div className=" flex items-center gap-5 w-full rounded-lg bg-white shadow-[0px_0px_6px_0px_#00000024] cursor-pointer hover:bg-orange-500/10 duration-300 p-4">
                      {item?.icon}
                      <p className=" text-lg font-semibold text-gray-800">
                        {item?.name}
                      </p>
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
          <div className=" w-full  h-fit bg-gradient-to-bl from-rose-400 to-orange-600 flex items-center">
            {
              user?._id &&

              <div className=" w-full  py-5 px-3 flex items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <img
                    src={user?.image}
                    className=" w-12 h-12 rounded-lg object-contain"
                    alt=""
                  />
                  <p className=" flex flex-col">
                    <span className=" text-lg md:text-2xl font-bold text-white">
                      {user?.name}
                    </span>
                    <span className=" text-sm md:text-xl text-white">
                      {user?.email}
                    </span>
                  </p>
                </div>
                <TbLogout2 onClick={() => handleLogout()} className=" text-3xl md:text-5xl cursor-pointer text-white" />
              </div>
            }
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MobileNavbar;
