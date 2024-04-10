import CustomInputField from "@/components/core/CustomInputField";
import { AllProducts, SideMenu } from "@/components/products";
import useSwr from "@/hooks/useSwr";
import { PublicLayout } from "@/layouts";
import { useState } from "react";

const Products = () => {
  const [sort, setSort] = useState<string>("desc")
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [category, setCategory] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");


  let url = `product?page=${pageNumber}&limit=12`
  category && (url += `&category=${category}`)
  sort && (url += `&sortBy=${sort}`)
  minPrice && (url += `&minPrice=${Number(minPrice)}`)
  maxPrice && (url += `&maxPrice=${Number(maxPrice)}`)

  const { data, isValidating, pagination } = useSwr(url, { revalidateOnFocus: true });
  return (
    <PublicLayout title="Products | Terracotta Craft">
      <section className="bg-slate-100">
        <div className="main-container py-10 w-full flex flex-col gap-5">
          <article className="flex justify-between items-center p-3 bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg font-semibold">
            <p className="flex items-center gap-5">
              <span>Filter results</span>
              <span className=" tracking-wide font-medium md:text-base text-xs">Total {data?.data?.data?.length} Product Found !</span>
            </p>
            <div className="md:w-[15rem] w-[10rem]">
              <CustomInputField
                key={1}
                name="sorting"
                type="select"
                options={[
                  {
                    value: "desc",
                    label: "Default",
                  },
                  // {
                  //   label: "Sort By Popularity",
                  //   value: "sortByPopularity"
                  // },
                  {
                    label: "Sort By Latest",
                    value: "asc"
                  },
                  {
                    label: "Hight To Low",
                    value: "priceHighToLow"
                  },
                  {
                    label: "Low to High",
                    value: "priceLowToHigh"
                  },

                ]}
                value={sort}
                onChange={(e: any) => {
                  setSort(e.target.value)
                }}
                fullWidth
                label="Sort By"
              />
            </div>
          </article>
          <main className="w-full flex lg:flex-row flex-col gap-5 ">
            <SideMenu category={category} setCategory={setCategory} minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} setSort={setSort} sort={sort} />
            <AllProducts item={data?.data?.data} isValidating={isValidating} pagination={pagination} pageNumber={pageNumber} setPageNumber={setPageNumber} />
          </main>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Products;
