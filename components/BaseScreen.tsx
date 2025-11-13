import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import GlobalStyles, { Spacing } from '../styles/GlobalStyles';

interface BaseScreenProps {
  title: string;
  children: React.ReactNode;
}

const BaseScreen: React.FC<BaseScreenProps> = ({ title, children }) => {
  return (
    <View style={GlobalStyles.container}>
      <View style={styles.content}>
        <Text style={GlobalStyles.headerText}>{title}</Text>
        {children}
      </View>
    </View>
  );
};

interface Styles {
  content: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  content: {
    flex: 1,
    padding: Spacing.medium,
  },
});

export default BaseScreen;
