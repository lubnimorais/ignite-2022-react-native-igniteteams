import { useCallback, useState } from 'react';

import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { AppError } from '@utils/AppError';

import { groupCreate } from '@storage/group/groupCreate';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Buttons';
import { Input } from '@components/Input';

import { Icon, NewGroupContainer, NewGroupContent } from './styles';

export function NewGroupScreen() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  const handlePlayersNavigation = useCallback(async () => {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo grupo', 'Informe do nome da turma.');
      }

      await groupCreate(group);

      navigation.navigate('players', { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message);
      } else {
        Alert.alert('Novo grupo', 'Não foi possível criar um novo grupo.');
        console.log(error);
      }
    }
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
