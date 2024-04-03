/* eslint-disable @next/next/no-img-element */
type ClayUtensil = {
  id: string;
  image?: string;
  category?: string;
  name?: string;
};

const ProductImage = () => {
  const clayUtensilArr: ClayUtensil[] = [
    {
      id: "1",
      image: "/product/p8.webp",
      category: "clay lantern",
    },
    { id: "3", image: "/product/p3.webp", category: "Clay Cups" },
    { id: "4", image: "/product/p4.webp", category: "Clay Bowls" },
    { id: "5", image: "/product/p5.webp", category: "Containers" },
    { id: "6", image: "/product/p6.webp", category: "Cups" },
    { id: "7", image: "/product/p7.webp", category: "Lanterns" },
    { id: "8", image: "/product/p9.webp", category: "Colorful Lanterns" },
    { id: "2", image: "/product/p2.webp", category: "Pressure Cookers" },
  ];
  return (
    <section className="top-spacing shadow-md w-full ">
      <div className=" main-container grid md:grid-cols-8 grid-cols-3 gap-5 rounded-md top-spacing py-4  ">
        {clayUtensilArr.map((item, i) => (
          <div key={i} className="flex flex-col gap-2 items-center">
            <img
              src={item?.image}
              className="w-36 h-36 object-contain hover:scale-110 duration-300"
              alt=""
            />
            <div className="cursor-pointer flex items-center justify-center duration-500">
              <p className="text-black navbar__link relative font-medium">
                {item?.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductImage;
