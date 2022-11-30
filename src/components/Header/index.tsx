import { NavLink } from 'react-router-dom'
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
      <NavLink to="/">
        <img src="public/assets/logo.svg" alt="" />
      </NavLink>
      <Actions>
        <LocationContainer>
          <LocationIcon />
          Santos, SP
        </LocationContainer>
        <NavLink to="/checkout">
          <CartButton>
            <CartIcon />
            <CartCount>3</CartCount>
          </CartButton>
        </NavLink>
      </Actions>
    </HeaderContainer>
  )
}
