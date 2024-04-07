import useSwr from "@/hooks/useSwr";
import ProductCard from "../home/ProductCard";
import { Skelton } from "../home/MostPoular";
import { useState } from "react";
import { Pagination } from "@mui/material";

const AllProducts = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { data, isValidating, pagination } = useSwr(`product?page=${pageNumber}&limit=12`);
  return (
    <main className=" flex flex-col justify-start items-center gap-10 w-full">
      <div className="h-fit w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-3">
        {
          isValidating ? (
            <>
              <Skelton />
              <Skelton />
              <Skelton />
              <Skelton />
            </>
          ) : (
            data?.data?.data?.map((item: any, index: number) => {
              return <ProductCard key={item._id} item={item} />;
            }))}
      </div>
      <div className="w-full flex items-center justify-center py-4">
        <Pagination
          count={Math.ceil(
            Number(pagination?.totalCount || 1) /
            Number(pagination?.limit || 1)
          )}
          onChange={(e, v: number) => setPageNumber(v)}
          variant="outlined"
          color="primary"
          page={pageNumber}
        />
      </div>
    </main>
  );
};

export default AllProducts;
