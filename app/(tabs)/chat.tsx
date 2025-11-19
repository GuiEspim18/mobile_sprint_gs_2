import { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import BaseScreen from "@/components/BaseScreen";
import { enviarMensagemIA } from "@/services/aiService";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import GlobalStyles from "@/styles/GlobalStyles";
import { Theme } from "@/styles/theme";

export default function ChatOrientadorScreen() {
  const [mensagem, setMensagem] = useState("");
  const [history, setHistory] = useState<
    { role: string; content: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  
  async function handleSend() {
    if (!mensagem.trim()) return;

    const novoHistorico = [...history, { role: "user", content: mensagem }];
    setHistory(novoHistorico);

    setMensagem("");
    setLoading(true);

    const resposta = await enviarMensagemIA(mensagem, novoHistorico);

    setHistory([
      ...novoHistorico,
      { role: "assistant", content: resposta },
    ]);

    setLoading(false);
  }

  return (
    <BaseScreen title="Assistente de Carreira">
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        enableOnAndroid={true}
        extraScrollHeight={70}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ flex: 1 }}>
          <View style={styles.chatContainer}>
            {history.map((msg, index) => (
              <View
                key={index}
                style={[
                  styles.bubble,
                  msg.role === "user" ? styles.userBubble : styles.assistantBubble,
                ]}
              >
                <Text
                  style={[
                    styles.bubbleText,
                    msg.role === "user" ? styles.userText : styles.assistantText,
                  ]}
                >
                  {msg.content}
                </Text>
              </View>
            ))}

            {loading && (
              <ActivityIndicator
                size="large"
                color={Theme.Colors.primary}
                style={{ marginTop: 10 }}
              />
            )}
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={mensagem}
              onChangeText={setMensagem}
              placeholder="Digite sua pergunta..."
              placeholderTextColor={Theme.Colors.textSecondary}
              style={[GlobalStyles.input, styles.input]}
            />

            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
              <Text style={styles.sendText}>➤</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </BaseScreen>
  );
}


const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    marginBottom: 10,
  },

  bubble: {
    maxWidth: "80%",
    padding: Theme.Spacing.medium,
    borderRadius: 16,
    marginVertical: 6,
  },

  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: Theme.Colors.primary,
  },

  assistantBubble: {
    alignSelf: "flex-start",
    backgroundColor: Theme.Colors.card,
    borderWidth: 1,
    borderColor: Theme.Colors.border,
  },

  bubbleText: {
    fontSize: Theme.Typography.body,
  },
  userText: {
    color: "#fff",
  },
  assistantText: {
    color: Theme.Colors.text,
  },

  inputContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: Theme.Colors.border,
    backgroundColor: Theme.Colors.background,
  },

  input: {
    flex: 1,
    borderRadius: 25,
  },

  sendButton: {
    backgroundColor: Theme.Colors.primary,
    width: 48,
    height: 48,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Theme.Colors.primary,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },

  sendText: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 2,
  },
});



