const ImageCards = () => {
  const ImageCard: {
    id: number;
    backgroundImage: string;
    name: string;
    ProductImage: string;
    description: string;
    className?: string;
  }[] = [
    {
      id: 1,
      backgroundImage: "/public/6935005.jpg",
      name: "John Doe",
      className: "bg-red-500",
      ProductImage: "/images/products/p1.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    },
    {
      id: 2,
      backgroundImage: "/public/6935005.jpg",
      name: "Jane Smith",
      ProductImage: "/images/products/p2.webp",
      className: "bg-green-300",
      description:
        "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    },
    {
      id: 3,
      backgroundImage: "/public/6935005.jpg",
      name: "Bob Johnson",
      ProductImage: "/images/products/p3.webp",
      description:
        "Donec sagittis euismod lacus. Donec turpis. Donec iaculis lectus ac nunc. Pellentesque eget nunc.",
    },
    {
      id: 4,
      backgroundImage: "/public/6935005.jpg",
      name: "Bob Johnson",
      ProductImage: "/images/products/p4.webp",
      description:
        "Donec sagittis euismod lacus. Donec turpis. Donec iaculis lectus ac nunc. Pellentesque eget nunc.",
    },
    {
      id: 5,
      backgroundImage: "/public/6935005.jpg",
      name: "Bob Johnson",
      ProductImage: "/images/products/p5.webp",
      description:
        "Donec sagittis euismod lacus. Donec turpis. Donec iaculis lectus ac nunc. Pellentesque eget nunc.",
    },
    {
      id: 6,
      backgroundImage: "/public/6935005.jpg",
      name: "Bob Johnson",
      ProductImage: "/images/products/p6.webp",
      description:
        "Donec sagittis euismod lacus. Donec turpis. Donec iaculis lectus ac nunc. Pellentesque eget nunc.",
    },
  ];

  return (
    <div className="container mx-auto mt-10">
      {ImageCard.map((image, index) => (
        <div
          key={index}
          className={`relative mx-auto flex flex-col items-center justify-center w-full max-w-[1200px] bg-cover bg-center rounded-lg p-8 md:py-20 md:px-10 ${
            index % 2 === 0
              ? "bg-[url('/images/images/images-bg.webp')]"
              : "bg-[url('/images/images/images-bg-2.webp')]"
          }`}
        >
          <img
            src={image.ProductImage}
            alt="Product Image"
            className="w-1/2 h-auto mb-5"
          />
          <h2 className="text-2xl text-center font-bold">{image.name}</h2>
          <p className="text-center mt-3">{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageCards;
