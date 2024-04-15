import Button from '@/components/core/Button'
import CustomInputField from '@/components/core/CustomInputField'
import useAuth from '@/hooks/useAuth'
import useMutation from '@/hooks/useMutation'
import useSwr from '@/hooks/useSwr'
import { AdminLayout } from '@/layouts'
import moment from 'moment'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-toastify'

const OrderById = () => {
    const { mutation, isLoading } = useMutation()
    const router = useRouter()
    const { data, isValidating, mutate } = useSwr(`order/${router?.query?.id}`)
    const item = data?.data?.data
    const [status, setStatus] = useState<string>(item?.orderStatus ? item?.orderStatus : "")
    const handleOperation = async () => {
        try {
            const res = await mutation(`order/${item?._id}`, {
                method: "PUT",
                body: {
                    orderStatus: status
                },
                isAlert: true
            })
            if (res?.status === 200) {
                mutate()
                toast.success(res?.results?.msg)
            } else {
                toast.error(res?.results?.msg)
            }
        } catch (error) {
            toast.error(error instanceof Error)
        }
    }
    return (
        <AdminLayout title="Product List | Terracotta">

            <div className=' w-full p-5 flex flex-col gap-5'>
                <p className="font-semibold tracking-wider text-2xl text-gray-900">Order Details</p>

                <div className='w-full h-fit bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-6 rounded-lg flex flex-col gap-5'>
                    <article className='flex items-center justify-between gap-6'>
                        <p className='flex items-center gap-1 text-sm font-medium text-gray-500'>
                            <span>Order ID :</span>
                            <span className=' text-gray-800'>{item?.orderNo}</span>

                        </p>
                        <p className='flex items-center gap-1 text-sm font-medium text-gray-500'>
                            <span>Placed On :</span>
                            <span className=' text-gray-800'>{moment(item?.createdAt).format("lll")}</span>

                        </p>
                        <Button
                            loading={isLoading}
                            onClick={handleOperation}
                            disabled={item?.orderStatus === "COMPLETED"}
                        >
                            Update
                        </Button>
                    </article>
                    <div className='w-full flex items-center gap-6 border-b border-dashed py-2'>
                        <div className='w-full flex items-center gap-3'>
                            <img src={item?.user?.image} className='w-16 h-16 object-fill rounded-full' alt="" />
                            <p className='flex flex-col'>
                                <span className=' text-sm font-medium text-gray-700'>{item?.user?.name}</span>
                                <span className=' text-sm font-medium text-gray-700'>{item?.user?.email}</span>
                                <span className=' text-sm font-medium text-gray-700'>{item?.user?.mobileNo}</span>
                            </p>
                        </div>
                        <div className='w-full'>
                            <CustomInputField
                                key="1"
                                name="OrderStatus"
                                type="select"
                                value={status}
                                options={[
                                    {
                                        label: "INITIATE",
                                        value: "INITIATE"
                                    },
                                    {
                                        label: "PICKED",
                                        value: "PICKED"
                                    },
                                    {
                                        label: "TRANSITS",
                                        value: "TRANSITS"
                                    },
                                    {
                                        label: "PROCESSING",
                                        value: "PROCESSING"
                                    },
                                    {
                                        label: "COMPLETED",
                                        value: "COMPLETED"
                                    },
                                ]}
                                onChange={(e: any) => {
                                    setStatus(e?.target?.value)
                                }}
                                fullWidth

                                label="Order Status"
                            />
                        </div>
                    </div>

                    <div className='flex flex-col gap-8 w-full'>
                        {
                            item?.product?.map((pre: any) => (
                                <div key={pre?.id} className='w-full flex items-center '>
                                    <div className='w-full flex items-center gap-4'>
                                        <img src={pre?.image} className=' w-16 h-16 object-fill' alt="" />
                                        <div className=' flex flex-col gap-1'>
                                            <p className='text-lg font-semibold '>{pre?.name}</p>
                                            <p className='flex items-center gap-1'>
                                                <span className=' text-sm font-medium text-gray-500'>₹{pre?.discountPrice}</span>
                                                <span className=' text-sm font-medium text-gray-500'>*</span>
                                                <span className=' text-sm font-medium text-gray-500'>{pre?.quantity}</span>
                                                <span className=' text-sm font-medium text-gray-500'>=</span>
                                                <span className=' text-sm font-medium text-gray-500'>{pre?.totalSalePrice}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-col'>
                                        <p className=' font-medium text-gray-600'>Product Details :</p>
                                        <p className=' text-sm font-medium text-gray-500 capitalize'>{pre?.description}, {pre?.category}, {pre?.color}</p>
                                    </div>
                                </div>
                            ))
                        }


                    </div>


                </div>
                <div className='w-full flex gap-6 h-fit'>
                    <div className='w-full bg-white p-5 rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex flex-col gap-5 h-full'>
                        <div className='w-full'>
                            <CustomInputField
                                key="1"
                                name="orderCancel"
                                type="select"
                                value={item?.isCancelled}
                                options={[
                                    {
                                        label: "Order Cancelled",
                                        value: true
                                    },
                                    {
                                        label: "Not Cancelled",
                                        value: false
                                    }
                                ]}
                                onChange={(e: any) => {

                                }}
                                fullWidth

                                label="Order Cancelled"
                            />
                        </div>
                        <div className='w-full'>
                            <CustomInputField
                                key="1"
                                name="address"
                                type="textarea"
                                value={item?.addresses?.landmark + item?.addresses?.address + item?.addresses?.city + item?.addresses?.state + item?.addresses?.countryCode + item?.addresses?.pincode}
                                multiline={true}
                                rows={4}
                                onChange={(e: any) => {

                                }}
                                fullWidth

                                label="Shipping Address"
                            />
                        </div>

                    </div>
                    <div className='w-full bg-white px-5 py-4 rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex flex-col gap-3 h-full'>
                        <p className=' font-semibold '>Total Order Summery</p>
                        <p className=' w-full flex justify-between'>
                            <span className='text-sm text-gray-500'>Subtotal :</span>
                            <span className='text-sm text-gray-800'>₹{item?.amount?.totalAmount}</span>
                        </p>
                        <p className=' w-full flex justify-between'>
                            <span className='text-sm text-gray-500'>Quantity :</span>
                            <span className='text-sm text-gray-800'>{item?.amount?.totalQuantity}</span>
                        </p>
                        <p className=' w-full flex justify-between'>
                            <span className='text-sm text-gray-500'>Shipping Fee :</span>
                            <span className='text-sm text-gray-800'>₹{item?.amount?.deliveryCharge}</span>
                        </p>
                        <p className=' w-full flex justify-between'>
                            <span className='text-sm text-gray-500'>Discount(%) :</span>
                            <span className='text-sm text-gray-800'>{item?.amount?.discount}%</span>
                        </p>
                        <p className=' w-full flex justify-between'>
                            <span className='text-sm text-gray-500'>Discount Price :</span>
                            <span className='text-sm text-gray-800'>₹{item?.amount?.discountAmount}</span>
                        </p>
                        <hr className=' w-full border border-dashed' />
                        <p className=' w-full flex justify-between'>
                            <span className='text-sm text-gray-500 '>Payment Method :</span>
                            <span className='text-sm text-gray-900 font-medium '>COD</span>
                        </p>
                        <hr className=' w-full border border-dashed' />
                        <p className=' w-full flex justify-between'>
                            <span className='text-sm text-gray-900 font-semibold'>Total</span>
                            <span className='text-sm text-gray-900 font-semibold'>₹{item?.amount?.totalSaleAmount}</span>
                        </p>

                    </div>
                </div>


            </div>
        </AdminLayout>
    )
}

export default OrderById

