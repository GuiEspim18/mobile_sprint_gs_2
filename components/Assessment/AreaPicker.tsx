import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface AreaPickerProps {
  selectedArea: string;
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

export const AreaPicker: React.FC<AreaPickerProps> = ({ selectedArea, onValueChange }) => {
  return (
    <View style={{ marginTop: Spacing.large }}>
      <Text style={styles.label}>Área de Interesse/Competência:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedArea}
          onValueChange={onValueChange}
          style={styles.picker}
        >
          <Picker.Item label="Inteligência Artificial (IA)" value="ia" />
          <Picker.Item label="Sustentabilidade e ESG" value="sustentabilidade" />
          <Picker.Item label="Soft Skills (Comunicação, Liderança)" value="softskills" />
          <Picker.Item label="Análise de Dados" value="dados" />
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
