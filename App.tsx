import { StatusBar } from 'expo-status-bar';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { ThemeProvider } from 'styled-components';

import theme from './src/themes';

import { GroupsScreen } from '@screens/Groups';
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      {fontsLoaded ? <GroupsScreen /> : <ActivityIndicator size="large" />}
    </ThemeProvider>
  );
}


