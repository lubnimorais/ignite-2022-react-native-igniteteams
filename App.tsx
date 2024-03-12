import { StatusBar } from 'expo-status-bar';

import { GroupsScreen } from '@screens/Groups';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <GroupsScreen />
    </>
  );
}

