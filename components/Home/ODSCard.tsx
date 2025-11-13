import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Colors = {
  card: "#FFF",
  textSecondary: "#777",
};

const Spacing = { medium: 16, large: 24 };

export const ODSCard: React.FC = () => (
  <View style={styles.card}>
    <Text style={styles.body}>
      Seu aprendizado contribui para os ODS 4, 8, 9 e 10.
    </Text>
    <Text style={styles.caption}>
      Saiba mais sobre a conexão do SkillUpPlus com os Objetivos de Desenvolvimento Sustentável.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  card: { backgroundColor: Colors.card, borderRadius: 12, padding: Spacing.medium, marginBottom: Spacing.large },
  body: { fontSize: 14, color: Colors.textSecondary },
  caption: { fontSize: 12, color: Colors.textSecondary, marginTop: Spacing.small },
});
