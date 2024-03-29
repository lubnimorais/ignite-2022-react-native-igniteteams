import { TouchableOpacityProps } from 'react-native';
import { ButtonIconContainer, IButtonIconTypeStyleProps, Icon } from './styles';

interface IButtonIconProps extends TouchableOpacityProps {
  // type: IButtonIconTypeStyleProps;
}

export function ButtonIcon({ ...rest }: IButtonIconProps) {
  return (
    <ButtonIconContainer {...rest}>
      <Icon name="home" type="PRIMARY" />
    </ButtonIconContainer>
  );
}
