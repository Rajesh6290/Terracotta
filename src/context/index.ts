import { create } from "zustand";

type IUseAppContext = {
  isLogin: boolean;
  setIsLogin: (param: boolean) => Promise<void>;
};
const useAppContext: any = create<IUseAppContext>((set) => ({
  isLogin: false,
  setIsLogin: async (param) => {
    set({ isLogin: param });
  },
}));

export default useAppContext;
