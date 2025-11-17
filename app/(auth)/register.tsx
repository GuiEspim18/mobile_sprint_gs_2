import { auth } from "@/services/firebaseConfig";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
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

export default function RegisterScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !password || !confirm) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    if (password !== confirm) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      Alert.alert("Conta criada!", "Seu cadastro foi realizado com sucesso!");
      router.replace("/(tabs)");

    } catch (error: any) {
      console.log("Erro Firebase:", error);

      let message = "Erro ao criar a conta.";

      if (error.code === "auth/email-already-in-use")
        message = "Este e-mail já está em uso.";
      if (error.code === "auth/invalid-email")
        message = "E-mail inválido.";
      if (error.code === "auth/weak-password")
        message = "A senha deve ter pelo menos 6 caracteres.";

      Alert.alert("Erro", message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Criar Conta</Text>
      <Text style={styles.subtitle}>Preencha seus dados para continuar</Text>

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

        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          placeholderTextColor={Colors.textSecondary}
          secureTextEntry
          value={confirm}
          onChangeText={setConfirm}
        />

        <TouchableOpacity activeOpacity={0.8} onPress={handleRegister}>
          <LinearGradient
            colors={[Colors.buttonGradientStart, Colors.buttonGradientEnd]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.buttonPrimary}
          >
            <Text style={styles.buttonPrimaryText}>
              {loading ? "Criando..." : "CRIAR CONTA"}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => router.push("/(auth)/login")}
        >
          <Text style={styles.buttonSecondaryText}>
            Já tenho uma conta
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
    marginBottom: Spacing.extraLarge * 1.3,
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
