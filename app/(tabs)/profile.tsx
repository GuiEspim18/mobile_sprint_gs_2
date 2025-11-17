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
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import BaseScreen from "@/components/BaseScreen";
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
      } else {
        console.log("Nenhum documento encontrado.");
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
        <View style={styles.card}>
          <Text style={styles.label}>Nome</Text>
          <Text style={styles.value}>{userData?.name}</Text>

          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{userData?.email}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={openNameModal}>
          <Text style={styles.buttonText}>Editar Nome</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={openPasswordModal}>
          <Text style={styles.buttonText}>Alterar Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#E53935" }]}
          onPress={handleLogout}
        >
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
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
    borderRadius: 12,
    marginBottom: 30,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#888",
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 5,
    color: "#000",
  },
  button: {
    backgroundColor: "#4a63ff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "600",
  },
});
