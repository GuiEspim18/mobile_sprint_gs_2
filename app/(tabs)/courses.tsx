import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const Colors = {
  primary: "#007AFF",
  secondary: "#34C759",
  background: "#F7F8FA",
  text: "#111",
  textSecondary: "#777",
  card: "#FFF",
};

const Spacing = {
  small: 8,
  medium: 16,
  large: 24,
  extraLarge: 32,
};

interface Course {
  id: number;
  title: string;
  description: string;
  progress: number;
}

const CourseCard: React.FC<Course> = ({ title, description, progress }) => (
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

export default function CoursesScreen() {
  const [searchText, setSearchText] = useState("");

  const courses: Course[] = [
    {
      id: 1,
      title: "Trilha: IA para Iniciantes",
      description: "Fundamentos de Inteligência Artificial e Machine Learning.",
      progress: 75,
    },
    {
      id: 2,
      title: "Micro Curso: Sustentabilidade 4.0",
      description: "Como a tecnologia impulsiona a economia verde.",
      progress: 20,
    },
    {
      id: 3,
      title: "Soft Skill: Comunicação Assertiva",
      description: "Desenvolva sua capacidade de se expressar com clareza.",
      progress: 100,
    },
    {
      id: 4,
      title: "Curso: Análise de Dados com Python",
      description: "Introdução à manipulação e visualização de dados.",
      progress: 0,
    },
  ];

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchText.toLowerCase()) ||
      course.description.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Trilhas de Aprendizado</Text>

      <TextInput
        style={styles.input}
        placeholder="Buscar cursos..."
        placeholderTextColor={Colors.textSecondary}
        value={searchText}
        onChangeText={setSearchText}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}

        {filteredCourses.length === 0 && (
          <Text style={styles.noResults}>
            Nenhum curso encontrado para "{searchText}".
          </Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.medium,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: Spacing.medium,
  },
  input: {
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: Spacing.medium,
    fontSize: 16,
    color: Colors.text,
    backgroundColor: Colors.card,
    marginBottom: Spacing.medium,
  },
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
  noResults: {
    textAlign: "center",
    marginTop: Spacing.large,
    color: Colors.textSecondary,
  },
});
