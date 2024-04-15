import CustomLoader from '@/components/core/CustomLoader'
import useSwr from '@/hooks/useSwr'
import { AdminLayout } from '@/layouts'
import { MuiTblOptions } from '@/utils'
import MaterialTable from '@material-table/core'
import { Pagination, Paper } from '@mui/material'
import moment from 'moment'
import Link from 'next/link'
import { useDeferredValue, useState } from 'react'
import { BsEye } from 'react-icons/bs'
import { IoMdSearch } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'

const AllOrders = () => {
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [searchText, setSearchText] = useState<string>("")
    const query = useDeferredValue(searchText)
    let url = `order/getAll?page=${pageNumber}&limit=10`
    // searchText && (url += `&search=${query}`)


    const { data, isValidating, mutate, pagination } = useSwr(url, { revalidateOnFocus: true });

    return (
        <AdminLayout title="Product List | Terracotta">

            <div className=' w-full p-5 flex flex-col gap-5'>
                <p className="font-semibold tracking-wider text-xl text-gray-700">All Orders List</p>
                <div className="w-full flex items-center  justify-between">
                    <div className=' relative w-[20rem] flex items-center gap-2 bg-white rounded-md px-3'>
                        <IoMdSearch className='text-gray-400 text-xl ' />
                        <input value={searchText} onChange={(e) => setSearchText(e?.target?.value)} type="text" name="searchProduct" placeholder='Search Product...' className=' bg-transparent text-gray-500 font-normal p-2 outline-none placeholder:text-gray-300 w-full placeholder:font-normal placeholder:text-sm' />
                    </div>
                    <div className='flex items-center gap-4'>
                        <Link href="/admin/products/add-product" className="bg-primary text-white px-5 py-2 text-sm rounded-lg font-semibold">
                            View Cancelled Orders
                        </Link>
                    </div>
                </div>


                <MaterialTable

                    isLoading={isValidating}
                    components={{
                        Container: (props: any) => (
                            <Paper {...props} className="!shadow-none" />
                        ),
                        OverlayLoading: () => <CustomLoader />,
                        Pagination: (props) => {
                            return (
                                <div className="w-full flex items-center justify-center py-4">
                                    <Pagination
                                        count={Math.ceil(
                                            Number(pagination?.totalCount || 1) /
                                            Number(pagination?.limit || 1)
                                        )}
                                        onChange={(e, v: number) => setPageNumber(v)}
                                        variant="outlined"
                                        color="primary"
                                        page={pageNumber}
                                    />
                                </div>
                            );
                        },

                    }}

                    data={
                        data
                            ? data?.data?.data?.map((item: any, i: number) => ({
                                ...item,
                                sl: i + 1 + 10 * (pageNumber! - 1),
                                id: item?._id,
                                orderId: item?.orderNo,
                                quantity: item?.amount?.totalQuantity,
                                createdAt: moment(item?.createdAt).format("lll"),
                                address: item?.addresses?.landmark + item?.addresses?.address,
                                amount: item?.amount?.totalAmount,
                                status: item?.orderStatus

                            }))
                            : []
                    }


                    options={{
                        ...MuiTblOptions(),
                        search: false,
                        exportMenu: [],
                        toolbar: false,
                        pageSize: data?.data?.data ? data?.data?.data?.length : 2,


                    }}
                    columns={[
                        {
                            title: "#",
                            field: "sl",
                            editable: "never",
                            width: "1%",
                        },

                        {
                            title: "Order ID",
                            tooltip: "Order ID",
                            field: "orderId",
                            editable: "never",
                            width: "10%",

                        },

                        {
                            title: "Qty",
                            tooltip: "Qty",
                            field: "quantity",
                            editable: "never",
                            width: "2%",
                        },
                        {
                            title: "Purchase Date",
                            tooltip: "Purchase Date",
                            field: "createdAt",
                            editable: "never",
                            width: "10%",
                        },
                        {
                            title: "Billing Address",
                            tooltip: "Billing Address",
                            field: "address",
                            editable: "never",
                            width: "20%",
                        },
                        {
                            title: "Amount",
                            tooltip: "Amount",
                            field: "amount",
                            editable: "never",
                            width: "5%",
                        },
                        {
                            title: "Status",
                            tooltip: "Status",
                            field: "status",
                            editable: "never",
                            width: "5%",

                        },



                        {
                            title: "Action",
                            tooltip: "Action",
                            field: "action",
                            editable: "never",
                            width: "5%",
                            render: (item: any) => (
                                <div className='flex items-center gap-3'>

                                    <Link href={`/admin/orders/${item?.id}`}><BsEye className='text-xl text-gray-500  cursor-pointer' /></Link>
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

export default AllOrders

