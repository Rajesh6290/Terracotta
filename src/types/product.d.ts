interface Product {
    categoryId: string;
    categoryName: string;
    color: string;
    description: string;
    discount: number;
    isPublished: boolean;
    name: string;
    price: number;
    ratings: number;
    salePrice: number;
    slug: string;
    sold: boolean;
    star: number;
    stock: number;
    _id: string;
    images: {
        _id: string;
        imageUrl: string;
        imagePath: string;
    }[]
}