import { useCallback, useState } from 'react';

import { Alert, FlatList } from 'react-native';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { groupGetAll } from '@storage/group/groupsGetAll';

import { Header } from '@components/Header';
import { GroupCard } from '@components/GroupCard';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';

import { GroupsContainer } from './styles';
import { Button } from '@components/Buttons';
import { Loading } from '@components/Loading';

export function GroupsScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  // FUNCTIONS
  const fetchGroups = useCallback(async () => {
    try {
      setIsLoading(true);

      const data = await groupGetAll();

      setGroups(data);
    } catch (error) {
      console.log(error);

      Alert.alert('Turmas', 'Não foi possível carregar as turmas.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleNewGroupNavigation = useCallback(() => {
    navigation.navigate('newGroups');
  }, [navigation]);

  const handleShowGroupNavigation = useCallback(
    (group: string) => {
      navigation.navigate('players', { group });
    },
    [navigation],
  );
  // END FUNCTIONS

  // USE EFFECT
  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [fetchGroups]),
  );
  // END USE EFFECT

  return (
    <GroupsContainer>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item: group }) => (
            <GroupCard
              title={group}
              onPress={() => {
                handleShowGroupNavigation(group);
              }}
            />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar a primeira turma" />
          )}
        />
      )}

      <Button title="Criar nova turma" onPress={handleNewGroupNavigation} />
    </GroupsContainer>
  );
}
