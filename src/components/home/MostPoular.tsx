import useSwr from "@/hooks/useSwr";
import Link from "next/link";
import ProductCard from "./ProductCard";

const MostPopular = () => {
  const { data, isValidating } = useSwr(`product?sortBy=desc`);
  const item = data?.data?.data;
  return (
    <section className=" bg-slate-50  w-full top-spacing py-10">
      <div className="main-container  flex flex-col gap-10 w-full ">
        <article className="flex flex-col gap-1 items-center">
          <div className="w-full text-center">
            <h2 className="title">
              Discover Our Most Popular
              <span className=" text-gray-500"> Products</span>{" "}
            </h2>
          </div>
          <p className="h-1 w-48 bg-primary rounded-full"></p>
        </article>
        <div className=" w-full h-full grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-5 ">
          {isValidating ? (
            <>
              <Skelton />
              <Skelton />
              <Skelton />
              <Skelton />
              <Skelton />
              <Skelton />
              <Skelton />
              <Skelton />
              <Skelton />
              <Skelton />
            </>
          ) : (
            item
              ?.slice(0, 10)
              ?.map((curEle: any) => (
                <ProductCard item={curEle} key={curEle.id} />
              ))
          )}
        </div>
        <article className="flex items-center justify-center">
          <Link
            href="/products"
            className="rounded-full px-6 py-3 overflow-hidden relative group cursor-pointer border-2 font-medium bg-primary text-white"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gradient-to-r from-primary/10  to-primary/30 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-white transition duration-300 group-hover:text-white ease font-semibold">
              View All Products
            </span>
          </Link>
        </article>
      </div>
    </section>
  );
};

export default MostPopular;

export const Skelton = () => {
  return (
    <div className="relative bg-slate-100 h-full group overflow-hidden  w-full flex flex-col gap-2 justify-between items-center  shadow-[0px_0px_4px_0px_#00000024] rounded-lg p-4">
      <div className=" w-full flex  flex-col gap-4">
        <Link href={``}>
          <div className=" w-full object-contain bg-slate-200 animate-pulse md:h-36 h-24 object-fil rounded-lg cursor-pointer group-hover:scale-105 duration-300 "></div>
        </Link>
        <div className="flex w-full flex-col gap-2">
          <div className="flex md:flex-row flex-col md:items-center items-start justify-between">
            <p className="flex items-center gap-1">
              <span className="w-48 p-2 rounded bg-slate-200 animate-pulse "></span>
              {/* <span className="w-16 p-1 rounded bg-gray-200 animate-pulse"></span> */}
            </p>
            {/* <p className="w-10 p-2 rounded bg-slate-200 animate-pulse"></p> */}
          </div>
          <p className="w-40 p-2 bg-slate-200 animate-pulse rounded "></p>
          <span className="w-32 p-2 rounded bg-slate-200 animate-pulse"></span>
          <div className="flex justify-between items-center  ">
            <p className="flex flex-col sm:flex-row items-center gap-1">
              <span className="w-20 p-2 rounded bg-slate-200 animate-pulse"></span>
              <span className="w-20 p-2 rounded bg-slate-200 animate-pulse"></span>
            </p>
            <Link href="/cart">
              <p className=" w-10 h-10 rounded-md bg-slate-200 animate-pulse"></p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
