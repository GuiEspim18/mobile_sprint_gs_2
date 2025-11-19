import { Theme } from '@/styles/theme';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Card from './Card';

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
    backgroundColor: Theme.Colors.card,
    borderRadius: 12,
    padding: Theme.Spacing.medium,
    marginBottom: Theme.Spacing.large,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  title: { fontSize: 18, fontWeight: 'bold', color: Theme.Colors.text, marginBottom: Theme.Spacing.small },
  body: { fontSize: 14, color: Theme.Colors.textSecondary },
  buttonPrimary: {
    backgroundColor: Theme.Colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: Theme.Spacing.medium,
    alignSelf: 'flex-start',
  },
  buttonPrimaryText: { color: Theme.Colors.card, fontWeight: 'bold' },
});
