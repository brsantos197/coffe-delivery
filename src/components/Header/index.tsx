import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CoffeContext } from '../../context/CoffeContext.ctx'
import { AddressFormData } from '../../pages/Checkout'
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
  const address: AddressFormData = JSON.parse(
    localStorage.getItem('@coffe-delivery:address-1.0.0') as string,
  )
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src="public/assets/logo.svg" alt="" />
      </NavLink>
      <Actions>
        <LocationContainer>
          <LocationIcon />
          {address?.city && address?.state
            ? `${address?.city}, ${address?.state}`
            : null}
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
