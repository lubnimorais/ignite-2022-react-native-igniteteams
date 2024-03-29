import styled, { css } from 'styled-components/native';
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
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
  `}
`;
