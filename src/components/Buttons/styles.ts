import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type IButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

interface IButtonContainerProps {
  type: IButtonTypeStyleProps;
}

export const ButtonContainer = styled(TouchableOpacity)<IButtonContainerProps>`
  flex: 1;
  align-items: center;
  justify-content: center;

  /* 
    Hack utilizado para prevenir quando for utilizar o botão
    em algum contexto que tenha um flex, vai prevenir que o
    botão cresça, que o tamanho dele seja influenciado.
  */
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  border-radius: 6px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
