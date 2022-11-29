import {
  Actions,
  CartButton,
  CartCount,
  CartIcon,
  HeaderContainer,
  LocationContainer,
  LocationIcon,
} from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src="public/assets/logo.svg" alt="" />
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
