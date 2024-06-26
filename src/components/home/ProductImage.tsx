import useSwr from "@/hooks/useSwr";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Slider from "react-slick";

const Category = () => {
  const { data, isValidating } = useSwr(`category`);
  const item = data?.data?.data
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 550,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 7000,
    pauseOnHover: true,
    arrows: true,
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
  return (
    <section id="category" className="">
      <div className="main-container main-spacing flex flex-col items-center">
        <article className="flex flex-col gap-1 items-center">
          <div className="w-full text-center">
            <h2 className="title">
              Browse Our Hottest  <span className=" text-gray-500">Categories</span>{" "}
            </h2>
          </div>
          <p className="h-1 w-48 bg-primary rounded-full"></p>
        </article>
        {
          isValidating ? (
            <>
              <div className="w-full items-center grid md:hidden  grid-cols-2 gap-5 pt-3">
                <CategorySkelton />
                <CategorySkelton />
              </div>
              <div className="w-full items-center md:grid hidden grid-cols-5  gap-5 pt-3">
                <CategorySkelton />
                <CategorySkelton />
                <CategorySkelton />
                <CategorySkelton />
                <CategorySkelton />
              </div>
            </>
          ) :
            item?.length > 5 ?
              <div className="w-full category-slick-slider industry-slider pt-8 lg:pt-16 overflow-hidden">
                <Slider {...settings}>
                  {item?.map((curElm: any, index: number) => (
                    <article className="mx-auto !flex items-center px-2 " key={index}>
                      <div className="w-full">
                        <CategoryCard item={curElm} index={index} key={index} />
                      </div>
                    </article>
                  ))}
                </Slider>
              </div>
              : <div className=" w-full grid grid-cols-5 items-center gap-5">
                {
                  item?.map((pre: any) => (
                    <CategoryCard item={pre} index={pre._id} key={pre._id} />
                  ))
                }
              </div>
        }
      </div>
    </section>
  );
};
const CategoryCard = ({ item, index }: { item: any; index: number }) => {
  return (
    <motion.div
      layout
      initial={{ scale: 1, opacity: 0, y: -200 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ delay: index < 5 ? index * 0.18 : 0.1 }}
      exit={{ scale: 1, opacity: 0, y: 20 }}
      viewport={{ once: true }}
      className="group relative w-full overflow-hidden p-2 h-96"
    >
      <div className=" w-full h-72 flex items-center justify-center duration-500 bg-white group-hover:shadow-xl rounded-xl shadow-[0px_0px_2px_1px_#00000024]">
        <p className=" absolute w-full justify-center flex -bottom-20 group-hover:bottom-[4.3rem] duration-500">
          <Link
            href={`/products?category=${item?.name}`}
            className=" p-3 bg-primary rounded-full flex justify-center items-center"
          >
            <FaArrowRight className=" text-white" />
          </Link>
        </p>
        <div className=" flex items-center flex-col gap-8">
          <img
            src={item?.imageUrl || "/NotImage.jpg"}
            className=" group-hover:scale-110 duration-500 w-36 h-36 rounded-lg object-contain"
            alt=""
          />
          <p className=" uppercase font-semibold text-gray-800 flex w-full items-center justify-center">{item.name}</p>
        </div>
      </div>
    </motion.div>
  );
};
export default Category;

const CategorySkelton = () => {
  return (
    <div className="w-full h-[15rem] bg-slate-100 flex items-center flex-col justify-between relative p-5 rounded-xl">
      <p className="w-full h-[7rem] rounded-xl bg-slate-300 animate-pulse "></p>
      <p className="w-32 p-3 rounded-md bg-slate-300 animate-pulse"></p>
    </div>
  )
}