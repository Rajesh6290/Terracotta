import useAuth from "@/hooks/useAuth";
import AccountMenu from "./AccountMenu";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import useAppContext from "@/context";

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { setIsLogin } = useAppContext()
    const router = useRouter()
    const { user, logout } = useAuth();
    useEffect(() => {
        if (!user?._id || user?.isActive === false || user?.isOnline === false) {
            router.push("/");
            logout()
            setIsLogin(false);
        }
    }, [user?._id, user?.isActive, user?.isOnline]);
    return (
        <article className="bg-gray-100 py-8">
            <section className="relative main-container">
                <h2 className="title text-center pb-8">My Account</h2>
                <div className="w-full flex flex-col lg:flex-row items-start gap-6">
                    <AccountMenu />
                    <aside className="w-full lg:w-3/4 p-4 md:p-6 bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-md">
                        {children}
                    </aside>
                </div>
            </section>
        </article>
    );
}