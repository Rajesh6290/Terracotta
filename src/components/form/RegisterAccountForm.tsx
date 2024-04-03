// components/RegisterForm.tsx
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { FaChevronLeft, FaChevronRight, FaCheck } from "react-icons/fa6";

const RegisterForm = ({ setStoreData, selectForm, setSelectForm }: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const onSubmit = (values: any) => {
    // Handle form submission here
    console.log("Form submitted with values:", values);
    setStoreData(values);
    setSelectForm("Personal");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ touched, errors }) => (
        <Form className="flex flex-col gap-8 lg:w-[70%] w-[90%] lg:py-0 py-5">
          <p className="flex flex-col gap-1">
            <span className="text-2xl text-gray-500 font-medium ">
              Account Information
            </span>
            <span className="text-gray-400">Enter Your Account Details</span>
          </p>
          <div className="flex items-center lg:flex-row flex-col gap-5 w-full">
            <div className="flex flex-col gap-2 w-full">
              <p className="text-gray-500 uppercase text-sm font-medium">
                Name
              </p>
              <Field
                type="text"
                name="name"
                className={`outline-none border placeholder:text-sm  rounded-md py-2 px-4 w-full ${
                  errors.name && touched.name
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter your name"
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
                type="text"
                name="email"
                className={`outline-none border placeholder:text-sm  rounded-md py-2 px-4 w-full ${
                  errors.email && touched.email
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

          <div className="flex items-center gap-5 lg:flex-row flex-col w-full">
            <div className="flex flex-col gap-2 w-full relative">
              <p
                onClick={() => setShowPassword(!showPassword)}
                className=" absolute top-10 right-2"
              >
                {showPassword ? (
                  <IoMdEyeOff className="text-xl cursor-pointer text-gray-400" />
                ) : (
                  <MdOutlineRemoveRedEye className="text-xl cursor-pointer text-gray-400" />
                )}
              </p>
              <p className="text-gray-500 uppercase text-sm font-medium">
                Password
              </p>
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                className={`outline-none border placeholder:text-sm  rounded-md py-2 px-4 w-full ${
                  errors.password && touched.password
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex flex-col gap-2 w-full relative">
              <p
                onClick={() => setShowConfirmPassword(!showPassword)}
                className=" absolute top-10 right-2"
              >
                {showConfirmPassword ? (
                  <IoMdEyeOff className="text-xl cursor-pointer text-gray-400" />
                ) : (
                  <MdOutlineRemoveRedEye className="text-xl cursor-pointer text-gray-400" />
                )}
              </p>
              <p className="text-gray-500 uppercase text-sm font-medium">
                Confirm Password
              </p>
              <Field
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                className={`outline-none border placeholder:text-sm  rounded-md py-2 px-4 w-full ${
                  errors.confirmPassword && touched.confirmPassword
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Confirm your password"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>

          <div className="w-full flex items-center justify-between">
            <div
              onClick={() => setSelectForm("Account")}
              className={`flex items-center justify-center  rounded-lg px-6 py-3 
              ${
                selectForm === "Account"
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
              className={` ${
                selectForm === "Account" ? `flex` : `hidden`
              }  items-center justify-center bg-primary rounded-lg px-6 py-3 cursor-pointer`}
            >
              <p className="flex items-center gap-3 text-white font-medium">
                <span className=" tracking-wider">Next</span>
                <FaChevronRight className="text-sm" />
              </p>
            </button>
            <div
              className={` ${
                selectForm === "Personal" ? `flex` : `hidden`
              } items-center justify-center bg-primary rounded-lg px-6 py-3 cursor-pointer
              
              `}
            >
              <p className="flex items-center gap-3 text-white font-medium">
                <FaCheck className="text-sm" />
                <span className=" tracking-wider">Submit</span>
              </p>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
