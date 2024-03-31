import { useCallback } from 'react';
import { BackButton, BackIcon, HeaderContainer, Logo } from './styles';

import logoImg from '@assets/logo.png';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  showBackButton?: boolean | null;
}

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation();

  const handleGoHomeNavigation = useCallback(() => {
    navigation.navigate('groups');
  }, [navigation]);

  return (
    <HeaderContainer>
      {showBackButton && (
        <BackButton onPress={handleGoHomeNavigation}>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </HeaderContainer>
  );
}
