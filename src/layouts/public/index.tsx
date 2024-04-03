import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
};
const PublicLayout = ({
  children = <></>,
  title = "Terracotta Craft",
  description,
  ogImage = "/logo.png",
}: Props) => {
  return (
    <>
      <Head>
        <meta
          property="og:url"
          content="https://e-commerce-theta-six.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImage} />
      </Head>
      <main className="relative">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
};
export default PublicLayout;
