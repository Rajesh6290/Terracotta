import CustomLoader from "@/components/core/CustomLoader";
import Category from "@/components/home/Category";
import HeroSection from "@/components/home/HeroSection";
import MostPopular from "@/components/home/MostPoular";
import ProductImage from "@/components/home/ProductImage";
import SubCategory from "@/components/home/SubCategory";
import { PublicLayout } from "@/layouts";
import Router from 'next/router';
import { useEffect, useState } from "react";

function YourComponent() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);
    Router.events.on('routeChangeError', stopLoading);

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
      Router.events.off('routeChangeError', stopLoading);
    };
  }, []);
  return (
    loading ? <CustomLoader /> :
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
