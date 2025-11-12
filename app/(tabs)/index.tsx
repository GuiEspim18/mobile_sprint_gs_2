import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userToken");
    router.replace("/(auth)/login");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>🏠 Tela Inicial</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={{ color: "red", marginTop: 16 }}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
