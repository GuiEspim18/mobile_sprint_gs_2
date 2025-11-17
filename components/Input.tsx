import { Theme } from "@/styles/theme";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

export default function Input(props: TextInputProps) {
  return <TextInput {...props} style={[styles.input, props.style]} />;
}

const styles = StyleSheet.create({
  input: {
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Theme.Colors.border,
    paddingHorizontal: Theme.Spacing.medium,
    backgroundColor: Theme.Colors.card,
    fontSize: Theme.Typography.body,
    color: Theme.Colors.text,
    marginBottom: Theme.Spacing.medium,
  },
});
