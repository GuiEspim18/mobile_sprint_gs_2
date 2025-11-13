import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GlobalStyles, { Colors, Spacing } from '../../styles/GlobalStyles';

interface ProfileHeaderProps {
  name: string;
  email: string;
  level: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, email, level }) => (
  <View style={GlobalStyles.card}>
    <Text style={styles.name}>{name}</Text>
    <Text style={GlobalStyles.bodyText}>{email}</Text>
    <Text style={GlobalStyles.captionText}>Nível: {level}</Text>
  </View>
);

const styles = StyleSheet.create({
  name: {
    fontSize: GlobalStyles.titleText.fontSize ? GlobalStyles.titleText.fontSize * 1.2 : 0,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: Spacing.small,
  },
});
