import Slider from "react-slick";
import { useRouter } from "next/router";
import ProductCard from "../home/ProductCard";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import useSwr from "@/hooks/useSwr";
import { Skelton } from "../home/MostPoular";

const SimilarProduct = ({ id, isValidating }: any) => {
  const router = useRouter();
  const { data: category, isValidating: categoryValidate } = useSwr(isValidating ? `` : `category/${id}`);
  const { data: similarProduct, isValidating: productValidating } = useSwr(categoryValidate ? `` : `product?category=${category?.data?.data?.name}`)
  const item = similarProduct?.data?.data
  const finalData = item?.filter((pre: any) => pre?._id !== router?.query?.id)

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
          {
            finalData?.length > 5 && <div className=" flex items-center gap-5">
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
          }

        </div>
        {
          isValidating || categoryValidate || productValidating ? (
            <div className="w-full grid grid-cols-5 gap-5 items-center">
              <Skelton />
              <Skelton />
              <Skelton />
              <Skelton />
              <Skelton />
            </div>
          ) :
            finalData?.length > 5 ? (
              <article className="w-full category-slick-slider industry-slider">
                <Slider ref={navigationRef} {...settings}>
                  {finalData?.map((curEle: any, index: number) => {
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
            ) : (
              <div className="w-full items-center grid grid-cols-5 gap-5 place-items-center">
                {
                  finalData?.map((item: any, i: number) => (
                    <ProductCard item={item} key={i} />
                  ))
                }
              </div>
            )
        }

      </main>
    </section>
  );
};

export default SimilarProduct;
