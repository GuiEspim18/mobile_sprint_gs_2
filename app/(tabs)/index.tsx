import BaseScreen from '@/components/BaseScreen';
import { ChatCard } from '@/components/Home/ChatCard';
import { ODSCard } from '@/components/Home/ODSCard';
import { ProgressCard } from '@/components/Home/ProgressCard';
import { RecommendationCard } from '@/components/Home/RecommendationCard';
import { ScrollView, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <BaseScreen title="Início">
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProgressCard
          title="Seu Progresso"
          description="Continue sua trilha de IA e Sustentabilidade."
          progress={75}
        />

        <ChatCard />

        <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 24 }}>Recomendações da IA</Text>
        <RecommendationCard
          title="Micro Curso: Ética em Dados"
          description="Recomendado com base em sua autoavaliação de Soft Skills."
        />

        <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 24 }}>Nosso Impacto (ODS)</Text>
        <ODSCard />
      </ScrollView>
    </BaseScreen>
  );
}
