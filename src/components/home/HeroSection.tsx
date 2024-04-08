/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
export const SLIDER_ARR = [
  {
    id: "1",
    image: "/banner/b12.jpg",
  },
  {
    id: "1",
    image: "/banner/b11.webp",
  },
  {
    id: "2",
    image: "/banner/b1.webp",
  },
  {
    id: "3",
    image: "/banner/b2.jpg",
  },
  {
    id: "4",
    image: "/banner/b3.webp",
  },
  {
    id: "5",
    image: "/banner/b4.webp",
  },
];
const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  const navigationRef = useRef<any>(null);
  const handlePrev = () => {
    navigationRef?.current?.slickPrev();
  };
  const handleNext = () => {
    navigationRef?.current?.slickNext();
  };
  return (
    <section className=" w-full lg:h-[90vh] h-[50vh] overflow-hidden relative">
      <p
        onClick={handlePrev}
        className=" absolute z-[222] top-1/2 -translate-y-1/2 -left-5 w-14 md:h-20 h-16  rounded-lg bg-slate-100 bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer text-black/20 hover:text-black/60 flex items-center justify-center pl-5"
      >
        <MdArrowBackIos />
      </p>
      <p
        onClick={handleNext}
        className=" absolute z-[222]  top-1/2 -translate-y-1/2 -right-5 w-14 md:h-20 h-16  rounded-lg bg-slate-100 bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer text-black/20 hover:text-black/60 flex items-center justify-center pr-5"
      >
        <MdArrowForwardIos />
      </p>
      <div className=" absolute w-full h-full flex items-center md:px-20 px-10  z-[1]">
        <div className="flex flex-col md:gap-7 gap-3">
          <p className=" uppercase md:text-7xl text-lg font-bold text-white tracking-wide">
            Welcome to,
          </p>
          <p className=" uppercase md:text-7xl text-lg font-bold text-white tracking-wide">
            Terracotta Craft
          </p>
          <p className="  text-justify md:text-xl text-xs  font-medium md:w-[40%] w-full text-white tracking-wide">
            {` "We are a leading manufacturer and exporter of clay and ceramic
            products based in Balasore, Odisha, India (756042). Our diverse
            range includes health-conscious clay cookware, crafted without any
            chemical additives. Experience the essence of purity and tradition
            in our meticulously crafted products." `}
          </p>
          <p className=" w-40 cursor-pointer px-6 py-3 hover:bg-white hover:text-primary duration-300 animate-bounce text-center text-white font-medium bg-primary shadow-lg rounded-md">
            Explore Now
          </p>
        </div>
      </div>
      <aside className="w-full overflow-hidden z-0">
        <Slider ref={navigationRef} {...settings}>
          {SLIDER_ARR.map((item, index) => (
            <img
              key={item?.id}
              src={item?.image}
              className="lg:h-[90vh] h-[50vh] w-full object-fill "
              alt=""
            />
          ))}
        </Slider>
      </aside>
    </section>
  );
};

export default HeroSection;
