import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

// 🎨 Paleta básica (pode trocar pelas tuas cores globais)
const Colors = {
  background: '#fff',
  text: '#222',
  card: '#f7f7f7',
  border: '#ddd',
  primary: '#3b82f6',
  caption: '#777',
};

// 🔢 Espaçamentos padrão
const Spacing = {
  small: 8,
  medium: 16,
  large: 24,
};

type Area = 'ia' | 'sustentabilidade' | 'softskills' | 'dados';
type Level = 'iniciante' | 'intermediario' | 'avancado';

export default function AssessmentScreen() {
  const [selectedArea, setSelectedArea] = useState<Area>('ia');
  const [skillLevel, setSkillLevel] = useState<Level>('iniciante');

  const handleAssessment = () => {
    Alert.alert(
      'Autoavaliação Concluída',
      `Sua autoavaliação na área de "${selectedArea.toUpperCase()}" com nível "${skillLevel.toUpperCase()}" foi registrada. A IA está gerando suas recomendações!`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Autoavaliação de Competências</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.bodyText}>
          Selecione a área de competência que deseja avaliar e seu nível de
          familiaridade atual. Isso ajudará a{' '}
          <Text style={styles.bold}>Inteligência Artificial</Text> a gerar trilhas de aprendizado personalizadas.
        </Text>

        {/* Área */}
        <Text style={styles.label}>Área de Interesse/Competência:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedArea}
            onValueChange={(itemValue: Area) => setSelectedArea(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Inteligência Artificial (IA)" value="ia" />
            <Picker.Item label="Sustentabilidade e ESG" value="sustentabilidade" />
            <Picker.Item label="Soft Skills (Comunicação, Liderança)" value="softskills" />
            <Picker.Item label="Análise de Dados" value="dados" />
          </Picker>
        </View>

        {/* Nível */}
        <Text style={styles.label}>Nível de Familiaridade:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={skillLevel}
            onValueChange={(itemValue: Level) => setSkillLevel(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Iniciante (Conhecimento Básico)" value="iniciante" />
            <Picker.Item label="Intermediário (Já trabalhei com o tema)" value="intermediario" />
            <Picker.Item label="Avançado (Domínio e experiência)" value="avancado" />
          </Picker>
        </View>

        {/* Botão */}
        <TouchableOpacity style={styles.buttonPrimary} onPress={handleAssessment}>
          <Text style={styles.buttonPrimaryText}>GERAR RECOMENDAÇÕES</Text>
        </TouchableOpacity>

        <Text style={styles.captionText}>
          *A integração com a API de IA (ChatGPT, Gemini) é simulada nesta fase de frontend.
        </Text>
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: Spacing.medium,
  },
  bodyText: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 22,
  },
  bold: {
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginTop: Spacing.large,
    marginBottom: Spacing.small,
  },
  pickerContainer: {
    backgroundColor: Colors.card,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
    color: Colors.text,
  },
  buttonPrimary: {
    marginTop: Spacing.large,
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonPrimaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  captionText: {
    fontSize: 12,
    color: Colors.caption,
    marginTop: Spacing.medium,
    textAlign: 'center',
  },
});
