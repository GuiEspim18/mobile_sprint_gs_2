import { InterestsCard } from '@/components/Profile/InterestsCard';
import { LogoutButton } from '@/components/Profile/LogoutButton';
import { ProfileHeader } from '@/components/Profile/ProfileHeader';
import { StatsCard } from '@/components/Profile/StatsCard';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import { Spacing } from '../../styles/GlobalStyles';

const ProfileScreen: React.FC = () => {
  const userData = {
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
        <ProfileHeader {...userData} />

        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: Spacing.large, marginBottom: Spacing.medium }}>
          Estatísticas de Aprendizado
        </Text>
        <StatsCard completedCourses={userData.completedCourses} hoursSpent={userData.hoursSpent} />

        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: Spacing.large, marginBottom: Spacing.medium }}>
          Áreas de Interesse
        </Text>
        <InterestsCard interests={userData.interests} onEdit={() => console.log('Editar interesses')} />

        <LogoutButton onPress={() => console.log('Logout simulado')} />
      </ScrollView>
    </BaseScreen>
  );
};

export default ProfileScreen;
