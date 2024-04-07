import { CustomerProductDetails, SimilarProduct } from "@/components/products";
import { PublicLayout } from "@/layouts";
import { useState } from "react";

const Product = () => {
  return (
    <PublicLayout>
      <CustomerProductDetails />

      <SimilarProduct />
    </PublicLayout>
  );
};

export default Product;
