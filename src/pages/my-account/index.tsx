

import ProfileUpdateForm from "@/components/form/ProfileUpdateForm";
import useAuth from "@/hooks/useAuth";
import { PublicLayout } from "@/layouts";
import AccountLayout from "@/layouts/account";
import { use, useState } from "react";
import { BiPhoneCall, BiSolidPencil } from "react-icons/bi";
import { CgGenderFemale } from "react-icons/cg";
import { MdEmail, MdOutlineAccountCircle } from "react-icons/md";

const UserProfile = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const { user } = useAuth();
    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };

    return (
        <>
            <PublicLayout>
                <AccountLayout>
                    <div className="  py-6 ">
                        <div className="relative h-full bg-white p-4 ">
                            <h1 className="text-2xl font-semibold text-center">
                                Profile Information
                            </h1>
                            <div className="max-w-md mx-auto bg-white p-6">
                                <div className="text-center">
                                    <label htmlFor="profileImage">
                                        <img
                                            src={user?.image || "/profile-pic.svg"}
                                            alt="profilepic"
                                            className="w-32 h-32 mx-auto rounded-full bg-slate-200 mb-4 text-white text-4xl cursor-pointer"
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="grid xl:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 container gap-3   w-full">
                                <div className="  p-6 w-full h-full bg-white  rounded-lg shadow-[0px_0px_6px_1px_#00000024]">
                                    <div className="flex flex-col items-center  w-full">
                                        <MdOutlineAccountCircle
                                            className="items-center text-2xl mx-20 mb-3 text-primary"
                                            size={28}
                                        />
                                        <div className="flex flex-col gap-2">
                                            <p>{user?.name}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" text-center p-6 w-full h-full bg-white  rounded-lg shadow-[0px_0px_6px_1px_#00000024]">
                                    <div className="flex flex-col items-center  w-full ">
                                        <MdEmail
                                            className="items-center text-2xl mx-20 mb-3 text-primary"
                                            size={28}
                                        />
                                        <div className="flex flex-col gap-2 ">
                                            <p>{user?.email}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" text-center  p-6 w-full h-full bg-white rounded-lg shadow-[0px_0px_6px_1px_#00000024]">
                                    <div className="flex flex-col items-center  w-full">
                                        <BiPhoneCall
                                            className="items-center text-2xl mx-20 mb-3 text-primary"
                                            size={28}
                                        />
                                        <div className="flex flex-col gap-2">
                                            <p>{user?.mobileNo ? user?.mobileNo : `Not Provided`}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" text-center  p-6 w-full h-full bg-white rounded-md shadow-[0px_0px_6px_1px_#00000024]">
                                    <div className="flex flex-col items-center  w-full">
                                        <CgGenderFemale
                                            className="text-2xl mb-3 text-primary"
                                            size={28}
                                        />
                                        <div className="flex flex-col gap-2 capitalize">
                                            <p>{user?.gender ? user?.gender : `Not Provided`}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute md:top-1 md:right-1 -top-5 -right-5">
                                <button
                                    onClick={openForm}
                                    type="button"
                                    className={`py-1 px-5 border-2 rounded-lg text-primary border-primary`}
                                >
                                    <BiSolidPencil size={24} />
                                </button>
                                <ProfileUpdateForm
                                    userData={user}
                                    isOpen={isFormOpen}
                                    onClose={closeForm}
                                />
                            </div>
                        </div>
                    </div>
                </AccountLayout>
            </PublicLayout>
        </>
    );
};

export default UserProfile;