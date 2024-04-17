
import useSwr from "@/hooks/useSwr";
import { AdminLayout } from "@/layouts";
import dynamic from "next/dynamic";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Admin = () => {
  const { data, isValidating } = useSwr(`order/getAll`)
  const fetchTotal = data?.data?.data?.map((item: any) => item?.amount?.totalSaleAmount)
  const TotalOrderValue = fetchTotal?.reduce((st: any, lt: any) => st + lt, 0)
  const findTodayOrder = data?.data?.data?.filter((item: any) => new Date(item?.createdAt).toDateString() === new Date().toDateString())
  const fetchTodayTotal = findTodayOrder?.map((item: any) => item?.amount?.totalSaleAmount)
  const TotalTodayOrderValue = fetchTodayTotal?.reduce((st: any, lt: any) => st + lt, 0)
  const FIRST_ARR = [
    {
      id: "1",
      name: "Android",
      totalVisit: "32,350",
      percentage: "30.34%",
      image: "/home/android.png",
    },
    {
      id: "2",
      name: "IOS",
      totalVisit: "32,350",
      percentage: "30.34%",
      image: "/home/ios.png",
    },
    {
      id: "1",
      name: "Windows",
      totalVisit: "32,350",
      percentage: "30.34%",
      image: "/home/windows.png",
    },
    {
      id: "1",
      name: "Mac OS",
      totalVisit: "32,350",
      percentage: "30.34%",
      image: "/home/macos.jpg",
    },
  ];
  const SECOND_ARR = [
    {
      id: "1",
      name: "Others Visit",
      total: "32,350",
      percentage: 86,
      type: "Total Visit",
    },
    {
      id: "1",
      name: "Contact",
      total: 0,
      percentage: 0,
      type: "Today Connect",
    },
    {
      id: "1",
      name: "Contact",
      total: 0,
      percentage: 0,
      type: "Total Connect",
    },
    {
      id: "1",
      name: "Reviews",
      total: "87,234",
      percentage: 83,
      type: "Total Reviews",
    },
  ];

  const DynamicApexChart = dynamic(() => import("../../components/charts"), {
    loading: () => <p>Loading chart...</p>,
    ssr: false, // Prevent rendering on the server side
  });
  const chartData = {
    series: [18, 23, 21, 15, 39, 13, 99, 47, 53, 4, 102, 43],
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
  };
  function greet() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();

    if (currentHour < 12) {
      return "Good Morning !";
    } else if (currentHour < 18) {
      return "Good Afternoon !";
    } else {
      return "Good Evening !";
    }
  }
  return (
    <AdminLayout title="Dashboard | Terracotta Craft">
      <section className=" w-full h-full flex flex-col gap-5 px-10 py-5">
        <div className=" w-full flex lg:flex-row flex-col h-fit  gap-5">
          <div className="w-full h-full  bg-white rounded-lg shadow-[0px_0px_3px_0.1px_#00000024] flex flex-col gap-4 px-5 py-5">
            <p className=" flex flex-col gap-2">
              <span className=" text-primary font-medium ">
                {greet()}, Terracotta Admin!
              </span>
              <span className=" text-sm text-gray-500">{`Here’s what happening with your store today!`}</span>
            </p>
            <div className=" w-full flex justify-between items-center">
              <div className=" flex flex-col gap-5">
                <p className=" flex flex-col gap-1">
                  <span className=" text-2xl font-semibold text-gray-700">
                    {TotalTodayOrderValue}
                  </span>
                  <span className=" text-sm text-gray-500">{`Today’s Order Amount`}</span>
                </p>
                <p className=" flex flex-col gap-1">
                  <span className=" text-2xl font-semibold text-gray-700">
                    {TotalOrderValue}
                  </span>
                  <span className=" text-sm text-gray-500">Total Order Amount</span>
                </p>
              </div>
              <img src="/welcome.svg" className=" h-fit w-38" alt="" />
            </div>
          </div>
          <div className="w-full h-full grid grid-cols-2 gap-5">
            {FIRST_ARR.map((item) => {
              return (
                <div
                  key={item.id}
                  className=" relative px-4 py-5 w-full h-full bg-white rounded-lg shadow-[0px_0px_3px_0.1px_#00000024] flex flex-col justify-between"
                >
                  <div className="absolute top-3 right-3 w-14 h-14 p-3 rounded-xl bg-gray-100 flex items-center justify-center">
                    <img
                      src={item.image}
                      className=" w-full h-full   object-contain"
                      alt=""
                    />
                  </div>

                  <span className=" font-medium text-gray-400">
                    {item.name}
                  </span>
                  <span className=" font-semibold text-gray-700 text-2xl">
                    {item.totalVisit}
                  </span>
                  <p className=" w-full flex items-center justify-between">
                    <span className=" font-medium text-gray-400 text-sm">
                      Total visit
                    </span>
                    <span className=" text-sm text-blue-500">
                      {item.percentage}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" w-full grid md:grid-cols-4 grid-cols-1 gap-4">
          {SECOND_ARR.map((item) => {
            return (
              <div
                key={item.id}
                className=" relative px-4 py-5 w-full h-full bg-white rounded-lg shadow-[0px_0px_3px_0.1px_#00000024] flex flex-col justify-between gap-3"
              >
                <div className="absolute top-8 right-3 lg:w-20 lg:h-20 md:w-16 md:h-16 w-16 h-16  flex items-center justify-center">
                  <CircularProgressbar
                    maxValue={
                      100
                    }
                    value={item.percentage}
                    text={`${item.percentage}%`}
                  />
                </div>

                <span className=" font-medium text-gray-400">{item.name}</span>
                <span className=" font-semibold text-gray-700 text-2xl">
                  {item.total}
                </span>
                <p className=" w-full flex items-center justify-between">
                  <span className=" font-medium text-gray-400 text-sm">
                    {item.type}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
        <div className=" w-full  h-fit">
          <div className="w-full">
            <div className=" rounded-lg bg-white p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <h1 className=" text-2xl font-medium text-primary">
                Monthly Visit
              </h1>
              <DynamicApexChart
                series={chartData.series}
                categories={chartData.categories}
              />
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default Admin;
