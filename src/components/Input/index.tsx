import { TextInput, TextInputProps } from 'react-native';

import { InputContainer } from './styles';
import { useTheme } from 'styled-components/native';

interface IInputProps extends TextInputProps {
  inputRef?: React.RefObject<TextInput>;
}

export function Input({ inputRef, ...rest }: IInputProps) {
  const theme = useTheme();

  return (
    <InputContainer
      ref={inputRef}
      placeholderTextColor={theme.COLORS.GRAY_300}
      {...rest}
    />
  );
}
