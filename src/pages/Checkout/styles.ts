import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface ButtonPaymentSelectProps {
  active?: boolean
}

export const CheckoutContainer = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 2.5rem;
  margin-inline: 10rem;
`
export const CardTitle = styled.h3`
  font-family: '${({ theme }) => theme.FONTS.HEADER.FAMILY}', sans-serif;
  font-size: ${({ theme }) => theme.FONTS.HEADER.SIZES.SM}px;
  line-height: ${({ theme }) => theme.FONTS.HEADER.LINE_HEIGHT}%;
  font-weight: 700;

  color: ${({ theme }) => theme.COLORS['BASE-SUBTITLE']};
`

export const CheckoutCardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`
export const CheckoutCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS['BASE-CARD']};
`
export const FormHeader = styled.div`
  width: 35rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`

export const FormTitle = styled.h4`
  line-height: ${({ theme }) => theme.FONTS.TEXT.LINE_HEIGHT[130]}%;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS['BASE-SUBTITLE']};
`

export const FormSubTitle = styled.p`
  font-family: '${({ theme }) => theme.FONTS.TEXT.FAMILY}', sans-serif;
  font-size: ${({ theme }) => theme.FONTS.TEXT.SIZES.SM}px;
  line-height: ${({ theme }) => theme.FONTS.TEXT.LINE_HEIGHT[130]}%;
`
export const FormContainer = styled.div`
  min-width: 35rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`
export const Row = styled.div`
  width: 100%;
  display: flex;
  gap: 0.75rem;
`
export const RowCart = styled(Row)`
  gap: 0.5rem;
`
export const RowCartFooter = styled(Row)`
  justify-content: space-between;
  font-size: ${({ theme }) => theme.FONTS.TEXT.SIZES.SM}px;
  line-height: ${({ theme }) => theme.FONTS.TEXT.LINE_HEIGHT[130]}%;
`
export const RowCartFooterTotal = styled(RowCartFooter)`
  font-size: ${({ theme }) => theme.FONTS.TEXT.SIZES.LG}px;
  line-height: ${({ theme }) => theme.FONTS.TEXT.LINE_HEIGHT[130]}%;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS['BASE-SUBTITLE']};
`
export const BaseInput = styled.input`
  width: 12.5rem;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.COLORS['BASE-INPUT']};
  border: 1px solid ${({ theme }) => theme.COLORS['BASE-BUTTON']};
  border-radius: 4px;

  color: ${({ theme }) => theme.COLORS['BASE-TEXT']};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS['BASE-LABEL']};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.COLORS['YELLOW-DARK']};
  }
`
export const AddressInput = styled(BaseInput)`
  width: 100%;
`
export const OptionalInputContainer = styled.div`
  position: relative;
  width: 100%;

  padding: 0.75rem;
  background-color: ${({ theme }) => theme.COLORS['BASE-INPUT']};
  border: 1px solid ${({ theme }) => theme.COLORS['BASE-BUTTON']};
  border-radius: 4px;

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.COLORS['YELLOW-DARK']};
  }
`
export const OptionalInput = styled(BaseInput)`
  border: none;
  outline: none;
  padding: unset;

  &:focus {
    outline: none;
  }
`
export const OptionalInputLabel = styled.span`
  position: absolute;
  top: 0.9rem;
  right: 0.75rem;

  color: ${({ theme }) => theme.COLORS['BASE-LABEL']};

  font-style: italic;
  font-size: ${({ theme }) => theme.FONTS.TEXT.SIZES.XS}px;
  line-height: ${({ theme }) => theme.FONTS.TEXT.LINE_HEIGHT[130]}%;
  font-weight: 400;
`
export const CityInput = styled(BaseInput)`
  flex: 1;
`
export const StateInput = styled(BaseInput)`
  width: 3.75rem;
`
export const ButtonPaymentSelect = styled.label<ButtonPaymentSelectProps>`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;

  border: ${({ theme, active }) =>
    active ? `1px solid ${theme.COLORS.PURPLE}` : '1px solid transparent'};
  border-radius: 6px;

  background-color: ${({ theme, active }) =>
    active ? theme.COLORS['PURPLE-LIGHT'] : theme.COLORS['BASE-BUTTON']};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, active }) =>
      !active && theme.COLORS['BASE-HOVER']};
  }

  input[type='radio'] {
    display: none;
  }
  p {
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.FONTS.TEXT.SIZES.XS}px;
    line-height: ${({ theme }) => theme.FONTS.TEXT.LINE_HEIGHT[160]}%;
  }
`
export const CartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2.5rem;

  background-color: ${({ theme }) => theme.COLORS['BASE-CARD']};
  border-radius: 6px 36px;
`
export const CartItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3.75rem;
  flex-wrap: nowrap;

  padding: 0.5rem 0.25rem;
`
export const Divider = styled.hr`
  width: 100%;
  margin: 1.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.COLORS['BASE-BUTTON']};
`
export const ItemDetails = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
`
export const ItemName = styled.p`
  margin-bottom: 0.5rem;
  line-height: ${({ theme }) => theme.FONTS.TEXT.LINE_HEIGHT[130]}%;
  color: ${({ theme }) => theme.COLORS['BASE-SUBTITLE']};
`
export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0 0.5rem;
  border: 0;
  border-radius: 6px;

  text-transform: uppercase;
  font-size: ${({ theme }) => theme.FONTS.TEXT.SIZES.XS}px;

  cursor: pointer;

  background-color: ${({ theme }) => theme.COLORS['BASE-BUTTON']};

  &:hover {
    background-color: ${({ theme }) => theme.COLORS['BASE-HOVER']};
  }
`
export const CartItemPrice = styled.p`
  line-height: ${({ theme }) => theme.FONTS.TEXT.LINE_HEIGHT[130]}%;
  font-weight: 700;
  white-space: nowrap;
`
export const CartFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`
export const ConfirmButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.75rem 0.5rem;

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  background-color: ${({ theme }) => theme.COLORS.YELLOW};
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS['YELLOW-DARK']};
  }
`
export const EmptyCartMessageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  color: ${({ theme }) => theme.COLORS['BASE-LABEL']};
`

export const EmptyCartMessage = styled.span`
  font-size: ${({ theme }) => theme.FONTS.TEXT.SIZES.XXL}px;
  font-weight: 700;
`
