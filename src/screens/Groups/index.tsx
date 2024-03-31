import { useCallback, useState } from 'react';

import { FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { GroupCard } from '@components/GroupCard';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';

import { GroupsContainer } from './styles';
import { Button } from '@components/Buttons';

export function GroupsScreen() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  // FUNCTIONS
  const handleNewGroupNavigation = useCallback(() => {
    navigation.navigate('newGroups');
  }, [navigation]);
  // END FUNCTIONS

  return (
    <GroupsContainer>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item: group }) => <GroupCard title={group} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma" />
        )}
      />

      <Button title="Criar nova turma" onPress={handleNewGroupNavigation} />
    </GroupsContainer>
  );
}
