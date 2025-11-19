import { Theme } from '@/styles/theme';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ value, onChangeText, placeholder }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder || "Buscar..."}
    placeholderTextColor={Theme.Colors.textSecondary}
    value={value}
    onChangeText={onChangeText}
  />
);

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: Theme.Spacing.medium,
    fontSize: 16,
    color: Theme.Colors.text,
    backgroundColor: Theme.Colors.card,
    marginBottom: Theme.Spacing.medium,
  },
});
