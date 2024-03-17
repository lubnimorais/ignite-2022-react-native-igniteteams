import { TouchableOpacityProps } from 'react-native';
import { GroupCardContainer, GroupCardIcon, GroupCardTitle } from './styles';

interface GroupCardProps extends TouchableOpacityProps {
  title: string;
}

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <GroupCardContainer {...rest}>
      <GroupCardIcon />

      <GroupCardTitle>{title}</GroupCardTitle>
    </GroupCardContainer>
  );
}
