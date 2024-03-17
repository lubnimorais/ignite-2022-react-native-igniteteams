import { BackButton, BackIcon, HeaderContainer, Logo } from './styles';

import logoImg from '@assets/logo.png';

interface HeaderProps {
  showBackButton?: boolean | null;
}

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <HeaderContainer>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </HeaderContainer>
  );
}
