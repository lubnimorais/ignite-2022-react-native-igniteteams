import { ButtonIcon } from '@components/ButtonIcon';
import { PlayerCardContainer, PlayerCardIcon, PlayerCardName } from './styles';

interface IPlayerCardProps {
  name: string;
  onRemove: () => void;
}

export function PlayerCard({ name, onRemove }: IPlayerCardProps) {
  return (
    <PlayerCardContainer>
      <PlayerCardIcon name="person" />

      <PlayerCardName>{name}</PlayerCardName>

      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </PlayerCardContainer>
  );
}
