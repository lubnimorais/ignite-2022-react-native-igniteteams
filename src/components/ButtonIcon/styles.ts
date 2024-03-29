import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export type IButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

interface IIconProps {
  type: IButtonIconTypeStyleProps;
}

export const ButtonIconContainer = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.7,
}))`
  width: 56px;
  height: 56px;

  align-items: center;
  justify-content: center;

  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<IIconProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
  }),
)``;
