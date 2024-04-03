import { AiOutlineBell, AiOutlineDollarCircle } from "react-icons/ai";
import {
  BiBox,
  BiColorFill,
  BiImageAdd,
  BiImages,
  BiLayer,
  BiSupport,
  BiUserCircle,
  BiUserPin,
  BiUserPlus,
} from "react-icons/bi";
import {
  BsTruck,
  BsGear,
  BsChatSquareText,
  BsBox,
  BsBoxes,
  BsKey,
  BsBagCheck,
  BsCartCheck,
  BsGearWideConnected,
  BsChatText,
  BsMenuApp,
  BsBagPlus,
  BsCardImage,
} from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";
import {
  HiOutlineQuestionMarkCircle,
  HiOutlineShoppingBag,
  HiOutlineUserCircle,
  HiOutlineUserGroup,
  HiOutlineUsers,
} from "react-icons/hi2";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoAddOutline } from "react-icons/io5";
import {
  MdOutlineAddPhotoAlternate,
  MdOutlineCategory,
  MdOutlineFeaturedPlayList,
  MdOutlineInstallMobile,
  MdOutlineLocalOffer,
  MdOutlineMobileFriendly,
  MdOutlinePrivacyTip,
} from "react-icons/md";
import { PiCoins } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";

const useMenuItems = [
  {
    id: "1",
    title: "Dashboard",
    route: "/admin",
    icon: <RxDashboard className="text-2xl text-primary" />,
  },
  {
    id: "2",
    title: "Users",
    icon: <HiOutlineUsers className="text-2xl text-primary" />,
    submenus: [
      {
        id: "2.1",
        title: "Customers",
        route: "/admin/users/customers",
        icon: <HiOutlineUserGroup className="text-2xl" />,
      },
      {
        id: "2.2",
        title: "B2B Users",
        route: "/admin/users/b2b-users",
        icon: <HiOutlineUserCircle className="text-2xl" />,
      },
    ],
  },
  {
    id: "3",
    title: "Category",
    route: "/admin/category",
    icon: <BiLayer className="text-2xl text-primary" />,
  },
  {
    id: "4",
    title: "Tags",
    route: "/admin/tags",
    icon: <MdOutlineCategory className="text-2xl text-primary" />,
  },
  {
    id: "5",
    title: "Product",
    icon: <FiShoppingCart className="text-2xl text-primary" />,
    submenus: [
      {
        id: "5.1",
        title: "Add New Product",
        route: "/admin/products/add-product",
        icon: <IoAddOutline className="text-2xl" />,
      },
      {
        id: "5.2",
        title: "Manage Products",
        route: "/admin/products/manage-product",
        icon: <BiBox className="text-2xl" />,
      },
    ],
  },
  {
    id: "6",
    title: "Orders",
    icon: <HiOutlineShoppingBag className="text-2xl text-primary" />,
    submenus: [
      {
        id: "6.1",
        title: "B2C Order",
        route: "/admin/orders/b2c-orders",
        icon: <BsBox className="text-2xl" />,
      },
      {
        id: "6.2",
        title: "Customized Order",
        route: "/admin/orders/customized-orders",
        icon: <BsBoxes className="text-2xl" />,
      },
      {
        id: "6.3",
        title: "B2B Order",
        route: "/admin/orders/b2b-orders",
        icon: <BiBox className="text-2xl" />,
      },
    ],
  },
  {
    id: "7",
    title: "Influencer Request",
    route: "/admin/influencer-request",
    icon: <BiUserPlus className="text-2xl text-primary" />,
  },
  {
    id: "8",
    title: "Reports",
    route: "/admin/reports",
    icon: <HiOutlineClipboardDocumentList className="text-2xl text-primary" />,
  },
  {
    id: "9",
    title: "Reviews",
    route: "/admin/reviews",
    icon: <BsChatSquareText className="text-2xl text-primary" />,
  },
  {
    id: "10",
    title: "Support",
    icon: <BiSupport className="text-2xl text-primary" />,
    submenus: [
      {
        id: "10.1",
        title: "Manage Support",
        route: "/admin/support/manage-support",
        icon: <BsCartCheck className="text-2xl" />,
      },
      {
        id: "10.2",
        title: "Order Support",
        route: "/admin/support/order-support",
        icon: <BsBagCheck className="text-2xl" />,
      },
    ],
  },
  // {
  //   id: "11",
  //   title: "Config",
  //   icon: <MdOutlineMobileFriendly className="text-2xl" />,
  //   submenus: [
  //     {
  //       id: "11.1",
  //       title: "App Config",
  //       route: "/admin/config/app-config",
  //       icon: <MdOutlineInstallMobile className="text-2xl" />,
  //     },
  //     {
  //       id: "11.2",
  //       title: "GST Config",
  //       route: "/admin/config/gst",
  //       icon: <AiOutlineDollarCircle className="text-2xl" />,
  //     },
  //     {
  //       id: "11.3",
  //       title: "Delivery Charge",
  //       route: "/admin/config/delivery",
  //       icon: <BsTruck className="text-2xl" />,
  //     },
  //     {
  //       id: "11.4",
  //       title: "Refer Amount",
  //       route: "/admin/config/refer-amount",
  //       icon: <PiCoins className="text-2xl" />,
  //     },
  //     {
  //       id: "11.5",
  //       title: "Commission Amount ",
  //       route: "/admin/config/commission-amount",
  //       icon: <GiMoneyStack className="text-2xl" />,
  //     },
  //     {
  //       id: "11.6",
  //       title: "Privacy Policy ",
  //       route: "/admin/config/privacy-policy",
  //       icon: <MdOutlinePrivacyTip className="text-2xl" />,
  //     },
  //     {
  //       id: "11.7",
  //       title: "Manage FAQ ",
  //       route: "/admin/config/manage-faq",
  //       icon: <HiOutlineQuestionMarkCircle className="text-2xl" />,
  //     },
  //     {
  //       id: "11.8",
  //       title: "Color Section ",
  //       route: "/admin/config/color-section",
  //       icon: <BiColorFill className="text-2xl" />,
  //     },
  //     {
  //       id: "11.9",
  //       title: "Product Type ",
  //       route: "/admin/config/product-type/",
  //       icon: <BsBagPlus className="text-2xl" />,
  //     },
  //   ],
  // },
  // {
  //   id: "12",
  //   title: "Manage Offer",
  //   route: "/admin/manage-offer",
  //   icon: <MdOutlineLocalOffer className="text-2xl" />,
  // },
  // {
  //   id: "13",
  //   title: "Notification",
  //   route: "/admin/notifications",
  //   icon: <AiOutlineBell className="text-2xl" />,
  // },
  // {
  //   id: "14",
  //   title: "Site Settings",
  //   route: "/admin/site-settings/website-settings",
  //   icon: <BsGearWideConnected className="text-2xl" />,
  // },
  // {
  //   id: "15",
  //   title: "Banner",
  //   icon: <BsCardImage className="text-2xl" />,
  //   submenus: [
  //     {
  //       id: "15.1",
  //       title: "Add Banner",
  //       route: "/admin/banner/add-banner",
  //       icon: <BiImageAdd className="text-2xl" />,
  //     },
  //     {
  //       id: "15.2",
  //       title: "Manage Banner",
  //       route: "/admin/banner/manage-banner",
  //       icon: <BiImages className="text-2xl" />,
  //     },
  //   ],
  // },

  // {
  //   id: "16",
  //   title: "About Us Section",
  //   icon: <BiUserPin className="text-2xl" />,
  //   submenus: [
  //     {
  //       id: "16.1",
  //       title: "Banner Section",
  //       route: "/admin/about-us/banner-section",
  //       icon: <MdOutlineAddPhotoAlternate className="text-2xl" />,
  //     },
  //     {
  //       id: "16.2",
  //       title: "Hero Section",
  //       route: "/admin/about-us/hero-section",
  //       icon: <BsMenuApp className="text-2xl" />,
  //     },
  //     {
  //       id: "16.3",
  //       title: "Features Section",
  //       route: "/admin/about-us/features-section",
  //       icon: <MdOutlineFeaturedPlayList className="text-2xl" />,
  //     },
  //     {
  //       id: "16.4",
  //       title: "Reviews Section",
  //       route: "/admin/about-us/reviews-section",
  //       icon: <BsChatText className="text-2xl" />,
  //     },
  //     {
  //       id: "16.5",
  //       title: "Our Team",
  //       route: "/admin/about-us/our-team",
  //       icon: <HiOutlineUserGroup className="text-2xl" />,
  //     },
  //   ],
  // },
  // {
  //   id: "17",
  //   title: "Settings",
  //   icon: <BsGear className="text-2xl" />,
  //   submenus: [
  //     {
  //       id: "17.1",
  //       title: "Change Password",
  //       route: "/admin/settings/change-password",
  //       icon: <BsKey className="text-2xl" />,
  //     },
  //     {
  //       id: "17.2",
  //       title: "My Profile",
  //       route: "/admin/settings/profile",
  //       icon: <BiUserCircle className="text-2xl" />,
  //     },
  //   ],
  // },
];

export default useMenuItems;
