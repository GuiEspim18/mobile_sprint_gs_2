import Constants from 'expo-constants';
import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';

// Tipagem para as cores
interface ColorsType {
  primary: string;
  secondary: string;
  tertiary: string;
  background: string;
  card: string;
  text: string;
  textSecondary: string;
  border: string;
}

// Definição de cores e tamanhos para uso global
export const Colors: ColorsType = {
  primary: '#007AFF', // Azul vibrante (pode ser ajustado para um tom mais "ODS")
  secondary: '#34C759', // Verde (para sucesso/ODS 8)
  tertiary: '#FF9500', // Laranja (para atenção)
  background: '#F2F2F7', // Fundo claro
  card: '#FFFFFF', // Fundo de cards
  text: '#1C1C1E', // Texto principal escuro
  textSecondary: '#636366', // Texto secundário
  border: '#C6C6C8', // Cor de bordas
};

// Tipagem para a tipografia
interface TypographyType {
  header: number;
  title: number;
  body: number;
  caption: number;
}

export const Typography: TypographyType = {
  header: 28,
  title: 20,
  body: 16,
  caption: 12,
};

// Tipagem para o espaçamento
interface SpacingType {
  small: number;
  medium: number;
  large: number;
  extraLarge: number;
}

export const Spacing: SpacingType = {
  small: 8,
  medium: 16,
  large: 24,
  extraLarge: 32,
};

// Tipagem para os estilos globais
interface GlobalStylesType {
  container: ViewStyle;
  card: ViewStyle;
  headerText: TextStyle;
  titleText: TextStyle;
  bodyText: TextStyle;
  captionText: TextStyle;
  input: TextStyle;
  buttonPrimary: ViewStyle;
  buttonPrimaryText: TextStyle;
  buttonSecondary: ViewStyle;
  buttonSecondaryText: TextStyle;
}

const GlobalStyles = StyleSheet.create<GlobalStylesType>({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 10,
    padding: Spacing.medium,
    marginVertical: Spacing.small,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  // Estilos de Texto
  headerText: {
    fontSize: Typography.header,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: Spacing.medium,
  },
  titleText: {
    fontSize: Typography.title,
    fontWeight: '600',
    color: Colors.text,
  },
  bodyText: {
    fontSize: Typography.body,
    color: Colors.text,
  },
  captionText: {
    fontSize: Typography.caption,
    color: Colors.textSecondary,
  },
  // Estilos de Formulário
  input: {
    height: 50,
    backgroundColor: Colors.card,
    borderRadius: 8,
    paddingHorizontal: Spacing.medium,
    // marginBottom: Spacing.medium,
    borderWidth: 1,
    borderColor: Colors.border,
    color: Colors.text,
  },
  buttonPrimary: {
    backgroundColor: Colors.primary,
    padding: Spacing.medium,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.medium,
  },
  buttonPrimaryText: {
    color: Colors.card,
    fontSize: Typography.body,
    fontWeight: 'bold',
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    padding: Spacing.medium,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSecondaryText: {
    color: Colors.primary,
    fontSize: Typography.body,
    fontWeight: '600',
  },
});

export default GlobalStyles;
