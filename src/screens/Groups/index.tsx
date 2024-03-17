import { Header } from '@components/Header';

import { GroupsContainer } from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

export function GroupsScreen() {
  return (
    <GroupsContainer>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <GroupCard title="Usuários" />
    </GroupsContainer>
  );
}
