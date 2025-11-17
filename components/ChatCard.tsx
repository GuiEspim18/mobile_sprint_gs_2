import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Colors = {
  primary: "#007AFF",
  card: "#FFF",
  text: "#111",
};

const Spacing = { small: 8, medium: 16, large: 24 };

export const ChatCard: React.FC = () => {
  const router = useRouter();
  return (
    <TouchableOpacity style={styles.card} onPress={() => router.push("/chat")}>
      <Text style={styles.title}>Chat com a IA</Text>
      <Text style={styles.body}>Tire dúvidas ou peça sugestão para nosso agente.</Text>
      <Text style={styles.action}>Conversar com a IA &gt;</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    padding: Spacing.medium,
    marginBottom: Spacing.large,
  },
  title: { fontSize: 18, fontWeight: 'bold', color: Colors.card },
  body: { fontSize: 14, color: Colors.card, marginVertical: Spacing.small },
  action: { fontWeight: 'bold', color: Colors.card, marginTop: Spacing.small },
});
