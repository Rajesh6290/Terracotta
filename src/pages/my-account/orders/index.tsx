
import ExpandTitle from "@/components/common/ExpandTitle";
import Ratings from "@/components/common/Ratings";
import { PublicLayout } from "@/layouts";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiCurrentLocation, BiStar } from "react-icons/bi";
import { FaX } from "react-icons/fa6";
import { IoChevronForwardSharp } from "react-icons/io5";

interface Order {
    id: number;
    title: string;
    img: string;
    color: string;
    size: string;
    price: string;
    status: string;
    deliveryStatus: string;
    review: string;
}


const Orders = () => {
    const [ratingOpen, setRatingOpen] = useState(false);
    const ORDER_ARR: Order[] = [
        {
            id: 1,
            title: "Roadster Men Solid Round Neck Pure Cotton T-Shirt",
            img: "/home/categoryimage1.png",
            color: "Color: Yellow",
            size: "Size: 10",
            price: "1200",
            status: "Replacement completed",
            deliveryStatus: "Your items has been delivered.",
            review: "Rate & Review Product",
        },
        {
            id: 2,
            title: "Puma New Shoe 2023 model...",
            img: "/home/full3.png",
            color: "Color: Black",
            size: "Size : 6UK",
            price: "4549",
            status: "Replacement Rejected",
            deliveryStatus: "Your items has been delivered.",
            review: "Rate & Review Product",
        },
        {
            id: 3,
            title: "Men Full Sleeve Solid Sweatshirt",
            img: "/home/categoryimage3.png",
            color: "Color: Yellow",
            size: "Size: 10",
            price: "345",
            status: "Refund Completed",
            deliveryStatus: "The Delivery partner unable to find your location.",
            review: "Rate & Review Product",
        },
    ];
    return (
        <PublicLayout>
            <section className="bg-slate-50">
                <main className="main-container py-10">
                    <div className=" flex flex-col w-full gap-3 relative h-full  ">
                        <div className="flex gap-1 items-center p-1 text-xs text-gray-500 font-semibold font-sub ">
                            <Link
                                href="#"
                                className="flex items-center gap-1 hover:text-blue-500"
                            >
                                Home
                            </Link>
                            <IoChevronForwardSharp />
                            <Link
                                href={"/my-account"}
                                className="flex items-center gap-1 hover:text-blue-500"
                            >
                                My Account
                            </Link>
                            <IoChevronForwardSharp />
                            <p>My orders</p>
                        </div>

                        {ORDER_ARR.map((item, index) => {
                            return (
                                <motion.article
                                    layout
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: index < 5 ? index * 0.5 : 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    viewport={{ once: true }}
                                    key={item.id}
                                    className="bg-white rounded-md shadow-[0px_0px_2px_1px_#00000024]  py-4 px-6 w-full h-full flex flex-col gap-5"
                                >
                                    <div className="flex flex-col lg:flex-row justify-between lg:items-center items-start gap-5 ">
                                        <p className="flex flex-col md:flex-row md:items-center items-start md:gap-6 gap-3">
                                            <span className="py-3 text-gray-800 px-5 bg-gray-200 rounded-2xl font-medium md:text-[1rem] text-sm">
                                                Order Id:{" "}
                                                <span className=" text-primary tracking-wider">
                                                    {" "}
                                                    #64c39af11afd3b05b1c707e6{item.id}
                                                </span>
                                            </span>
                                            <span className="text-gray-800 ">
                                                Order Placed: 7/28/2023
                                            </span>
                                        </p>
                                        <Link
                                            href={`/my-account/orders/${item.id}`}
                                            className="flex items-center gap-2 bg-primary px-8 py-2  text-white font-medium rounded-md "
                                        >
                                            <BiCurrentLocation />
                                            <span className=" uppercase"> Track order</span>
                                        </Link>
                                    </div>
                                    <hr />
                                    <div className=" flex flex-col gap-5 md:gap-0 lg:flex-row items-center justify-between w-full">
                                        <span className=" flex items-center gap-5 lg:w-[50%] w-full">
                                            <Link
                                                href=""
                                                className="md:w-28 w-24 h-16 md:h-20 md:p-2 p-1 bg-slate-100 rounded-md shadow-[0px_0px_3px_1px_#00000024]"
                                            >
                                                <img
                                                    src="/home/categoryimage1.png"
                                                    className=" w-full h-full  object-contain"
                                                    alt=""
                                                />
                                            </Link>
                                            <p className="flex flex-col gap-1">
                                                <Link
                                                    href=""
                                                    className=" font-semibold text-gray-800 md:text-[1.3rem] text-[1rem]"
                                                >
                                                    <ExpandTitle limit={4} text={item.title} />
                                                </Link>
                                                <span className="md:text-sm text-xs text-gray-600">
                                                    {item.title}
                                                </span>
                                                <span className=" flex items-center md:gap-5 gap-2">
                                                    <p className="flex items-center gap-2 ">
                                                        <span className=" font-medium text-gray-800 text-lg ">
                                                            XL
                                                        </span>
                                                        <span className=" font-medium text-gray-800">
                                                            size
                                                        </span>
                                                    </p>
                                                    <p className="w-[0.02rem] h-6 bg-black "></p>
                                                    <p>Qty: 1</p>
                                                    <p className="w-[0.02rem] h-6 bg-black "></p>
                                                    <p>{item.color}</p>
                                                    <p className="w-[0.02rem] h-6 bg-black "></p>
                                                    <p className=" text-gray-800 font-semibold text-lg">
                                                        Rs.{item.price}
                                                    </p>
                                                </span>
                                            </p>
                                        </span>
                                        <span className="lg:w-[40%] w-full flex flex-col gap-1 ">
                                            <p className="text-[1.3rem] font-semibold text-gray-500 text-left">
                                                Status
                                            </p>
                                            <span className=" flex items-center gap-2">
                                                <p className=" p-1.5 rounded-full bg-green-500"></p>
                                                <p className=" text-gray-800 font-semibold text-left">
                                                    {item.status}
                                                </p>
                                            </span>

                                            <p className=" text-gray-800  text-left">
                                                {item.deliveryStatus}
                                            </p>
                                            <p
                                                onClick={() => setRatingOpen(!ratingOpen)}
                                                className=" cursor-pointer flex items-center gap-2 text-blue-600 font-semibold"
                                            >
                                                <AiOutlineStar />
                                                <span>{item.review}</span>
                                            </p>
                                        </span>
                                        <span className="flex flex-col lg:w-[20%] w-full lg:items-end ">
                                            <p className="text-gray-600 text-[1rem]">
                                                Delivery Expected By:
                                            </p>
                                            <p className=" text-gray-800 font-semibold text-xl">
                                                Not Available
                                            </p>
                                        </span>
                                    </div>
                                </motion.article>
                            );
                        })}

                        {/* Rating modals */}

                        {/* <Ratings open={ratingOpen} close={() => setRatingOpen(false)} /> */}
                    </div>
                </main>
            </section>
        </PublicLayout>
    );
};

export default Orders;
