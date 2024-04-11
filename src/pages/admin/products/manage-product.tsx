import CustomLoader from '@/components/core/CustomLoader'
import EditProduct from '@/components/form/EditProductForm'
import EditProductImage from '@/components/form/EditProductImage'
import useMutation from '@/hooks/useMutation'
import useSwr from '@/hooks/useSwr'
import { AdminLayout } from '@/layouts'
import { MuiTblOptions } from '@/utils'
import MaterialTable from '@material-table/core'
import { Pagination, Paper, Switch, Tooltip } from '@mui/material'
import Link from 'next/link'
import { Fragment, useDeferredValue, useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import { BsEye } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import { IoMdSearch } from 'react-icons/io'
import { MdDelete, MdDeleteOutline, MdEdit, MdStarBorder, MdTableRows } from 'react-icons/md'
import { PiCardsBold } from 'react-icons/pi'

const ManageProduct = () => {
    const { mutation, isLoading } = useMutation()
    const [view, setView] = useState("Table")
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<any>();
    const [imageOpen, setImageOpen] = useState(false);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [searchText, setSearchText] = useState<string>("")
    const query = useDeferredValue(searchText)
    let url = `product?sortBy=desc&page=${pageNumber}&limit=10`
    searchText && (url += `&search=${query}`)


    const { data, isValidating, mutate, pagination } = useSwr(url, { revalidateOnFocus: true });
    const UpdateProduct = async (item: any) => {
        try {
            const res = await mutation(`product/${item?.id}`, {
                method: "PUT",
                body: {
                    isPublished: item?.isPublished === true ? false : true
                }
            })
            if (res?.status === 200) {
                mutate()
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <AdminLayout title="Product List | Terracotta">
            <EditProduct
                openDialog={open}
                setOpenDialog={() => setOpen(false)}
                mutate={mutate}
                data={value}

            />
            <EditProductImage
                openDialog={imageOpen}
                setOpenDialog={() => setImageOpen(false)}
                data={value}
                mutate={mutate}
            />
            <div className=' w-full p-5 flex flex-col gap-5'>
                <p className="font-semibold tracking-wider text-xl text-gray-700">Product List</p>
                <div className="w-full flex items-center  justify-between">
                    <div className=' relative w-[20rem] flex items-center gap-2 bg-white rounded-md px-3'>
                        <IoMdSearch className='text-gray-400 text-xl ' />
                        <input value={searchText} onChange={(e) => setSearchText(e?.target?.value)} type="text" name="searchProduct" placeholder='Search Product...' className=' bg-transparent text-gray-500 font-normal p-2 outline-none placeholder:text-gray-300 w-full placeholder:font-normal placeholder:text-sm' />
                    </div>
                    <div className='flex items-center gap-4'>
                        <p onClick={() => setView("Card")} className={`text-2xl cursor-pointer text-gray-700 ${view === "Card" ? ` bg-primary/10 p-1 rounded-md text-secondary duration-200 transition-all` : `hover:text-primary`} `}><PiCardsBold /></p>
                        <p onClick={() => setView("Table")} className={`text-2xl cursor-pointer text-gray-700 ${view === "Table" ? ` bg-primary/10 p-1 rounded-md text-secondary duration-200 transition-all` : `hover:text-primary`} `}><MdTableRows /></p>
                        <Link href="/admin/products/add-product" className="bg-primary text-white px-5 py-2 text-sm rounded-lg font-semibold">
                            Add Product
                        </Link>
                    </div>
                </div>
                {
                    view === "Card" ? (
                        <div className='w-full flex flex-col gap-10'>
                            <div className='w-full grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-cols-2 items-center gap-5'>
                                {data?.data?.data?.map((item: any, i: number) => (
                                    <ProductCardView item={item} mutate={mutate} key={i} />
                                ))}
                            </div>
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
                        </div>


                    ) :

                        <MaterialTable

                            isLoading={isLoading || isValidating}
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
                                        name: item?.name,
                                        slug: item?.slug,
                                        description: item?.description,
                                        color: item?.color,
                                        price: item?.price,
                                        salePrice: item?.salePrice,
                                        discount: item?.discount,
                                        stock: item?.stock,
                                        images: item?.images,
                                        category: item?.categoryName,
                                        isPublished: item?.isPublished

                                    }))
                                    : []
                            }


                            options={{
                                ...MuiTblOptions(),
                                search: false,
                                exportMenu: [],
                                toolbar: false,
                                pageSize: data?.data?.data ? data?.data?.data?.length : 2

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
                                    render: (item: any) => (
                                        <p className=" font-medium capitalize ">{item?.category}</p>
                                    )
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
                                    render: (item: any) => {
                                        return (
                                            <>
                                                <div className="flex gap-3">
                                                    <Tooltip
                                                        title={
                                                            item?.isPublished === true ? "Published" : "Not Published"
                                                        }
                                                    >
                                                        <Switch
                                                            checked={item?.isPublished === true ? true : false}
                                                            onChange={(e) => UpdateProduct(item)}
                                                            inputProps={{ "aria-label": "controlled" }}
                                                        />
                                                    </Tooltip>
                                                </div>
                                            </>
                                        );
                                    },
                                },



                                {
                                    title: "Action",
                                    tooltip: "Action",
                                    field: "action",
                                    editable: "never",
                                    width: "5%",
                                    render: (item: any) => (
                                        <div className='flex items-center gap-3'>
                                            <p onClick={() => {
                                                setOpen(true);
                                                setValue(item)
                                            }}><MdEdit className='text-xl text-gray-800  cursor-pointer' /></p>
                                            <p onClick={() => {
                                                setImageOpen(true);
                                                setValue(item)
                                            }}><BsEye className='text-xl text-gray-500  cursor-pointer' /></p>
                                            <p><MdDelete className='text-xl text-red-500  cursor-pointer' /></p>
                                        </div>
                                    )

                                },
                            ]}
                        />
                }
            </div>
        </AdminLayout>
    )
}

export default ManageProduct

const ProductCardView = ({ item, mutate }: { item: any; mutate: () => void }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<any>();

    const [imageOpen, setImageOpen] = useState(false);
    return (
        <>

            <EditProduct
                openDialog={open}
                setOpenDialog={() => setOpen(false)}
                mutate={mutate}
                data={value}

            />
            <EditProductImage
                openDialog={imageOpen}
                setOpenDialog={() => setImageOpen(false)}
                data={value}
                mutate={mutate}
            />
            <div
                className="relative h-full group overflow-hidden  w-full flex flex-col gap-2 justify-between items-center  bg-white shadow-[0px_0px_4px_0px_#00000024] rounded-lg p-4"
                key={item?._id}
            >
                <p className=" absolute z-10 top-2 left-2 text-xs bg-orange-500/50 text-white font-medium px-2 py-0.5 rounded-md">
                    {item?.discount}% off
                </p>
                <div onClick={() => {
                    setOpen(true);
                    setValue(item)
                }}>
                    <p className=" absolute z-10 top-2  right-2   duration-200 w-8 h-8 cursor-pointer  rounded-lg flex items-center justify-center bg-orange-500/50 bg-opacity-60">
                        <MdEdit className=" hover:scale-125 duration-200 text-white" />
                    </p>
                </div>

                <div onClick={() => {
                    setImageOpen(true);
                    setValue(item)
                }}>
                    <p className=" absolute z-10 top-12  right-2   duration-300 w-8 h-8 cursor-pointer  rounded-lg flex items-center justify-center bg-orange-500/50 bg-opacity-60">
                        <AiFillEye className=" hover:scale-125 duration-200 text-white" />
                    </p>
                </div>
                <div>
                    <p className=" absolute z-10 top-[5.5rem]  right-2   duration-300 w-8 h-8 cursor-pointer  rounded-lg flex items-center justify-center bg-orange-500/50 bg-opacity-60">
                        <MdDeleteOutline className=" hover:scale-125 text-xl duration-200 text-white" />
                    </p>
                </div>

                <div className=" w-full flex  flex-col gap-4">
                    <div>
                        <img
                            src={item?.images[0].imageUrl}
                            className=" w-full object-contain md:h-36 h-24 object-fil rounded-lg cursor-pointer group-hover:scale-105 duration-300 "
                            alt=""
                        />
                    </div>
                    <div className=" flex w-full flex-col gap-2">
                        <div className=" flex md:flex-row flex-col md:items-center items-start justify-between">
                            <p className=" flex items-center  gap-1">
                                <span className="uppercase text-primary/80 font-medium text-sm">
                                    category:
                                </span>
                                <span className=" text-xs capitalize text-gray-600">
                                    {item?.categoryName}
                                </span>
                            </p>
                            {
                                item?.sold === false ? <p className=" text-xs font-medium px-4 py-1 bg-green-500/50 text-white rounded-md">
                                    InStock
                                </p> : <p className=" text-xs font-medium px-4 py-1 bg-red-500/50 text-white rounded-md">
                                    Out Of Stock
                                </p>
                            }

                        </div>
                        <p className="  md:font-semibold font-medium md:text-base text-sm  text-gray-700">
                            {item?.name}
                        </p>
                        <p className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, index) => (
                                <Fragment key={index}>
                                    {item?.star >= index + 1 ? (
                                        <FaStar className=" text-amber-400" />
                                    ) : (
                                        <MdStarBorder fontSize="inherit" color="inherit" />
                                    )}
                                </Fragment>
                            ))}
                        </p>
                        <div className=" flex justify-between items-center  ">
                            <p className=" flex flex-col sm:flex-row items-center gap-1">
                                <span className="text-gray-800 font-semibold">₹{item?.salePrice}</span>
                                <span className="line-through text-xs  text-gray-400">
                                    ₹{item?.price}
                                </span>
                            </p>
                            <div className="flex items-center gap-3">
                                <p className={`text-xs px-3 py-1.5 rounded-md text-white ${item?.isPublished === true ? `bg-green-300` : `bg-red-400`}`}>{item?.isPublished === true ? "Active" : "Blocked"}</p>
                                <Tooltip
                                    title={
                                        item?.isPublished === true ? "Published" : "Not Published"
                                    }
                                >
                                    <Switch
                                        checked={item?.isPublished === true ? true : false}
                                        // onChange={(e) => UpdateProduct(item)}
                                        inputProps={{ "aria-label": "controlled" }}
                                    />
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};