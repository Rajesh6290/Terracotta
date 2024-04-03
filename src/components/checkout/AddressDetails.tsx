import React, { useState } from "react";
import { BiCurrentLocation, BiDotsVerticalRounded } from "react-icons/bi";
import { BsCheck2 } from "react-icons/bs";
import { FaAngleUp, FaChevronDown, FaChevronUp } from "react-icons/fa";
import * as Yup from "yup";
import { useFormik } from "formik";
import { motion } from "framer-motion";
interface AddressDetailsProps {
  orderSummaryOpen: boolean;
  addressOpen: boolean;
  setOrderSummaryOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAddressOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddressFormSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  pincode: Yup.string().required("Pincode is required"),
  state: Yup.string().required("State is required"),
  landmark: Yup.string(),
  address: Yup.string().required("Address is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  home: Yup.boolean(),
  work: Yup.boolean(),
  other: Yup.boolean(),
});
const AddressDetails: React.FC<AddressDetailsProps> = ({
  addressOpen,
  orderSummaryOpen,
  setOrderSummaryOpen,
  setAddressOpen,
}) => {
  const [editAddress, setEditAddress] = useState(false);
  const [isContentVisible, setContentVisible] = useState(false);
  const [checkAddress, setCheckAddress] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      pincode: "",
      state: "",
      landmark: "",
      home: false,
      work: false,
      other: false,
      address: "",
      country: "",
      city: "",
    },

    validationSchema: AddressFormSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div
      className="w-full bg-white h-full rounded 
    flex flex-col gap-2 justify-center  "
    >
      <div>
        <span
          onClick={() => setAddressOpen(!addressOpen)}
          className="flex items-center justify-between w-full p-5 font-medium text-left border-b-2"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
        >
          <p className=" flex gap-2 items-center">
            <span className="font-semibold text-gray-800 uppercase">
              DELIVERY ADDRESS
            </span>
            {/* {
              checkAddress && (
                <BsCheck2 className=" text-2xl text-blue-500" />
              )
            } */}
          </p>
          {addressOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {addressOpen && (
        <div className=" w-full h-full  scroll  flex flex-col gap-2 p-1">
          <article className=" flex flex-col py-1">
            <div className=" flex gap-3 items-start p-2">
              <input
                onClick={() => {
                  setOrderSummaryOpen(!orderSummaryOpen);
                  // setAddressOpen(!addressOpen);
                  setCheckAddress(!checkAddress);
                }}
                type="radio"
                name=""
                id=""
                className=" cursor-pointer w-6 h-6"
              />
              {editAddress ? (
                <form onSubmit={formik.handleSubmit}>
                  <div className=" ring-1 outline-none p-4 rounded-md ring-gray-300 ">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => setEditAddress(!editAddress)}
                        className="text-red-500 px-6 py-1 rounded-xl font-semibold border border-red-500 cancel-button"
                      >
                        Close
                      </button>
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="mb-4 w-full">
                          <label
                            htmlFor="firstName"
                            className="block text-gray-700 text-sm font-bold mb-2"
                          >
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your First Name"
                            className={`w-full py-4 ring-1 outline-none p-2 text-gray-500 rounded-md ring-gray-300 focus:ring-blue-400 ${
                              formik.errors.firstName &&
                              formik.touched.firstName
                                ? "border-red-500"
                                : ""
                            }`}
                            {...formik.getFieldProps("firstName")}
                          />
                          {formik.errors.firstName &&
                          formik.touched.firstName ? (
                            <div className="text-red-500 text-xs italic">
                              {formik.errors.firstName}
                            </div>
                          ) : null}
                        </div>

                        <div className="w-full">
                          <label
                            htmlFor="lastName"
                            className="block text-gray-700 text-sm font-bold mb-2"
                          >
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your Last Name"
                            className={`w-full py-4 ring-1 outline-none p-2 text-gray-500 rounded-md ring-gray-300 focus:ring-blue-400 ${
                              formik.errors.lastName && formik.touched.lastName
                                ? "border-red-500"
                                : ""
                            }`}
                            {...formik.getFieldProps("lastName")}
                          />
                          {formik.errors.lastName && formik.touched.lastName ? (
                            <div className="text-red-500 text-xs italic">
                              {formik.errors.lastName}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="mb-4 w-full">
                          <label
                            htmlFor="phoneNumber"
                            className="block text-gray-700 text-sm font-bold mb-2"
                          >
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your Phone Number"
                            className={`w-full py-4 ring-1 outline-none p-2 text-gray-500 rounded-md ring-gray-300 focus:ring-blue-400 ${
                              formik.errors.phoneNumber &&
                              formik.touched.phoneNumber
                                ? "border-red-500"
                                : ""
                            }`}
                            {...formik.getFieldProps("phoneNumber")}
                          />
                          {formik.errors.phoneNumber &&
                          formik.touched.phoneNumber ? (
                            <div className="text-red-500 text-xs italic">
                              {formik.errors.phoneNumber}
                            </div>
                          ) : null}
                        </div>

                        <div className="mb-4 w-full">
                          <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-bold mb-2"
                          >
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            placeholder="Enter your Email"
                            className={`w-full py-4 ring-1 outline-none p-2 text-gray-500 rounded-md ring-gray-300 focus:ring-blue-400 ${
                              formik.errors.email && formik.touched.email
                                ? "border-red-500"
                                : ""
                            }`}
                            {...formik.getFieldProps("email")}
                          />
                          {formik.errors.email && formik.touched.email ? (
                            <div className="text-red-500 text-xs italic">
                              {formik.errors.email}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="mb-2 w-full">
                        <label
                          htmlFor="address"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your Address"
                          className={`w-full py-4 ring-1 outline-none p-2 text-gray-500 rounded-md ring-gray-300 focus:ring-blue-400 ${
                            formik.errors.address && formik.touched.address
                              ? "border-red-500"
                              : ""
                          }`}
                          {...formik.getFieldProps("address")}
                        />
                        {formik.errors.address && formik.touched.address ? (
                          <div className="text-red-500 text-xs italic">
                            {formik.errors.address}
                          </div>
                        ) : null}
                      </div>
                      <div className="pb-2">
                        <button
                          type="button"
                          className="justify-center flex gap-2 bg-primary py-1 px-3 shadow-xl text-white font-semibold rounded-full"
                        >
                          <BiCurrentLocation size={24} />
                          Use my current location
                        </button>
                      </div>
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="mb-4 w-full">
                          <label
                            htmlFor="country"
                            className="block text-gray-700 text-sm font-bold mb-2"
                          >
                            Country <span className="text-red-500">*</span>
                          </label>
                          <select
                            className={`w-full py-4 ring-1 outline-none p-2 text-gray-500 rounded-md ring-gray-300 focus:ring-blue-400 ${
                              formik.errors.country && formik.touched.country
                                ? "border-red-500"
                                : ""
                            }`}
                            {...formik.getFieldProps("country")}
                          >
                            <option value="">Select Country</option>
                            {COUNTRIES.map((country) => (
                              <option key={country.code} value={country.label}>
                                {country.label}
                              </option>
                            ))}
                          </select>
                          {formik.errors.country && formik.touched.country ? (
                            <div className="text-red-500 text-xs italic">
                              {formik.errors.country}
                            </div>
                          ) : null}
                        </div>
                        <div className="mb-4 w-full">
                          <label
                            htmlFor="city"
                            className="block text-gray-700 text-sm font-bold mb-2"
                          >
                            City <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your City"
                            className={`w-full py-4 ring-1 outline-none p-2 text-gray-500 rounded-md ring-gray-300 focus:ring-blue-400 ${
                              formik.errors.city && formik.touched.city
                                ? "border-red-500"
                                : ""
                            }`}
                            {...formik.getFieldProps("city")}
                          />
                          {formik.errors.city && formik.touched.city ? (
                            <div className="text-red-500 text-xs italic">
                              {formik.errors.city}
                            </div>
                          ) : null}
                        </div>
                        <div className="mb-4 w-full">
                          <label
                            htmlFor="state"
                            className="block text-gray-700 text-sm font-bold mb-2"
                          >
                            State <span className="text-red-500">*</span>
                          </label>
                          <select
                            className={`w-full py-4 ring-1 outline-none p-2 text-gray-500 rounded-md ring-gray-300 focus:ring-blue-400 ${
                              formik.errors.state && formik.touched.state
                                ? "border-red-500"
                                : ""
                            }`}
                            {...formik.getFieldProps("state")}
                          >
                            <option value="">Select state</option>
                            <option value="Odisha">Odisha</option>
                            {/* Add other options */}
                          </select>
                          {formik.errors.state && formik.touched.state ? (
                            <div className="text-red-500 text-xs italic">
                              {formik.errors.state}
                            </div>
                          ) : null}
                        </div>
                        <div className="mb-4 w-full">
                          <label
                            htmlFor="pincode"
                            className="block text-gray-700 text-sm font-bold mb-2"
                          >
                            Pincode <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your Pincode"
                            className={`w-full py-4 ring-1 outline-none p-2 text-gray-500 rounded-md ring-gray-300 focus:ring-blue-400 ${
                              formik.errors.pincode && formik.touched.pincode
                                ? "border-red-500"
                                : ""
                            }`}
                            {...formik.getFieldProps("pincode")}
                          />
                          {formik.errors.pincode && formik.touched.pincode ? (
                            <div className="text-red-500 text-xs italic">
                              {formik.errors.pincode}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="landmark"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Landmark
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your Landmark"
                          className={`w-full py-4 ring-1 outline-none p-2 text-gray-500 rounded-md ring-gray-300 focus:ring-blue-400 ${
                            formik.errors.landmark && formik.touched.landmark
                              ? "border-red-500"
                              : ""
                          }`}
                          {...formik.getFieldProps("landmark")}
                        />
                        {formik.errors.landmark && formik.touched.landmark ? (
                          <div className="text-red-500 text-xs italic">
                            {formik.errors.landmark}
                          </div>
                        ) : null}
                      </div>
                      <div className="">
                        <label
                          htmlFor="address"
                          className=" block text-gray-700 text-sm font-bold "
                        >
                          Address Type -{" "}
                        </label>
                      </div>
                      <div className="pb-4 flex flex-col md:flex-row gap- md:gap-6 ">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="home"
                            {...formik.getFieldProps("location")}
                          />
                          Home
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="work"
                            {...formik.getFieldProps("location")}
                          />
                          Work
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="other"
                            {...formik.getFieldProps("location")}
                          />
                          Other
                        </label>
                      </div>

                      <div className="flex justify-center gap-4">
                        <button
                          type="submit"
                          className="px-6 py-2 bg-primary text-white font-semibold rounded-md"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              ) : (
                <main className="relative flex flex-col gap-3 w-full px-4 font-semibold ring-1 outline-none p-2 rounded-md ring-gray-300">
                  <span className="flex justify-between items-center group">
                    <p className="bg-gray-200 py-1 px-2 text-xs rounded-sm text-gray-500 font-sub font-semibold uppercase">
                      work
                    </p>
                    <span
                      className="group-hover:cursor-pointer"
                      onMouseEnter={() => setContentVisible(true)}
                      onMouseLeave={() => setContentVisible(false)}
                    >
                      <BiDotsVerticalRounded size={24} />
                    </span>
                    <div
                      className={`absolute flex flex-col gap-3 items-start ${
                        isContentVisible ? "" : "invisible"
                      } bg-white right-2 top-0 z-20 p-4 border-2 rounded-sm shadow-md`}
                      onMouseEnter={() => setContentVisible(true)}
                      onMouseLeave={() => setContentVisible(false)}
                    >
                      <button
                        onClick={() => setEditAddress(!editAddress)}
                        className="accordion-open-button font-semibold hover:text-primary"
                      >
                        Edit
                      </button>
                      <a href="#" className="font-semibold hover:text-red-500">
                        Delete
                      </a>
                      <a
                        href="#"
                        className="font-semibold hover:text-green-500"
                      >
                        Set as Default
                      </a>
                    </div>
                  </span>
                  <span className="flex gap-4 ">
                    <p className="font-semibold font-props">Rajesh </p>
                    <p className="font-sub font-semibold">6290467466</p>
                  </span>
                  <p>
                    Bhubaneshwar, Odisha -{" "}
                    <span className="font-semibold">756042</span>{" "}
                  </p>
                </main>
              )}
            </div>
            {/* {checkAddress && (
              <p className="flex  px-11 ">
                
                <span
                  onClick={() => {
                    setOrderSummaryOpen(!orderSummaryOpen);
                    setAddressOpen(!addressOpen);
                  }}
                  className="rounded-md py-3  px-10 uppercase overflow-hidden relative group cursor-pointer border-2 font-medium bg-primary text-white"
                >
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gradient-to-r from-cyan-500 to-blue-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-white transition duration-300 group-hover:text-white ease font-semibold">
                    Deliver here
                  </span>
                </span>
              </p>
            )} */}
          </article>
          <hr />
        </div>
      )}
    </div>
  );
};

export default AddressDetails;
export const ADDRESS_ARR = [
  {
    id: "1",
    addressType: "Home",
    name: "PrintBrix",
    mobileno: "6290467488",
    city: "Bhubaneshwar",
    state: "Odisha",
    pincode: "756042",
  },
  {
    id: "2",
    addressType: "Home",
    name: "PrintBrix",
    mobileno: "6290467488",
    city: "Bhubaneshwar",
    state: "Odisha",
    pincode: "756042",
  },
  {
    id: "3",
    addressType: "Home",
    name: "PrintBrix",
    mobileno: "6290467488",
    city: "Bhubaneshwar",
    state: "Odisha",
    pincode: "756042",
  },
  {
    id: "4",
    addressType: "Home",
    name: "PrintBrix",
    mobileno: "6290467488",
    city: "Bhubaneshwar",
    state: "Odisha",
    pincode: "756042",
  },
];
export const COUNTRIES = [
  { code: "AD", label: "Andorra", phone: "376" },
  { code: "AE", label: "United Arab Emirates", phone: "971" },
  { code: "AF", label: "Afghanistan", phone: "93" },
  { code: "AG", label: "Antigua and Barbuda", phone: "1-268" },
  { code: "AI", label: "Anguilla", phone: "1-264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1-684" },
  { code: "AT", label: "Austria", phone: "43" },
  { code: "AU", label: "Australia", phone: "61", suggested: true },
  { code: "AW", label: "Aruba", phone: "297" },
  { code: "AX", label: "Alland Islands", phone: "358" },
  { code: "AZ", label: "Azerbaijan", phone: "994" },
  { code: "BA", label: "Bosnia and Herzegovina", phone: "387" },
  { code: "BB", label: "Barbados", phone: "1-246" },
  { code: "BD", label: "Bangladesh", phone: "880" },
  { code: "BE", label: "Belgium", phone: "32" },
  { code: "BF", label: "Burkina Faso", phone: "226" },
  { code: "BG", label: "Bulgaria", phone: "359" },
  { code: "BH", label: "Bahrain", phone: "973" },
  { code: "BI", label: "Burundi", phone: "257" },
  { code: "BJ", label: "Benin", phone: "229" },
  { code: "BL", label: "Saint Barthelemy", phone: "590" },
  { code: "BM", label: "Bermuda", phone: "1-441" },
  { code: "BN", label: "Brunei Darussalam", phone: "673" },
  { code: "BO", label: "Bolivia", phone: "591" },
  { code: "BR", label: "Brazil", phone: "55" },
  { code: "BS", label: "Bahamas", phone: "1-242" },
  { code: "BT", label: "Bhutan", phone: "975" },
  { code: "BV", label: "Bouvet Island", phone: "47" },
  { code: "BW", label: "Botswana", phone: "267" },
  { code: "BY", label: "Belarus", phone: "375" },
  { code: "BZ", label: "Belize", phone: "501" },
  { code: "CA", label: "Canada", phone: "1", suggested: true },
  { code: "CC", label: "Cocos (Keeling) Islands", phone: "61" },
  { code: "CD", label: "Congo, Democratic Republic of the", phone: "243" },
  { code: "CF", label: "Central African Republic", phone: "236" },
  { code: "CG", label: "Congo, Republic of the", phone: "242" },
  { code: "CH", label: "Switzerland", phone: "41" },
  { code: "CI", label: "Cote d'Ivoire", phone: "225" },
  { code: "CK", label: "Cook Islands", phone: "682" },
  { code: "CL", label: "Chile", phone: "56" },
  { code: "CM", label: "Cameroon", phone: "237" },
  { code: "CN", label: "China", phone: "86" },
  { code: "CO", label: "Colombia", phone: "57" },
  { code: "CR", label: "Costa Rica", phone: "506" },
  { code: "CU", label: "Cuba", phone: "53" },
  { code: "CV", label: "Cape Verde", phone: "238" },
  { code: "CW", label: "Curacao", phone: "599" },
  { code: "CX", label: "Christmas Island", phone: "61" },
  { code: "CY", label: "Cyprus", phone: "357" },
  { code: "CZ", label: "Czech Republic", phone: "420" },
  { code: "DE", label: "Germany", phone: "49", suggested: true },
  { code: "DJ", label: "Djibouti", phone: "253" },
  { code: "DK", label: "Denmark", phone: "45" },
  { code: "DM", label: "Dominica", phone: "1-767" },
  { code: "DO", label: "Dominican Republic", phone: "1-809" },
  { code: "DZ", label: "Algeria", phone: "213" },
  { code: "EC", label: "Ecuador", phone: "593" },
  { code: "EE", label: "Estonia", phone: "372" },
  { code: "EG", label: "Egypt", phone: "20" },
  { code: "EH", label: "Western Sahara", phone: "212" },
  { code: "ER", label: "Eritrea", phone: "291" },
  { code: "ES", label: "Spain", phone: "34" },
  { code: "ET", label: "Ethiopia", phone: "251" },
  { code: "FI", label: "Finland", phone: "358" },
  { code: "FJ", label: "Fiji", phone: "679" },
  { code: "FK", label: "Falkland Islands (Malvinas)", phone: "500" },
  { code: "FM", label: "Micronesia, Federated States of", phone: "691" },
  { code: "FO", label: "Faroe Islands", phone: "298" },
  { code: "FR", label: "France", phone: "33", suggested: true },
  { code: "GA", label: "Gabon", phone: "241" },
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "GD", label: "Grenada", phone: "1-473" },
  { code: "GE", label: "Georgia", phone: "995" },
  { code: "GF", label: "French Guiana", phone: "594" },
  { code: "GG", label: "Guernsey", phone: "44" },
  { code: "GH", label: "Ghana", phone: "233" },
  { code: "GI", label: "Gibraltar", phone: "350" },
  { code: "GL", label: "Greenland", phone: "299" },
  { code: "GM", label: "Gambia", phone: "220" },
  { code: "GN", label: "Guinea", phone: "224" },
  { code: "GP", label: "Guadeloupe", phone: "590" },
  { code: "GQ", label: "Equatorial Guinea", phone: "240" },
  { code: "GR", label: "Greece", phone: "30" },
  {
    code: "GS",
    label: "South Georgia and the South Sandwich Islands",
    phone: "500",
  },
  { code: "GT", label: "Guatemala", phone: "502" },
  { code: "GU", label: "Guam", phone: "1-671" },
  { code: "GW", label: "Guinea-Bissau", phone: "245" },
  { code: "GY", label: "Guyana", phone: "592" },
  { code: "HK", label: "Hong Kong", phone: "852" },
  { code: "HM", label: "Heard Island and McDonald Islands", phone: "672" },
  { code: "HN", label: "Honduras", phone: "504" },
  { code: "HR", label: "Croatia", phone: "385" },
  { code: "HT", label: "Haiti", phone: "509" },
  { code: "HU", label: "Hungary", phone: "36" },
  { code: "ID", label: "Indonesia", phone: "62" },
  { code: "IE", label: "Ireland", phone: "353" },
  { code: "IL", label: "Israel", phone: "972" },
  { code: "IM", label: "Isle of Man", phone: "44" },
  { code: "IN", label: "India", phone: "91" },
  { code: "IO", label: "British Indian Ocean Territory", phone: "246" },
  { code: "IQ", label: "Iraq", phone: "964" },
  { code: "IR", label: "Iran, Islamic Republic of", phone: "98" },
  { code: "IS", label: "Iceland", phone: "354" },
  { code: "IT", label: "Italy", phone: "39" },
  { code: "JE", label: "Jersey", phone: "44" },
  { code: "JM", label: "Jamaica", phone: "1-876" },
  { code: "JO", label: "Jordan", phone: "962" },
  { code: "JP", label: "Japan", phone: "81", suggested: true },
  { code: "KE", label: "Kenya", phone: "254" },
  { code: "KG", label: "Kyrgyzstan", phone: "996" },
  { code: "KH", label: "Cambodia", phone: "855" },
  { code: "KI", label: "Kiribati", phone: "686" },
  { code: "KM", label: "Comoros", phone: "269" },
  { code: "KN", label: "Saint Kitts and Nevis", phone: "1-869" },
  {
    code: "KP",
    label: "Korea, Democratic People's Republic of",
    phone: "850",
  },
  { code: "KR", label: "Korea, Republic of", phone: "82" },
  { code: "KW", label: "Kuwait", phone: "965" },
  { code: "KY", label: "Cayman Islands", phone: "1-345" },
  { code: "KZ", label: "Kazakhstan", phone: "7" },
  { code: "LA", label: "Lao People's Democratic Republic", phone: "856" },
  { code: "LB", label: "Lebanon", phone: "961" },
  { code: "LC", label: "Saint Lucia", phone: "1-758" },
  { code: "LI", label: "Liechtenstein", phone: "423" },
  { code: "LK", label: "Sri Lanka", phone: "94" },
  { code: "LR", label: "Liberia", phone: "231" },
  { code: "LS", label: "Lesotho", phone: "266" },
  { code: "LT", label: "Lithuania", phone: "370" },
  { code: "LU", label: "Luxembourg", phone: "352" },
  { code: "LV", label: "Latvia", phone: "371" },
  { code: "LY", label: "Libya", phone: "218" },
  { code: "MA", label: "Morocco", phone: "212" },
  { code: "MC", label: "Monaco", phone: "377" },
  { code: "MD", label: "Moldova, Republic of", phone: "373" },
  { code: "ME", label: "Montenegro", phone: "382" },
  { code: "MF", label: "Saint Martin (French part)", phone: "590" },
  { code: "MG", label: "Madagascar", phone: "261" },
  { code: "MH", label: "Marshall Islands", phone: "692" },
  {
    code: "MK",
    label: "Macedonia, the Former Yugoslav Republic of",
    phone: "389",
  },
  { code: "ML", label: "Mali", phone: "223" },
  { code: "MM", label: "Myanmar", phone: "95" },
  { code: "MN", label: "Mongolia", phone: "976" },
  { code: "MO", label: "Macao", phone: "853" },
  { code: "MP", label: "Northern Mariana Islands", phone: "1-670" },
  { code: "MQ", label: "Martinique", phone: "596" },
  { code: "MR", label: "Mauritania", phone: "222" },
  { code: "MS", label: "Montserrat", phone: "1-664" },
  { code: "MT", label: "Malta", phone: "356" },
  { code: "MU", label: "Mauritius", phone: "230" },
  { code: "MV", label: "Maldives", phone: "960" },
  { code: "MW", label: "Malawi", phone: "265" },
  { code: "MX", label: "Mexico", phone: "52" },
  { code: "MY", label: "Malaysia", phone: "60" },
  { code: "MZ", label: "Mozambique", phone: "258" },
  { code: "NA", label: "Namibia", phone: "264" },
  { code: "NC", label: "New Caledonia", phone: "687" },
  { code: "NE", label: "Niger", phone: "227" },
  { code: "NF", label: "Norfolk Island", phone: "672" },
  { code: "NG", label: "Nigeria", phone: "234" },
  { code: "NI", label: "Nicaragua", phone: "505" },
  { code: "NL", label: "Netherlands", phone: "31" },
  { code: "NO", label: "Norway", phone: "47" },
  { code: "NP", label: "Nepal", phone: "977" },
  { code: "NR", label: "Nauru", phone: "674" },
  { code: "NU", label: "Niue", phone: "683" },
  { code: "NZ", label: "New Zealand", phone: "64" },
  { code: "OM", label: "Oman", phone: "968" },
  { code: "PA", label: "Panama", phone: "507" },
  { code: "PE", label: "Peru", phone: "51" },
  { code: "PF", label: "French Polynesia", phone: "689" },
  { code: "PG", label: "Papua New Guinea", phone: "675" },
  { code: "PH", label: "Philippines", phone: "63" },
  { code: "PK", label: "Pakistan", phone: "92" },
  { code: "PL", label: "Poland", phone: "48" },
  { code: "PM", label: "Saint Pierre and Miquelon", phone: "508" },
  { code: "PN", label: "Pitcairn", phone: "870" },
  { code: "PR", label: "Puerto Rico", phone: "1" },
  { code: "PS", label: "Palestine, State of", phone: "970" },
  { code: "PT", label: "Portugal", phone: "351" },
  { code: "PW", label: "Palau", phone: "680" },
  { code: "PY", label: "Paraguay", phone: "595" },
  { code: "QA", label: "Qatar", phone: "974" },
  { code: "RE", label: "Reunion", phone: "262" },
  { code: "RO", label: "Romania", phone: "40" },
  { code: "RS", label: "Serbia", phone: "381" },
  { code: "RU", label: "Russia", phone: "7" },
  { code: "RW", label: "Rwanda", phone: "250" },
  { code: "SA", label: "Saudi Arabia", phone: "966" },
  { code: "SB", label: "Solomon Islands", phone: "677" },
  { code: "SC", label: "Seychelles", phone: "248" },
  { code: "SD", label: "Sudan", phone: "249" },
  { code: "SE", label: "Sweden", phone: "46" },
  { code: "SG", label: "Singapore", phone: "65" },
  { code: "SH", label: "Saint Helena", phone: "290" },
  { code: "SI", label: "Slovenia", phone: "386" },
  { code: "SJ", label: "Svalbard and Jan Mayen", phone: "47" },
  { code: "SK", label: "Slovakia", phone: "421" },
  { code: "SL", label: "Sierra Leone", phone: "232" },
  { code: "SM", label: "San Marino", phone: "378" },
  { code: "SN", label: "Senegal", phone: "221" },
  { code: "SO", label: "Somalia", phone: "252" },
  { code: "SR", label: "Suriname", phone: "597" },
  { code: "SS", label: "South Sudan", phone: "211" },
  { code: "ST", label: "Sao Tome and Principe", phone: "239" },
  { code: "SV", label: "El Salvador", phone: "503" },
  { code: "SX", label: "Sint Maarten (Dutch part)", phone: "1-721" },
  { code: "SY", label: "Syrian Arab Republic", phone: "963" },
  { code: "SZ", label: "Swaziland", phone: "268" },
  { code: "TC", label: "Turks and Caicos Islands", phone: "1-649" },
  { code: "TD", label: "Chad", phone: "235" },
  { code: "TF", label: "French Southern Territories", phone: "262" },
  { code: "TG", label: "Togo", phone: "228" },
  { code: "TH", label: "Thailand", phone: "66" },
  { code: "TJ", label: "Tajikistan", phone: "992" },
  { code: "TK", label: "Tokelau", phone: "690" },
  { code: "TL", label: "Timor-Leste", phone: "670" },
  { code: "TM", label: "Turkmenistan", phone: "993" },
  { code: "TN", label: "Tunisia", phone: "216" },
  { code: "TO", label: "Tonga", phone: "676" },
  { code: "TR", label: "Turkey", phone: "90" },
  { code: "TT", label: "Trinidad and Tobago", phone: "1-868" },
  { code: "TV", label: "Tuvalu", phone: "688" },
  { code: "TW", label: "Taiwan, Province of China", phone: "886" },
  { code: "TZ", label: "United Republic of Tanzania", phone: "255" },
  { code: "UA", label: "Ukraine", phone: "380" },
  { code: "UG", label: "Uganda", phone: "256" },
  { code: "US", label: "United States", phone: "1", suggested: true },
  { code: "UY", label: "Uruguay", phone: "598" },
  { code: "UZ", label: "Uzbekistan", phone: "998" },
  { code: "VA", label: "Holy See (Vatican City State)", phone: "379" },
  { code: "VC", label: "Saint Vincent and the Grenadines", phone: "1-784" },
  { code: "VE", label: "Venezuela", phone: "58" },
  { code: "VG", label: "British Virgin Islands", phone: "1-284" },
  { code: "VI", label: "US Virgin Islands", phone: "1-340" },
  { code: "VN", label: "Vietnam", phone: "84" },
  { code: "VU", label: "Vanuatu", phone: "678" },
  { code: "WF", label: "Wallis and Futuna", phone: "681" },
  { code: "WS", label: "Samoa", phone: "685" },
  { code: "XK", label: "Kosovo", phone: "383" },
  { code: "YE", label: "Yemen", phone: "967" },
  { code: "YT", label: "Mayotte", phone: "262" },
  { code: "ZA", label: "South Africa", phone: "27" },
  { code: "ZM", label: "Zambia", phone: "260" },
  { code: "ZW", label: "Zimbabwe", phone: "263" },
];
