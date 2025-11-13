import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GlobalStyles, { Colors, Spacing } from '../../styles/GlobalStyles';

interface StatsCardProps {
  completedCourses: number;
  hoursSpent: number;
}

export const StatsCard: React.FC<StatsCardProps> = ({ completedCourses, hoursSpent }) => (
  <View style={styles.container}>
    <View style={[GlobalStyles.card, styles.card]}>
      <Text style={styles.number}>{completedCourses}</Text>
      <Text style={styles.label}>Cursos Concluídos</Text>
    </View>
    <View style={[GlobalStyles.card, styles.card]}>
      <Text style={styles.number}>{hoursSpent}</Text>
      <Text style={styles.label}>Horas Dedicadas</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    marginHorizontal: Spacing.small / 2,
    alignItems: 'center',
  },
  number: {
    fontSize: GlobalStyles.headerText.fontSize,
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  label: {
    fontSize: GlobalStyles.captionText.fontSize,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});
