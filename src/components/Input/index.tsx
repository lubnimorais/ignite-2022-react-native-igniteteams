import { TextInputProps } from 'react-native';

import { InputContainer } from './styles';
import { useTheme } from 'styled-components/native';

interface IInputProps extends TextInputProps {}

export function Input({ ...rest }: IInputProps) {
  const theme = useTheme();

  return (
    <InputContainer placeholderTextColor={theme.COLORS.GRAY_300} {...rest} />
  );
}
