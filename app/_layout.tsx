import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View } from "react-native";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import SplashScreenComponent from "@/components/SplashScreen";

// ✅ Evita que la pantalla de carga desaparezca automáticamente
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [fontsLoaded] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
        setIsLoading(false);
      }
    }
    prepare();
  }, [fontsLoaded]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login-screen"); //  Enviar a la pantalla de login si no está autenticado
    }
  }, [isLoading, isAuthenticated]);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <View style={{ flex: 1 }}>
        {!isLoading && <Slot />}
      </View>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
