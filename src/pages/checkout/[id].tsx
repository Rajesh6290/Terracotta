import {
    AddressDetails,
    LoginDetails,
    OrderSummary,
    Payment,
    ProductPriceDetails,
} from "@/components/checkout";
import { AddAddressForm } from "@/components/form";
import useAuth from "@/hooks/useAuth";
import useSwr from "@/hooks/useSwr";
import { PublicLayout } from "@/layouts";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
const Checkout = () => {
    const { user } = useAuth()
    const router = useRouter()
    const [orderSummaryOpen, setOrderSummaryOpen] = useState(false);
    const [paymentOpen, setPaymentOpen] = useState(false);
    const [addressOpen, setAddressOpen] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [checkedAddress, setCheckedAddress] = useState<string>("")
    const { data: address, mutate: addressMutated, isValidating: addressValidate } = useSwr(`address`);
    const AllAddress = address?.data?.data


    const { data, isValidating, mutate: cartMutate } = useSwr(!user?._id ? `` : `cart/getById/${router?.query?.id}`)
    const AllCartData = data?.data?.data
    const totalAmount = AllCartData?.[0]?.product?.price * AllCartData?.[0]?.quantity
    const totalSaleAmount = AllCartData?.[0]?.product?.salePrice * AllCartData?.[0]?.quantity
    const totalDiscount = Math.ceil(((totalAmount - totalSaleAmount) / totalAmount) * 100)

    return (
        <PublicLayout title="Checkout | Terracotta Craft">
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
                                addressValidate={addressValidate}
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
                                checkedAddress={checkedAddress}
                                item={AllCartData}
                                totalAmount={totalAmount}
                                totalSaleAmount={totalSaleAmount}
                                totalDiscount={totalDiscount}
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
