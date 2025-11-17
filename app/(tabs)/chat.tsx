import { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { enviarMensagemIA } from "@/services/aiService";

export default function ChatOrientadorScreen() {
  const [mensagem, setMensagem] = useState("");
  const [history, setHistory] = useState<
    { role: string; content: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  async function handleSend() {
    if (!mensagem.trim()) return;

    // Adiciona a mensagem do usuário no histórico
    const novoHistorico = [
      ...history,
      { role: "user", content: mensagem }
    ];
    setHistory(novoHistorico);

    setMensagem("");
    setLoading(true);

    // Envia para a IA com o histórico
    const resposta = await enviarMensagemIA(mensagem, novoHistorico);

    // Adiciona a resposta da IA ao histórico
    setHistory([
      ...novoHistorico,
      { role: "assistant", content: resposta }
    ]);

    setLoading(false);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Assistente de Carreira</Text>

        <ScrollView
          style={styles.chatContainer}
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          {history.map((msg, index) => (
            <View
              key={index}
              style={[
                styles.bubble,
                msg.role === "user"
                  ? styles.userBubble
                  : styles.assistantBubble,
              ]}
            >
              <Text style={styles.bubbleText}>{msg.content}</Text>
            </View>
          ))}

          {loading && (
            <ActivityIndicator size="large" style={{ marginTop: 10 }} />
          )}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            value={mensagem}
            onChangeText={setMensagem}
            placeholder="Digite sua pergunta..."
            style={styles.input}
          />

          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.sendText}>➤</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  chatContainer: {
    flex: 1,
    marginBottom: 10,
  },
  bubble: {
    maxWidth: "80%",
    padding: 12,
    borderRadius: 12,
    marginVertical: 6,
  },
  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#4C8BF5",
  },
  assistantBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#e8e8e8",
  },
  bubbleText: {
    color: "#000",
    fontSize: 15,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  sendButton: {
    backgroundColor: "#4C8BF5",
    width: 45,
    height: 45,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  sendText: {
    color: "#fff",
    fontSize: 20,
  },
});
