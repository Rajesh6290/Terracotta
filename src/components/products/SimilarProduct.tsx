import Slider from "react-slick";
import { useRouter } from "next/router";
import ProductCard from "../home/ProductCard";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const SimilarProduct = () => {
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
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
          slidesToShow: 1,
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
  const PRODUCT_ARR = [
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
  const navigationRef = useRef<any>(null);
  const handlePrev = () => {
    navigationRef?.current?.slickPrev();
  };
  const handleNext = () => {
    navigationRef?.current?.slickNext();
  };
  return (
    <section className="main-container py-5">
      <main className="flex flex-col gap-5 bg-white rounded-md shadow-[0px_0px_7px_2px_#00000024] p-3">
        <div className=" w-full flex items-center justify-between">
          <article className="flex flex-col gap-1 ">
            <div className="w-full flex items-center justify-between">
              <h2 className=" text-gray-700 font-semibold text-2xl">
                Similar Products
              </h2>
            </div>

            <p className="h-0.5 w-24 bg-primary rounded-full"></p>
          </article>
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
        <article className="w-full category-slick-slider industry-slider">
          <Slider ref={navigationRef} {...settings}>
            {PRODUCT_ARR.map((curEle: any, index: number) => {
              return (
                <article
                  className="mx-auto !flex items-center px-2 pb-4 pt-5"
                  key={index}
                >
                  <ProductCard item={curEle} key={curEle.id} />
                </article>
              );
            })}
          </Slider>
        </article>
      </main>
    </section>
  );
};

export default SimilarProduct;
