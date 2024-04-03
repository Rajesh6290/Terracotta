import { CustomerProductDetails, SimilarProduct } from "@/components/products";
import { PublicLayout } from "@/layouts";
import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <PublicLayout>
      <CustomerProductDetails />

      <SimilarProduct />
    </PublicLayout>
  );
};

export default Product;
