import { Course } from '@/types/Course';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Colors = {
  primary: "#007AFF",
  background: "#F7F8FA",
  text: "#111",
  textSecondary: "#777",
  card: "#FFF",
};

const Spacing = {
  small: 8,
  medium: 16,
  large: 24,
};

export const CourseCard: React.FC<Course> = ({ title, description, progress }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.body}>{description}</Text>
    <View style={styles.progressContainer}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
    </View>
    <Text style={styles.caption}>{progress}% Concluído</Text>
    <TouchableOpacity style={[styles.buttonPrimary, styles.smallButton]}>
      <Text style={styles.buttonPrimaryText}>Continuar</Text>
    </TouchableOpacity>
  </View>
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: Spacing.small,
  },
  body: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  caption: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: Spacing.small,
  },
  progressContainer: {
    height: 8,
    backgroundColor: Colors.background,
    borderRadius: 4,
    marginVertical: Spacing.small,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  buttonPrimary: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: Spacing.medium,
    alignSelf: "flex-start",
  },
  buttonPrimaryText: {
    color: Colors.card,
    fontWeight: "bold",
  },
  smallButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
