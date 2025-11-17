import BaseScreen from '@/components/BaseScreen';
import { CourseCard } from '@/components/CourseCard';
import { SearchInput } from '@/components/SearchInput';
import { Course } from '@/types/Course';
import { useState } from 'react';
import { ScrollView, Text } from 'react-native';

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
    <BaseScreen title="Trilhas de Aprendizado">
      <SearchInput
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Buscar cursos..."
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredCourses.map(course => (
          <CourseCard key={course.id} {...course} />
        ))}

        {filteredCourses.length === 0 && (
          <Text style={{ textAlign: 'center', marginTop: 24, color: '#777' }}>
            Nenhum curso encontrado para "{searchText}".
          </Text>
        )}
      </ScrollView>
    </BaseScreen>
  );
}
