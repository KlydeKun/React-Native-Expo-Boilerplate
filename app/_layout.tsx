import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Slot, Stack, usePathname } from "expo-router";
import { Fab, FabIcon } from "@/components/ui/fab";
import { MoonIcon, SunIcon } from "@/components/ui/icon";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ROUTES } from "@/src/feature/navigation/routes";
import { SafeAreaProvider } from "react-native-safe-area-context";

export { ErrorBoundary } from "expo-router";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24 * 30, // 30 days
      gcTime: 1000 * 60 * 60 * 24 * 30, // 30 days
      networkMode: "offlineFirst", // Prioritize SQLite first
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retry: 1,
    },
    mutations: {
      retry: 1,
      networkMode: "offlineFirst",
    },
  },
});

SplashScreen.preventAutoHideAsync();

const StackLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.GUEST} />
      <Stack.Screen name={ROUTES.PROTECTED} />
    </Stack>
  );
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const pathname = usePathname();
  const [colorMode, setColorMode] = useState<"light" | "dark">("light");

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
          <GluestackUIProvider mode={colorMode}>
            <ThemeProvider
              value={colorMode === "dark" ? DarkTheme : DefaultTheme}
            >
              <StackLayout />
              {/* {pathname === "/" && (
                <Fab
                  onPress={() =>
                    setColorMode(colorMode === "dark" ? "light" : "dark")
                  }
                  className="m-6"
                  size="lg"
                >
                  <FabIcon as={colorMode === "dark" ? MoonIcon : SunIcon} />
                </Fab>
              )} */}
            </ThemeProvider>
          </GluestackUIProvider>
        </QueryClientProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
