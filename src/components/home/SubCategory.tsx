import Link from "next/link";
import React from "react";

const SubCategory = () => {
  const SubCategoryArr = [
    {
      name: "Clay Combo Collections",
      link: "#",
      image: "/sub/s1.jpg",
      value: "100",
    },
    {
      name: "Plant Port Combo Collections",
      link: "#",
      image: "/sub/s2.jpg",
      value: "100",
    },
    {
      name: "Black Pottery Collections",
      link: "#",
      image: "/sub/s3.jpg",
      value: "100",
    },
    {
      name: "Red Pottery Collections",
      link: "#",
      image: "/sub/s4.jpg",
      value: "100",
    },
  ];
  return (
    <section className=" main-container w-full top-spacing py-10">
      <div className="  flex flex-col gap-10 w-full ">
        <article className="flex flex-col gap-1 items-center">
          <div className="w-full text-center">
            <h2 className="title">
              Explore Out Premium Editions
              <span className=" text-gray-500"> Products</span>{" "}
            </h2>
          </div>
          <p className="h-1 w-48 bg-primary rounded-full"></p>
        </article>
        <div className="w-full h-full grid md:grid-cols-4 grid-cols-2 gap-5">
          {SubCategoryArr?.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 w-full h-full  items-center"
            >
              <div className="w-full group md:h-[30rem] h-[10rem] overflow-hidden  rounded-lg relative">
                <div className=" uppercase  absolute top-0 left-0 w-full h-full cursor-pointer flex items-center justify-center group-hover:bg-black/70 duration-500">
                  <p className="text-white font-medium group-hover:block hidden">
                    {item?.value} Products
                  </p>
                </div>
                <img
                  src={item?.image}
                  className="w-full h-full object-cover hover:scale-125 duration-700"
                  alt=""
                />
              </div>
              <Link
                href={item?.link}
                className=" uppercase font-medium  border-b-2 text-gray-600 tracking-wider te"
              >
                View
              </Link>
            </div>
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

export default SubCategory;
