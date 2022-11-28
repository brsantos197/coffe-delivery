import {
  Actions,
  CartButton,
  CartCount,
  CartIcon,
  HeaderContainer,
  LocationContainer,
  LocationIcon,
} from './styles'

import logo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <Actions>
        <LocationContainer>
          <LocationIcon />
          Santos, SP
        </LocationContainer>
        <CartButton>
          <CartIcon />
          <CartCount>3</CartCount>
        </CartButton>
      </Actions>
    </HeaderContainer>
  )
}
