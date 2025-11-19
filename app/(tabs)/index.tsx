import BaseScreen from '@/components/BaseScreen';
import { ChatCard } from '@/components/ChatCard';
import { ODSCard } from '@/components/ODSCard';
import { ProgressCard } from '@/components/ProgressCard';
import { RecommendationCard } from '@/components/RecommendationCard';
import { ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <BaseScreen title="Início">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>

        <ProgressCard
          title="Seu Progresso"
          description="Continue sua trilha de IA e Sustentabilidade."
          progress={75}
        />

        <View style={{ marginTop: 24 }}>
          <ChatCard />
        </View>

        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            marginTop: 32,
            marginBottom: 16,
          }}
        >
          Recomendações da IA
        </Text>

        <RecommendationCard
          title="Micro Curso: Ética em Dados"
          description="Recomendado com base em sua autoavaliação de Soft Skills."
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            marginTop: 32,
            marginBottom: 16,
          }}
        >
          Nosso Impacto (ODS)
        </Text>

        <ODSCard />
      </ScrollView>
    </BaseScreen>
  );
}
