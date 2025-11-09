import { signInWithGoogle } from "@/src/core/api/auth";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../useAuthStore";

// ✅ Login Mutation
export const useGoogleSignIn = () => {
  const setToken = useAuthStore((s) => s.setToken);

  return useMutation({
    mutationKey: ["google-login"],
    mutationFn: () => signInWithGoogle(),
    onSuccess: ({ idToken }) => {
      setToken(idToken);
    },
    onError: (error) => {
      console.error("Google sign-in failed", error);
    },
  });
};
