import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect, Slot, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const segments = useSegments();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  // Verifica login salvo
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        setIsLoggedIn(!!token);
      } catch (error) {
        console.error("Erro ao verificar login:", error);
      } finally {
        setLoading(false);
      }
    };

    checkLogin();
  }, []);

  // Mostra um loading enquanto verifica o estado de login
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  const isInAuthGroup = segments[0] === "(auth)";

  if (!isLoggedIn && !isInAuthGroup) {
    return <Redirect href="/(auth)/login" />;
  }

  if (isLoggedIn && isInAuthGroup) {
    return <Redirect href="/(tabs)" />;
  }

  return <Slot />;
}
