import React from "react";

const Discount = () => {
  const DISCOUNT_ARR = [
    {
      id: "1",
      discount: " 50% or more",
    },

    {
      id: "2",
      discount: " 30% or more",
    },
    {
      id: "3",
      discount: " 20% or more",
    },
    {
      id: "4",
      discount: " 10% or more",
    },
    {
      id: "5",
      discount: " 10% and below",
    },
  ];
  return (
    <form action="#" className="flex flex-col gap-2 justify-center px-5">
      {DISCOUNT_ARR.map((item) => {
        return (
          <div key={item.id} className=" flex gap-3">
            <input
              type="checkbox"
              name=""
              id={item.discount}
              className=" w-4 h-4 "
            />
            <label
              htmlFor={item.discount}
              className="flex items-center gap-1 cursor-pointer text-sm"
            >
              {item.discount}
            </label>
          </div>
        );
      })}
    </form>
  );
};

export default Discount;
