import { Button, ButtonText } from "@/components/ui/button";
import { useGoogleSignOut } from "@/hooks/auth/useSignOut";
import { useAuthStore } from "@/hooks/useAuthStore";
import React from "react";
import { View, Text } from "react-native";

const HomeScreen = () => {
  const { mutateAsync: signOut } = useGoogleSignOut();

  const handleSignOut = async () => {
    await signOut();
    useAuthStore.getState().clearToken();
  };

  return (
    <View className="w-full h-full flex items-center justify-center">
      <Text>Home Screen</Text>
      <Button className="mt-5" onPress={handleSignOut}>
        <ButtonText>Sign Out</ButtonText>
      </Button>
    </View>
  );
};

export default HomeScreen;
