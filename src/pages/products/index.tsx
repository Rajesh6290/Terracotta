import { AllProducts, SideMenu } from "@/components/products";
import { PublicLayout } from "@/layouts";
import React from "react";

const Products = () => {
  return (
    <PublicLayout title="Products | Terracotta Craft">
      <section className="bg-slate-100">
        <div className="main-container py-10 w-full flex flex-col gap-5">
          <article className="flex justify-between items-center p-3 bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg font-semibold">
            <p>Filter results</p>
            <form action="#">
              <select
                name=""
                id=""
                className="p-3 outline-none ring-1 ring-gray-400 rounded-md"
              >
                <option value="Default">Default</option>
                <option value="Sort by popularity">Sort by popularity</option>
                <option value="Sort by latest">Sort by latest</option>
                <option value="Sort by price: high to low">
                  Sort by price: high to low
                </option>
                <option value="Sort by price: low to high">
                  Sort by price: low to high
                </option>
              </select>
            </form>
          </article>
          <main className="w-full flex md:flex-row flex-col gap-5 ">
            <SideMenu />
            <AllProducts />
          </main>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Products;
