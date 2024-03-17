import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

import { UsersThree } from 'phosphor-react-native';

export const GroupCardContainer = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.7,
}))`
  width: 100%;
  height: 90px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  border-radius: 6px;

  padding: 24px;

  margin-bottom: 12px;
`;

export const GroupCardTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const GroupCardIcon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: 'fill',
}))`
  margin-right: 20px;
`;
