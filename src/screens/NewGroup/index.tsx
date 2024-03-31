import { useCallback, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Buttons';
import { Input } from '@components/Input';

import { Icon, NewGroupContainer, NewGroupContent } from './styles';

export function NewGroupScreen() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  const handlePlayersNavigation = useCallback(() => {
    navigation.navigate('players', { group });
  }, [navigation, group]);

  return (
    <NewGroupContainer>
      <Header showBackButton />

      <NewGroupContent>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
          onChangeText={(text) => setGroup(text)}
        />

        <Button
          style={{ marginTop: 20 }}
          title="Criar"
          onPress={handlePlayersNavigation}
        />
      </NewGroupContent>
    </NewGroupContainer>
  );
}
