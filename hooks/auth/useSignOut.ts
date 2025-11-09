import { googleSignOut } from "@/src/core/api/auth";
import { useMutation } from "@tanstack/react-query";

export function useGoogleSignOut() {
  return useMutation({
    mutationFn: googleSignOut,
    onSuccess: () => {
      console.log("Signed out successfully");
    },
    onError: (error) => {
      console.error("Sign-out failed", error);
    },
  });
}
