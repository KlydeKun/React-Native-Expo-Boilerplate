import { useAuthStore } from "../useAuthStore";

export const useAuth = () => {
  const isAuthenticated = useAuthStore((state) => state.isLogin);
  return { isAuthenticated };
};
