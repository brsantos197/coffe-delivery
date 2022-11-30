import { MapPin, ShoppingCart } from 'phosphor-react'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;

  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  padding: 2rem 10rem;
`
export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS['PURPLE-LIGHT']};
  color: ${({ theme }) => theme.COLORS['PURPLE-DARK']};
`
export const LocationIcon = styled(MapPin).attrs(({ theme }) => ({
  size: 22,
  color: theme.COLORS.PURPLE,
  weight: 'fill',
}))``

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  padding: 0.5rem;

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  background-color: ${({ theme }) => theme.COLORS['YELLOW-LIGHT']};
`
export const CartIcon = styled(ShoppingCart).attrs(({ theme }) => ({
  size: 22,
  color: theme.COLORS['YELLOW-DARK'],
  weight: 'fill',
}))``

export const CartCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -8px;
  right: -8.35px;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 999px;
  font-size: ${({ theme }) => theme.FONTS.TEXT.SIZES.XS}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS['YELLOW-DARK']};
`
