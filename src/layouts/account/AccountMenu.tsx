/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BsHouseAdd } from "react-icons/bs";
import {
  MdExpandMore,
  MdNotificationsNone,
  MdOutlineAccountCircle,
} from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiCoupon4Line, RiLockPasswordLine } from "react-icons/ri";
import { BiLogOutCircle, BiWallet } from "react-icons/bi";
import { useRouter } from "next/router";
import { AiOutlineFolderAdd, AiOutlineFolderView } from "react-icons/ai";
import { use, useState } from "react";
import { PiHandCoins } from "react-icons/pi";
import useAppContext from "@/context";
import { toast } from "react-toastify";
import useAuth from "@/hooks/useAuth";
import useMutation from "@/hooks/useMutation";

const AccountMenu = () => {
  const [open, setOpen] = useState(false);
  const { logout, user } = useAuth();
  const { isLogin, setIsLogin } = useAppContext();
  const router = useRouter();
  const { mutation, isLoading } = useMutation();

  const handleLogout = async () => {
    const res = await mutation("customer/update", {
      method: "PUT",
      isAlert: true,
      body: {
        isOnline: false,
      },
    });
    if (res?.status === 200) {
      router.push("/");
      toast.success("Logout Successful");
      logout();
      setIsLogin(false);
    } else {
      toast.error(res?.results?.msg);
    }
  };

  const ACCOUNT_MENU_ARR = [
    {
      id: "1",
      title: "My Profile",
      path: "/my-account",
      icon: (
        <MdOutlineAccountCircle className="text-2xl text-gray-500 mr-2 group-hover:text-primary" />
      ),
    },
    {
      id: "2",
      title: "Manage Address",
      path: "/my-account/address",
      icon: (
        <BsHouseAdd className="text-2xl text-gray-500 mr-2 group-hover:text-primary" />
      ),
    },
    {
      id: "3",
      title: "My Orders",
      path: "/my-account/orders/",
      icon: (
        <HiOutlineShoppingBag className="text-2xl text-gray-500 mr-2 group-hover:text-primary" />
      ),
    },
    {
      id: "4",
      title: "My Coupons",
      path: "/my-account/coupons",
      icon: (
        <RiCoupon4Line className="text-2xl text-gray-500 mr-2 group-hover:text-primary" />
      ),
    },
    {
      id: "5",
      title: "My Wallet",
      path: "/my-account/wallet",
      icon: (
        <BiWallet className="text-2xl text-gray-500 mr-2 group-hover:text-primary" />
      ),
    },

    {
      id: "6",
      title: "Notifications",
      path: "/my-account/notifications",
      icon: (
        <MdNotificationsNone className="text-2xl text-gray-500 mr-2 group-hover:text-primary" />
      ),
    },
    {
      id: "7",
      title: "Change Password",
      path: "/my-account/change-password",
      icon: (
        <RiLockPasswordLine className="text-2xl text-gray-500 mr-2 group-hover:text-primary" />
      ),
    },
  ];



  return (
    <aside className="lg:sticky lg:top-[96px] w-full lg:w-1/4 flex flex-col bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-md">
      <div className="w-full flex items-center gap-5 border-b border-primary p-4 md:p-6">
        <img
          src={user?.image || "/favicon.png"}
          className="w-14 h-14 min-w-[3.5rem] min-h-[3.5rem] rounded-full border"
        />
        <div className="tracking-wide  w-full overflow-hidden">
          <div className="font-semibold text-xl break-words">
            Hi {user?.name}
          </div>
          <p className="break-words">{user?.email}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 p-3 md:p-4">
        {ACCOUNT_MENU_ARR.map((item) => (
          <Link href={item.path} key={item.id}>
            <p
              className={`group    flex items-center gap-1 rounded-md p-3  font-medium common-transition
            ${item.path === router.asPath
                  ? " bg-secondary/5"
                  : " hover:text-primary hover:bg-primary/5"
                }
            `}
            >
              {item.icon}
              {item.title}
            </p>
          </Link>
        ))}

        {/* <div
          className="w-full border-y py-3 text-gray-800 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <p className="w-full capitalize font-semibold tracking-wide flex items-center justify-between">
            Become an influencer
            <MdExpandMore
              className={`text-2xl text-gray-800 common-transition ${open ? "" : " -rotate-90"
                }`}
            />
          </p>
          <div
            className={`animate-collapse grid common-transition ease-in-out ${open ? "grid-rows-[1fr] pt-2" : "grid-rows-[0fr] "
              }`}
          >
            <div className="overflow-hidden description text-sm md:text-base">
              {INFLUENCER_MENU_ARR.map((item) => (
                <Link href={item.path} key={item.id}>
                  <p className="group hover:text-primary flex items-center gap-1 rounded-md p-3 hover:bg-primary/5 font-medium common-transition">
                    {item.icon}
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div> */}
        <p
          onClick={handleLogout}
          className="group hover:text-red-500 flex items-center gap-1 rounded-md p-3 hover:bg-red-500/5 font-medium cursor-pointer common-transition"
        >
          {
            isLoading ? <div role="status">
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
            </div> : <BiLogOutCircle className="text-2xl text-gray-500 mr-2 group-hover:text-red-500" />
          }

          Logout
        </p>
      </div>
    </aside>
  );
};

export default AccountMenu;
