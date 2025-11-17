import { auth, db } from "@/services/firebaseConfig";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View
} from "react-native";

import { PrimaryButton, SecondaryButton } from "@/components/Button";
import Input from "@/components/Input";
import GlobalStyles from "@/styles/GlobalStyles";
import { Theme } from "@/styles/theme";
import { useRouter } from "expo-router";

export default function RegisterScreen({ navigation }: any) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const uid = userCredential.user.uid;

      await setDoc(doc(db, "users", uid), {
        name,
        email,
        createdAt: new Date(),
      });

      Alert.alert("Sucesso", "Conta criada com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error.code);
        console.log(error.message);
      } else {
        console.log("Erro desconhecido:", error);
      }
    }
  };

  return (
    <View style={[GlobalStyles.container, styles.container]}>
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
      <Text style={styles.subtitle}>Criar conta</Text>

      <Input
        style={GlobalStyles.input}
        placeholder="Seu nome"
        value={name}
        onChangeText={setName}
        placeholderTextColor={Theme.Colors.textSecondary}
      />

      <Input
        style={GlobalStyles.input}
        placeholder="Seu email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor={Theme.Colors.textSecondary}
        autoCapitalize="none"
      />

      <Input
        style={GlobalStyles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor={Theme.Colors.textSecondary}
      />

      {/* Aqui substitui seu botão antigo pelo PrimaryButton, SEM mudar a lógica */}
      <PrimaryButton title="Registrar" onPress={handleRegister} />

      <SecondaryButton title="Já possui uma conta? Faça login" onPress={() => router.replace("/(tabs)")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Theme.Spacing.large,
    justifyContent: "center",
  },
  subtitle: {
    fontSize: Theme.Typography.body,
    color: Theme.Colors.text,
    textAlign: "center",
    marginBottom: Theme.Spacing.large,
  },
});
