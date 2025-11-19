import { Theme } from '@/styles/theme';
import { Course } from '@/types/Course';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from './Card';

export const CourseCard: React.FC<Course> = ({ title, description, progress }) => (
  <Card>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.body}>{description}</Text>
    <View style={styles.progressContainer}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
    </View>
    <Text style={styles.caption}>{progress}% Concluído</Text>
    <TouchableOpacity style={[styles.buttonPrimary, styles.smallButton]}>
      <Text style={styles.buttonPrimaryText}>Continuar</Text>
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Theme.Colors.text,
    marginBottom: Theme.Spacing.small,
  },
  body: {
    fontSize: 14,
    color: Theme.Colors.textSecondary,
  },
  caption: {
    fontSize: 12,
    color: Theme.Colors.textSecondary,
    marginTop: Theme.Spacing.small,
  },
  progressContainer: {
    height: 8,
    backgroundColor: Theme.Colors.background,
    borderRadius: 4,
    marginVertical: Theme.Spacing.small,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: Theme.Colors.primary,
    borderRadius: 4,
  },
  buttonPrimary: {
    backgroundColor: Theme.Colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: Theme.Spacing.medium,
    alignSelf: "flex-start",
  },
  buttonPrimaryText: {
    color: Theme.Colors.card,
    fontWeight: "bold",
  },
  smallButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
