import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const Colors = {
  primary: "#007AFF",
  background: "#F7F8FA",
  text: "#111",
  textSecondary: "#777",
  buttonGradientStart: "#007AFF",
  buttonGradientEnd: "#00C6FF",
  white: "#FFF",
};

const Spacing = {
  small: 8,
  medium: 16,
  large: 24,
  extraLarge: 32,
};

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    try {
      // 🔐 Aqui você salvaria o token retornado da API
      await AsyncStorage.setItem("userToken", "fake_token_123");

      Alert.alert("✅ Sucesso", "Login simulado realizado com sucesso!");
      router.replace("/(tabs)");
    } catch (error) {
      Alert.alert("Erro", "Falha ao salvar o login.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>SkillUpPlus 2030+</Text>
      <Text style={styles.subtitle}>
        Requalificação para o futuro do trabalho
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor={Colors.textSecondary}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor={Colors.textSecondary}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity activeOpacity={0.8} onPress={handleLogin}>
          <LinearGradient
            colors={[Colors.buttonGradientStart, Colors.buttonGradientEnd]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.buttonPrimary}
          >
            <Text style={styles.buttonPrimaryText}>ENTRAR</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() =>
            Alert.alert("Funcionalidade", "Cadastro/Recuperar senha simulada.")
          }
        >
          <Text style={styles.buttonSecondaryText}>
            Criar Conta / Esqueci a Senha
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: Spacing.extraLarge,
    backgroundColor: Colors.background,
  },
  logoText: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.primary,
    textAlign: "center",
    marginBottom: Spacing.small,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: "center",
    marginBottom: Spacing.extraLarge * 1.5,
  },
  form: {
    gap: Spacing.medium,
  },
  input: {
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: Spacing.medium,
    fontSize: 16,
    color: Colors.text,
    backgroundColor: Colors.white,
  },
  buttonPrimary: {
    borderRadius: 12,
    paddingVertical: Spacing.medium,
    alignItems: "center",
    marginTop: Spacing.large,
    shadowColor: "#007AFF",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonPrimaryText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonSecondary: {
    marginTop: Spacing.medium,
    alignItems: "center",
  },
  buttonSecondaryText: {
    color: Colors.primary,
    fontWeight: "600",
  },
});
