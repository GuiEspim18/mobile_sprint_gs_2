import { auth, db } from "@/services/firebaseConfig";
import { useRouter } from "expo-router";
import { signOut, updatePassword } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text
} from "react-native";

import BaseScreen from "@/components/BaseScreen";
import { PrimaryButton } from "@/components/Button";
import Card from "@/components/Card";
import InputModal from "@/components/InputModal";

export default function ProfileScreen() {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalValue, setModalValue] = useState("");
  const [modalType, setModalType] = useState<"name" | "password" | null>(null);

  const router = useRouter();

  const fetchUser = async () => {
    try {
      const user = auth.currentUser;

      if (!user) {
        setLoading(false);
        return;
      }

      const ref = doc(db, "users", user.uid);
      const snapshot = await getDoc(ref);

      if (snapshot.exists()) {
        setUserData(snapshot.data());
      }
    } catch (error) {
      console.log("Erro ao buscar usuário:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const openNameModal = () => {
    setModalType("name");
    setModalValue(userData?.name || "");
    setModalVisible(true);
  };

  const openPasswordModal = () => {
    setModalType("password");
    setModalValue("");
    setModalVisible(true);
  };

  const saveModalValue = async () => {
    const user = auth.currentUser;
    if (!user) return;

    try {
      if (modalType === "name") {
        await updateDoc(doc(db, "users", user.uid), {
          name: modalValue,
        });

        setUserData((prev: any) => ({ ...prev, name: modalValue }));
        Alert.alert("Sucesso", "Nome atualizado.");
      }

      if (modalType === "password") {
        await updatePassword(user, modalValue);
        Alert.alert("Sucesso", "Senha atualizada.");
      }
    } catch (err) {
      Alert.alert("Erro", String(err));
    }

    setModalVisible(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.replace("/(auth)/login");
  };

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  }

  return (
    <BaseScreen title="Meu Perfil">
      <ScrollView contentContainerStyle={styles.container}>

        <Card>
          <Text style={styles.label}>Nome</Text>
          <Text style={styles.value}>{userData?.name}</Text>

          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{userData?.email}</Text>
        </Card>

        <PrimaryButton title="Editar Nome" onPress={openNameModal} />

        <PrimaryButton title="Alterar Senha" onPress={openPasswordModal} />

        <PrimaryButton
          title="Sair"
          onPress={handleLogout}
          variant="danger"
        />
      </ScrollView>

      <InputModal
        visible={modalVisible}
        title={modalType === "name" ? "Alterar Nome" : "Alterar Senha"}
        value={modalValue}
        onChangeText={setModalValue}
        onSave={saveModalValue}
        onClose={() => setModalVisible(false)}
        placeholder={modalType === "name" ? "Seu nome" : "Nova senha"}
        secure={modalType === "password"}
      />
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 14,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#666",
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    marginBottom: 6,
    color: "#111",
  },
});
