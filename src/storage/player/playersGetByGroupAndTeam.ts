import { playersGetByGroup } from './playersGetByGroup';
import { IPlayerStorageDTO } from './PlayerStorageDTO';

export async function playersGetByGroupAndTeam(
  group: string,
  team: string,
): Promise<IPlayerStorageDTO[]> {
  try {
    const storage = await playersGetByGroup(group);

    const players = storage.filter((player) => player.team === team);

    return players;
  } catch (error) {
    throw error;
  }
}
