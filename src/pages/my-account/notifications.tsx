
import useSwr from "@/hooks/useSwr";
import { PublicLayout } from "@/layouts";
import AccountLayout from "@/layouts/account";
import React, { useEffect, useState } from "react";

interface Notification {
    id: string;
    // img: string;
    message: string;
    createdAt: string;
    isRead: boolean;
}
interface HeadingWithButtonProps {
    buttonText: string;
    onButtonClick: () => void;
}

const NotificationPage: React.FC<HeadingWithButtonProps> = ({
    onButtonClick,
}) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const { data, isValidating } = useSwr("");

    useEffect(() => {
        // Fetch notifications from the backend here

        const notification: Notification[] = [
            {
                id: "1",
                // img: "/home/categoryimage1.png",
                message:
                    " Your Flipkart order containing SHF Cotton swaiter has been delivered.",
                createdAt: new Date().toString(),
                isRead: false,
            },
            {
                id: "2",
                // img: "/home/categoryimage2.png",
                message:
                    " Your Flipkart order containing SHF Cotton swaiter has been delivered.",
                createdAt: new Date().toString(),
                isRead: false,
            },
            {
                id: "3",
                // img: "/home/categoryimage3.png",
                message: "Are you trying to login to your account.",
                createdAt: new Date().toString(),
                isRead: false,
            },
            {
                id: "4",
                // img: "/home/categoryimage4.png",
                message:
                    "  Your Flipkart order containing SHF Cotton swaiter has been delivered .",
                createdAt: new Date().toString(),
                isRead: false,
            },
            {
                id: "5",
                // img: "/home/categoryimage5.png",
                message: "Are you trying to login to your account.",
                createdAt: new Date().toString(),
                isRead: false,
            },
            // Add more dummy notifications here...
        ];

        setNotifications(notification);
    }, []);

    return (
        <PublicLayout>
            <AccountLayout>
                <div className="relative h-full bg-white p-4 sm:p-8 flex flex-col w-full gap-3 ">
                    <div className=" flex items-center justify-between">
                        <h1 className="text-2xl font-semibold mb-4">All Notifications</h1>
                        <span className=" flex items-center gap-3">
                            <button
                                className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-900 duration-500"
                                onClick={onButtonClick}
                            >
                                Read All
                            </button>
                            <button
                                className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-700 duration-500"
                                onClick={onButtonClick}
                            >
                                Delete All
                            </button>
                        </span>
                    </div>
                    <div className=" flex flex-col gap-2">
                        {notifications?.map((items) => (
                            <aside
                                key={items.id}
                                className="flex justify-between cursor-pointer items-center p-4  shadow-[0px_0px_2px_1px_#00000024] hover:shadow-[0px_0px_7px_1px_#00000024] duration-500 rounded-md bg-gray-100  group space-x-2"
                            >
                                <article className="flex gap-4">
                                    {/* <span>
                    <img
                      src={items.img}
                      className="object-contain w-14 h-14 group-hover:scale-110 duration-500"
                      alt=""
                    />
                  </span> */}
                                    <span className="flex flex-col gap-1">
                                        <p className="font-semibold font-sub">{items.message}</p>
                                        <p className="font-semibold text-xs font-sub">
                                            {items.createdAt}
                                        </p>
                                    </span>
                                </article>
                            </aside>
                        ))}
                    </div>
                </div>
            </AccountLayout>
        </PublicLayout>
    );
};

export default NotificationPage;
