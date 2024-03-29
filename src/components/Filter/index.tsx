import { TouchableOpacityProps } from 'react-native';
import { FilterContainer, FilterTitle, IFilterStyleProps } from './styles';

interface IFilterProps extends TouchableOpacityProps, IFilterStyleProps {
  title: string;
}

export function Filter({ title, isActive = false, ...rest }: IFilterProps) {
  return (
    <FilterContainer isActive={isActive} {...rest}>
      <FilterTitle>{title}</FilterTitle>
    </FilterContainer>
  );
}
