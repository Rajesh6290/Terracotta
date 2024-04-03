import {
  AddressDetails,
  LoginDetails,
  OrderSummary,
  Payment,
  ProductPriceDetails,
} from "@/components/checkout";
import { AddAddressForm } from "@/components/form";
import { PublicLayout } from "@/layouts";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Checkout = () => {
  const [orderSummaryOpen, setOrderSummaryOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [addressOpen, setAddressOpen] = useState(true);
  const [capturedScreenshots, setCapturedScreenshots] = useState([]);
  const [productReviewOpen, setProductReviewOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Retrieve capturedScreenshots from local storage
    const storedData = localStorage.getItem("capturedScreenshots");
    if (storedData) {
      setCapturedScreenshots(JSON.parse(storedData));
    }
  }, []);
  const clearLocalStorage = () => {
    localStorage.removeItem("capturedScreenshots");
  };

  // Add an event listener to trigger data removal on page unload
  useEffect(() => {
    window.addEventListener("beforeunload", clearLocalStorage);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("beforeunload", clearLocalStorage);
    };
  }, []);

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
                    />
                  )}
                </div>
                // <AddAddressForm showForm={showForm} setShowForm={setShowForm} />
              )}

              <OrderSummary
                orderSummaryOpen={orderSummaryOpen}
                setOrderSummaryOpen={setOrderSummaryOpen}
                paymentOpen={paymentOpen}
                setPaymentOpen={setPaymentOpen}
              />

              <Payment
                paymentOpen={paymentOpen}
                setPaymentOpen={setPaymentOpen}
              />
            </div>
          </article>
          <article className="md:w-[40%] w-full bg-white">
            <ProductPriceDetails />
          </article>
        </main>
      </section>
    </PublicLayout>
  );
};

export default Checkout;
