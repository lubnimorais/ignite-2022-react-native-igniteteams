import { StatusBar } from 'react-native';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { ThemeProvider } from 'styled-components';

import { GroupsScreen } from '@screens/Groups';

import { Loading } from '@components/Loading';

import theme from './src/themes';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <GroupsScreen /> : <Loading />}
    </ThemeProvider>
  );
}
