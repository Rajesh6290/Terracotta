import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import {
  FaArrowsTurnToDots,
  FaChevronRight
} from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiRefund2Line } from "react-icons/ri";
import Slider from "react-slick";
import ReviewAndRating from "./ReviewRatings";
import useAuth from "@/hooks/useAuth";
import { toast } from "react-toastify";
import useSwr from "@/hooks/useSwr";
import useMutation from "@/hooks/useMutation";

const CustomerProductDetails = ({ item, isValidating, mutate }: any) => {
  const { user } = useAuth()
  const { mutation, isLoading } = useMutation()
  const { data } = useSwr(!user?._id ? `` : `cart`)

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
  const cartData = data?.data?.data
  const findCart = cartData?.filter((search: any) => search?.product?._id === item?._id)
  const handleOperation = async () => {
    try {

      if (findCart.length > 0) {
        router.push(`/checkout/${item?._id}`)
      } else {
        const res = await mutation(`cart/${item?._id}`, {
          method: "POST",
          isAlert: true,
        })
        if (res?.status === 200) {
          router.push(`/checkout/${item?._id}`)
          mutate()
        } else {
          toast.error(res?.results?.msg)
        }
      }
    } catch (error) {
      toast.error(error instanceof Error)
    }
  }
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
                    <div className="w-full grid grid-cols-5 gap-1 justify-center">
                      {item?.images?.map((item: any, index: number) => (
                        <article
                          key={index}
                          onClick={() => handleActiveImage(index)}
                          className="md:mx-auto !flex items-center md:px-2 pb-4 w-full  "
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
              <div>
                Color:{"  "}
                {
                  isValidating ? <p className="w-32 p-2 rounded bg-slate-200 animate-pulse"></p> : <span className=" uppercase">{item?.color}</span>
                }

              </div>
              {/* <span>See All Availbale Colors</span> */}
            </div>


            <div className="flex items-end gap-5 py-2">

              {
                user?._id && findCart?.length > 0 && <div
                  onClick={() => {
                    router.push(`/cart`)
                  }}
                  className="rounded-3xl py-2 md:px-10 px-5 overflow-hidden relative group cursor-pointer border-2 font-medium bg-black text-white"
                >
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-white transition duration-300 group-hover:text-white ease font-semibold">
                    Go To Cart
                  </span>
                </div>
              }

              <div
                onClick={() => {
                  if (!user?._id) {
                    router.push('/login')
                  } else {
                    handleOperation()
                  }
                }}
                className="rounded-full py-2 md:px-10 px-5 overflow-hidden relative group cursor-pointer border-2 font-medium bg-primary text-white"
              >
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gradient-to-r from-cyan-500 to-blue-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-white transition duration-300 group-hover:text-white ease font-semibold">
                  {
                    isLoading ? <div
                      className="w-5 h-5 rounded-full animate-spin
          border-y border-solid border-white border-t-transparent shadow-md"
                    ></div> : `Buy Now`
                  }
                </span>
              </div>


            </div>

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

              </div>

            </div>

            <ReviewAndRating productId={item?._id} rating={item} mutate={mutate} />
          </div>
        </article>
      </div>
    </section>
  );
};

export default CustomerProductDetails;
