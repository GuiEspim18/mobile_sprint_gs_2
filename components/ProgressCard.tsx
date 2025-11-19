import { Theme } from '@/styles/theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';

interface ProgressCardProps {
  progress: number;
  title: string;
  description: string;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({ progress, title, description }) => (
  <Card>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.body}>{description}</Text>

    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
    </View>

    <Text style={styles.caption}>{progress}% Concluído</Text>
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
  caption: { fontSize: 12, color: Theme.Colors.textSecondary, marginTop: Theme.Spacing.small },
  progressBarContainer: { height: 10, backgroundColor: "#E0E0E0", borderRadius: 5, marginVertical: Theme.Spacing.small, overflow: 'hidden' },
  progressBar: { height: '100%', backgroundColor: Theme.Colors.secondary },
});
