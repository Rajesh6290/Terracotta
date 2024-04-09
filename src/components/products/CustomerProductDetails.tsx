import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import {
  FaArrowRight,
  FaArrowsTurnToDots,
  FaChevronRight,
} from "react-icons/fa6";
import { HiOutlineMinusSmall, HiOutlinePlusSmall } from "react-icons/hi2";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiRefund2Line } from "react-icons/ri";
import Slider from "react-slick";
import ReviewAndRating from "./ReviewRatings";

const CustomerProductDetails = ({ item, isValidating }: any) => {
  const router = useRouter();

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 5000,
          pauseOnHover: true,
        },
      },
    ],
  };

  const [activeImg, setActiveImg] = useState(0);
  const handleActiveImage = (id: number) => {
    setActiveImg(id);
  };
  const navigationRef = useRef<any>(null);
  const handlePrev = () => {
    navigationRef?.current?.slickPrev();
  };
  const handleNext = () => {
    navigationRef?.current?.slickNext();
  };
  return (
    <section className="main-container py-6 w-full">
      <div className="w-full flex flex-col md:flex-row gap-8">
        <article className="md:w-[40%] h-full lg:sticky lg:top-24">
          <div className="w-full flex">
            <div className="flex flex-col gap-2 w-full items-center justify-center">
              <div className="w-full h-[26rem] overflow-hidden border-2 p-2 rounded-lg">
                {
                  isValidating ? <div className="w-full h-full bg-slate-200 animate-pulse"></div> :

                    <img
                      src={item?.images?.[activeImg].imageUrl}
                      className="w-full h-full object-contain"
                      alt=""
                    />}
              </div>
              {

                isValidating ? (<>
                  <div className="w-full flex items-center gap-5 justify-center">
                    <p className="w-24 h-20 rounded-md bg-slate-200 animate-pulse"></p>
                    <p className="w-24 h-20 rounded-md bg-slate-200 animate-pulse"></p>
                    <p className="w-24 h-20 rounded-md bg-slate-200 animate-pulse"></p>
                    <p className="w-24 h-20 rounded-md bg-slate-200 animate-pulse"></p>
                    <p className="w-24 h-20 rounded-md bg-slate-200 animate-pulse"></p>
                  </div>
                </>) :

                  item?.images?.length > 5 ? (
                    <div className="w-full relative">
                      <p
                        onClick={handlePrev}
                        className=" absolute top-6 -left-4 hover:bg-slate-200 duration-300 cursor-pointer z-10  w-8 h-8  bg-gray-100 rounded-full flex items-center justify-center"
                      >
                        <IoIosArrowBack className="text-primary" />
                      </p>
                      <p
                        onClick={handleNext}
                        className=" w-8 h-8  absolute top-6 hover:bg-slate-200 duration-300  cursor-pointer z-10 -right-3 bg-gray-100 rounded-full flex items-center justify-center"
                      >
                        <IoIosArrowForward className="text-primary" />
                      </p>

                      <Slider ref={navigationRef} {...settings}>
                        {item?.images?.map((item: any, index: number) => (
                          <article
                            className="mx-auto !flex items-center px-2 pb-4 w-full "
                            key={index}
                          >
                            <img
                              src={item?.imageUrl}
                              className={`w-24 h-20 object-contain border-2 p-2 cursor-pointer rounded-lg ${activeImg === index ? "border-blue-500" : ""
                                }`}
                              onClick={() => setActiveImg(item?._id)}
                              alt=""
                            />
                          </article>
                        ))}
                      </Slider>
                    </div>
                  ) : (
                    <div className="w-full grid grid-cols-5 gap-3 justify-center">
                      {item?.images?.map((item: any, index: number) => (
                        <article
                          key={index}
                          onClick={() => handleActiveImage(index)}
                          className="mx-auto !flex items-center px-2 pb-4 w-full  "
                        >
                          <img
                            src={item?.imageUrl}
                            className={`w-24 h-20 object-contain border-2 p-2 cursor-pointer rounded-lg ${activeImg === index
                              ? "border-cyan-500"
                              : ""
                              }`}
                            onClick={() => setActiveImg(Number(item?._id))}
                            alt=""
                          />
                        </article>
                      ))}
                    </div>
                  )}
            </div>
          </div>
        </article>
        <article className=" md:w-[60%]  h-full   py-1 scroll">
          <div className="w-full flex flex-col gap-2">
            <div className=" hidden lg:flex gap-1 items-center">
              <Link href="/" className="flex gap-2 items-center">
                <span className=" text-[0.75rem] hover:text-blue-500  text-gray-400">
                  Home
                </span>{" "}
                <FaChevronRight className=" text-[0.5rem]" />
              </Link>
              <Link
                href="/products"
                className="flex gap-2 items-center"
              >
                <span className=" text-[0.75rem] hover:text-blue-500  text-gray-400">
                  Products
                </span>{" "}
                <FaChevronRight className=" text-[0.5rem]" />
              </Link>
              <p
                className="flex gap-2 items-center"
              >
                <span className=" text-[0.75rem] hover:text-blue-500  text-gray-400">
                  {item?.categoryName}
                </span>{" "}
                <FaChevronRight className=" text-[0.5rem]" />
              </p>
              <p className="flex gap-2 items-center">
                <span className=" text-[0.6rem]  text-gray-400">
                  {item?.name}...{item?._id}
                </span>
              </p>
            </div>
            <h2 className="text-xl font-semibold"> {isValidating ? <p className="w-52 px-2 py-3 rounded bg-slate-200 animate-pulse"></p> : item?.name}</h2>
            <Link href="#ReviewAndRating" className="flex items-center gap-2">
              <p className="flex items-center gap-1 text-sm font-bold px-2 py-0.5 text-white bg-green-600 rounded-md">
                <span>3.7</span>
                <AiFillStar />
              </p>
              <p className="text-sm font-semibold text-gray-400">
                3.716,808 ratings and 765 reviews
              </p>
            </Link>
            <div className="text-green-600 text-sm font-semibold w-full">
              {isValidating ? <p className="w-20 p-2 rounded bg-slate-200 animate-pulse"></p> : `Extra ₹${item?.discount} off`}
            </div>
            <div className="flex items-end gap-2">
              {
                isValidating ? <p className="w-44 py-4 rounded-md bg-slate-200 animate-pulse"></p> : (
                  <>
                    <span className="font-semibold text-2xl">₹{item?.salePrice}</span>
                    <span className="font-semibold text-gray-600  line-through justify-end">
                      ₹{item?.price}
                    </span>
                    <span className="text-green-600 font-semibold">{item?.discount}% off</span>
                  </>
                )
              }
            </div>
            <div className="flex gap-20 font-semibold  items-center">
              <p>
                Color:{"  "}
                {
                  isValidating ? <p className="w-32 p-2 rounded bg-slate-200 animate-pulse"></p> : <span className=" uppercase">{item?.color}</span>
                }

              </p>
              {/* <span>See All Availbale Colors</span> */}
            </div>
            {/* <div className="flex flex-wrap gap-3 items-center">
              {parentProduct?.variants?.map((item: any, index: number) => {
                return (
                  <p
                    key={index}
                    onClick={() => handleChangeVariantId(item?.id)}
                    className={`py-2  capitalize cursor-pointer  px-3 text-sm rounded-xl hover:text-primary text-black font-semibold border-2
                   ${
                     router?.query?.variantId === item?.id
                       ? "border-cyan-500"
                       : ""
                   }
                    `}
                  >
                    {item?.color}
                  </p>
                );
              })}
            </div> */}
            {/* <div className="flex gap-3 items-center flex-wrap">
              <span className="font-semibold">Size :</span>
              <p className="flex gap-5 items-center flex-wrap"></p>

              <span className="py-2 uppercase cursor-pointer px-3 text-sm rounded font-semibold border">
                XL
              </span>
            </div> */}
            <div className="flex items-end gap-5 py-2">
              <div className="flex items-center gap-5">
                <button
                  //   onClick={handleremoveToCart}
                  className="p-2 rounded-full border-2 font-bold text-black"
                >
                  <HiOutlineMinusSmall />
                </button>
                {/* <div className="text-lg font-semibold">
                  {isValidating ? (
                    <div
                      className="w-7 h-7 rounded-full animate-spin
                    border-y border-solid border-green-500 border-t-transparent shadow-md"
                    ></div>
                  ) : (
                    <span>{variantData?.cartItems.length}</span>
                  )}
                </div> */}
                2
                <button
                  //   onClick={handleAddToCart}
                  className="p-2 rounded-full border-2 font-bold text-black"
                >
                  <HiOutlinePlusSmall />
                </button>
              </div>

              <Link
                href={`/cart`}
                className=" cursor-pointer font-semibold border border-primary text-primary rounded-full px-5 py-2 relative overflow-hidden group"
              >
                <span className="absolute top-0 -left-36 flex items-center justify-center bg-black group-hover:left-0 duration-500 z-50 w-full h-full rounded-full">
                  <FaArrowRight className=" text-white text-xl font-bold" />
                </span>
                Go to Cart
              </Link>


            </div>
            <p className="flex items-center gap-3">
              <Link
                href={`/checkout?productId=#`}
                className="rounded-full py-2 md:px-10 px-5 overflow-hidden relative group cursor-pointer border-2 font-medium bg-primary text-white"
              >
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gradient-to-r from-cyan-500 to-blue-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-white transition duration-300 group-hover:text-white ease font-semibold">
                  Buy Now
                </span>
              </Link>
            </p>
            <div className=" grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 items-center gap-3 py-2">
              <p className="flex flex-col gap-1 p-4 rounded-2xl bg-red-50">
                <span>
                  <FaShippingFast className="text-xl text-gray-800" />
                </span>
                <span className="font-semibold text-gray-800">
                  Free shipping
                </span>
                <span className="text-xs">On orders over ₹50.00</span>
              </p>
              <p className="flex flex-col gap-1 p-4 rounded-2xl bg-blue-50">
                <span>
                  <FaArrowsTurnToDots className="text-xl text-gray-800" />
                </span>
                <span className="font-semibold text-gray-800">
                  Very easy to return
                </span>
                <span className="text-xs">Just phone number.</span>
              </p>
              <p className="flex flex-col gap-1 p-4 rounded-2xl bg-green-50">
                <span>
                  <BiWorld className="text-xl text-gray-800" />
                </span>
                <span className="font-semibold text-gray-800">
                  Nationwide Delivery
                </span>
                <span className="text-xs">Fast delivery nationwide.</span>
              </p>
              <p className="flex flex-col gap-1 p-4 rounded-2xl bg-yellow-50">
                <span>
                  <RiRefund2Line className="text-xl text-gray-800" />
                </span>
                <span className="font-semibold text-gray-800">
                  Refunds policy
                </span>
                <span className="text-xs">60 days return accept</span>
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-10 py-3 w-full ">
              <div className="flex flex-col gap-4 w-full items-start">
                <h2 className="text-sm font-bold text-gray-700">Description</h2>
                {
                  isValidating ? <p className="w-full h-20 bg-slate-200 rounded-md animate-pulse"></p> :

                    <span className="text-sm text-gray-600">
                      {item?.description}
                    </span>
                }
                {/* <span className="flex flex-col gap-2">
                  <h3 className="flex items-center gap-3">
                    <p className="p-[0.2rem] bg-gray-400 rounded-full"></p>
                    <p className="text-sm">Round Neck</p>
                  </h3>
                  <h3 className="flex items-center gap-3">
                    <p className="p-[0.2rem] bg-gray-400 rounded-full"></p>
                    <p className="text-sm">All RBCPON SKY-One</p>
                  </h3>
                  <h3 className="flex items-center gap-3">
                    <p className="p-[0.2rem] bg-gray-400 rounded-full"></p>
                    <p className="text-sm">Full Sleeve</p>
                  </h3>
                </span> */}
              </div>
              {/* <span className="flex gap-10 w-full items-start">
                <h2 className="text-sm font-semibold text-gray-500">Seller</h2>
                <span className="flex flex-col gap-2">
                  <h3 className=" text-blue-500 uppercase font-semibold">
                    Printbrix Howrah Online
                  </h3>
                  <h3 className="flex items-center gap-3">
                    <p className="p-[0.2rem] bg-gray-400 rounded-full"></p>
                    <p className="text-sm">No Returns Applicable</p>
                  </h3>
                  <h3 className="flex items-center gap-3">
                    <p className="p-[0.2rem] bg-gray-400 rounded-full"></p>
                    <p className="text-sm">GST invoice available</p>
                  </h3>
                </span>
              </span> */}
            </div>
            {/* <p className=" w-full flex md:flex-row flex-col items- start md:gap-10 gap-2 justify-start">
              <span className="text-sm font-semibold text-gray-500 ">
                Description
              </span>
              <span className="text-sm text-justify">
                This Apple Macbook is powered by the Apple M1 chip and is easily
                portable so that you can carry it with you anywhere you want.
                This thin and light notebook is equipped with an 8-core CPU to
                handle all your tasks more efficiently. The 8-core GPU of this
                notebook takes graphic-intensive games and apps to a whole new
                level. It also comes with a 16-core Neural Engine to do machine
                learning tasks more effectively. Its fan-less design offers
                silent operations and has a long-lasting battery life which can
                last up to 18 hours on a single charge.
              </span>
            </p> */}
            {/* <ProductSpecification/> */}
            <ReviewAndRating />
          </div>
        </article>
      </div>
    </section>
  );
};

export default CustomerProductDetails;
