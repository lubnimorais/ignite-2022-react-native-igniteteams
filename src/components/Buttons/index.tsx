import { TouchableOpacityProps } from 'react-native';

import { ButtonContainer, ButtonText, IButtonTypeStyleProps } from './styles';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  type?: IButtonTypeStyleProps;
}

export function Button({ title, type = 'PRIMARY', ...rest }: IButtonProps) {
  return (
    <ButtonContainer type={type} {...rest}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
