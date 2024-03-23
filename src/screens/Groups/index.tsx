import { useState } from 'react';

import { Header } from '@components/Header';

import { GroupsContainer } from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { FlatList } from 'react-native';

export function GroupsScreen() {
  const [groups, setGroups] = useState<string[]>(['Galera da Rocketseat']);

  return (
    <GroupsContainer>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item: group }) => <GroupCard title={group} />}
      />
    </GroupsContainer>
  );
}
