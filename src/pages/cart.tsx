import React, { Fragment } from "react";
import Link from "next/link";
import { PublicLayout } from "@/layouts";
import { HiMinusSmall, HiMiniPlusSmall } from "react-icons/hi2";
import { toast } from "react-toastify";

const Cart = () => {
  const initialCartData = [
    {
      id: 1,
      imageSrc: "/product/p3.webp",
      productName: "Multi-purpose Stainless Steel Bottle",
      description: "color: Black",
      oldprice: 89.99,
      newprice: 79.99,
      discount: 10,
      quantity: 1,
    },
    {
      id: 2,
      imageSrc: "/product/p2.webp",
      productName: "Fully customized printed T-shirt Black",
      description: "size: L",
      oldprice: 189.99,
      newprice: 159.99,
      discount: 5,
      quantity: 2,
    },
    {
      id: 3,
      imageSrc: "/product/p1.webp",
      productName: "Fully customized printed Hoodie Black",
      description: "Size: xl",
      oldprice: 289.99,
      newprice: 219.99,
      discount: 20,
      quantity: 3,
    },
    // Add more items as needed
  ];

  return (
    <PublicLayout title="Cart | Terracotta Craft">
      <section className="main-container py-10 ">
        <main className=" w-full flex flex-col gap-2">
          <h1 className=" text-gray-800 text-2xl font-semibold px-2">
            My Cart (3)
          </h1>

          <div className="w-full flex flex-col md:flex-row md:gap-10 gap-5 items-start ">
            {/* Left Part */}
            <div className="lg:w-[70%] md:w-[80%] w-full  flex flex-col gap-3">
              <hr />
              {initialCartData.map((curEle: any, index: number) => {
                return (
                  <Fragment key={curEle?.id}>
                    <CartCard item={curEle} index={index} />
                    <hr />
                  </Fragment>
                );
              })}
            </div>

            <div className="md:w-[50%] w-full p-2 sticky top-20">
              <div className=" flex flex-col gap-4">
                <h2 className="text-2xl text-gray-500 font-semibold uppercase">
                  Price Details
                </h2>
                <hr />
                <div className="flex justify-between">
                  <span>Price ({initialCartData.length} items)</span>
                  <span>₹3233</span>
                </div>
                <div className="flex justify-between text-green-500">
                  <span>Total Discount</span>
                  <span>-₹463.00</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg">
                  <span className="font-semibold">Total Amount</span>
                  <span className="font-semibold">₹2770</span>
                </div>
                <hr />
                <Link href="/checkout" className=" flex justify-end">
                  <button className="btn-primary lg:py-2 py-1 px-4 lg:px-8 rounded-lg   uppercase lg:text-lg  font-medium">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </section>
    </PublicLayout>
  );
};

const CartCard = ({ item, index }: { item: any; index: number }) => {
  return (
    <article className=" w-full flex flex-col gap-3 md:items-start items-center justify-start  lg:px-10">
      <div className=" flex flex-col md:flex-row md:gap-7 gap-5 items-center ">
        <div className=" flex flex-col gap-3 items-center">
          <Link
            href={`/products/${item?.productVariant?.productId}?variantId=${item?.productVariantId}`}
            className="md:h-32 h-fit md:w-24 w-40 bg-slate-100 p-2"
          >
            <img
              src={item?.imageSrc || "/home/productimgenotavailable.jpg"}
              className=" h-full w-full object-contain"
              alt=""
            />
          </Link>
          <p className=" flex  items-center gap-8 bg-slate-100 p-1 rounded-full">
            <HiMinusSmall
              //   onClick={handleDecreaseQuantity}
              className="p-2 bg-white rounded-full text-orange-600 text-4xl cursor-pointer"
            />

            {/* {isValidating ? (
              <div
                className="w-7 h-7 rounded-full animate-spin
                    border-y border-solid border-green-500 border-t-transparent shadow-md"
              ></div>
            ) : ( */}
            <span>{item?.quantity}</span>
            {/* )} */}

            <HiMiniPlusSmall
              //   onClick={handleIncreaseQuantity}
              className="p-2 bg-white rounded-full text-orange-600 text-4xl cursor-pointer"
            />
          </p>
        </div>

        <span className=" flex flex-col gap-3">
          <p className="flex flex-col">
            <span className="text-xl text-gray-800 font-semibold">
              {item?.productName}
            </span>
            <span className="text-sm">{item?.description}</span>
          </p>
          <p className="flex flex-row md:items-center gap-4">
            <span className="text-sm line-through">₹{item?.oldprice}</span>
            <span className="text-gray-800 font-semibold text-lg">
              ₹{item?.newprice}
            </span>
            <span className="text-center px-4 py-1 text-white bg-green-500 rounded-md text-sm font-semibold">
              {item?.discount}% Off
            </span>
          </p>
          <p
            // onClick={handleRemoveProductFromCart}
            className=" font-semibold text-orange-600 uppercase cursor-pointer"
          >
            Remove
          </p>
        </span>
      </div>
    </article>
  );
};
export default Cart;
