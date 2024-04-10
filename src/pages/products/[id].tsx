import { CustomerProductDetails, SimilarProduct } from "@/components/products";
import useSwr from "@/hooks/useSwr";
import { PublicLayout } from "@/layouts";
import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter()
  const { data, isValidating } = useSwr(`product/getById/${router?.query?.id}`);
  const { data: similarProduct, isValidating: productValidating } = useSwr(isValidating ? `` : `product?sortBy=desc&category=${data?.data?.data?.categoryName}`)

  const item = similarProduct?.data?.data
  const finalData = item?.filter((pre: any) => pre?._id !== router?.query?.id)
  return (
    <PublicLayout>
      <CustomerProductDetails item={data?.data?.data} isValidating={isValidating} />
      {
        finalData?.length > 0 && <SimilarProduct finalData={finalData} isValidating={productValidating} />
      }

    </PublicLayout>
  );
};

export default Product;
