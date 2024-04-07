
import useAuth from "@/hooks/useAuth";
import { PublicLayout } from "@/layouts";
import AccountLayout from "@/layouts/account";
import React, { useState } from "react";
import { BiCoin } from "react-icons/bi";
import { BsFillArrowDownLeftCircleFill } from "react-icons/bs";
import {
    FaArrowLeftLong,
    FaMoneyBillTrendUp,
    FaWallet,
    FaX,
} from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import {
    MdOutlineCall,
    MdOutlineCallMade,
    MdOutlineCallMissedOutgoing,
    MdOutlineCallReceived,
} from "react-icons/md";

interface WalletProps {
    id: number;
    title: string;
    date: string;
    price: string;
    transactionid: string;
}

const Wallet = () => {
    const { user } = useAuth();
    const [transactionOpen, setTransactionOpen] = useState(false);
    const [selectedTransaction, setSelectedTransaction] =
        useState<WalletProps | null>(null);
    const WALLET_ARR: WalletProps[] = [
        {
            id: 1,
            title: "CREDITED",
            date: "1st Jun 2023 , 11.00 AM",
            price: "29",
            transactionid: "64dc73791afd3b05b1c7363f",
        },
        {
            id: 2,
            title: "DEBITED",
            date: "1st Jun 2023 , 11.00AM",
            price: "50",
            transactionid: "64dc73791afd3b05b1c7363f",
        },
        {
            id: 3,
            title: "CREDITED",
            date: "1st Jun 2023 , 11.00AM",
            price: "36",
            transactionid: "64dc73791afd3b05b1c7363f",
        },
        {
            id: 4,
            title: "CREDITED",
            date: "1st Jun 2023 , 11.00AM",
            price: "45",
            transactionid: "64dc73791afd3b05b1c7363f",
        },
    ];
    const openModal = (transaction: WalletProps) => {
        setSelectedTransaction(transaction);
        setTransactionOpen(true);
    };

    const closeModal = () => {
        setSelectedTransaction(null);
        setTransactionOpen(false);
    };

    return (
        <PublicLayout>
            <AccountLayout>
                <article className="grid md:grid-cols-3 grid-cols-1 gap-4">
                    <div className="w-full h-[8rem] p-3  bg-gradient-to-br from-violet-200 to-purple-300 bg-opacity-75 rounded-lg shadow-lg flex justify-between items-center">
                        <p className=" w-20 h-20">
                            <img
                                src="/home/commission.png"
                                className=" w-full h-full object-contain"
                                alt=""
                            />
                        </p>
                        <span className=" flex flex-col items-end gap-4">
                            <p className=" text-xl font-semibold text-white ">Commission</p>
                            <p className="font-semibold text-2xl  text-white">₹ 0</p>
                        </span>
                    </div>
                    <div className="w-full h-[8rem] p-3  bg-gradient-to-br from-violet-200 to-purple-300 bg-opacity-75 rounded-lg shadow-lg flex justify-between items-center ">
                        <p className=" w-20 h-20">
                            <img
                                src="/home/connections.png"
                                className=" w-full h-full object-contain"
                                alt=""
                            />
                        </p>
                        <span className=" flex flex-col items-end gap-4">
                            <p className=" text-xl font-semibold text-white ">
                                Referral Amount
                            </p>
                            <p className="font-semibold text-2xl  text-white">
                                ₹ {user?.referralAmount}
                            </p>
                        </span>
                    </div>
                    <div className="w-full h-[8rem] p-3  bg-gradient-to-br from-violet-200 to-purple-300 bg-opacity-75 rounded-lg shadow-lg flex justify-between items-center ">
                        <p className=" w-16 h-16">
                            <img
                                src="/home/wallet.png"
                                className=" w-full h-full object-contain"
                                alt=""
                            />
                        </p>
                        <span className=" flex flex-col items-end gap-4">
                            <p className=" text-xl font-semibold text-white ">Total Amount</p>
                            <p className="font-semibold text-2xl  text-white">
                                ₹ {user?.wallet}
                            </p>
                        </span>
                    </div>
                </article>
                <div>
                    <h2 className=" py-8 font-semibold text-lg">Transaction History</h2>
                    <div className="table-container shadow-lg"></div>
                </div>
                <aside className=" w-full h-full flex flex-col gap-2 bg-white  ">
                    {WALLET_ARR.map((item) => {
                        return (
                            <article
                                key={item.id}
                                onClick={() => openModal(item)}
                                className="w-full h-full group p-3 flex justify-between items-center bg-slate-100 rounded-xl cursor-pointer hover:bg-slate-200 duration-500"
                            >
                                <div className=" flex items-center gap-5">
                                    <p
                                        className={`p-2 text-white  rounded-full w-10 h-10 flex items-center justify-center 
                        ${item.title === "CREDITED"
                                                ? "bg-green-500"
                                                : "bg-red-500"
                                            }
                        `}
                                    >
                                        {item.title === "CREDITED" ? (
                                            <MdOutlineCallReceived className=" text-2xl" />
                                        ) : (
                                            <MdOutlineCallMade className=" text-2xl" />
                                        )}
                                    </p>
                                    <span className=" flex flex-col gap-1">
                                        <p
                                            className={` uppercase text-green-500 font-semibold text-[1rem]
                          
                          ${item.title === "CREDITED"
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                                }
                          
                          `}
                                        >
                                            {item.title}
                                        </p>
                                        <p className=" text-sm font-medium">{item.date}</p>
                                    </span>
                                </div>
                                <p className="font-medium text-gray-500 invisible group-hover:visible hidden md:block">
                                    Click to see transaction Details
                                </p>
                                <div className="flex flex-col ">
                                    <p
                                        className={` text-[1.2rem] font-medium
                    ${item.title === "CREDITED"
                                                ? "text-green-500"
                                                : "text-red-500"
                                            }
                  
                  `}
                                    >
                                        {item.title === "CREDITED" ? "+" : "-"}&nbsp;₹{item.price}
                                    </p>
                                    <p className="text-[0.8rem] font-semibold text-gray-800">
                                        {item.title === "CREDITED" ? "Received" : "Outgoing"}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </aside>
                {transactionOpen && (
                    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-[9999]">
                        <div className="p-4 rounded-md  w-[41rem] h-fit  relative">
                            <p
                                onClick={() => closeModal()}
                                className=" absolute md:-top-3 -top-8 md:-right-7 -right-0 cursor-pointer "
                            >
                                <FaX className=" font-bold p-2 rounded-full border-2 border-white text-white text-4xl" />
                            </p>

                            <div className="p-4 rounded-md w-[40rem] h-fit relative">
                                <div className="w-full h-full bg-[#f5ede7] rounded flex flex-col gap-3 overflow-y-auto scroll p-8">
                                    <div
                                        className={` p-4 flex gap-7 text-white items-center
                ${selectedTransaction!.title === "CREDITED"
                                                ? "bg-green-500"
                                                : "bg-red-500"
                                            }
                `}
                                    >
                                        <span onClick={() => closeModal()}>
                                            <FaArrowLeftLong className="text-2xl cursor-pointer" />
                                        </span>
                                        <p className="flex flex-col gap-1">
                                            <span className="text-lg md:text-2xl">
                                                Transaction Successful
                                            </span>
                                            <span>{selectedTransaction!.date}</span>
                                        </p>
                                    </div>
                                    <div className="w-full h-full bg-[#f5ede7] rounded shadow-[0px_0px_4px_1px_#00000024] p-4 flex flex-col gap-4">
                                        <p className="text-lg text-gray-700">
                                            {selectedTransaction!.title === "CREDITED"
                                                ? "Money add By coupon."
                                                : "Withdraw."}
                                        </p>
                                        <p className="w-full h-[0.06rem] bg-gray-300"></p>
                                        <p className="flex gap-4 items-center">
                                            <span className="w-10 h-10">
                                                {selectedTransaction!.title === "CREDITED" ? (
                                                    <img
                                                        src="/home/credited.png"
                                                        className=" w-full h-full object-contain"
                                                        alt=""
                                                    />
                                                ) : (
                                                    <img
                                                        src="/home/debited.png"
                                                        className=" w-full h-full object-contain"
                                                        alt=""
                                                    />
                                                )}
                                            </span>
                                            <span className="text-xl text-gray-700">
                                                Transfer Details
                                            </span>
                                        </p>
                                        <p className="flex flex-col text-[1rem] text-gray-700">
                                            <span>Transaction ID</span>
                                            <span>{selectedTransaction!.transactionid}</span>
                                        </p>
                                        <p className="flex items-center justify-between">
                                            <span
                                                className={`text-lg ${selectedTransaction!.title === "CREDITED"
                                                        ? "text-green-600"
                                                        : "text-red-500"
                                                    } uppercase`}
                                            >
                                                {selectedTransaction!.title}
                                            </span>
                                            <span className="text-xl text-gray-800 font-medium">
                                                ₹ {selectedTransaction!.price}
                                            </span>
                                        </p>
                                        <p className="text-gray-700 font-medium">
                                            {selectedTransaction!.title === "CREDITED"
                                                ? "You got a scratch card and get a coupon during sale."
                                                : "User is used this money to buy product."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </AccountLayout>
        </PublicLayout>
    );
};

export default Wallet;
