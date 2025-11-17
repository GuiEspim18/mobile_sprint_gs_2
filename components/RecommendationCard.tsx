import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Card from './Card';

const Colors = {
  primary: "#007AFF",
  card: "#FFF",
  text: "#111",
  textSecondary: "#777",
};

const Spacing = { small: 8, medium: 16, large: 24 };

interface RecommendationCardProps {
  title: string;
  description: string;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({ title, description }) => (
  <Card>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.body}>{description}</Text>
    <TouchableOpacity style={styles.buttonPrimary}>
      <Text style={styles.buttonPrimaryText}>Ver Curso</Text>
    </TouchableOpacity>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: Spacing.medium,
    marginBottom: Spacing.large,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  title: { fontSize: 18, fontWeight: 'bold', color: Colors.text, marginBottom: Spacing.small },
  body: { fontSize: 14, color: Colors.textSecondary },
  buttonPrimary: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: Spacing.medium,
    alignSelf: 'flex-start',
  },
  buttonPrimaryText: { color: Colors.card, fontWeight: 'bold' },
});
