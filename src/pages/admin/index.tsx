import { AdminLayout } from "@/layouts";
import dynamic from "next/dynamic";
import React from "react";
import { BiUser } from "react-icons/bi";
import { BsBagHeart } from "react-icons/bs";
import { HiOutlineShoppingBag, HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoFileTrayFullOutline, IoMailUnreadOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";

const Dashboard = () => {
  const DynamicApexChart = dynamic(
    () => import("../../components/chart/ColumnChart"),
    {
      loading: () => <p>Loading chart...</p>,
      ssr: false, // Prevent rendering on the server side
    }
  );
  const PieApexChart = dynamic(
    () => import("../../components/chart/PieChart"),
    {
      loading: () => <p>Loading chart...</p>,
      ssr: false, // Prevent rendering on the server side
    }
  );

  const pieData = [
    { category: "Tshirt", value: 20 },
    { category: "Hoodies", value: 20 },
    { category: "Mugs", value: 10 },
    { category: "Stationary Items", value: 10 },
    { category: "Customized Products", value: 20 },
    { category: "Caps", value: 10 },
    { category: "Personalized Kit", value: 10 },
  ];

  const chartData = {
    series: [18, 14, 22, 15, 23, 13, 45, 16, 23, 34, 21],
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Nov",
      "Dec",
    ],
  };
  return (
    <>
      <AdminLayout>
        <div className="flex flex-col gap-6  overflow-y-scroll p-2 h-full">
          <article className="grid md:grid-cols-4 grid-cols-1 gap-4 ">
            {[
              {
                label: "Total User",
                value: 700,
                icon: <BiUser className=" text-5xl text-white " />,
                bgColor: "from-cyan-500 to-blue-500",
              },
              {
                label: "Total Influencer Request",
                value: "100+",
                icon: <IoMailUnreadOutline className="text-5xl text-white" />,
                bgColor: "from-fuchsia-600 to-pink-600",
              },
              {
                label: "Total Products",
                value: "800+",
                icon: <HiOutlineShoppingBag className="text-5xl text-white" />,
                bgColor: "from-amber-200 to-yellow-500",
              },
              {
                label: "Total Categories",
                value: "20+",
                icon: <IoFileTrayFullOutline className="text-5xl text-white" />,
                bgColor: "from-emerald-400 to-teal-500",
              },
              {
                label: "Total Revenue",
                value: "70+",
                icon: <TbReportSearch className="text-5xl text-white" />,
                bgColor: "from-orange-400 to-amber-500",
              },
              {
                label: "Happy Customers",
                value: "500+",
                icon: <HiOutlineUserGroup className="text-5xl text-white" />,
                bgColor: "from-green-500 to-emerald-600",
              },
              {
                label: "Business Organizations",
                value: "30",
                icon: (
                  <HiOutlineBuildingOffice className="text-5xl text-white" />
                ),
                bgColor: " from-rose-400 to-red-500",
              },
              {
                label: "Customized Products",
                value: "400+",
                icon: <BsBagHeart className="text-5xl text-white" />,
                bgColor: "from-violet-400 to-purple-500",
              },
            ].map((data, index) => (
              <div
                key={index}
                className={`p-3 h-[6rem] bg-white rounded-lg shadow-[0px_0px_8px_1px_#00000024] w-full flex justify-between items-center`}
              >
                <span>
                  <p className="font-extrabold text-xl font-sub text-primary">
                    {data.value}
                  </p>
                  <p className="font-sub font-semibold text-gray-600">
                    {data.label}
                  </p>
                </span>
                <p
                  className={`w-16 h-16 bg-gradient-to-r ${data.bgColor} rounded-full p-4`}
                >
                  <span className="w-full h-full flex justify-center items-center">
                    {data.icon}
                  </span>
                </p>
              </div>
            ))}
          </article>
          <article className="flex gap-6">
            <div className="w-1/2">
              <div className=" rounded-lg bg-white p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <h1 className=" text-2xl font-medium text-primary">
                  Monthly Revenue
                </h1>
                <DynamicApexChart
                  series={chartData.series}
                  categories={chartData.categories}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className=" rounded-lg bg-white p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <h1 className=" text-2xl font-medium text-primary">
                  All Categories
                </h1>
                <></>
                <PieApexChart chartData={pieData} />
              </div>
            </div>
          </article>
        </div>
      </AdminLayout>
    </>
  );
};

export default Dashboard;
