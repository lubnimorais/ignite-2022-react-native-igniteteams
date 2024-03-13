import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components';

import theme from './src/themes';

import { GroupsScreen } from '@screens/Groups';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <GroupsScreen />
    </ThemeProvider>
  );
}


