import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Alert, Text, View } from "react-native";

import { PrimaryButton, SecondaryButton } from "@/components/Button";
import Input from "@/components/Input";

import { auth } from "@/services/firebaseConfig";
import { Theme } from "@/styles/theme";

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      return Alert.alert("Erro", "Preencha todos os campos!");
    }

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);

      Alert.alert("Bem-vindo!", "Login realizado com sucesso!");

      router.replace("/(tabs)");
    } catch (error: any) {
      console.log("Erro Firebase:", error);

      let message = "Erro ao fazer login.";

      if (error.code === "auth/invalid-email") message = "E-mail inválido.";
      if (error.code === "auth/user-not-found")
        message = "Usuário não encontrado.";
      if (error.code === "auth/wrong-password") message = "Senha incorreta.";
      if (error.code === "auth/invalid-credential")
        message = "Credenciais inválidas.";

      Alert.alert("Erro", message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{
      flexGrow: 1,
      justifyContent: "center",
      padding: Theme.Spacing.large,
      backgroundColor: Theme.Colors.background,
    }}>
      <Text
        style={{
          fontSize: Theme.Typography.header,
          fontWeight: "bold",
          color: Theme.Colors.primary,
          textAlign: "center",
          marginBottom: Theme.Spacing.small,
        }}
      >
        SkillUpPlus 2030+
      </Text>

      <Text
        style={{
          fontSize: Theme.Typography.caption,
          textAlign: "center",
          color: Theme.Colors.textSecondary,
          marginBottom: Theme.Spacing.xl,
        }}
      >
        Requalificação para o futuro do trabalho
      </Text>

        <View style={{ width: "100%" }}>
        <Input
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input
          placeholder="Senha"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />

        
        <PrimaryButton
            title={loading ? "Entrando..." : "ENTRAR"}
            onPress={handleLogin}
        />

        <SecondaryButton
          title="Criar Conta"
          onPress={() => router.push("/(auth)/register")}
        />
      </View>
    </View>
  );
}
