import { useGoogleSignIn } from "@/hooks/auth/useSignIn";
import { useAuthStore } from "@/hooks/useAuthStore";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import React from "react";
import { Text, View } from "react-native";

const LoginScreen = () => {
  const { mutateAsync, isPending } = useGoogleSignIn();
  
  const handleGoogleSignIn = async () => {
    const { user } = await mutateAsync();
    console.log("Signed in:", user?.email);
  };

  return (
    <View className="w-full h-full flex items-center justify-center">
      <Text>Welcome to React Native</Text>
      <GoogleSigninButton
        style={{ width: 192, height: 48, marginTop: 20 }}
        size={GoogleSigninButton.Size.Wide}
        onPress={handleGoogleSignIn}
        disabled={isPending}
      />
    </View>
  );
};

export default LoginScreen;
