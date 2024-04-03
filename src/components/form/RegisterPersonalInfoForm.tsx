// components/RegisterPersonalInfoForm.tsx
import React, { useMemo } from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FaChevronLeft, FaChevronRight, FaCheck } from "react-icons/fa6";
import useMutation from "@/hooks/useMutation";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const RegisterPersonalInfoForm = ({
  storeData,
  selectForm,
  setSelectForm,
}: any) => {
  const router = useRouter()
  const { mutation, isLoading } = useMutation()
  const initialValues = useMemo(
    () => ({
      name: storeData?.name,
      email: storeData?.email,
      countryCode: "",
      mobileNumber: "",
      state: "",
      city: "",
      address: "",
    }),
    [storeData?.name, storeData?.email]
  );

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    countryCode: Yup.string().optional(),
    mobileNumber: Yup.number().optional(),
    state: Yup.string().optional(),
    city: Yup.string().optional(),
    address: Yup.string().optional(),
  });

  const onSubmit = async (values: any, { resetForm }: FormikHelpers<any>) => {

    try {
      const res = await mutation(`customer`, {
        method: "POST",
        body: {
          name: storeData?.name,
          email: storeData?.email,
          password: storeData?.password,
        },
        isAlert: true,
      })
      if (res?.status === 200) {
        resetForm();
        toast.success(res?.results?.msg);
        router.push("/login");
      } else {
        toast.error(res?.results?.msg);
      }
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {({ touched, errors }) => (
        <Form className="flex flex-col gap-8 md:w-[70%] w-[80%] h-full ">
          <p className="flex flex-col gap-1">
            <span className="text-2xl text-gray-500 font-medium ">
              Personal Information
            </span>
            <span className="text-gray-400">Enter Your Personal Details</span>
          </p>
          <div className="flex md:flex-row flex-col items-center md:gap-5 gap-3 w-full">
            <div className="flex flex-col gap-2 w-full">
              <p className="text-gray-500 uppercase text-sm font-medium">
                Name
              </p>
              <Field
                type="text"
                name="name"
                className={`outline-none border  placeholder:text-sm  rounded-md py-2 px-4 w-full ${errors.name && touched.name
                  ? "border-red-500"
                  : "border-gray-300"
                  }`}
                placeholder="Enter your name"
                dis
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="text-gray-500 uppercase text-sm font-medium">
                Email
              </p>
              <Field
                type="email"
                name="email"
                className={`outline-none border placeholder:text-sm  rounded-md py-2 px-4 w-full ${errors.email && touched.email
                  ? "border-red-500"
                  : "border-gray-300"
                  }`}
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center md:gap-5 gap-3 w-full">
            <div className="flex flex-col gap-2 w-full relative">
              <p className="text-gray-500 uppercase text-sm font-medium">
                Country Code
              </p>
              <Field
                type="text"
                name="countryCode"
                className={`outline-none border placeholder:text-sm  rounded-md py-2 px-4 w-full ${errors.countryCode && touched.countryCode
                  ? "border-red-500"
                  : "border-gray-300"
                  }`}
                placeholder="Enter your country code"
              />
              <ErrorMessage
                name="countryCode"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex flex-col gap-2 w-full relative">
              <p className="text-gray-500 uppercase text-sm font-medium">
                Mobile Number
              </p>
              <Field
                type="number"
                name="mobileNumber"
                className={`outline-none border placeholder:text-sm  rounded-md py-2 px-4 w-full ${errors.mobileNumber && touched.mobileNumber
                  ? "border-red-500"
                  : "border-gray-300"
                  }`}
                placeholder="Enter your mobile number"
              />
              <ErrorMessage
                name="mobileNumber"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center md:gap-5 gap-3 w-full">
            <div className="flex flex-col gap-2 w-full relative">
              <p className="text-gray-500 uppercase text-sm font-medium">
                State
              </p>
              <Field
                type="text"
                name="state"
                className={`outline-none border placeholder:text-sm  rounded-md py-2 px-4 w-full ${errors.state && touched.state
                  ? "border-red-500"
                  : "border-gray-300"
                  }`}
                placeholder="Enter your state"
              />
              <ErrorMessage
                name="state"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex flex-col gap-2 w-full relative">
              <p className="text-gray-500 uppercase text-sm font-medium">
                City
              </p>
              <Field
                type="text"
                name="city"
                className={`outline-none border placeholder:text-sm  rounded-md py-2 px-4 w-full ${errors.city && touched.city
                  ? "border-red-500"
                  : "border-gray-300"
                  }`}
                placeholder="Enter your city"
              />
              <ErrorMessage
                name="city"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center md:gap-5 gap-3 w-full">
            <div className="flex flex-col gap-2 w-full relative">
              <p className="text-gray-500 uppercase text-sm font-medium">
                Address
              </p>
              <Field
                type="text"
                name="address"
                className={`outline-none border placeholder:text-sm  rounded-md py-2 px-4 w-full ${errors.address && touched.address
                  ? "border-red-500"
                  : "border-gray-300"
                  }`}
                placeholder="Enter your address"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-between md:pb-0 pb-3">
            <div
              onClick={() => setSelectForm("Account")}
              className={`flex items-center justify-center  md:rounded-lg rounded-xl px-6 py-3 
              ${selectForm === "Account"
                  ? ` bg-gray-200 text-gray-300 cursor-none`
                  : `bg-primary text-white cursor-pointer`
                }
              `}
            >
              <p className="flex items-center gap-3  ">
                <FaChevronLeft className="text-sm" />
                <span className=" tracking-wider">Previous</span>
              </p>
            </div>

            <button
              type="submit"
              className={` items-center justify-center bg-primary md:rounded-lg rounded-xl px-6 py-3 cursor-pointer
              
              `}
            >
              <p className="flex items-center gap-3 text-white font-medium">
                <FaCheck className="text-sm" />
                <span className=" tracking-wider">Submit</span>
              </p>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterPersonalInfoForm;
