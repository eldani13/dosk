import { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const SplashScreenComponent = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync(); 
      onFinish();
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#3498db" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});

export default SplashScreenComponent;
