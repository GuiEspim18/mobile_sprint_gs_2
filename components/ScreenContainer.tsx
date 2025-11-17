import { Theme } from "@/styles/theme";
import { ReactNode } from "react";
import { ScrollView, StyleSheet } from "react-native";

type Props = {
  children: ReactNode;
};

export default function ScreenContainer({ children }: Props) {
  return <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: Theme.Spacing.large,
    backgroundColor: Theme.Colors.background,
  },
});
