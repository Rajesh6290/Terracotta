import Category from "@/components/home/Category";
import HeroSection from "@/components/home/HeroSection";
import MostPopular from "@/components/home/MostPoular";
import ProductImage from "@/components/home/ProductImage";
import SubCategory from "@/components/home/SubCategory";
import { PublicLayout } from "@/layouts";

function YourComponent() {
  return (
    <PublicLayout>
      <HeroSection />
      <ProductImage />
      <MostPopular />
      <SubCategory />
      <Category />
    </PublicLayout>
  );
}

export default YourComponent;
