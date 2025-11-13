import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Colors = {
  primary: "#007AFF",
  card: "#FFF",
  text: "#111",
};

const Spacing = { small: 8, medium: 16, large: 24 };

export const AssessmentCard: React.FC = () => {
  const router = useRouter();
  return (
    <TouchableOpacity style={styles.card} onPress={() => router.push("/autoavaliacao")}>
      <Text style={styles.title}>Autoavaliação de Competências</Text>
      <Text style={styles.body}>Descubra suas lacunas e receba recomendações personalizadas.</Text>
      <Text style={styles.action}>Iniciar Avaliação &gt;</Text>
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
