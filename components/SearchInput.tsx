import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Colors = {
  text: "#111",
  textSecondary: "#777",
  card: "#FFF",
  background: "#F7F8FA",
};

const Spacing = {
  medium: 16,
};

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ value, onChangeText, placeholder }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder || "Buscar..."}
    placeholderTextColor={Colors.textSecondary}
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
    paddingHorizontal: Spacing.medium,
    fontSize: 16,
    color: Colors.text,
    backgroundColor: Colors.card,
    marginBottom: Spacing.medium,
  },
});
