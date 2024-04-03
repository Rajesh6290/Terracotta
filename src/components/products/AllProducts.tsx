import ProductCard from "../home/ProductCard";

const AllProducts = () => {
  const PRODUCT_ARR = [
    {
      id: "1",
      image: "/product/p1.webp",
      name: "Digital BP Machine",
    },
    {
      id: "1",
      image: "/product/p2.webp",
      name: "Digital BP Machine",
    },
    {
      id: "1",
      image: "/product/p3.webp",
      name: "Digital BP Machine",
    },
    {
      id: "1",
      image: "/product/p4.webp",
      name: "Digital BP Machine",
    },
    {
      id: "1",
      image: "/product/p5.webp",
      name: "Digital BP Machine",
    },
    {
      id: "1",
      image: "/product/p6.webp",
      name: "Digital BP Machine",
    },
    {
      id: "1",
      image: "/product/p7.webp",
      name: "Digital BP Machine",
    },
    {
      id: "1",
      image: "/product/p7.webp",
      name: "Digital BP Machine",
    },
    {
      id: "1",
      image: "/product/p8.webp",
      name: "Digital BP Machine",
    },
    {
      id: "1",
      image: "/product/p9.webp",
      name: "Digital BP Machine",
    },
    {
      id: "1",
      image: "/product/p10.webp",
      name: "Digital BP Machine",
    },
  ];
  return (
    <main className=" flex flex-col justify-between items-center gap-10 w-full">
      <div className="h-fit w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-3">
        {PRODUCT_ARR.map((item: any, index: number) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
    </main>
  );
};

export default AllProducts;
