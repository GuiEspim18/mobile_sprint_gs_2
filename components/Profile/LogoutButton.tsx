import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import GlobalStyles, { Spacing } from '../../styles/GlobalStyles';

interface LogoutButtonProps {
  onPress: () => void;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({ onPress }) => (
  <TouchableOpacity style={[GlobalStyles.buttonPrimary, styles.button]} onPress={onPress}>
    <Text style={GlobalStyles.buttonPrimaryText}>Sair</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF3B30',
    marginTop: Spacing.extraLarge,
  },
});
