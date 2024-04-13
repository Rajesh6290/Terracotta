import useAuth from "@/hooks/useAuth";
import useSwr from "@/hooks/useSwr";
import { PublicLayout } from "@/layouts";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { motion } from "framer-motion";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaX } from "react-icons/fa6";
import { IoChevronForwardSharp } from "react-icons/io5";
import * as Yup from "yup";
interface OrderStatusProps {
    [x: string]: any;
    id: string;
    title: string;
    img: string;
    message?: boolean;
    status: string;
    destination: boolean;
    processing?: boolean;
}

const validationSchema = Yup.object().shape({
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
});
const MyOrder = () => {
    const [helpOpen, setHelpOpen] = useState(false);
    const { user } = useAuth()
    const router = useRouter()
    const { data, isValidating } = useSwr(!user?._id ? `` : `order/${router?.query?.id}`)
    const item = data?.data?.data
    const quantity = item?.product?.map((pre: any) => pre?.quantity)
    const totalQuantity = quantity?.reduce((total: any, quantity: any) => total + quantity, 0)
    const orderStatuses = [
        {
            id: "1",
            title: "Received",
            destination: ["INITIATE", "PICKED", "TRANSITS", "PROCESSING", "COMPLETED"]?.includes(item?.orderStatus),
            img: "/orderstatus/rcv.png",
            message: ["INITIATE", "PICKED", "TRANSITS", "PROCESSING", "COMPLETED"]?.includes(item?.orderStatus),
            status: "Your order has  Confirmed",
            processing: ["PICKED", "TRANSITS", "PROCESSING", "COMPLETED"]?.includes(item?.orderStatus),
        },

        {
            id: "2",
            title: "Picked",
            destination: ["PICKED", "TRANSITS", "PROCESSING", "COMPLETED"]?.includes(item?.orderStatus),
            img: "/orderstatus/pick.png",
            message: ["PICKED", "TRANSITS", "PROCESSING", "COMPLETED"]?.includes(item?.orderStatus),
            status: "Your order has been picked up by your courier partner",
            processing: ["TRANSITS", "PROCESSING", "COMPLETED"]?.includes(item?.orderStatus),
        },
        {
            id: "3",
            title: "Transit",
            destination: ["TRANSITS", "PROCESSING", "COMPLETED"]?.includes(item?.orderStatus),
            img: "/orderstatus/transit.png",
            message: ["TRANSITS", "PROCESSING", "COMPLETED"]?.includes(item?.orderStatus),
            status: "Your order is on its way to customers address",
            processing: ["PROCESSING", "COMPLETED"]?.includes(item?.orderStatus),
        },
        {
            id: "4",
            title: "Out For Delivery",
            destination: ["PROCESSING", "COMPLETED"]?.includes(item?.orderStatus),
            img: "/orderstatus/out.png",
            message: ["PROCESSING", "COMPLETED"]?.includes(item?.orderStatus),
            status: "The courier executive  is on the way to your doorstep",

            processing: ["COMPLETED"]?.includes(item?.orderStatus),
        },
        {
            id: "5",
            title: "Reached Location",
            destination: ["COMPLETED"]?.includes(item?.orderStatus),
            img: "/orderstatus/location.png",
            message: item?.orderStatus === "COMPLETED",
            status: "Your order has reached your Destination",
        },
    ];

    return (
        <PublicLayout title="Order Details | PrintBrix">
            <section

                className="main-container py-10 w-full h-full flex flex-col gap-5 justify-center"
            >
                <div className="flex gap-1 items-center p-1 text-xs text-gray-500 font-semibold font-sub ">
                    <Link
                        href={"/my-account"}
                        className="flex items-center gap-1 hover:text-blue-500"
                    >
                        My Account
                    </Link>
                    <IoChevronForwardSharp />
                    <Link
                        href={"/my-account/orders"}
                        className="flex items-center gap-1 hover:text-blue-500"
                    >
                        My Orders
                    </Link>
                    <IoChevronForwardSharp />
                    <p>Id:{item?._id}</p>
                </div>
                <article className="w-full bg-white rounded p-7 text-gray-800 font-semibold text-sm shadow-[0px_0px_4px_1px_#00000024] flex      md:items-center md:justify-between flex-col gap-5 md:flex-row">
                    <p className="text-[1rem]">Order id: {item?.orderNo}</p>
                    <p className="flex items-center gap-2">
                        <span>Last Update :</span>
                        <span>{moment(item?.updatedAt).format("llll")}</span>
                    </p>
                </article>
                <article className="flex lg:flex-row flex-col w-full  h-full bg-white shadow-[0px_0px_4px_1px_#00000024] rounded-md">
                    <div className=" flex flex-col justify-center gap-3 lg:w-3/4  w-full p-6 md:border-r-[1px] border-b-2 h-full ">
                        <p className="font-bold font-sub ">Delivery Address</p>
                        <p className=" text-gray-800 font-semibold text-[1rem]">
                            {item?.addresses?.name}
                        </p>
                        <p className="font-sub text-gray-500">
                            {item?.addresses?.landmark}, {item?.addresses?.address} ,{item?.addresses?.city} City - {item?.addresses?.pincode}, {item?.addresses?.state}
                        </p>
                        <p className="flex flex-col ">
                            <span className=" text-gray-800 font-semibold text-[1rem]">
                                Phone number
                            </span>
                            <span className="font-sub text-gray-500">
                                {item?.addresses?.mobileNo}
                            </span>
                        </p>
                        <p className=" text-sm text-gray-400">
                            This Order is also tracked by +91 {item?.addresses?.mobileNo}
                        </p>
                    </div>
                    <div className="flex flex-col gap-5 lg:w-1/2 w-full p-6 md:border-r-[1px] border-b-2  ">
                        <p className="font-bold font-sub ">More actions</p>
                        <map className="flex justify-between items-center">
                            <span className="flex gap-3 items-center">
                                <img
                                    src="/invoice.png"
                                    className="object-contain w-8 h-8"
                                    alt=""
                                />
                                <p className="text-sm font-sub">Download invoice</p>
                            </span>
                            <a
                                href="#"
                                download="orderInvoice"
                                className="text-xs font-bold text-red-400 py-2 px-8 border-2 border-red-400 bg-red-50 rounded-md"
                            >
                                Download
                            </a>
                            {
                                item?.isCancelled && <p className="rounded-md py-2 px-8 overflow-hidden text-center flex items-center justify-center relative group cursor-pointer border-2 border-red-400  bg-red-50 text-xs font-bold text-white">
                                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-red-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                    <span className="relative text-red-500 transition duration-300 group-hover:text-white ease font-semibold text-center">
                                        Cancel
                                    </span>
                                </p>
                            }

                        </map>
                    </div>
                </article>

                <article className="w-full bg-white rounded p-5 gap-5 md:gap-8 text-gray-800 font-semibold text-sm shadow-[0px_0px_4px_1px_#00000024] flex md:items-center md:justify-between flex-col md:flex-row ">
                    <aside className="flex items-center gap-3 md:w-1/5">
                        <span className="w-24 h-24">
                            <img
                                src="/orderstatus/out.png"
                                className=" w-full h-full object-contain"
                                alt=""
                            />
                        </span>
                        <span className="flex flex-col gap-1">
                            <p className=" font-semibold text-[1rem] text-gray-800">
                                Order Info
                            </p>
                            <p className=" text-xs text-gray-500 font-normal">
                                Seller:Terracotta Craft Online Services !
                            </p>
                            <p className=" text-xs text-gray-500 font-normal">Total Quantity: {totalQuantity}</p>
                            <p className=" font-semibold text-sm text-gray-800">
                                Total: ₹{item?.amount?.totalSaleAmount}
                            </p>
                        </span>
                    </aside>

                    <aside className="flex flex-col gap-5 md:w-[70%] w-full">
                        <p className=" text-gray-800 font-semibold text-xl">Order Status</p>
                        <div className=" w-full  h-full flex flex-col md:flex-row gap-5   items-start">
                            {orderStatuses.map((curEle: OrderStatusProps, index: number) => {
                                return (
                                    <ProductCard key={curEle.id} item={curEle} index={index} />
                                );
                            })}
                        </div>
                    </aside>

                    <aside
                        onClick={() => setHelpOpen(!helpOpen)}
                        className="flex items-center justify-center gap-1 cursor-pointer text-primary md:w-[10%]"
                    >
                        <AiFillQuestionCircle className=" text-xl" />
                        <span>Need Help?</span>
                    </aside>
                    {/* help modal start */}
                    {helpOpen && (
                        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-[9999]">
                            <div className="p-4 rounded-md  w-[38rem] h-fit  relative">
                                <p
                                    onClick={() => setHelpOpen(!helpOpen)}
                                    className=" absolute md:-top-3 -top-8 md:-right-7 -right-0 cursor-pointer "
                                >
                                    <FaX className=" font-bold p-2 rounded-full border-2 border-white text-white text-4xl" />
                                </p>
                                <div className=" w-full h-full bg-white   rounded-lg mb-2 flex flex-col overflow-y-auto scroll p-5">
                                    <Formik
                                        initialValues={{
                                            subject: "",
                                            message: "",
                                        }}
                                        validationSchema={validationSchema}
                                        onSubmit={(values) => {
                                            // Handle form submission here
                                            console.log(values);
                                        }}
                                    >
                                        {({ errors }) => (
                                            <Form className="flex flex-col gap-3 w-full ">
                                                <p className="text-[1rem] text-gray-600 pb-4 font-medium text-xl text-center">
                                                    Our Support Team Is Here To Help You 24 x 7
                                                </p>

                                                <Field
                                                    type="text"
                                                    name="subject"
                                                    className={`w-full rounded-md ring-1 outline-none p-4 font-light text-sm focus:ring-1 ${errors.subject
                                                        ? "ring-red-500"
                                                        : "ring-gray-300 hover:ring-black"
                                                        }`}
                                                    placeholder="Enter subject"
                                                />
                                                <ErrorMessage
                                                    name="subject"
                                                    component="div"
                                                    className="text-red-500 font-light"
                                                />
                                                <Field
                                                    as="textarea"
                                                    type="text"
                                                    name="message"
                                                    className={`w-full rounded-md ring-1 outline-none p-4 font-light text-sm focus:ring-1 ${errors.message
                                                        ? "ring-red-500"
                                                        : "ring-gray-300 hover:ring-black "
                                                        }`}
                                                    placeholder="Message"
                                                />
                                                <ErrorMessage
                                                    name="message"
                                                    component="div"
                                                    className="text-red-500 font-light"
                                                />

                                                {/* Repeat similar pattern for other fields */}

                                                <button
                                                    type="submit"
                                                    className="rounded-md w-full px-6 py-3 overflow-hidden relative group cursor-pointer border-2 font-medium bg-primary text-white"
                                                >
                                                    <span className="absolute w-full h-0 transition-all duration-300 origin-center rotate-45 -translate-x-52 bg-gradient-to-r from-cyan-500 to-blue-500 top-1/2 group-hover:h-96 group-hover:-translate-y-52 ease"></span>
                                                    <span className="relative text-white transition duration-300 group-hover:text-white ease text-[1rem]">
                                                        SEND MESSAGE
                                                    </span>
                                                </button>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* help modal End */}
                </article>
            </section>
        </PublicLayout>
    );
};
const ProductCard = ({
    item,
    index,
}: {
    item: OrderStatusProps;
    index: number;
}) => {
    return (
        <motion.div
            layout
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: index < 5 ? index * 0.28 : 1 }}
            exit={{ scale: 0, opacity: 0 }}
            viewport={{ once: true }}
            key={index}
            className=" w-full justify-start flex relative md:flex-col flex-row md:gap-3 gap-10"
        >
            {item.processing && (
                <p className="top-4 md:w-full md:h-2 h-full w-1 md:border-b-2 border-l-2 z-30 border-dashed border-green-400 absolute  left-5"></p>
            )}

            <span className=" flex z-40">
                <img
                    key={item.id}
                    className="h-10 w-10 object-contain"
                    src={item.img}
                    alt=""
                    style={{
                        filter: item.destination ? "grayscale(0%)" : "grayscale(100%)",
                    }}
                />
            </span>
            <span className="flex flex-col">
                <p className="  text-[0.8rem] font-bold">{item?.title}</p>
                <p className="text-[0.7rem] font-normal">
                    {item.message && item?.status}
                </p>
            </span>
        </motion.div>
    );
};
export default MyOrder;
