import { signInWithGoogle } from "@/src/core/api/auth";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../useAuthStore";

// ✅ Login Mutation
export const useGoogleSignIn = () => {
  const setToken = useAuthStore((s) => s.setToken);
  const setLoginStatus = useAuthStore((s) => s.setLoginStatus);

  return useMutation({
    mutationKey: ["google-login"],
    mutationFn: () => signInWithGoogle(),
    onSuccess: ({ idToken }) => {
      setToken(idToken);
      setLoginStatus(true);
    },
    onError: (error) => {
      console.error("Google sign-in failed", error);
    },
  });
};
