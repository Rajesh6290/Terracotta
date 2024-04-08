import React, { useState } from "react";
import { FaChevronRight, FaStar } from "react-icons/fa6";
import PriceRangeSlider from "./PriceRangeSlider";
import CustomerRatings from "./CustomerRatings";
import Discount from "./Discount";
import { BsFilterRight } from "react-icons/bs";
import useSwr from "@/hooks/useSwr";
// import { useSwr } from "@/hooks";
export const CUSTOMER_RATING = [
  {
    id: "1",
    value: "1",
  },
  {
    id: "2",
    value: "2",
  },
  {
    id: "3",
    value: "3",
  },
  {
    id: "4",
    value: "4",
  },
  {
    id: "5",
    value: "5",
  },
];
const SideMenu = () => {
  const CATEGORY_ARR = [
    {
      id: 1,
      title: "Sculptures",
    },
    {
      id: 2,
      title: "Pottery",
    },
    {
      id: 3,
      title: "Masks",
    },
    {
      id: 4,
      title: "Pen Holders",
    },
    {
      id: 5,
      title: "Cookware",
    },
    {
      id: 6,
      title: "Lamps",
    },
    {
      id: 7,
      title: "Home Decor",
    },
    {
      id: 8,
      title: "Water Bottles",
    },
    {
      id: 9,
      title: "Garden Decor",
    },
    {
      id: 8,
      title: "Diya",
    },
    {
      id: 8,
      title: "Animal Figures",
    },
    {
      id: 8,
      title: "Glass and Clay Fusion",
    },
    {
      id: 8,
      title: "God Models",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [sideMenu, setSideMenu] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);
  const [ratingData, setRatingData] = useState<number>();
  const { data, isValidating } = useSwr(`category`);
  const handleRatingChange = (value: any) => {
    setSelectedRating(value);
  };

  const handleCategoryClick = (index: number) => {
    setSelectedCategory(index);
    setRatingData(index);
  };
  const toggleMenu = () => {
    setSideMenu(!sideMenu);
  };

  return (
    <>
      <aside className="hidden md:flex md:w-[20%] lg:w-1/4 gap-5 w-full h-full  flex-col  justify-center py-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white rounded-md">
        <div className="px-4">
          <p className="w-full flex justify-between items-center">
            <span className="uppercase font-semibold text-black text-lg">
              Filters
            </span>
            <span className="py-1 px-2 rounded-md bg-primary text-white cursor-pointer">
              Clear all
            </span>
          </p>
          <hr className=" w-20" />
        </div>
        <article className="flex flex-col gap-5 justify-center">
          <div className="flex flex-col">
            <p className="flex flex-col px-4 pb-2">
              <span className=" uppercase text-primary font-medium tracking-wider text-[1rem]">
                Categories
              </span>
              <span className=" h-[0.1rem] w-20 bg-primary rounded-full"></span>
            </p>
            {
              isValidating ? (<div className="flex flex-col gap-1">
                <p className="w-full h-14 bg-slate-200 animate-pulse"></p>
                <p className="w-full h-14 bg-slate-200 animate-pulse"></p>
                <p className="w-full h-14 bg-slate-200 animate-pulse"></p>
                <p className="w-full h-14 bg-slate-200 animate-pulse"></p>
                <p className="w-full h-14 bg-slate-200 animate-pulse"></p>
                <p className="w-full h-14 bg-slate-200 animate-pulse"></p>
                <p className="w-full h-14 bg-slate-200 animate-pulse"></p>
              </div>) :
                data?.data?.data?.map((item: any, index: number) => {
                  return (
                    <>
                      <p
                        key={index}
                        className={`w-full flex gap-3 items-center cursor-pointer hover:pl-6 px-4 border-b group  common-transition ${selectedCategory === index
                          ? "bg-primary"
                          : "hover:bg-sky-200"
                          }`}
                        onClick={() => handleCategoryClick(index)}
                      >
                        <span
                          className={`text-xs 
          ${selectedCategory === index ? "text-white" : "text-gray-800"}
          `}
                        >
                          <FaChevronRight />
                        </span>
                        <span
                          className={`uppercase text-[0.95rem] py-3  font-medium common-transition
          ${selectedCategory === index ? "text-white" : "text-gray-800"}
          `}
                        >
                          {item?.name}
                        </span>
                      </p>
                    </>
                  );
                })}
          </div>
          <div className="flex flex-col gap-4">
            <p className="flex flex-col px-4">
              <span className=" uppercase text-primary font-medium tracking-wider text-[1rem]">
                Price
              </span>
              <span className=" h-[0.1rem] w-10 bg-primary rounded-full"></span>
            </p>
            <PriceRangeSlider />
            <hr />
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="flex flex-col px-4">
              <span className=" uppercase text-primary font-medium tracking-wider text-[1rem]">
                CUSTOMER RATINGS
              </span>
              <span className=" h-[0.1rem] w-20 bg-primary rounded-full"></span>
            </p>
            <div className="flex flex-col gap-2 justify-center px-5">
              {CUSTOMER_RATING.map((item) => {
                return (
                  <div key={item?.id} className="flex gap-3 items-center ">
                    <input
                      type="checkbox"
                      name=""
                      id={item?.value}
                      className=" w-4 h-4"
                      checked={selectedRating === item.value}
                      onChange={() => handleRatingChange(item.value)}
                    />
                    <label
                      htmlFor={item?.value}
                      className="flex items-center gap-1 cursor-pointer text-sm"
                    >
                      {item?.value}{" "}
                      <FaStar className=" text-amber-400 text-sm" /> & above
                    </label>
                  </div>
                );
              })}
            </div>
            <hr />
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="flex flex-col px-4">
              <span className=" uppercase text-primary font-medium tracking-wider text-[1rem]">
                Discount
              </span>
              <span className=" h-[0.1rem] w-20 bg-primary rounded-full"></span>
            </p>
            <Discount />
          </div>
        </article>
      </aside>
      <aside className="md:hidden flex flex-col  bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-3 rounded-md">
        <div className="w-full flex justify-between items-center py-2">
          <p className="w-full flex justify-between items-center ">
            <span className="uppercase font-semibold text-black text-xl">
              Filters
            </span>
            <span className="py-1 px-2 rounded-md bg-primary text-white cursor-pointer">
              Clear all
            </span>
            <span
              onClick={toggleMenu}
              className="text-4xl cursor-pointer text-primary"
            >
              <BsFilterRight />
            </span>
          </p>
        </div>
        {sideMenu && (
          <article className="flex flex-col gap-5 justify-center py-2 border-t-2">
            <div className="flex flex-col gap-3">
              <p className="flex flex-col px-4 pb-3">
                <span className=" uppercase text-primary font-semibold text-lg">
                  Categories
                </span>
                <span className=" h-[0.2rem] w-20 bg-secondary rounded-full"></span>
              </p>
              {CATEGORY_ARR.map((item, index: number) => {
                return (
                  <>
                    <p
                      key={index}
                      className="w-full flex justify-between items-center cursor-pointer   px-4"
                    >
                      <span onClick={toggleMenu} className=" uppercase">
                        {item.title}
                      </span>
                      <span className="text-sm text-gray-600">
                        <FaChevronRight />
                      </span>
                    </p>

                    <hr />
                  </>
                );
              })}
            </div>
            <div className="flex flex-col gap-4">
              <p className="flex flex-col px-4">
                <span className=" uppercase text-primary font-semibold text-lg cursor-pointer">
                  Influencer Products
                </span>
                <span className="h-[0.2rem] w-32 bg-secondary rounded-full"></span>
              </p>

              <hr />
            </div>
            <div className="flex flex-col">
              <p className="flex flex-col px-4">
                <span className=" uppercase text-primary font-semibold text-lg">
                  Price
                </span>
                <span className="h-[0.2rem] w-8 bg-secondary rounded-full"></span>
              </p>
              <PriceRangeSlider />
              <hr />
            </div>
            <div className="flex flex-col gap-4 ">
              <p className="flex flex-col px-4">
                <span className=" uppercase text-primary font-semibold text-lg">
                  CUSTOMER RATINGS
                </span>
                <span className=" h-[0.2rem] w-28 bg-secondary rounded-full"></span>
              </p>
              <CustomerRatings />
              <hr />
            </div>
            <div className="flex flex-col gap-4 ">
              <p className="flex flex-col px-4">
                <span className=" uppercase text-primary font-semibold text-lg">
                  Discount
                </span>
                <span className=" h-[0.2rem] w-14 bg-secondary rounded-full"></span>
              </p>
              <Discount />
            </div>
          </article>
        )}
      </aside>
    </>
  );
};

export default SideMenu;
