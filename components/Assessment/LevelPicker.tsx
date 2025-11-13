import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface LevelPickerProps {
  skillLevel: string;
  onValueChange: (value: string) => void;
}

const Colors = {
  card: '#f7f7f7',
  border: '#ddd',
  text: '#222',
};

const Spacing = {
  small: 8,
  large: 24,
};

export const LevelPicker: React.FC<LevelPickerProps> = ({ skillLevel, onValueChange }) => {
  return (
    <View style={{ marginTop: Spacing.large }}>
      <Text style={styles.label}>Nível de Familiaridade:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={skillLevel}
          onValueChange={onValueChange}
          style={styles.picker}
        >
          <Picker.Item label="Iniciante (Conhecimento Básico)" value="iniciante" />
          <Picker.Item label="Intermediário (Já trabalhei com o tema)" value="intermediario" />
          <Picker.Item label="Avançado (Domínio e experiência)" value="avancado" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: Spacing.small,
  },
  pickerContainer: {
    backgroundColor: Colors.card,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
    color: Colors.text,
  },
});
