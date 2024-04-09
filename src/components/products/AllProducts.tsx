import { Pagination } from "@mui/material";
import { Skelton } from "../home/MostPoular";
import ProductCard from "../home/ProductCard";
import { Dispatch, SetStateAction } from "react";
interface Pagination {
  totalCount: number;
  page: number;
  limit: number;
}
const AllProducts = ({
  item,
  isValidating,
  pagination,
  pageNumber,
  setPageNumber,
}: {
  item: Product[];
  isValidating: boolean;
  pagination: Pagination;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <main className=" flex flex-col justify-start items-center gap-10 w-full">
      <div className={`${item?.length > 0 ? "h-fit w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-3" : "w-full h-full "}`}>
        {isValidating ? (
          <>
            <Skelton />
            <Skelton />
            <Skelton />
            <Skelton />
          </>
        ) : item?.length > 0 ? (
          item?.map((item: Product) => {
            return <ProductCard key={item._id} item={item} />;
          })
        ) :
          <div className="w-full h-full flex items-center justify-center">
            <div className="flex items-center gap-3 flex-col">
              <img src="/emptyProduct.webp" className="w-full h-full rounded-xl" alt="" />
              <p className="text-xl font-semibold text-gray-800">Product Not Available</p>
            </div>
          </div>

        }
      </div>
      {
        item?.length > 0 && <div className="w-full flex items-center justify-center py-4">
          <Pagination
            count={Math.ceil(
              Number(pagination?.totalCount || 1) / Number(pagination?.limit || 1)
            )}
            onChange={(e, v: number) => setPageNumber(v)}
            variant="outlined"
            color="primary"
            page={pageNumber}
          />
        </div>
      }

    </main>
  );
};

export default AllProducts;
