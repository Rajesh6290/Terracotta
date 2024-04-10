import useMutation from '@/hooks/useMutation';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaSignInAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import * as Yup from "yup";
const RegisterForm = () => {
    const router = useRouter()
    const { mutation, isLoading } = useMutation();
    const LoginSchema = Yup.object({
        name: Yup.string().required("This field is required"),
        emailOrUsername: Yup.string().email("Invalid email address")
            .required("Email is required"),
        password: Yup.string().required("This field is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), undefined], "Passwords must match")
            .required("Confirm Password is required"),
    });
    const handleFormSubmit = async (
        values: any,
        { resetForm }: FormikHelpers<any>
    ) => {

        try {
            const res = await mutation(`customer`, {
                method: "POST",
                body: {
                    name: values?.name,
                    email: values?.emailOrUsername,
                    password: values?.password,
                },
                isAlert: true,
            })
            if (res?.status === 200) {
                router.push("/login")
                resetForm();
                toast.success(res?.results?.msg);
            } else {
                toast.error(res?.results?.msg);
            }
        } catch (error) {
            console.log(error)
        }

    };
    return (
        <div className='w-full h-screen flex items-center justify-center lg:px-10 lg:py-10 px-5 py-20'>
            <div className='lg:w-[80%] w-full h-full flex items-center md:px-3 relative rounded-xl '>


                <div className='lg:w-[50%] w-full h-full '>
                    <Formik
                        initialValues={{
                            name: "",
                            emailOrUsername: "",
                            password: "",
                            confirmPassword: "",
                            rememberMe: false,
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={handleFormSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form className='bg-white rounded-2xl shadow-[0px_0px_4px_1px_#00000024] w-full h-full flex flex-col justify-between gap-5 md:p-10 p-5'>
                                <img src="/logo.png" className='w-72 h-fit' alt="" />
                                <div className='flex flex-col gap-1'>
                                    <p className='text-gray-600 md:block hidden text-3xl font-bold'>Welcome To Our Services...</p>
                                    <Link href="/login" className='md:text-sm text-xs cursor-pointer text-blue-500 underline font-normal'>Back To Login</Link>
                                </div>

                                <div className='w-full flex md:flex-row flex-col items-start gap-5'>
                                    <div className='w-full flex flex-col gap-2'>
                                        <p className='text-gray-800 font-medium tracking-wide pl-1 capitalize  font-sans '>Full Name</p>
                                        <Field type="text"
                                            name="name" autoComplete='off' className={`outline-none border   rounded-lg py-2 px-4 bg-transparent placeholder:text-sm h-12 placeholder:text-gray-400  placeholder:font-normal font-normal ${touched.name && errors.name
                                                ? "border-red-500"
                                                : "border-gray-300"
                                                } text-gray-400`} placeholder='Enter your name' id="" />
                                        {touched.name && errors.name && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>
                                    <div className='w-full flex flex-col gap-2'>
                                        <p className='text-gray-800 font-medium tracking-wide pl-1 capitalize  font-sans '>Email</p>
                                        <Field type="text"
                                            name="emailOrUsername" autoComplete="new-emailOrUsername" className={` outline-none border   rounded-lg py-2 px-4 bg-transparent placeholder:text-sm h-12 placeholder:text-gray-400  placeholder:font-normal font-normal text-gray-400  ${touched.emailOrUsername && errors.emailOrUsername
                                                ? "border-red-500"
                                                : "border-gray-300"
                                                }`} placeholder='Enter your emailOrUsername...' id="" />
                                        {touched.emailOrUsername && errors.emailOrUsername && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.emailOrUsername}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className='w-full flex md:flex-row flex-col items-start gap-5'>
                                    <div className='w-full flex flex-col gap-2'>
                                        <p className='text-gray-800 font-medium tracking-wide pl-1 capitalize  font-sans '>Password</p>
                                        <Field type="password"
                                            name="password" autoComplete='off' className={`outline-none border   rounded-lg py-2 px-4 bg-transparent placeholder:text-sm h-12 placeholder:text-gray-400  placeholder:font-normal font-normal ${touched.password && errors.password
                                                ? "border-red-500"
                                                : "border-gray-300"
                                                } text-gray-400`} placeholder='Enter your password' id="" />
                                        {touched.password && errors.password && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.password}
                                            </p>
                                        )}
                                    </div>
                                    <div className='w-full flex flex-col gap-2'>
                                        <p className='text-gray-800 font-medium tracking-wide pl-1 capitalize  font-sans '>Confirm Password</p>
                                        <Field type="password"
                                            name="confirmPassword" autoComplete="new-confirmPassword" className={` outline-none border   rounded-lg py-2 px-4 bg-transparent placeholder:text-sm h-12 placeholder:text-gray-400  placeholder:font-normal font-normal text-gray-400  ${touched.confirmPassword && errors.confirmPassword
                                                ? "border-red-500"
                                                : "border-gray-300"
                                                }`} placeholder='Enter your confirmPassword...' id="" />
                                        {touched.confirmPassword && errors.confirmPassword && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.confirmPassword}
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
                <div className='w-[50%] h-full py-3 lg:flex hidden  items-center justify-center'>
                    <img src="/login.svg" className='w-full h-full object-fill' alt="" />
                </div>

            </div>
        </div>

    )
}

export default RegisterForm