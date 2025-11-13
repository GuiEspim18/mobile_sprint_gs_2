import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
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

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Progresso */}
        <View style={styles.card}>
          <Text style={styles.title}>Seu Progresso</Text>
          <Text style={styles.body}>Continue sua trilha de IA e Sustentabilidade.</Text>

          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar} />
          </View>

          <Text style={styles.caption}>75% Concluído</Text>
        </View>

        {/* Autoavaliação */}
        <TouchableOpacity
          style={[styles.card, styles.assessmentCard]}
          onPress={() => router.push("/autoavaliacao")}
        >
          <Text style={styles.assessmentTitle}>Autoavaliação de Competências</Text>
          <Text style={styles.assessmentSubtitle}>
            Descubra suas lacunas e receba recomendações personalizadas.
          </Text>
          <Text style={styles.assessmentAction}>Iniciar Avaliação &gt;</Text>
        </TouchableOpacity>

        {/* Recomendações */}
        <Text style={styles.sectionTitle}>Recomendações da IA</Text>
        <View style={styles.card}>
          <Text style={styles.title}>Micro Curso: Ética em Dados</Text>
          <Text style={styles.body}>
            Recomendado com base em sua autoavaliação de Soft Skills.
          </Text>
          <TouchableOpacity style={[styles.buttonPrimary, styles.smallButton]}>
            <Text style={styles.buttonPrimaryText}>Ver Curso</Text>
          </TouchableOpacity>
        </View>

        {/* ODS */}
        <Text style={styles.sectionTitle}>Nosso Impacto (ODS)</Text>
        <View style={styles.card}>
          <Text style={styles.body}>
            Seu aprendizado contribui para os ODS 4, 8, 9 e 10.
          </Text>
          <Text style={styles.caption}>
            Saiba mais sobre a conexão do SkillUpPlus com os Objetivos de Desenvolvimento Sustentável.
          </Text>
        </View>
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
  progressBarContainer: {
    height: 10,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    marginVertical: Spacing.small,
    overflow: "hidden",
  },
  progressBar: {
    width: "75%",
    height: "100%",
    backgroundColor: Colors.secondary,
  },
  assessmentCard: {
    backgroundColor: Colors.primary,
  },
  assessmentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.card,
  },
  assessmentSubtitle: {
    fontSize: 14,
    color: Colors.card,
    marginVertical: Spacing.small,
  },
  assessmentAction: {
    color: Colors.card,
    fontWeight: "bold",
    marginTop: Spacing.small,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text,
    marginTop: Spacing.large,
    marginBottom: Spacing.medium,
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
