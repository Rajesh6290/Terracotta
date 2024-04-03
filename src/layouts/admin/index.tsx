// import { useAppContext } from "contexts";
import Head from "next/head";
import Navbar from "./Navbar";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
};
export default function AdminLayout({
  children = <></>,
  title = "Dashboard Layout",
  description,
  ogImage,
}: Props) {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://printbrix-web.vercel.app/" />
        <meta property="og:type" content="website" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          property="og:image"
          content={ogImage || "https://printbrix-web.vercel.app/logo.png"}
        />
      </Head>
      <section className=" w-full  h-screen ">
        <div className=" relative w-full h-full flex items-start  justify-between ">
          {/* <AdminDrawer isFull={isFull} setIsFull={setIsFull} /> */}
          <div
            className="h-full w-full  duration-500 transition-all ease-out"
          >
            <Navbar />
            <article className="w-full h-[calc(100vh-78px)] overflow-y-scroll px-3 py-2 ">
              {children}
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
