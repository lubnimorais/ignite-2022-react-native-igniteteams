import AsyncStorage from '@react-native-async-storage/async-storage';

import { IPlayerStorageDTO } from './PlayerStorageDTO';

import { PLAYER_COLLECTION } from '@storage/storageConfig';

export async function playersGetByGroup(
  group: string,
): Promise<IPlayerStorageDTO[]> {
  try {
    const storedPlayers = await AsyncStorage.getItem(
      `${PLAYER_COLLECTION}-${group}`,
    );

    const players: IPlayerStorageDTO[] = storedPlayers
      ? JSON.parse(storedPlayers)
      : [];

    return players;
  } catch (error) {
    throw error;
  }
}
