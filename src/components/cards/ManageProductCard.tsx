import { motion } from "framer-motion";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";

const ManageProductCard = ({
    item,
    index,
    openViewDetails,
    setOpenViewDetails,
    openVariant,
    setOpenVariant,
    setVariants,
}: {
    item: any;
    index: number;
    openViewDetails: boolean;
    setOpenViewDetails: any;
    openVariant: boolean;
    setOpenVariant: any;
    setVariants: any;
}) => {
    return (
        <motion.div
            layout
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: index < 5 ? index * 0.28 : 1 }}
            exit={{ scale: 0, opacity: 0 }}
            viewport={{ once: true }}
            className="relative group md:64 h-full bg-white  border-2 overflow-hidden rounded-lg p-1 shadow-lg"
        >
            <div className="flex flex-col gap-2 justify-center absolute top-4 -right-32 group-hover:right-4 duration-300 z-50 ">
                <p className="font-bold cursor-pointer duration-500 text-xl text-primary bg-gray-200 p-2 rounded-md hover:bg-secondary hover:text-white">
                    <FiEdit />
                </p>
                <p className="font-bold cursor-pointer duration-500 text-xl text-primary bg-gray-200 p-2 rounded-md hover:bg-secondary hover:text-white">
                    <MdOutlineDelete />
                </p>
            </div>

            <Link href={`/products/isInfluncer`}>
                <div className=" md:h-44 h-28  rounded-lg  flex justify-center items-center">
                    <img
                        src={item?.image || "/home/productimgenotavailable.jpg"}
                        alt="product image"
                        className=" w-full h-full object-contain group-hover:scale-110 duration-500"
                    />
                </div>
            </Link>
            <div className="flex flex-col gap-2 p-2">
                <p className="font-bold  text-gray-800 md:text-lg text-sm">
                    {item.title}
                </p>
                <span className="w-full flex flex-col md:flex-row justify-between md:items-center items-start">
                    <span className="flex gap-2 items-center">
                        <p className="md:font-bold font-semibold md:text-[1rem] text-sm text-primary">
                            ₹{item.sellingPrice}
                        </p>
                        <p className=" line-through md:font-bold text-xs">
                            ₹{item.regularPrice}
                        </p>
                    </span>
                    <p className=" uppercase text-xs font-semibold bg-green-400 text-white px-2 py-1 rounded-md">
                        instock
                    </p>
                </span>
                <div className="flex gap-2 items-center">
                    <ul className="flex text-sm gap-1 items-center text-amber-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </ul>
                    <span className="text-xs md:font-bold text-gray-400">
                        {item.reviews} reviews
                    </span>
                </div>

                <div className=" w-full items-center flex gap-2">
                    <p
                        onClick={() => setOpenViewDetails(!openViewDetails)}
                        className="font-semibold tracking-wider cursor-pointer hover:bg-secondary duration-500 text-white bg-primary w-full  py-2 rounded-lg text-center text-sm "
                    >
                        View Details
                    </p>
                    <p
                        onClick={() => {
                            setOpenVariant(!openVariant),
                                setVariants && setVariants([...item?.variant]);
                        }}
                        className="font-semibold tracking-wider cursor-pointer hover:bg-secondary duration-500 text-white bg-primary w-full  py-2 rounded-lg text-center text-sm "
                    >
                        View Variant
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default ManageProductCard;
