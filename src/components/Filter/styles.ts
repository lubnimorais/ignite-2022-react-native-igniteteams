import styled, { css } from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

export type IFilterStyleProps = {
  isActive?: boolean;
};

export const FilterContainer = styled(
  TouchableOpacity,
).attrs<IFilterStyleProps>(() => ({
  activeOpacity: 0.7,
}))`
  width: 70px;
  height: 38px;

  align-items: center;
  justify-content: center;

  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `}

  border-radius: 4px;

  margin-right: 12px;
`;

export const FilterTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}

  text-transform: uppercase;
`;
