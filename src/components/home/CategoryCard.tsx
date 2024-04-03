import { motion } from "framer-motion";
import React from "react";

const CategoryCard = ({ item, index }: { item: any; index: number }) => {
  return (
    <motion.div
      layout
      initial={{ scale: 1, opacity: 0, y: -200 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ delay: index < 5 ? index * 0.18 : 0.1 }}
      exit={{ scale: 1, opacity: 0, y: 20 }}
      viewport={{ once: true }}
      className="group relative w-full overflow-hidden rounded-3xl"
    >
      <div className="absolute z-[5] bg-gradient-to-b from-white/10 to-black/90 w-full h-full"></div>
      <div className="w-full h-72">
        <img
          src={item?.imageUrl || "/kishan/category-2.jpg"}
          alt="industry"
          className="w-full h-full object-cover group-hover:scale-110 transition-all ease-in-out duration-700"
        />
      </div>

      <p className="absolute whitespace-nowrap z-10 bottom-6 left-1/2 -translate-x-1/2 text-lg tracking-wide font-semibold capitalize text-white">
        {item?.name}
      </p>
    </motion.div>
  );
};

export default CategoryCard;
