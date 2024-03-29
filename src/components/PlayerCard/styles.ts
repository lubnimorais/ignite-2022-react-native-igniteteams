import styled, { css } from 'styled-components/native';

import { MaterialIcons } from '@expo/vector-icons';

export const PlayerCardContainer = styled.View`
  width: 100%;
  height: 56px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  margin-bottom: 16px;

  border-radius: 6px;
`;

export const PlayerCardName = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const PlayerCardIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;
