import useAdminMenuItem from "@/hooks/useMenuItems";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { MdExpandLess, MdExpandMore } from "react-icons/md";


const MobileAdminDrawer = () => {
    const [selectedSubMenu, setSelectedSubMenu] = useState("");
    const router = useRouter();
    const MenuItems = useAdminMenuItem();
    return (
        <>
            <Link href={`/admin`} className=" w-full flex justify-center">
                <img
                    src="/logo.png"
                    className=" w-40 h-24 object-fill"
                    alt=""
                />
            </Link>
            <div className="flex flex-col w-full h-full overflow-y-auto">
                {MenuItems?.map((menuItem) => (
                    <Fragment key={menuItem?._id}>
                        {/* Main menu items */}
                        <div
                            className={`w-full group flex items-center justify-between px-4 py-3 text-white hover:text-primary hover:bg-primary/10 transition-all duration-150 ease-in-out cursor-pointer border-l-4 ${router.asPath === menuItem.route
                                ? "bg-primary/10 text-primary border-primary/75"
                                : "border-transparent"
                                }`}
                            onClick={() => {
                                // Navigate to the main menu item route if available
                                if (menuItem?.route) return router?.push(menuItem?.route);

                                // Toggle submenu visibility
                                menuItem?.submenus &&
                                    setSelectedSubMenu((prev) =>
                                        prev === menuItem._id ? "" : menuItem._id
                                    );
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <span>{menuItem?.icon}</span>
                                <p className="font-medium whitespace-nowrap">
                                    {menuItem?.title}
                                </p>
                            </div>
                            {menuItem?.submenus ? (
                                // Show expand/collapse icon based on submenu visibility
                                selectedSubMenu === menuItem?._id ? (
                                    <span>
                                        <MdExpandLess className="text-xl common-transition" />
                                    </span>
                                ) : (
                                    <span>
                                        <MdExpandMore className="text-xl common-transition" />
                                    </span>
                                )
                            ) : null}
                        </div>

                        {/* Submenus section */}
                        {menuItem?.submenus && selectedSubMenu === menuItem?._id ? (
                            <div className="pl-4 mt-2">
                                {menuItem?.submenus.map((submenuItem) => (
                                    <div
                                        key={submenuItem?._id}
                                        className={`w-full flex items-center px-4 py-3 text-gray-200 hover:text-primary hover:bg-primary/10 transition-all duration-150 ease-in-out cursor-pointer ${router.asPath === submenuItem.route
                                            ? "bg-primary/10 text-primary"
                                            : ""
                                            }`}
                                        onClick={() => {
                                            // Navigate to the submenu item route if available
                                            if (submenuItem?.route)
                                                return router?.push(submenuItem?.route);
                                        }}
                                    >
                                        <div className="flex items-center gap-2">
                                            <span>{submenuItem?.icon}</span>
                                            <p className="font-medium whitespace-nowrap">
                                                {submenuItem?.title}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : null}
                    </Fragment>
                ))}

                {/* Logout section */}
                <div
                    className={`w-full group flex items-center justify-between text-white hover:text-primary px-5 py-3 hover:bg-primary/10 common-transition cursor-pointer`}
                >
                    <div className="flex items-center gap-2">
                        <span className="group-hover:text-primary">
                            <BiLogOutCircle className="text-xl" />
                        </span>
                        <p className="font-medium whitespace-nowrap">Log Out</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileAdminDrawer;
