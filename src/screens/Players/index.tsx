import { useCallback, useEffect, useRef, useState } from 'react';

import { Alert, FlatList, TextInput } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { AppError } from '@utils/AppError';

import { IPlayerStorageDTO } from '@storage/player/PlayerStorageDTO';

import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playersGetByGroupAndTeam } from '@storage/player/playersGetByGroupAndTeam';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';
import { groupRemoveByName } from '@storage/group/groupRemoveByName';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { Loading } from '@components/Loading';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Buttons';

import { Form, HeaderList, NumberOfPlayers, PlayersContainer } from './styles';

interface IPlayerRouteParams {
  group: string;
}

export function PlayersScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<IPlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as IPlayerRouteParams;

  const navigation = useNavigation();

  const newPlayerNameInputRef = useRef<TextInput>(null);

  // FUNCTION
  const fetchPlayersByTeam = useCallback(async () => {
    try {
      setIsLoading(true);

      const playersByTeam = await playersGetByGroupAndTeam(group, team);

      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);

      Alert.alert(
        'Pessoas',
        'Não foi possível carregar as pessoas do time selecionado.',
      );
    } finally {
      setIsLoading(false);
    }
  }, [group, team]);

  const handleAddPlayer = useCallback(async () => {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        'Nova pessoa',
        'Informe o nome da pessoa para adicionar.',
      );
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur();

      setNewPlayerName('');

      await fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message);
      } else {
        console.log(error);

        Alert.alert('Nova pessoa', 'Não foi possível adicionar');
      }
    }
  }, [newPlayerName, team, group, fetchPlayersByTeam]);

  const handlePlayerRemove = useCallback(
    async (playerName: string) => {
      try {
        await playerRemoveByGroup(playerName, group);

        await fetchPlayersByTeam();
      } catch (error) {
        console.log(error);
        Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoa.');
      }
    },
    [group],
  );

  const groupRemove = useCallback(async () => {
    try {
      await groupRemoveByName(group);

      navigation.navigate('groups');
    } catch (error) {
      console.log(error);
      Alert.alert('Remover grupo', 'Não foi possível remover o grupo.');
    }
  }, [group]);

  const handleGroupRemove = useCallback(async () => {
    Alert.alert('Remover', 'Deseja remover a turma?', [
      {
        text: 'Não',
        style: 'default',
        onPress: () => null,
      },
      {
        text: 'Sim',
        style: 'destructive',
        onPress: async () => {
          await groupRemove();
        },
      },
    ]);
  }, [groupRemove]);
  // END FUNCTION

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <PlayersContainer>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separa os times" />

      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          returnKeyType="done"
          value={newPlayerName}
          onChangeText={(text) => {
            setNewPlayerName(text);
          }}
          onSubmitEditing={handleAddPlayer}
        />

        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          horizontal
          renderItem={({ item: teamItem }) => (
            <Filter
              title={teamItem}
              isActive={team === teamItem}
              onPress={() => {
                setTeam(teamItem);
              }}
            />
          )}
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          contentContainerStyle={[
            {
              paddingBottom: 100,
            },
            players.length === 0 && { flex: 1 },
          ]}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: player }) => (
            <PlayerCard
              name={player.name}
              onRemove={() => {
                handlePlayerRemove(player.name);
              }}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Não há pessoas nesse time" />
          )}
        />
      )}

      <Button
        title="Remover turma"
        type="SECONDARY"
        onPress={handleGroupRemove}
      />
    </PlayersContainer>
  );
}
