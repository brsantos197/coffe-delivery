import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CoffeContext } from '../../context/CoffeContext.ctx'
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
  const { cart } = useContext(CoffeContext)
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
            {cart.coffes.length ? (
              <CartCount>
                {cart.coffes.reduce((length, coffe) => {
                  return (length += coffe.quantity)
                }, 0)}
              </CartCount>
            ) : null}
          </CartButton>
        </NavLink>
      </Actions>
    </HeaderContainer>
  )
}
