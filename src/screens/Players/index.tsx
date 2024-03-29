import { Header } from '@components/Header';
import { PlayersContainer } from './styles';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';

export function PlayersScreen() {
  return (
    <PlayersContainer>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separa os times"
      />

      <ButtonIcon />
    </PlayersContainer>
  );
}
