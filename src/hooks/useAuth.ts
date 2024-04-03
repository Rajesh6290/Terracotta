import { BASE_URL, getFromLocalStorage, removeFromLocalStorage } from "@/utils";
import { create } from "zustand";

type AuthState = {
  isUserLoading: boolean;
  user?: Partial<IUser>;
  setUser: (user: Partial<IUser>) => Promise<void>;
  logout: () => void;
  getUser: () => void;
};
const useAuth: any = create<AuthState>((set) => ({
  isUserLoading: true,
  user: {},
  setUser: async (user: Partial<IUser>) => {
    set({ user: { ...user } });
  },
  logout() {
    set({ user: undefined });
    typeof window !== "undefined" && removeFromLocalStorage("ACCESS_TOKEN");
  },
  getUser: async () => {
    const accessToken = getFromLocalStorage("ACCESS_TOKEN");

    if (!accessToken) {
      set({ user: {}, isUserLoading: false });
      return;
    }
    try {
      const res = await fetch(`${BASE_URL}/customer/currentUser`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (res?.status === 401) {
        window?.localStorage?.removeItem("ACCESS_TOKEN");
        set({ user: {}, isUserLoading: false });
      }

      if (res?.status === 200) {
        const data = await res.json();
        // console.log("useAuth==>", data);
        const userData = data?.data;
        set({ user: { ...userData }, isUserLoading: false });
      }
    } catch (error) {
      set({ user: {} });
    }
  },
}));

export default useAuth;
