import useSwr from "@/hooks/useSwr";
import ProductCard from "../home/ProductCard";
import { Skelton } from "../home/MostPoular";

const AllProducts = () => {

  const { data, isValidating } = useSwr('product');
  return (
    <main className=" flex flex-col justify-between items-center gap-10 w-full">
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
    </main>
  );
};

export default AllProducts;
