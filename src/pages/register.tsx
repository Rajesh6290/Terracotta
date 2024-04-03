import { RegisterForm1, RegisterForm2 } from "@/components/form";
import { useState } from "react";
import { FaChevronRight, FaRegUser } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
const Register = () => {
  const [selectForm, setSelectForm] = useState("Account");
  const [storeData, setStoreData] = useState([]);
  //   console.log("storeData", storeData);
  return (
    <div className=" w-full h-screen commonClass flex lg:flex-row flex-col items-center">
      <div className="lg:w-[50%] w-full lg:h-full h-60  lg:p-10 lg:bg-slate-100 ">
        <img
          src="/register/register.png"
          className="w-full h-full object-contain"
          alt=""
        />
      </div>
      <div className="lg:w-[50%] w-full h-full   flex items-center justify-center">
        <div className=" flex flex-col gap-10 w-full items-center">
          <div className=" hidden  lg:flex items-center gap-7 lg:px-0 px-5">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg shadow-[0px_0px_6px_0px_#696cff] bg-primary text-white flex items-center justify-center">
                <FiHome className="text-xl" />
              </div>
              <p className=" flex flex-col  ">
                <span className="text-primary font-medium lg:text-base text-sm">
                  Account
                </span>
                <span className="text-gray-400  lg:text-sm text-xs">
                  Account Details
                </span>
              </p>
            </div>
            <div className="flex items-center gap-6">
              <FaChevronRight
                className={
                  selectForm === "Personal"
                    ? `text-primary text-xl`
                    : ` text-gray-400`
                }
              />
              <div
                className={`h-12 w-12 rounded-lg   flex items-center justify-center
              
              ${
                selectForm === "Personal"
                  ? `bg-primary text-white shadow-[0px_0px_6px_0px_#696cff]`
                  : ` bg-gray-300 text-gray-400`
              }
              `}
              >
                <FaRegUser className="text-xl" />
              </div>
              <p className=" flex flex-col  ">
                <span
                  className={` font-medium lg:text-bse text-sm
                ${selectForm === "Personal" ? `text-primary` : ` text-gray-400`}
                `}
                >
                  Personal
                </span>
                <span className="text-gray-400  lg:text-sm text-sm">
                  Personal Details
                </span>
              </p>
            </div>
          </div>
          {selectForm === "Account" ? (
            <RegisterForm1
              setStoreData={setStoreData}
              selectForm={selectForm}
              setSelectForm={setSelectForm}
            />
          ) : (
            <RegisterForm2
              storeData={storeData}
              selectForm={selectForm}
              setSelectForm={setSelectForm}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
