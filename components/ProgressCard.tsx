import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';

const Colors = {
  secondary: "#34C759",
  card: "#FFF",
  text: "#111",
  textSecondary: "#777",
};

const Spacing = { small: 8, medium: 16, large: 24 };

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
  caption: { fontSize: 12, color: Colors.textSecondary, marginTop: Spacing.small },
  progressBarContainer: { height: 10, backgroundColor: "#E0E0E0", borderRadius: 5, marginVertical: Spacing.small, overflow: 'hidden' },
  progressBar: { height: '100%', backgroundColor: Colors.secondary },
});
