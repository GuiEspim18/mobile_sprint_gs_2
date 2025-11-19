import { Theme } from '@/styles/theme';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

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
    backgroundColor: Theme.Colors.primary,
    borderRadius: 12,
    padding: Theme.Spacing.medium,
    marginBottom: Theme.Spacing.large,
  },
  title: { fontSize: 18, fontWeight: 'bold', color: Theme.Colors.card },
  body: { fontSize: 14, color: Theme.Colors.card, marginVertical: Theme.Spacing.small },
  action: { fontWeight: 'bold', color: Theme.Colors.card, marginTop: Theme.Spacing.small },
});
