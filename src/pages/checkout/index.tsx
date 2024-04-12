import {
    AddressDetails,
    LoginDetails,
    OrderSummary,
    Payment,
    ProductPriceDetails,
} from "@/components/checkout";
import Button from "@/components/core/Button";
import Congratulation from "@/components/core/Congratulation";
import { AddAddressForm } from "@/components/form";
import useAuth from "@/hooks/useAuth";
import useSwr from "@/hooks/useSwr";
import { PublicLayout } from "@/layouts";
import { Dialog } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
const Checkout = () => {
    const { user } = useAuth()
    const router = useRouter()
    const [orderSummaryOpen, setOrderSummaryOpen] = useState(false);
    const [paymentOpen, setPaymentOpen] = useState(false);
    const [addressOpen, setAddressOpen] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const [checkedAddress, setCheckedAddress] = useState<string>("")
    const { data: address, mutate: addressMutated } = useSwr(`address`);
    const AllAddress = address?.data?.data


    const { data, isValidating, mutate: cartMutate } = useSwr(!user?._id ? `` : `cart`)
    const AllCartData = data?.data?.data
    const amountData = AllCartData?.map((data: any) => {
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

    return (
        <PublicLayout title="Checkout | Terracotta Craft">
            <Congratulations open={orderConfirmed} close={setOrderConfirmed} />
            <section className=" bg-gray-100">
                <main className="main-container py-6 w-full flex flex-col md:flex-row gap-5 items-start">
                    <article className="md:w-[70%] rounded-lg w-full">
                        <div className="w-full flex flex-col gap-5">
                            <LoginDetails />
                            <AddressDetails
                                addressOpen={addressOpen}
                                setAddressOpen={setAddressOpen}
                                orderSummaryOpen={orderSummaryOpen}
                                setOrderSummaryOpen={setOrderSummaryOpen}
                                AllAddress={AllAddress}
                                mutate={addressMutated}
                                checkedAddress={checkedAddress}
                                setCheckedAddress={setCheckedAddress}
                            />
                            {addressOpen && (
                                <div className="flex flex-col gap-5">
                                    {!showForm ? (
                                        <button
                                            onClick={() => setShowForm(!showForm)}
                                            className="flex bg-white items-center gap-4 px-4 font-semibold w-full py-4  outline-none p-2 text-primary rounded-md ring-gray-300 "
                                        >
                                            <AiOutlinePlus />
                                            Add New Address
                                        </button>
                                    ) : (
                                        <AddAddressForm
                                            setOpen={() => setShowForm(false)}
                                            mutate={addressMutated}
                                        />
                                    )}
                                </div>
                            )}

                            <OrderSummary
                                orderSummaryOpen={orderSummaryOpen}
                                setOrderSummaryOpen={setOrderSummaryOpen}
                                paymentOpen={paymentOpen}
                                setPaymentOpen={setPaymentOpen}
                                item={AllCartData}
                                mutate={cartMutate}
                                isValidating={isValidating}
                            />

                            <Payment
                                paymentOpen={paymentOpen}
                                setPaymentOpen={setPaymentOpen}
                                setOrderConfirmed={setOrderConfirmed}
                            />
                        </div>
                    </article>
                    <article className="md:w-[40%] w-full bg-white">
                        <ProductPriceDetails totalAmount={totalAmount} totalSaleAmount={totalSaleAmount} totalDiscount={totalDiscount} allCart={AllCartData} />
                    </article>
                </main>
            </section>
        </PublicLayout>
    );
};

export default Checkout;
const Congratulations = ({ open, close }: any) => {
    return (
        <Dialog open={open} maxWidth="lg" PaperProps={{
            style: {
                borderRadius: 18, // Adjust the value according to your preference
            },
        }}>
            <div className="md:w-[34rem] w-full h-fit md:p-10 p-5 bg-white flex flex-col gap-5 items-center">
                <Congratulation />
                <p className="md:text-3xl text-lg font-semibold text-gray-900">Congrats! Your Order Placed...</p>
                <p className=" text-gray-600">Thank you for Shopping. Visit again!</p>
                <Button onClick={() => close(false)} className="px-6 py-1.5 text-lg font-semibold">
                    Okay
                </Button>
            </div>
        </Dialog>
    )
}