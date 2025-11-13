import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface SubmitButtonProps {
  onPress: () => void;
}

const Colors = {
  primary: '#3b82f6',
};

const Spacing = {
  large: 24,
};

export const SubmitButton: React.FC<SubmitButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonPrimary} onPress={onPress}>
      <Text style={styles.buttonPrimaryText}>GERAR RECOMENDAÇÕES</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});
