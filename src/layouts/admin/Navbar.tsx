
import useMenuItems from "@/hooks/useMenuItems";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { AiOutlineFullscreen, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { FaAnglesRight, FaEarthAmericas, FaUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import {
  MdKeyboardDoubleArrowRight,
  MdNotificationsNone,
  MdOutlineAttachEmail,
  MdOutlineChat
} from "react-icons/md";
import { RiInboxFill } from "react-icons/ri";
interface Props {
  isFull: boolean;
  setIsFull: Dispatch<SetStateAction<boolean>>;
}
const Navbar = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [profile, setProfile] = useState(false);
  const MenuItems = useMenuItems;
  const { pathname } = useRouter();
  const profileDivRef = useRef<HTMLDivElement | null>(null);
  const toggleFullScreen = () => {
    if (!isFullScreen) {
      // Enter full screen mode
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      // Exit full screen mode
      if (document?.exitFullscreen) {
        document?.exitFullscreen();
      }
    }

    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    const handleFullScreen = (event: KeyboardEvent) => {
      if (event?.ctrlKey && event?.shiftKey && event.key === "K") {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        }
      } else if (event?.key === "Escape") {
        if (document?.exitFullscreen) {
          document?.exitFullscreen();
        }
      }
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profile &&
        profileDivRef.current &&
        !(
          event.target instanceof Node &&
          profileDivRef.current.contains(event.target)
        )
      ) {
        setProfile(false);
      }
    };
    document.addEventListener("keydown", handleFullScreen);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleFullScreen);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav className=" sticky top-0  w-full h-fit flex items-center  justify-center pt-3  px-5">
      <div className=" w-full   flex items-center shadow-2xl h-16  rounded-xl px-4">
        <div className=" w-full flex items-center justify-between">
          <div className=" flex items-center gap-4">
            {/* <p
              onClick={() => setIsFull(!isFull)}
              className="  flex items-center cursor-pointer border-primary justify-center border rounded-md p-2"
            >
              {isFull ? (
                <FaAnglesRight className="text-xl text-primary" />
              ) : (
                <AiOutlineMenuUnfold className="text-xl text-primary  " />
              )}
            </p> */}
            <p className=" flex items-center cursor-pointer border-primary justify-center border rounded-md p-2">
              <IoIosSearch className="text-xl  text-primary " />
            </p>
            <Link
              href={`/`}
              className=" flex items-center cursor-pointer border-primary justify-center border rounded-md p-2"
            >
              <FaEarthAmericas className="text-xl  text-primary " />
            </Link>
            <div
              className="flex items-center font-semibold text-[1.1rem] tracking-wide uppercase text-gray-900"
            >
              {MenuItems.find((item) => item.route === pathname)?.title}
              {
                MenuItems?.find((item) =>
                  item?.submenus?.find(
                    (submenus) => submenus.route === pathname
                  )
                )?.title
              }
              {MenuItems.find((item) =>
                item?.submenus?.find((submenus) => submenus.route === pathname)
              )?.title ? (
                <span className="px-2 flex items-center">
                  <MdKeyboardDoubleArrowRight className="!text-xl" />
                </span>
              ) : (
                <span> </span>
              )}

              {
                MenuItems?.find((item) =>
                  item?.submenus?.find(
                    (submenus) => submenus.route === pathname
                  )
                )?.submenus?.find((submenus) => submenus.route === pathname)
                  ?.title
              }
            </div>
          </div>
          <div className=" flex items-center gap-5">
            <p onClick={toggleFullScreen} className=" cursor-pointer ">
              <AiOutlineFullscreen className="text-2xl  text-primary " />
            </p>
            <p className=" cursor-pointer ">
              <MdOutlineChat className="text-2xl  text-primary " />
            </p>
            <p className=" cursor-pointer ">
              <MdNotificationsNone className="text-2xl  text-primary " />
            </p>


            <div className="  w-9 h-9 rounded-full flex items-center justify-center relative ">
              <p className=" absolute bottom-0 right-0 z-10 p-1 rounded-full bg-green-600"></p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPy33jRr8oKADvBbqq0TU6dQ7fOms_eoDQPR33BWhpWBlJaFwp_aHmM8Den-ePhdqx7Y&usqp=CAU"
                alt=""
                onClick={() => setProfile(!profile)}
                className="cursor-pointer w-full h-full object-fill rounded-full"
              />
              {profile && (
                <div
                  ref={profileDivRef}
                  className=" absolute top-10 right-0 h-[30rem] w-[23rem] commonClass z-10 rounded-lg "
                >
                  <div
                    className="w-full h-full flex flex-col justify-between py-5 px-6"
                  >
                    <p className="dark-text font-medium text-lg">
                      User Profile
                    </p>
                    <div className="flex items-center gap-2">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPy33jRr8oKADvBbqq0TU6dQ7fOms_eoDQPR33BWhpWBlJaFwp_aHmM8Den-ePhdqx7Y&usqp=CAU"
                        alt=""
                        className="cursor-pointer w-20 h-20 object-fill rounded-full"
                      />
                      <div className=" flex flex-col gap-1">
                        <p className="dark-text text-sm font-medium">
                          Rajesh Kumar Behera
                        </p>
                        <p className="dark-text text-xs font-medium">
                          Software Developer
                        </p>
                        <p className="dark-text flex items-center gap-0.5">
                          <MdOutlineAttachEmail className="text-primary" />
                          <span className="dark-text text-sm font-medium">
                            beherarabi881@gmail.com
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5 w-full border-t pt-6">
                      <div className="flex items-center gap-4 h-14 w-full">
                        <div
                          className="h-full w-14 bg-slate-50 rounded-lg flex items-center justify-center"
                        >
                          <FaUser className="text-2xl text-primary" />
                        </div>
                        <div className="flex flex-col justify-between">
                          <p className="  font-medium">My Profile</p>
                          <p className="dark-text  text-sm ">Account Setting</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 h-14 w-full">
                        <div
                          className="h-full w-14 bg-slate-50 rounded-lg flex items-center justify-center"
                        >
                          <RiInboxFill className="text-2xl text-primary" />
                        </div>
                        <div className="flex flex-col justify-between">
                          <p className="  font-medium">My Inbox</p>
                          <p className="dark-text  text-sm ">
                            Message & Emails
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 h-14 w-full">
                        <div
                          className="h-full w-14 `bg-slate-50 rounded-lg flex items-center justify-center"
                        >
                          <FaTasks className="text-2xl text-primary" />
                        </div>
                        <div className="flex flex-col justify-between">
                          <p className="  font-medium">My Task</p>
                          <p className="dark-text  text-sm ">
                            To-do and Daily Tasks
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full border font-medium py-2 cursor-pointer hover:bg-primary hover:text-white duration-200 border-primary text-primary capitalize rounded-lg flex items-center justify-center">
                      Log out
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
