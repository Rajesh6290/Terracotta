import Link from "next/link";
import React from "react";
import { BiWorld } from "react-icons/bi";

import { FaAngleRight, FaShippingFast } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaArrowsTurnToDots,
} from "react-icons/fa6";
import { IoHelpCircleOutline } from "react-icons/io5";
import { RiRefund2Line } from "react-icons/ri";

const Footer = () => {
  // const { data, mutate, isValidating } = useSwr("categories");
  const QUICKLINKS = [
    {
      id: "4",
      menuName: "Quick Links",
      subMenu: [
        {
          id: 1,
          name: "Home",
          link: "/",
        },
        {
          id: 2,
          name: "About Us",
          link: "/about-us",
        },
        {
          id: 3,
          name: "Products",
          link: "/products",
        },
        {
          id: 4,
          name: "Testimonials",
          link: "/#testimonial",
        },

        // {
        //   id: 5,
        //   name: "Order in Bulk",
        //   link: "/products",
        // },
        // {
        //   id: 6,
        //   name: "Create a Pack",
        //   link: "/products",
        // },
      ],
    },
  ];
  const CONNECT = [
    {
      id: "3",
      menuName: "Connect",
      subMenu: [
        {
          id: 1,
          name: "Contact Us",
          link: "/contact",
        },
        // {
        //   id: 23,
        //   name: "Careers",
        //   link: "/careers",
        // },
        // {
        //   id: 32,
        //   name: "Partners",
        //   link: "/partners",
        // },
        {
          id: 2,
          name: "Privacy Policy",
          link: "/privacy-policy",
        },
        {
          id: 3,
          name: "Terms & Condition",
          link: "/terms-&-conditions",
        },
        {
          id: 5,
          name: "FAQ",
          link: "/faq",
        },
      ],
    },
  ];
  return (
    <footer className="bg-gray-900 pt-[5rem] pb-[2rem]">
      <section className="main-container pb-5 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center w-full">
          <div className="flex flex-col gap-5 w-full">
            <span className=" w-52 h-24">
              <img
                src="logo1.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </span>
            <span className="text-white font-semibold">
              Chintamanipur,Oupada Block
              <br />
              Balasore,Odisha 756042 India
            </span>
            <div className="w-full flex gap-5 items-center">
              <Link
                className="text-white p-2  bg-facebook text-xl rounded-full hover:bg-white hover:text-facebook duration-500"
                href=""
              >
                <FaFacebook />
              </Link>
              <Link
                className="text-white p-2  bg-instagram text-xl rounded-full hover:bg-white hover:text-instagram duration-500"
                href=""
              >
                <FaInstagram />
              </Link>
              <Link
                className="text-white p-2  bg-twitter text-xl rounded-full hover:bg-white hover:text-twitter duration-500"
                href=""
              >
                <FaTwitter />
              </Link>
              <Link
                className="text-white p-2  bg-linkedin text-xl rounded-full hover:bg-white hover:text-linkedin duration-500"
                href=""
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
          {QUICKLINKS.map((item, index) => {
            return (
              <div key={index} className="flex gap-4 flex-col">
                <p className=" text-lg md:text-xl lg:text-2xl capitalize tracking-wide md:font-medium font-bold md:text-white text-secondary">
                  {item.menuName}
                </p>
                <ul className="flex flex-col gap-2">
                  {item.subMenu.map((subItem: any, index: number) => {
                    return (
                      // <Link key={index} className=" duration-500 text-gray-200  " href={subItem.link}>

                      // <li className="capitalize list-none w-fit text-gray-300 border-b border-transparent hover:border-secondary hover:text-white hover:pl-1.5 duration-500 common-transition">{subItem.name}</li>
                      // </Link>
                      <span key={index} className="flex items-center gap-1 ">
                        <FaAngleRight className="text-[1rem] text-white group-hover:text-violet-600" />
                        <Link
                          href={subItem.link}
                          className="group relative inline-block overflow-hidden  w-fit text-gray-300 py-1  hover:pl-2 duration-300  focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
                        >
                          <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-secondary transition-all duration-300 group-hover:w-full"></span>

                          {subItem.name}
                        </Link>
                      </span>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          <div className="flex gap-4 flex-col">
            <p className=" text-lg md:text-xl lg:text-2xl capitalize tracking-wide md:font-medium font-bold md:text-white text-secondary">
              Categories
            </p>
            <ul className="flex flex-col gap-2">
              {/* {data?.data?.data?.map((subItem: any, index: number) => {
                return (
                  // <Link key={index} className=" duration-500 text-gray-200  " href={subItem.link}>

                  // <li className="capitalize list-none w-fit text-gray-300 border-b border-transparent hover:border-secondary hover:text-white hover:pl-1.5 duration-500 common-transition">{subItem.name}</li>
                  // </Link>
                  <span key={index} className="flex items-center gap-1 ">
                    <FaAngleRight className="text-[1rem] text-white group-hover:text-violet-600" />
                    <Link
                      href={`/products?categoryId=${subItem?.id}`}
                      className="group relative inline-block overflow-hidden  w-fit text-gray-300 py-1  hover:pl-2 duration-300  focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
                    >
                      <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-secondary transition-all duration-300 group-hover:w-full"></span>

                      {subItem.name}
                    </Link>
                  </span>
                );
              })} */}
            </ul>
          </div>
          <div className="flex gap-4 flex-col">
            <p className=" text-lg md:text-xl lg:text-2xl capitalize tracking-wide md:font-medium font-bold md:text-white text-secondary">
              Tags
            </p>
            <ul className="flex flex-col gap-2">
              {/* {data?.data?.data?.map((subItem: any, index: number) => {
                return (
                  // <Link key={index} className=" duration-500 text-gray-200  " href={subItem.link}>

                  // <li className="capitalize list-none w-fit text-gray-300 border-b border-transparent hover:border-secondary hover:text-white hover:pl-1.5 duration-500 common-transition">{subItem.name}</li>
                  // </Link>
                  <span key={index} className="flex items-center gap-1 ">
                    <FaAngleRight className="text-[1rem] text-white group-hover:text-violet-600" />
                    <Link
                      href={`/products?categoryId=${subItem?.id}`}
                      className="group relative inline-block overflow-hidden  w-fit text-gray-300 py-1  hover:pl-2 duration-300  focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
                    >
                      <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-secondary transition-all duration-300 group-hover:w-full"></span>

                      {subItem.name}
                    </Link>
                  </span>
                );
              })} */}
            </ul>
          </div>
          {CONNECT.map((item, index) => {
            return (
              <div key={index} className="flex gap-4 flex-col">
                <p className=" text-lg md:text-xl lg:text-2xl capitalize tracking-wide md:font-medium font-bold md:text-white text-secondary">
                  {item.menuName}
                </p>
                <ul className="flex flex-col gap-2">
                  {item.subMenu.map((subItem: any, index: number) => {
                    return (
                      // <Link key={index} className=" duration-500 text-gray-200  " href={subItem.link}>

                      // <li className="capitalize list-none w-fit text-gray-300 border-b border-transparent hover:border-secondary hover:text-white hover:pl-1.5 duration-500 common-transition">{subItem.name}</li>
                      // </Link>
                      <span key={index} className="flex items-center gap-1 ">
                        <FaAngleRight className="text-[1rem] text-white group-hover:text-violet-600" />
                        <Link
                          href={subItem.link}
                          className="group relative inline-block overflow-hidden  w-fit text-gray-300 py-1  hover:pl-2 duration-300  focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
                        >
                          <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-secondary transition-all duration-300 group-hover:w-full"></span>

                          {subItem.name}
                        </Link>
                      </span>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <hr className=" w-full bg-white" />
        <div className="flex items-center justify-between text-white font-semibold flex-col md:flex-row">
          <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
          <p className="text-center text-[1rem]">
            Designed And Developed by{" "}
            <span className=" text-sm text-gray-300 ">Rajesh Kumar Behera</span>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
