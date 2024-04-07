
import CopyToClipboard from "@/components/common/CopyToClipboard";
import CouponPopup from "@/components/common/CouponPopup";
import useSwr from "@/hooks/useSwr";
import { PublicLayout } from "@/layouts";
import AccountLayout from "@/layouts/account";
import Link from "next/link";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";

interface CouponsProps {
    id: number;
    code: string;
    status: string;
    activeDate: string;
    expireDate: string;
}

const Coupons = () => {
    const COUPONS_ARR: CouponsProps[] = [
        {
            id: 1,
            code: "RQYU36DYS30UA",
            status: "Active",
            activeDate: "10/09/2023",
            expireDate: "20/12/2023",
        },
        {
            id: 2,
            code: "RQYU36DYS30UB",
            status: "Active",
            activeDate: "10/09/2023",
            expireDate: "20/12/2023",
        },
        {
            id: 3,
            code: "RQYU36DYS30UC",
            status: "Active",
            activeDate: "10/09/2023",
            expireDate: "20/12/2023",
        },
        {
            id: 4,
            code: "RQYU36DYS30UD",
            status: "Active",
            activeDate: "10/09/2023",
            expireDate: "20/12/2023",
        },
        {
            id: 5,
            code: "RQYU36DYS30UFf",
            status: "Expired",
            activeDate: "10/09/2023",
            expireDate: "20/12/2023",
        },
    ];
    const { data, mutate } = useSwr("coupons");
    console.log("coupon data ===>", data);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const [copiedSymbol, setCopiedSymbol] = useState("");

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <PublicLayout>
            <AccountLayout>
                <aside id="coupons" className="content-item z-10 pb-40">
                    <article className="flex flex-col gap-2 p-4">
                        <p className="font-semibold font-sub text-xl">Available Coupons</p>
                        <div className=" w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                            {COUPONS_ARR.map((cards: any) => (
                                <div
                                    key={cards.id}
                                    className="flex flex-col gap-2 border-2 rounded-lg hover:shadow-[0px_0px_4px_1px_#00000024] duration-500 py-4 px-6"
                                >
                                    <div className=" flex  items-center  justify-between">
                                        <p className=" flex items-center gap-2">
                                            <span className="font-semibold font-sub text-gray-500">
                                                {cards.code}
                                            </span>
                                            <span>
                                                <HiInformationCircle
                                                    className="text-xl text-blue-500 mr-2 hover:text-primary cursor-pointer"
                                                    onClick={openPopup}
                                                />
                                                <CouponPopup
                                                    isOpen={isPopupOpen}
                                                    onClose={closePopup}
                                                    title="Voucher Info"
                                                    message=" Use the above code to get ₹5 off on minimum order above ₹ in your next purchase."
                                                    code={cards.code}
                                                    activeDate={cards.activeDate}
                                                    expireDate={cards.expireDate}
                                                />
                                            </span>
                                            <span>
                                                <p className="text-4xl">{copiedSymbol}</p>
                                                <CopyToClipboard symbol={copiedSymbol} />
                                            </span>
                                        </p>
                                        <p
                                            className={`font-medium
                     ${cards.status === "Active"
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                                }
                     `}
                                        >
                                            {cards.status}
                                        </p>
                                    </div>
                                </div>
                                // <div
                                //   key={cards?.id}
                                //   className={`container relative flex flex-col gap-3 bg-gradient-to-br   text-white p-8 rounded-lg shadow-lg max-w-md mx-auto
                                //   ${
                                //     cards?.isActive
                                //       ? "from-green-100 to-green-300"
                                //       : " bg-gray-100"
                                //   }
                                //   `}
                                // >
                                //   {!cards?.isActive ? (
                                //     <p className=" absolute w-full h-full bg-black/40 left-0 top-0 z-50 rounded-lg flex items-center justify-center ">
                                //       <span className=" font-bold  text-2xl ">Expired</span>
                                //     </p>
                                //   ) : null}
                                //   <p className=" absolute top-0 right-0 py-2 px-3 rounded-bl-md bg-blue-500 text-white text-xs font-semibold">
                                //     {cards?.discount}
                                //     {cards?.discountType === "percentage" ? "%" : "₹"} OFF
                                //   </p>
                                //   <div className="text-xl font-bold  text-gray-800">
                                //     <span className=" font-bold text-secondary">Congrats</span>{" "}
                                //     🎉! You have won a Coupon.
                                //   </div>

                                //   <div className="text-base  text-gray-600">
                                //     {cards?.description}
                                //   </div>
                                //   <div className="bg-white text-gray-800 rounded-lg px-4 py-2 flex items-center justify-between">
                                //     <span className="text-xl font-semibold text-gray-400 uppercase">
                                //       {cards?.code}
                                //     </span>
                                //     {/* <FaRegCopy className=" text-2xl cursor-pointer" /> */}
                                //     <CopyToClipboard symbol={copiedSymbol} />
                                //   </div>
                                //   <div className="text-sm flex flex-col gap-1 ">
                                //     <p className=" text-gray-800">
                                //       Min Order Amount :
                                //       <span className="font-semibold">
                                //         {cards?.minOrderAmount}
                                //       </span>
                                //     </p>
                                //     <p className=" text-gray-800">
                                //       Valid upto:
                                //       <span className="font-semibold">{cards?.expiresAt}</span>
                                //     </p>

                                //     <p className=" text-gray-800">
                                //       Terms and conditions apply.
                                //     </p>
                                //   </div>
                                // </div>
                            ))}
                        </div>
                    </article>
                </aside>
            </AccountLayout>
        </PublicLayout>
    );
};
export default Coupons;
