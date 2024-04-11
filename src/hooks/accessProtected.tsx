import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import useAuth from "./useAuth";
import useAppContext from "@/context";
import CustomLoader from "@/components/core/CustomLoader";
const AccessProtected = (PassedComponent: any) =>
    function NewComponent(props: any) {
        const { user, logout, isUserLoading } = useAuth();
        const { push, asPath } = useRouter();
        let mounted = useRef<boolean>(false);
        const { setIsLogin } = useAppContext()
        useEffect(() => {
            mounted.current = true;
            if (!isUserLoading) {
                if (!user?._id) {
                    push("/");
                    logout();
                    setIsLogin(false)
                }
                if (!user?.isOnline) {
                    push("/");
                    logout();
                    setIsLogin(false)
                }
                if (user?.isBlocked) {
                    push("/");
                    logout();
                    setIsLogin(false)
                }
            }


            return () => {
                mounted.current = false;
            };
        }, [user, push, asPath]);

        return <>{user?._id ? <PassedComponent {...props} /> : <CustomLoader />}</>;
    };

export default AccessProtected;
