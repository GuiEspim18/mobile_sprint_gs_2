import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GlobalStyles, { Colors, Spacing } from '../../styles/GlobalStyles';

interface InterestsCardProps {
  interests: string[];
  onEdit?: () => void;
}

export const InterestsCard: React.FC<InterestsCardProps> = ({ interests, onEdit }) => (
  <View style={GlobalStyles.card}>
    <View style={styles.tagsContainer}>
      {interests.map((interest, idx) => (
        <View key={idx} style={styles.tag}>
          <Text style={styles.tagText}>{interest}</Text>
        </View>
      ))}
    </View>
    <TouchableOpacity style={GlobalStyles.buttonSecondary} onPress={onEdit}>
      <Text style={GlobalStyles.buttonSecondaryText}>Editar Interesses</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  tagsContainer: {
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
});
