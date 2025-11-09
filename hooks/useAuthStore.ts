import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { SecureStorage } from "../src/utils/stateStorage";

interface AuthState {
  accessToken: string | null;
  isLogin: boolean;
  setToken: (accessToken: string) => void;
  clearToken: () => void;
  setLoginStatus: (status: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      isLogin: false,
      setToken: (accessToken) => {
        set(() => ({ accessToken }));
      },
      clearToken: () => {
        set(() => ({ accessToken: null, isLogin: false }));
      },
      setLoginStatus: (status) => set(() => ({ isLogin: status })),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => SecureStorage),
    }
  )
);
