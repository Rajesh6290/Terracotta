import useAppContext from '@/context';
import useAuth from '@/hooks/useAuth';
import useMutation from '@/hooks/useMutation';
import { saveToLocalStorage } from '@/utils';
import { Dialog } from '@mui/material';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { FaFacebookSquare, FaSignInAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import * as Yup from "yup";
const LoginForm = ({ open, setOpen }: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }) => {
    const { isLogin, setIsLogin } = useAppContext();
    const router = useRouter()
    const { getUser, user } = useAuth();
    const { mutation, isLoading } = useMutation();
    const LoginSchema = Yup.object({
        emailOrUsername: Yup.string().required("This field is required"),
        password: Yup.string().required("This field is required"),
    });
    const handleFormSubmit = async (
        values: any,
        { resetForm }: FormikHelpers<any>
    ) => {

        try {
            const res = await mutation(`customer/login`, {
                method: "POST",
                body: {
                    email: values?.emailOrUsername,
                    password: values?.password,
                },
                isAlert: true,
            });
            if (res?.status === 200) {
                resetForm()

                getUser();
                res?.results?.token &&
                    saveToLocalStorage("ACCESS_TOKEN", res?.results?.token);
                getUser();
                await mutation(`customer/update`, {
                    method: "PUT",
                    isAlert: true,
                    body: {
                        isOnline: true,
                    },
                })
                toast.success(res?.results?.msg);
                if (res?.results?._id) {
                    setIsLogin(true);
                } else {
                    setIsLogin(false);
                }
                if (res?.results?.role === "USER") {
                    router.push("/");
                    setOpen(false)
                } else if (res?.results?.role === "ADMIN") {
                    router.push("/admin");
                    setOpen(false)
                } else {
                    toast.error(res?.results?.msg);
                }
            } else {
                toast.error(res?.results?.msg);
            }

        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xl"
            PaperProps={{
                style: {
                    borderRadius: 18, // Adjust the value according to your preference
                },
            }}
        >

            <div className='w-full h-full flex items-center md:px-5 relative rounded-xl '>

                <div className='w-[50%] h-full py-3 md:flex hidden  items-center justify-center'>
                    <img src="/login.svg" className='w-full h-full object-fill' alt="" />
                </div>
                <div className='md:w-[50%] w-full h-full '>
                    <Formik
                        initialValues={{
                            emailOrUsername: "",
                            password: "",
                            rememberMe: false,
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={handleFormSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form className='bg-white md:rounded-2xl shadow-[0px_0px_4px_1px_#00000024] w-full h-full flex flex-col justify-between gap-5 md:p-10 p-5'>
                                <img src="/logo.png" className='w-72 h-fit' alt="" />
                                <div className='flex flex-col gap-1'>
                                    <p className='text-gray-600 md:block hidden text-3xl font-bold'>Welcome back...</p>
                                    <p className='md:text-sm text-xs text-gray-500 font-normal'>{`Start your website in seconds. Don’t have an account?`} <span className=' text-blue-500 md:text-base text-sm'> Sign Up</span>. </p>
                                </div>

                                <div className='w-full flex md:flex-row flex-col items-center gap-5'>
                                    <div className='w-full flex flex-col gap-2'>
                                        <p className='text-gray-800 font-medium tracking-wide pl-1 capitalize  font-sans '>Email</p>
                                        <Field type="text"
                                            name="emailOrUsername" autoComplete='off' className={`outline-none border   rounded-lg py-2 px-4 bg-transparent placeholder:text-sm h-12 placeholder:text-gray-400  placeholder:font-normal font-normal ${touched.emailOrUsername && errors.emailOrUsername
                                                ? "border-red-500"
                                                : "border-gray-300"
                                                } text-gray-400`} placeholder='example@gmail.com' id="" />
                                        {touched.emailOrUsername && errors.emailOrUsername && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.emailOrUsername}
                                            </p>
                                        )}
                                    </div>
                                    <div className='w-full flex flex-col gap-2'>
                                        <p className='text-gray-800 font-medium tracking-wide pl-1 capitalize  font-sans '>password</p>
                                        <Field type="password"
                                            name="password" autoComplete="new-password" className={` outline-none border   rounded-lg py-2 px-4 bg-transparent placeholder:text-sm h-12 placeholder:text-gray-400  placeholder:font-normal font-normal text-gray-400  ${touched.password && errors.password
                                                ? "border-red-500"
                                                : "border-gray-300"
                                                }`} placeholder='Enter your password...' id="" />
                                        {touched.password && errors.password && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.password}
                                            </p>
                                        )}
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
                                        <p className=' md:text-sm text-xs font-medium text-gray-900'>Sign in with Google</p>
                                    </div>
                                </div>
                                <div className='w-full border md:flex p-3 flex hover:scale-105 items-center justify-center rounded-xl hover:bg-gray-100 duration-200 cursor-pointer'>
                                    <div className='flex items-center gap-2'>
                                        <FaFacebookSquare className=' text-facebook text-2xl' />
                                        <p className=' md:text-sm text-xs font-medium text-gray-900'>Sign in with FaceBook</p>
                                    </div>
                                </div>
                                <div className='w-full flex md:flex-row flex-col gap-2 items-center justify-between'>
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
                                <button disabled={isLoading} type='submit' className='w-full p-3 cursor-pointer flex items-center justify-center bg-blue-500 rounded-xl hover:bg-blue-600 duration-200 hover:scale-105 '>
                                    {isLoading ? (
                                        <div role="status">
                                            <svg
                                                aria-hidden="true"
                                                className="inline w-4 h-4 text-gray-200 animate-spin  fill-blue-600"
                                                viewBox="0 0 100 101"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                    fill="currentFill"
                                                />
                                            </svg>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    ) : (
                                        <p className=' flex items-center gap-3'>
                                            <FaSignInAlt className='text-xl md:block hidden text-white' />
                                            <span className='text-sm text-white font-medium'>Sign in to your account </span>
                                        </p>)}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>


            </div>

        </Dialog>
    )
}

export default LoginForm