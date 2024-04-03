/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Slider from "react-slick";
import CategoryCard from "./CategoryCard";
import { useRef } from "react";

const CategorySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 250,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1360,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
    ],
  };
  const CATEGORY_ARR = [
    {
      id: "1",
      name: "Polos",
      imageUrl: "/product/p10.webp",
    },
    {
      id: "2",
      name: "Gifts",
      imageUrl: "/product/p9.webp",
    },
    {
      id: "3",
      name: "Hoodies & Jackets",
      imageUrl: "/product/p8.webp",
    },
    {
      id: "4",
      name: "T-shirts",
      imageUrl: "/product/p7.webp",
    },
    {
      id: "5",
      name: "Coffee Mugs",
      imageUrl: "/product/p6.webp",
    },
    {
      id: "6",
      name: "Category Six",
      imageUrl: "/product/p5.webp",
    },
    {
      id: "7",
      name: "Category Seven",
      imageUrl: "/product/p4.webp",
    },
  ];
  const navigationRef = useRef<any>(null);
  const handlePrev = () => {
    navigationRef?.current?.slickPrev();
  };
  const handleNext = () => {
    navigationRef?.current?.slickNext();
  };
  return (
    <section className=" bg-slate-100">
      <div className="main-container flex flex-col gap-10 top-spacing py-10">
        <article className="flex flex-col gap-1 items-center">
          <div className="w-full text-center">
            <h2 className="title">
              Discover Our Popular
              <span className=" text-gray-500"> Category</span>{" "}
            </h2>
          </div>
          <p className="h-1 w-48 bg-primary rounded-full"></p>
        </article>

        <div className="w-full flex justify-center">
          <div className="md:w-[90%] w-full md:h-[25rem] h-full bg-white p-3 rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex md:flex-row flex-col items-center md:gap-0 gap-5">
            <div className="md:w-[35%] w-full h-full shadow-[0px_0px_5px_0.5px_#fed7e2]  bg-white rounded-xl flex flex-col  gap-5 items-center p-3">
              <p className=" flex flex-col items-center w-full md:h-[20%] h-fit">
                <span className=" font-semibold  text-xl text-secondary/60">
                  TASTY & FLAVOURFUL
                </span>
                <span className=" font-semibold  text-xl text-secondary/60">
                  CLAY POT
                </span>
                <span className="w-32 h-[0.05rem] bg-secondary"></span>
              </p>
              <div className="w-full h-[80%]">
                <img
                  src="/product/category1.webp"
                  className="h-full w-full object-cover rounded-xl"
                  alt=""
                />
              </div>
            </div>
            <div className="md:w-[65%] w-full h-full flex flex-col gap-1 p-2">
              <div className="w-full flex items-center justify-between h-[10%] md:px-5">
                <p className=" md:text-2xl text-xs font-semibold  text-secondary/70 tracking-wider">
                  Good Clay Pot for Nutritious Cooking
                </p>

                <div className=" flex items-center gap-5">
                  <p
                    onClick={handlePrev}
                    className=" w-10 h-10 p-2 cursor-pointer rounded-full bg-primary flex items-center justify-center"
                  >
                    <FaArrowLeft className="text-lg text-white" />
                  </p>
                  <p
                    onClick={handleNext}
                    className=" w-10 h-10 p-2 cursor-pointer rounded-full bg-primary flex items-center justify-center"
                  >
                    <FaArrowRight className="text-lg text-white" />
                  </p>
                </div>
              </div>
              <div className="w-full h-[90%] pt-9">
                <Slider ref={navigationRef} {...settings}>
                  {CATEGORY_ARR.map((curElm, index: number) => (
                    <article
                      className="mx-auto !flex items-center px-2 pb-10"
                      key={index}
                    >
                      <Link
                        href={`/products?Category=${curElm.name}`}
                        className="w-full"
                      >
                        <CategoryCard item={curElm} index={index} />
                      </Link>
                    </article>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;
