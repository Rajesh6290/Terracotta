import { CustomerProductDetails, SimilarProduct } from "@/components/products";
import { PublicLayout } from "@/layouts";

const Product = () => {
  return (
    <PublicLayout>
      <CustomerProductDetails />

      <SimilarProduct />
    </PublicLayout>
  );
};

export default Product;
