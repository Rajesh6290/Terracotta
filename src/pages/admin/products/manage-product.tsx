import useSwr from '@/hooks/useSwr'
import { AdminLayout } from '@/layouts'
import { MuiTblOptions } from '@/utils'
import MaterialTable from '@material-table/core'
import { Paper } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { BiAddToQueue } from 'react-icons/bi'
import { BsEye } from 'react-icons/bs'
import { IoMdSearch } from 'react-icons/io'
import { MdEdit, MdDelete } from 'react-icons/md'

const ManageProduct = () => {
    const { data, isValidating } = useSwr(`product`)
    return (
        <AdminLayout title="Product List | Terracotta">
            <div className=' w-full p-5 flex flex-col gap-5'>
                <p className="font-semibold tracking-wider text-xl text-gray-700">Product List</p>
                <div className="w-full flex items-center  justify-between">
                    <div className=' relative w-[20rem] flex items-center gap-2 bg-white rounded-md px-3'>
                        <IoMdSearch className='text-gray-400 text-xl ' />
                        <input type="text" name="searchProduct" placeholder='Search Product...' className=' bg-transparent text-gray-500 font-normal p-2 outline-none placeholder:text-gray-300 w-full placeholder:font-normal placeholder:text-sm' />
                    </div>
                    <Link href="/admin/products/add-product" className="bg-primary text-white px-5 py-2 text-sm rounded-lg font-semibold">
                        Add Product
                    </Link>
                </div>
                <MaterialTable

                    // isLoading={isLoading || isValidating}
                    components={{
                        Container: (props: any) => (
                            <Paper {...props} className="!shadow-none" />
                        ),

                    }}

                    data={
                        data
                            ? data?.data?.data?.map((item: any, i: number) => ({
                                ...item,
                                sl: i + 1,
                                id: item?._id,
                                name: item?.name,
                                slug: item?.slug,
                                description: item?.description,
                                color: item?.color,
                                price: item?.price,
                                salePrice: item?.salePrice,
                                discount: item?.discount,
                                stock: item?.stock,
                                images: item?.images,
                                category: item?.categoryName

                            }))
                            : []
                    }


                    options={{
                        ...MuiTblOptions(),
                        search: false,
                        exportMenu: [],
                        toolbar: false,

                    }}
                    columns={[
                        {
                            title: "#",
                            field: "sl",
                            editable: "never",
                            width: "1%",
                        },

                        {
                            title: "Name",
                            tooltip: "Name",
                            field: "name",
                            editable: "never",
                            width: "20%",
                            render: (item: any) => (
                                <div className='flex items-center gap-5'>
                                    {item?.images?.length > 0 && <img src={item.images[0].imageUrl} className='w-14 h-14 rounded-full' alt="" />}
                                    <p className='flex flex-col gap-1'>
                                        <span className='text-gray-800 font-medium text-lg'>{item?.name}</span>
                                        <span className=' text-gray-500 text-sm font-normal'>#{item?.id?.slice(0, 9)}</span>
                                    </p>
                                </div>
                            )
                        },

                        {
                            title: "Category",
                            tooltip: "Category",
                            field: "category",
                            editable: "never",
                            width: "10%",
                        },
                        {
                            title: "₹ Mrp",
                            tooltip: "₹ Mrp",
                            field: "price",
                            editable: "never",
                            width: "10%",
                        },
                        {
                            title: "₹ Sale Price",
                            tooltip: "₹ Sale Price",
                            field: "salePrice",
                            editable: "never",
                            width: "10%",
                        },
                        {
                            title: "Stock",
                            tooltip: "Stock",
                            field: "stock",
                            editable: "never",
                            width: "5%",
                        },
                        {
                            title: "Published",
                            tooltip: "Published",
                            field: "published",
                            editable: "never",
                            width: "5%",
                        },



                        {
                            title: "Action",
                            tooltip: "Action",
                            field: "action",
                            editable: "never",
                            width: "5%",
                            render: (value: any) => (
                                <div className='flex items-center gap-3'>
                                    <p><MdEdit className='text-xl text-gray-800  cursor-pointer' /></p>
                                    <p><BsEye className='text-xl text-gray-500  cursor-pointer' /></p>
                                    <p><MdDelete className='text-xl text-red-500  cursor-pointer' /></p>
                                </div>
                            )

                        },
                    ]}
                />
            </div>
        </AdminLayout>
    )
}

export default ManageProduct