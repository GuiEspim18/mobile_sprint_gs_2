import { Theme } from "@/styles/theme";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "default" | "danger";
}

export function PrimaryButton({ title, onPress, variant = "default" }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.primary, variant === "danger" && styles.danger]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.primaryText,
          variant === "danger" && styles.dangerText
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export function SecondaryButton({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.secondary} onPress={onPress}>
      <Text style={styles.secondaryText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primary: {
    backgroundColor: Theme.Colors.primary,
    padding: Theme.Spacing.medium,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: Theme.Spacing.small,
  },
  primaryText: {
    color: "white",
    fontSize: Theme.Typography.body,
    fontWeight: "bold",
  },

  // === 🔥 Danger Variant ===
  danger: {
    backgroundColor: Theme.Colors.danger,
  },
  dangerText: {
    color: "white",
  },

  secondary: {
    padding: Theme.Spacing.medium,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: Theme.Spacing.small,
  },
  secondaryText: {
    color: Theme.Colors.primary,
    fontSize: Theme.Typography.body,
    fontWeight: "600",
  },
});
