import { useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';

import { Form, HeaderList, NumberOfPlayers, PlayersContainer } from './styles';
import { Button } from '@components/Buttons';

export function PlayersScreen() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([
    'Lubni',
    'Rodrigo',
    'Jake',
    'Diegão',
    'Dani',
    'Biro',
    'Alura',
  ]);

  return (
    <PlayersContainer>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separa os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon icon="add" />
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

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        contentContainerStyle={[
          {
            paddingBottom: 100,
          },
          players.length === 0 && { flex: 1 },
        ]}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: player }) => (
          <PlayerCard name={player} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
      />

      <Button title="Remover turma" type="SECONDARY" />
    </PlayersContainer>
  );
}
