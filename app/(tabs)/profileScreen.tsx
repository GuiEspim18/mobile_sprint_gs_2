// app/(tabs)/profile.tsx
import React from 'react';
import { ScrollView, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import GlobalStyles, { Colors, Spacing } from '../../styles/GlobalStyles';

interface UserData {
  name: string;
  email: string;
  level: string;
  completedCourses: number;
  hoursSpent: number;
  interests: string[];
}

const ProfileScreen: React.FC = () => {
  const userData: UserData = {
    name: 'Usuário SkillUp',
    email: 'usuario@exemplo.com',
    level: 'Aspirante Digital',
    completedCourses: 5,
    hoursSpent: 42,
    interests: ['Inteligência Artificial', 'Sustentabilidade', 'Soft Skills'],
  };

  return (
    <BaseScreen title="Meu Perfil">
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Informações Básicas */}
        <View style={GlobalStyles.card}>
          <Text style={styles.profileName}>{userData.name}</Text>
          <Text style={GlobalStyles.bodyText}>{userData.email}</Text>
          <Text style={GlobalStyles.captionText}>Nível: {userData.level}</Text>
        </View>

        {/* Estatísticas */}
        <Text style={styles.sectionTitle}>Estatísticas de Aprendizado</Text>
        <View style={styles.statsContainer}>
          <View style={[GlobalStyles.card, styles.statCard]}>
            <Text style={styles.statNumber}>{userData.completedCourses}</Text>
            <Text style={styles.statLabel}>Cursos Concluídos</Text>
          </View>
          <View style={[GlobalStyles.card, styles.statCard]}>
            <Text style={styles.statNumber}>{userData.hoursSpent}</Text>
            <Text style={styles.statLabel}>Horas Dedicadas</Text>
          </View>
        </View>

        {/* Interesses */}
        <Text style={styles.sectionTitle}>Áreas de Interesse</Text>
        <View style={GlobalStyles.card}>
          <View style={styles.interestTags}>
            {userData.interests.map((interest, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{interest}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity style={GlobalStyles.buttonSecondary}>
            <Text style={GlobalStyles.buttonSecondaryText}>Editar Interesses</Text>
          </TouchableOpacity>
        </View>

        {/* Botão de Logout */}
        <TouchableOpacity
          style={[GlobalStyles.buttonPrimary, styles.logoutButton]}
          onPress={() => console.log('Logout simulado')}
        >
          <Text style={GlobalStyles.buttonPrimaryText}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
    </BaseScreen>
  );
};

interface Styles {
  profileName: TextStyle;
  sectionTitle: TextStyle;
  statsContainer: ViewStyle;
  statCard: ViewStyle;
  statNumber: TextStyle;
  statLabel: TextStyle;
  interestTags: ViewStyle;
  tag: ViewStyle;
  tagText: TextStyle;
  logoutButton: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  profileName: {
    fontSize: GlobalStyles.titleText.fontSize * 1.2,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: Spacing.small,
  },
  sectionTitle: {
    fontSize: GlobalStyles.titleText.fontSize,
    fontWeight: 'bold',
    color: Colors.text,
    marginTop: Spacing.large,
    marginBottom: Spacing.medium,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    marginHorizontal: Spacing.small / 2,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: GlobalStyles.headerText.fontSize,
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  statLabel: {
    fontSize: GlobalStyles.captionText.fontSize,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  interestTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: Spacing.medium,
  },
  tag: {
    backgroundColor: Colors.background,
    borderRadius: 15,
    paddingHorizontal: Spacing.medium,
    paddingVertical: Spacing.small / 2,
    marginRight: Spacing.small,
    marginBottom: Spacing.small,
  },
  tagText: {
    color: Colors.text,
    fontSize: GlobalStyles.captionText.fontSize,
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    marginTop: Spacing.extraLarge,
  },
});

export default ProfileScreen;
