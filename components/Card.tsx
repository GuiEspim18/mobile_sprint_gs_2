import { Theme } from "@/styles/theme";
import { StyleSheet, View } from "react-native";

export default function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.Colors.card,
    padding: Theme.Spacing.medium,
    borderRadius: 12,
    marginBottom: Theme.Spacing.medium,
    borderWidth: 1,
    borderColor: Theme.Colors.background,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
});
