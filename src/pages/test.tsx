import React from 'react'
import { FaFacebookSquare, FaSignInAlt } from 'react-icons/fa'

const Test = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center p-10'>
            <div className='w-[80%] h-full flex items-center '>
                <div className='w-[50%] h-full py-3 flex items-center justify-center'>
                    <img src="/login.svg" className='w-full h-full object-fill' alt="" />
                </div>
                <div className='w-[50%] h-full '>
                    <div className='bg-white rounded-2xl shadow-[0px_0px_4px_1px_#00000024] w-full h-full flex flex-col justify-between gap-5 p-10'>
                        <img src="/logo.png" className='w-72 h-fit' alt="" />
                        <div className='flex flex-col gap-1'>
                            <p className='text-gray-600 text-3xl font-bold'>Welcome back...</p>
                            <p className='text-sm text-gray-500 font-normal'>{`Start your website in seconds. Don’t have an account?`} <span className=' text-blue-500'> Sign Up</span>. </p>
                        </div>

                        <div className='w-full flex items-center gap-5'>
                            <div className='w-full flex flex-col gap-2'>
                                <p className='text-gray-800 font-medium tracking-wide pl-1 capitalize  font-sans '>Email</p>
                                <input type="email" name="" className=' outline-none border  border-gray-300 rounded-lg py-2 px-4 bg-transparent placeholder:text-sm h-12 placeholder:text-gray-400  placeholder:font-normal font-normal text-gray-400' placeholder='example@gmail.com' id="" />
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <p className='text-gray-800 font-medium tracking-wide pl-1 capitalize  font-sans '>password</p>
                                <input type="password" name="" className=' outline-none border  border-gray-300 rounded-lg py-2 px-4 bg-transparent placeholder:text-sm h-12 placeholder:text-gray-400  placeholder:font-normal font-normal text-gray-400' placeholder='Password' id="" />
                            </div>
                        </div>
                        <p className="w-full flex items-center justify-center gap-2">
                            <span className="h-[0.1rem] w-full bg-gray-200  "></span>
                            <span className="text-xs text-gray-400 ">or</span>
                            <span className="h-[0.1rem] w-full bg-gray-200  "></span>
                        </p>
                        <div className='w-full border p-3 flex hover:scale-105 items-center justify-center rounded-xl hover:bg-gray-100 duration-200 cursor-pointer'>
                            <div className='flex items-center gap-2'>
                                <img src="/google.png" className='w-5 h-5 object-contain' alt="" />
                                <p className=' text-sm font-medium text-gray-900'>Sign in with Google</p>
                            </div>
                        </div>
                        <div className='w-full border p-3 flex hover:scale-105 items-center justify-center rounded-xl hover:bg-gray-100 duration-200 cursor-pointer'>
                            <div className='flex items-center gap-2'>
                                <FaFacebookSquare className=' text-facebook text-2xl' />
                                <p className=' text-sm font-medium text-gray-900'>Sign in with FaceBook</p>
                            </div>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <p className="flex items-center gap-2 px-1">
                                <input
                                    type="checkbox"
                                    className=" outline-none w-4 h-4 border border-primary  shadow shadow-primary"
                                    name=""
                                    id="check"
                                />
                                <label
                                    htmlFor="check"
                                    className="text-sm cursor-pointer text-gray-500 font-medium"
                                >
                                    Remember me
                                </label>
                            </p>
                            <p className='text-blue-500 font-normal cursor-pointer'>Forgot password?</p>
                        </div>
                        <div className='w-full p-3 cursor-pointer flex items-center justify-center bg-blue-500 rounded-xl hover:bg-blue-600 duration-200 hover:scale-105 '>
                            <p className=' flex items-center gap-3'>
                                <FaSignInAlt className='text-xl text-white' />
                                <span className='text-sm text-white font-medium'>Sign in to your account </span>
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Test