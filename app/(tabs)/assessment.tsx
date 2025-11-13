import { AreaPicker } from '@/components/Assessment/AreaPicker';
import { LevelPicker } from '@/components/Assessment/LevelPicker';
import { SubmitButton } from '@/components/Assessment/SubmitButton';
import BaseScreen from '@/components/BaseScreen';
import { useState } from 'react';
import { Alert, ScrollView, Text } from 'react-native';


export default function AssessmentScreen() {
  const [selectedArea, setSelectedArea] = useState('ia');
  const [skillLevel, setSkillLevel] = useState('iniciante');

  const handleAssessment = () => {
    Alert.alert(
      'Autoavaliação Concluída',
      `Sua autoavaliação na área de "${selectedArea.toUpperCase()}" com nível "${skillLevel.toUpperCase()}" foi registrada. A IA está gerando suas recomendações!`
    );
  };

  return (
    <BaseScreen title="Autoavaliação de Competências">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{ fontSize: 16, lineHeight: 22, marginBottom: 16 }}>
          Selecione a área de competência que deseja avaliar e seu nível de familiaridade atual.
          Isso ajudará a <Text style={{ fontWeight: 'bold' }}>Inteligência Artificial</Text> a gerar trilhas de aprendizado personalizadas.
        </Text>

        <AreaPicker selectedArea={selectedArea} onValueChange={setSelectedArea} />
        <LevelPicker skillLevel={skillLevel} onValueChange={setSkillLevel} />
        <SubmitButton onPress={handleAssessment} />

        <Text style={{ fontSize: 12, color: '#777', marginTop: 16, textAlign: 'center' }}>
          *A integração com a API de IA (ChatGPT, Gemini) é simulada nesta fase de frontend.
        </Text>
      </ScrollView>
    </BaseScreen>
  );
}
