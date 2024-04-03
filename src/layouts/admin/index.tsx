import Head from "next/head";
import Navbar from "./Navbar";
import AdminDrawer from "./AdminDrawer";

export default function AdminLayout({
  title = "Welcome To Admin Panel",
  children = <></>,
  description,
  ogImage,
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
}) {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://terracotta-seven.vercel.app/" />
        <meta property="og:type" content="website" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImage} />
      </Head>
      <section className="w-full h-screen bg-slate-50 bg-center bg-cover bg-no-repeat overflow-hidden">
        <div className="relative w-full flex items-start justify-between gap-2 p-2 h-full">
          <AdminDrawer />

          <aside className="w-full px-2 flex flex-col gap-2">
            <Navbar />
            <article className="h-[calc(100vh-100px)] w-full">
              {children}
            </article>
          </aside>
        </div>
      </section>
    </>
  );
}
