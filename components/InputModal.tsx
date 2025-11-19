import { Theme } from "@/styles/theme";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Input from "./Input";

export default function InputModal({
  visible,
  title,
  value,
  onChangeText,
  onSave,
  onClose,
  placeholder,
  secure = false,
}: any) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.box}>
          <Text style={styles.title}>{title}</Text>

          <Input
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secure}
            style={styles.input}
          />

          <TouchableOpacity style={styles.button} onPress={onSave}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: "#aaa" }]} onPress={onClose}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.Colors.text,
  },
  box: {
    width: "85%",
    backgroundColor: Theme.Colors.card,
    borderRadius: 12,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 14,
  },
  input: {
    backgroundColor: Theme.Colors.background,
    padding: 12,
    borderRadius: 8,
    marginBottom: 14,
  },
  button: {
    backgroundColor: Theme.Colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 6,
  },
  buttonText: {
    color: Theme.Colors.card,
    fontWeight: "600",
  },
});
