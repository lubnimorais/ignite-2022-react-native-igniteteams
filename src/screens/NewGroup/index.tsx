import { Header } from '@components/Header';
import { Icon, NewGroupContainer, NewGroupContent } from './styles';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Buttons';
import { Input } from '@components/Input';

export function NewGroupScreen() {
  return (
    <NewGroupContainer>
      <Header showBackButton />

      <NewGroupContent>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" />

        <Button style={{ marginTop: 20 }} title="Criar" />
      </NewGroupContent>
    </NewGroupContainer>
  );
}
