import { useAuthStore } from "@/hooks/useAuthStore";
import {
  GoogleSignin,
  isSuccessResponse,
} from "@react-native-google-signin/google-signin";
import config from "@/src/config";

let configured = false;

export function configureGoogle() {
  const webClientId = config.GOOGLE_WEB_CLIENT_ID;
  if (configured) return;

  if (!webClientId) {
    console.warn("Google webClientId is missing.");
  }

  GoogleSignin.configure({
    webClientId,
    offlineAccess: true,
  });
  configured = true;
}

export async function signInWithGoogle() {
  configureGoogle();
  try {
    await GoogleSignin.hasPlayServices();
  } catch (err) {
    const error = new Error("Google Play Services are required for sign-in.");
    throw error;
  }

  const response = await GoogleSignin.signIn();
  if (!isSuccessResponse(response)) {
    const error = new Error("SIGN_IN_CANCELLED");
    throw error;
  }

  const { idToken, user } = response.data;
  if (!idToken) {
    const error = new Error("NO_ID_TOKEN");
    throw error;
  }

  return { idToken, user };
}

export async function googleSignOut() {
  try {
    await GoogleSignin.signOut();
  } catch (error) {
    console.error(error);
  }
}
