import { PublicLayout } from "@/layouts";
import Link from "next/link";

const Wishlist = () => {
  return (
    <PublicLayout title={`wishlist | Terracotta Craft`}>
      <section className="main-container py-10 flex flex-col gap-10 w-full justify-center">
        <article className="flex flex-col gap-1 items-center">
          <div className="w-full text-center">
            <h2 className="title">
              My
              <span className=" text-gray-500"> Wishlist</span>{" "}
            </h2>
          </div>
          <p className="h-1 w-48 bg-secondary rounded-full"></p>
        </article>
        <article className="w-full flex flex-col gap-5">
          {/* {data?.data?.data?.wishList.map((curEle: any) => { */}
          return <WishlistCard />;{/* })} */}
        </article>
      </section>
    </PublicLayout>
  );
};
const WishlistCard = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center bg-white shadow-[0px_0px_6px_2px_#00000024] rounded">
      <div className=" flex md:flex-row flex-row-reverse items-center gap-1">
        {/* <span className="p-3">
                <MdDelete className="text-red-500 text-2xl cursor-pointer" />
              </span> */}
        <p className="hidden md:block h-32 w-[0.05rem] bg-gray-300"></p>
        <Link href={`products`} className="w-28 h-28 p-3">
          <img
            src="/product/p1.webp"
            className="w-full h-full object-contain"
            alt=""
          />
        </Link>
        <p className=" hidden md:block h-32 w-[0.05rem] bg-gray-300"></p>
        <span className="flex flex-col gap-2 p-3">
          <p className="text-xl text-orange-600 font-semibold">
            m.asn dfklan fa f alnfs l f
          </p>
          <p className="flex items-end gap-2">
            <span className="font-semibold text-gray-600">₹111</span>
            <span className="text-sm  line-through text-gray-400">₹222</span>
            <span className="md:px-4 md:py-1 px-2 py-0.5 bg-green-600 rounded text-white md:text-xs text-[0.5rem]">
              22% OFF
            </span>
          </p>
          <p>234234234</p>
        </span>
      </div>
      <div className="flex gap-1 md:justify-center items-center md:px-20">
        <p className="h-32 w-[0.05rem] bg-gray-300"></p>
        <div className="flex gap-2 flex-col px-3">
          {/* {item?.productVariant?.stock > 0 ? (
            <span className="text-green-500 font-semibold">In Stock</span>
          ) : ( */}
          <span className="text-gray-400 font-semibold">Out of Stock</span>
          {/* )} */}

          <div className="text-white uppercase bg-red-600 px-4 py-2 rounded text-sm  flex items-center gap-5cursor-pointer">
            <span>Remove From Wishlist</span>
            {/* {isLoading ? (
              <div
                className="w-5 h-5 rounded-full animate-spin
                      border-y border-solid border-white border-t-transparent shadow-md"
              ></div>
            ) : null} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Wishlist;
