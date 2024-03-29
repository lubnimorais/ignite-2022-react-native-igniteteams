import { TouchableOpacityProps } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { ButtonIconContainer, IButtonIconTypeStyleProps, Icon } from './styles';

interface IButtonIconProps extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: IButtonIconTypeStyleProps;
}

export function ButtonIcon({
  icon,
  type = 'PRIMARY',
  ...rest
}: IButtonIconProps) {
  return (
    <ButtonIconContainer {...rest}>
      <Icon name={icon} type={type} />
    </ButtonIconContainer>
  );
}
