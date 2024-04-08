import { CustomerProductDetails, SimilarProduct } from "@/components/products";
import useSwr from "@/hooks/useSwr";
import { PublicLayout } from "@/layouts";
import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter()
  const { data, isValidating } = useSwr(`product/getById/${router?.query?.id}`)
  return (
    <PublicLayout>
      <CustomerProductDetails item={data?.data?.data} isValidating={isValidating} />

      <SimilarProduct id={data?.data?.data?.categoryId} isValidating={isValidating} />
    </PublicLayout>
  );
};

export default Product;
