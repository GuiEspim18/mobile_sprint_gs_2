import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Card from './Card';

const Colors = {
  card: "#FFF",
  textSecondary: "#777",
};

const Spacing = { medium: 16, large: 24 };

export const ODSCard: React.FC = () => (
  <Card>
    <Text style={styles.body}>
      Seu aprendizado contribui para os ODS 4, 8, 9 e 10.
    </Text>
    <Text style={styles.caption}>
      Saiba mais sobre a conexão do SkillUpPlus com os Objetivos de Desenvolvimento Sustentável.
    </Text>
  </Card>
);

const styles = StyleSheet.create({
  body: { fontSize: 14, color: Colors.textSecondary },
  caption: { fontSize: 12, color: Colors.textSecondary, marginTop: Spacing.medium },
});
