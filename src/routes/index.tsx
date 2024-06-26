import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { useTheme } from 'styled-components/native';

import { AppRoutes } from './app.routes';

export function Routes() {
  const theme = useTheme();

  return (
    // EVITANDO O EFEITO DE GLITCH
    <View style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
