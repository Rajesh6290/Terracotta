
import ManageProductCard from "@/components/cards/ManageProductCard";
import { AdminLayout } from "@/layouts";
import MaterialTable from "@material-table/core";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";
import { FaTable } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
export const PRODUCT_ARR = [
    {
        id: 1,

        title: "Bamboo Polo T-Shirt",
        regularPrice: "399.00",
        sellingPrice: "1199.00",
        image: "/home/p-1.png",
        percentage: "20%",
        reviews: "15k",
        link: "#",
        description:
            "Crafted from high-quality, water-resistant materials, this backpack is built to the rigors of the great outdoors.",
        variant: [
            {
                id: "1",
                image: "/home/p-1.png",
                size: "XL",
                color: "Blue",
                stock: "40",
                mrp: "30",
                salePrice: "20",
            },
        ],
    },
    {
        id: 2,

        title: "Ceramic Tea/Coffee Cups",
        regularPrice: "399.00",
        sellingPrice: "1199.00",
        image: "/home/coffee&mug/1.png",
        percentage: "20%",
        reviews: "15k",
        link: "#",
        description:
            "Crafted from high-quality, water-resistant materials, this backpack is built to the rigors of the great outdoors.",
        variant: [
            {
                id: "1",
                image: "/home/p-1.png",
                size: "S",
                color: "Blue",
                stock: "40",
                mrp: "30",
                salePrice: "20",
            },
            {
                id: "2",
                image: "/home/p-1.png",
                size: "M",
                color: "Blue",
                stock: "40",
                mrp: "30",
                salePrice: "20",
            },
            {
                id: "3",
                image: "/home/p-1.png",
                size: "L",
                color: "Blue",
                stock: "40",
                mrp: "30",
                salePrice: "20",
            },
            {
                id: "3",
                image: "/home/p-1.png",
                size: "XL",
                color: "Blue",
                stock: "40",
                mrp: "30",
                salePrice: "20",
            },
            {
                id: "3",
                image: "/home/p-1.png",
                size: "XXL",
                color: "Blue",
                stock: "40",
                mrp: "30",
                salePrice: "20",
            },
        ],
    },
    {
        id: 3,

        title: "Metal Keychain with Pen",
        regularPrice: "399.00",
        sellingPrice: "1199.00",
        image: "/home/keychain/1.png",
        percentage: "20%",
        reviews: "15k",
        link: "#",
        description:
            "Crafted from high-quality, water-resistant materials, this backpack is built to the rigors of the great outdoors.",
        variant: [
            {
                id: "1",
                image: "/home/p-1.png",
                size: "XL",
                color: "Blue",
                stock: "40",
                mrp: "30",
                salePrice: "20",
            },
        ],
    },
    {
        id: 4,

        title: " Water Bottle 500 ml Flask ",
        regularPrice: "399.00",
        sellingPrice: "1199.00",
        image: "/home/waterbottle/1.png",
        percentage: "20%",
        reviews: "15k",
        link: "#",
        description:
            "Crafted from high-quality, water-resistant materials, this backpack is built to the rigors of the great outdoors.",
        variant: [
            {
                id: "1",
                image: "/home/p-1.png",
                size: "XL",
                color: "Blue",
                stock: "40",
                mrp: "30",
                salePrice: "20",
            },
        ],
    },
];
const ManageProduct = () => {
    const router = useRouter();
    console.log(router.asPath);
    const [activeView, setActiveView] = useState("GRID");
    const [activeVariantView, setActiveVariantView] = useState("GRID");
    const [openViewDetails, setOpenViewDetails] = useState(false);
    const [openVariant, setOpenVariant] = useState(false);
    const [variants, setVariants] = useState([]);
    const [tableData, setTableData] = useState([
        {
            sl: 1,
            image: "/home/p-1.png",
            name: "Bamboo Polo T-Shirt",
            mrp: "Rs. 200.00",
            salePrice: "Rs. 150.00",
        },
        {
            sl: 2,
            image: "/home/coffee&mug/1.png",
            name: "Ceramic Tea/Coffee Cups",
            mrp: "Rs. 300.00",
            salePrice: "Rs. 250.00",
        },
        {
            sl: 3,
            image: "/home/premiumgiftimg/2.jpg",
            name: "Wallet Keychain Combo",
            mrp: "Rs. 250.00",
            salePrice: "Rs. 150.00",
        },
        {
            sl: 4,
            image: "/home/note&penimg/1.png",
            name: "Note Book",
            mrp: "Rs. 100.00",
            salePrice: "Rs. 50.00",
        },
        // Add more data items as needed
    ]);
    const columns = [
        {
            title: "#",
            field: "sl",
            width: "5%",
        },
        {
            title: "Image",
            field: "image",
            render: (rowData: any) => (
                <img
                    src={rowData.image}
                    alt="Category"
                    style={{ width: "70px", height: "70px", borderRadius: "50%" }}
                />
            ),
            width: "10%",
        },
        {
            title: "Name",
            field: "name",
        },
        {
            title: "MRP",
            field: "mrp",
        },
        {
            title: "Sale Price",
            field: "salePrice",
        },
    ];
    const [Data, setData] = useState([
        {
            sl: 1,
            image: "/home/p-1.png",
            measureUnit: "XL",
            color: "Blue",
            stock: 40,
            mrp: 30.0,
            salePrice: 20.0,
        },
    ]);

    const tableColumns = [
        {
            title: "#",
            field: "sl",
            width: "5%",
        },
        {
            title: "Image",
            field: "image",
            render: (rowData: any) => (
                <img
                    src={rowData.image}
                    alt="profile"
                    style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
            ),
            width: "7%",
        },
        {
            title: "Measure Unit",
            field: "measureUnit",
        },
        {
            title: "Color",
            field: "color",
        },
        {
            title: "Stock",
            field: "stock",
        },
        {
            title: "MRP",
            field: "mrp",
        },
        {
            title: "Sale Price",
            field: "salePrice",
        },
    ];
    const handleViewClick = (data: string) => {
        setActiveView(data);
    };
    const handleVariantViewClick = (data: string) => {
        setActiveVariantView(data);
    };
    const itemsPerPage = 4; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState(""); // State for the search query

    // Function to handle search input change
    const handleSearchInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to the first page when searching
    };

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the data to display on the current page, filtered by the search query
    const filteredData = variants.filter((row: any) =>
        Object.values(row).some((value: any) =>
            value.toString().toLowerCase().includes(searchQuery?.toLowerCase())
        )
    );
    const currentData = filteredData?.slice(startIndex, endIndex);

    // Function to handle page navigation
    const handlePageChange = (newPage: React.SetStateAction<number>) => {
        setCurrentPage(newPage);
    };
    return (
        <AdminLayout>
            <div className=" flex flex-col w-full gap-5 overflow-y-scroll p-2 h-full ">
                <div className=" w-full h-fit p-5 uppercase bg-white rounded-xl shadow-[0px_0px_10px_1px_#00000024] flex justify-between items-center">
                    <p className=" text-lg font-semibold text-gray-500">
                        PRODUCTS VIEW Type
                    </p>
                    <div className=" items-center flex gap-5 px-10 text-3xl ">
                        <BsGridFill
                            onClick={() => handleViewClick("GRID")}
                            className={` cursor-pointer    duration-500 p-1 rounded-md
              ${activeView === "GRID"
                                    ? " text-secondary bg-cyan-100"
                                    : "text-primary hover:bg-pink-100"
                                }
              `}
                        />
                        <FaTable
                            onClick={() => handleViewClick("TABLE")}
                            className={` cursor-pointer  duration-500 p-1 rounded-md
              ${activeView === "TABLE"
                                    ? " text-secondary bg-cyan-100"
                                    : "text-primary hover:bg-pink-100"
                                }
              `}
                        />
                    </div>
                </div>
                <div className="py-4 pl-0.5">
                    {activeView === "GRID" ? (
                        <div className=" w-full h-fit grid grid-cols-4 gap-5">
                            {PRODUCT_ARR.map((curEle, index) => {
                                return (
                                    <ManageProductCard
                                        key={curEle.id}
                                        item={curEle}
                                        index={index}
                                        setOpenViewDetails={setOpenViewDetails}
                                        openViewDetails={openViewDetails}
                                        setOpenVariant={setOpenVariant}
                                        openVariant={openVariant}
                                        setVariants={setVariants}
                                    />
                                );
                            })}
                        </div>
                    ) : activeView === "TABLE" ? (
                        <MaterialTable
                            columns={columns}
                            data={tableData}
                            editable={{
                                onRowAdd: (newRow) =>
                                    new Promise<void>((resolve, reject) => {
                                        setTableData([...tableData, newRow]);
                                        setTimeout(() => {
                                            console.log("New row added:", newRow);
                                            resolve();
                                        }, 500);
                                    }),
                                onRowUpdate: (newRow) =>
                                    new Promise<void>((resolve, reject) => {
                                        const updatedData = tableData.map((row) =>
                                            row.sl === newRow.sl ? { ...row, ...newRow } : row
                                        );
                                        setTableData(updatedData);
                                        setTimeout(() => resolve(), 500);
                                    }),
                                onRowDelete: (selectedRow) =>
                                    new Promise<void>((resolve, reject) => {
                                        const updatedData = tableData.filter(
                                            (row) => row.sl !== selectedRow.sl
                                        );
                                        setTableData(updatedData);
                                        setTimeout(() => resolve(), 1000);
                                    }),
                            }}
                            detailPanel={[
                                {
                                    tooltip: "Show Subcategories",
                                    render: () => {
                                        return (
                                            <div className="p-2">
                                                <MaterialTable
                                                    columns={tableColumns}
                                                    data={Data}
                                                    editable={{
                                                        onRowAdd: (newRow) =>
                                                            new Promise<void>((resolve, reject) => {
                                                                setData([...Data, newRow]);
                                                                setTimeout(() => {
                                                                    console.log("New row added:", newRow);
                                                                    resolve();
                                                                }, 500);
                                                            }),
                                                        onRowUpdate: (newRow) =>
                                                            new Promise<void>((resolve, reject) => {
                                                                const updatedData = Data.map((row) =>
                                                                    row.sl === newRow.sl
                                                                        ? { ...row, ...newRow }
                                                                        : row
                                                                );
                                                                setData(updatedData);
                                                                setTimeout(() => resolve(), 500);
                                                            }),
                                                        onRowDelete: (selectedRow) =>
                                                            new Promise<void>((resolve, reject) => {
                                                                const updatedData = Data.filter(
                                                                    (row) => row.sl !== selectedRow.sl
                                                                );
                                                                setData(updatedData);
                                                                setTimeout(() => resolve(), 1000);
                                                            }),
                                                    }}
                                                    options={{
                                                        sorting: true,
                                                        search: true,
                                                        actionsColumnIndex: -1,
                                                        headerStyle: {
                                                            backgroundColor: "#E5E7EB",
                                                            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
                                                            fontWeight: "bold",
                                                        },
                                                    }}
                                                    title={
                                                        <span className="font-bold text-xl">
                                                            Variant Details
                                                        </span>
                                                    }
                                                />
                                            </div>
                                        );
                                    },
                                },
                            ]}
                            options={{
                                sorting: true,
                                search: true,
                                addRowPosition: "first",
                                detailPanelColumnAlignment: "right",
                                actionsColumnIndex: -1,
                                pageSize: 10,
                                headerStyle: {
                                    backgroundColor: "#FFAA16",
                                    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
                                    fontWeight: "bold",
                                },
                                // exportButton: true,
                            }}
                            title="Manage Products"
                        />
                    ) : null}
                </div>
            </div>
            {/* side drawer */}
            <div
                className={`w-[28rem] h-screen absolute right-0 top-0 duration-500 transition-all ease-in-out bg-white border-2 z-[9999] ${openViewDetails ? "translate-x-0" : "translate-x-[35rem]"
                    }`}
            >
                <div className="w-full h-full relative">
                    <span
                        onClick={() => setOpenViewDetails(!openViewDetails)}
                        className="absolute top-2 left-2"
                    >
                        <FaX className="text-xl text-red-600 cursor-pointer" />
                    </span>
                </div>
            </div>
            {/* Variant modal */}
            {openVariant && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-[9999]">
                    <div className="p-4 rounded-md  w-[80%] h-[100%]  relative">
                        <p
                            onClick={() => setOpenVariant(!openVariant)}
                            className=" absolute md:-top-0 -top-8 md:-right-7 -right-0 cursor-pointer "
                        >
                            <FaX className=" font-bold p-2 rounded-full border-2 border-white text-white text-4xl" />
                        </p>
                        <div className=" w-full h-full bg-white p-5  rounded-lg  flex flex-col gap-5 overflow-y-auto scroll ">
                            <div className=" w-full h-fit p-5 uppercase bg-white rounded-xl shadow-[0px_0px_10px_1px_#00000024] flex justify-between items-center">
                                <p className=" text-lg font-semibold text-gray-500">
                                    Variant VIEW Type
                                </p>
                                <div className=" items-center flex gap-5 px-10 text-3xl ">
                                    <BsGridFill
                                        onClick={() => handleVariantViewClick("GRID")}
                                        className={` cursor-pointer    duration-500 p-1 rounded-md
              ${activeVariantView === "GRID"
                                                ? " text-secondary bg-cyan-100"
                                                : "text-primary hover:bg-pink-100"
                                            }
              `}
                                    />
                                    <FaTable
                                        onClick={() => handleVariantViewClick("TABLE")}
                                        className={` cursor-pointer  duration-500 p-1 rounded-md
              ${activeVariantView === "TABLE"
                                                ? " text-secondary bg-cyan-100"
                                                : "text-primary hover:bg-pink-100"
                                            }
              `}
                                    />
                                </div>
                            </div>
                            {activeVariantView === "GRID" ? (
                                <div className=" w-full grid grid-cols-4 gap-5">
                                    {variants?.length > 0 &&
                                        variants.map((item, index) => {
                                            return (
                                                <>
                                                    {/* <VariantCard
                            item={item}
                            index={index}
                            openViewDetails={false}
                            setOpenViewDetails={undefined}
                          /> */}
                                                </>
                                            );
                                        })}
                                </div>
                            ) : activeVariantView === "TABLE" ? (
                                <div className=" w-full">
                                    <article className="w-full">
                                        <div className="flex flex-col gap-3  bg-white rounded-lg py-2 w-full">
                                            <form
                                                action="#"
                                                className="flex justify-between items-center px-3"
                                            >
                                                <div>
                                                    <select
                                                        name=""
                                                        id=""
                                                        className="outline-none ring-1 px-2 py-1 rounded-md bg-primary/10 ring-primary/10 text-primary"
                                                    >
                                                        <option value="">Default Filter</option>
                                                        <option value="">A-Z</option>
                                                        <option value="">Z-A</option>
                                                    </select>
                                                </div>
                                                <div className="flex gap-1 items-center p-1 outline-none ring-1 ring-primary/10 text-primary font-semibold text-sm rounded-lg">
                                                    <input
                                                        type="search"
                                                        name=""
                                                        id=""
                                                        className="p-1 outline-none bg-transparent"
                                                        placeholder="Search Here"
                                                        value={searchQuery}
                                                        onChange={handleSearchInputChange}
                                                    />
                                                </div>
                                            </form>

                                            <div
                                                id="main"
                                                className="relative overflow-x-auto w-full"
                                            >
                                                <table className="w-full text-sm text-left text-gray-500">
                                                    <thead className="text-xs text-primary uppercase bg-primary/5">
                                                        <tr className="text-center">
                                                            <th
                                                                scope="col"
                                                                className="px-3 py-2 border-r border-l border-primary"
                                                            >
                                                                Sl No
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-3 py-2 border-r border-primary"
                                                            >
                                                                Image
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-3 py-2 border-r border-primary"
                                                            >
                                                                Measure Unit
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-3 py-2 border-r border-primary"
                                                            >
                                                                Color
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-3 py-2 border-r border-primary"
                                                            >
                                                                Stock
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-3 py-2 border-r border-primary"
                                                            >
                                                                MRP
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-3 py-2 border-r border-primary"
                                                            >
                                                                Sale Price
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-3 py-2 border-r border-primary"
                                                            >
                                                                Action
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {currentData?.map((row: any, index: any) => (
                                                            <tr key={row.id} className="bg-white border-b  ">
                                                                <th
                                                                    scope="row"
                                                                    className="px-3 py-2 font-medium text-gray-900 border-r"
                                                                >
                                                                    {index + 1}
                                                                </th>
                                                                <th
                                                                    scope="row"
                                                                    className="px-3 py-2 font-medium text-gray-900 border-r flex w-full justify-center items-center"
                                                                >
                                                                    <img
                                                                        src={row.image}
                                                                        className=" w-20 h-20"
                                                                        alt=""
                                                                    />
                                                                </th>
                                                                <th
                                                                    scope="row"
                                                                    className="px-3 py-2 font-medium text-gray-900 border-r"
                                                                >
                                                                    {row.size}
                                                                </th>
                                                                <th
                                                                    scope="row"
                                                                    className="px-3 py-2 font-medium text-gray-900 border-r"
                                                                >
                                                                    {row.color}
                                                                </th>
                                                                <th
                                                                    scope="row"
                                                                    className="px-3 py-2 font-medium text-gray-900 border-r"
                                                                >
                                                                    {row.stock}
                                                                </th>
                                                                <th
                                                                    scope="row"
                                                                    className="px-3 py-2 font-medium text-gray-900 border-r"
                                                                >
                                                                    {row.mrp}
                                                                </th>
                                                                <th
                                                                    scope="row"
                                                                    className="px-3 py-2 font-medium text-gray-900 border-r"
                                                                >
                                                                    {row.salePrice}
                                                                </th>
                                                                <th
                                                                    scope="row"
                                                                    className="px-3 py-2 font-medium text-gray-900 border-r "
                                                                >
                                                                    <p className=" flex items-center gap-5">
                                                                        <BiSolidEditAlt className=" text-2xl text-blue-500 cursor-pointer" />
                                                                        <MdDelete className=" text-2xl text-red-500 cursor-pointer" />
                                                                    </p>
                                                                </th>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                                <div
                                                    className="flex items-center justify-between p-3"
                                                    aria-label="Table navigation"
                                                >
                                                    <span className="font-normal">
                                                        Showing{" "}
                                                        <span className="font-bold font-sub text-sm text-gray-900">
                                                            {startIndex + 1}-
                                                            {Math.min(endIndex, filteredData?.length)}
                                                        </span>{" "}
                                                        of{" "}
                                                        <span className="font-bold font-sub text-sm text-gray-900">
                                                            {filteredData?.length}
                                                        </span>
                                                    </span>
                                                    <ul className="inline-flex -space-x-px text-sm h-6">
                                                        <li>
                                                            <button
                                                                onClick={() =>
                                                                    handlePageChange(currentPage - 1)
                                                                }
                                                                disabled={currentPage === 1}
                                                                className={`flex items-center justify-center p-4 h-6 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg ${currentPage === 1
                                                                    ? "cursor-not-allowed"
                                                                    : "hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                                    }`}
                                                            >
                                                                Previous
                                                            </button>
                                                        </li>
                                                        {Array.from(
                                                            {
                                                                length: Math.ceil(
                                                                    filteredData?.length / itemsPerPage
                                                                ),
                                                            },
                                                            (_, index) => (
                                                                <li key={index}>
                                                                    <button
                                                                        onClick={() => handlePageChange(index + 1)}
                                                                        className={`flex items-center justify-center p-4 h-6 leading-tight text-gray-500 bg-white border border-gray-300 ${currentPage === index + 1
                                                                            ? "bg-blue-50 text-blue-600 font-semibold border-gray-300"
                                                                            : "hover:bg-gray-100 hover:text-gray-700 "
                                                                            }`}
                                                                    >
                                                                        {index + 1}
                                                                    </button>
                                                                </li>
                                                            )
                                                        )}
                                                        <li>
                                                            <button
                                                                onClick={() =>
                                                                    handlePageChange(currentPage + 1)
                                                                }
                                                                disabled={endIndex >= filteredData?.length}
                                                                className={`flex items-center justify-center p-4 h-6 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg ${endIndex >= filteredData?.length
                                                                    ? "cursor-not-allowed"
                                                                    : "hover:bg-gray-100 hover:text-gray-700 "
                                                                    }`}
                                                            >
                                                                Next
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
};
const VariantTable = () => { };
export default ManageProduct;
