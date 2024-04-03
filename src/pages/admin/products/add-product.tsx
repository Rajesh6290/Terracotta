import { AdminLayout } from "@/layouts";
import React, { useState } from "react";
import MaterialTable from "@material-table/core";

const AddProduct = () => {
    const [showAddVariantForm, setShowAddVariantForm] = useState(false);

    const tableData = [
        {
            sl: 1,
            image: "/home/tshirtimage/1.png",
            measureUnit: "XL",
            color: "Blue",
            stock: 40,
            mrp: 30.0,
            salePrice: 20.0,
        },
    ];

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
    return (
        <AdminLayout>
            <div className=" px-4 py-4">
                {showAddVariantForm ? (
                    <>
                        <div className="flex flex-col gap-4">
                            <div className="w-full h-full flex flex-col gap-10 border-2 rounded-lg py-2 px-6">
                                <p className="flex flex-col gap-1">
                                    <span className=" text-primary text-2xl font-medium">
                                        Add Variant
                                    </span>
                                    <span className="h-0.5 w-28 bg-teal-400 rounded-full"></span>
                                </p>
                                <div>
                                    {/* <AddVariantForm /> */}
                                </div>
                            </div>
                            <div className="w-full h-full flex flex-col gap-5 ">
                                <div className="w-full flex flex-col bg-white shadow-[0px_0px_6px_2px_#00000024] rounded">
                                    <MaterialTable
                                        columns={tableColumns}
                                        data={tableData}
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
                                            <span className="font-bold text-xl">Variant Details</span>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-full h-full flex flex-col gap-3 border-2 rounded-lg py-2 px-6">
                            <p className="flex flex-col gap-1">
                                <span className=" text-primary text-2xl font-medium">
                                    Add Product
                                </span>
                                <span className="h-0.5 w-28 bg-teal-400 rounded-full"></span>
                            </p>
                            <div>
                                {/* <AddProductForm
                  setShowAddVariantForm={setShowAddVariantForm}
                  showAddVariantForm={showAddVariantForm}
                /> */}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </AdminLayout>
    );
};

export default AddProduct;
