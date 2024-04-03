import Link from "next/link";
import ProductCard from "./ProductCard";
interface IProduct {
  id: string;
  image: string;
  name: string;
}
const PRODUCT_ARR: IProduct[] = [
  {
    id: "1",
    image: "/product/p1.webp",
    name: "Digital BP Machine",
  },
  {
    id: "1",
    image: "/product/p2.webp",
    name: "Digital BP Machine",
  },
  {
    id: "1",
    image: "/product/p3.webp",
    name: "Digital BP Machine",
  },
  {
    id: "1",
    image: "/product/p4.webp",
    name: "Digital BP Machine",
  },
  {
    id: "1",
    image: "/product/p5.webp",
    name: "Digital BP Machine",
  },
  {
    id: "1",
    image: "/product/p6.webp",
    name: "Digital BP Machine",
  },
  {
    id: "1",
    image: "/product/p7.webp",
    name: "Digital BP Machine",
  },
  {
    id: "1",
    image: "/product/p7.webp",
    name: "Digital BP Machine",
  },
  {
    id: "1",
    image: "/product/p8.webp",
    name: "Digital BP Machine",
  },
  {
    id: "1",
    image: "/product/p9.webp",
    name: "Digital BP Machine",
  },
  {
    id: "1",
    image: "/product/p10.webp",
    name: "Digital BP Machine",
  },
];

const MostPopular = () => {
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
          {PRODUCT_ARR.slice(0, 10).map((curEle: IProduct) => (
            <ProductCard item={curEle} key={curEle.id} />
          ))}
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
