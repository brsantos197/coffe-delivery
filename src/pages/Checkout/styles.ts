import styled from 'styled-components'

export const CheckoutContainer = styled.div`
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
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  margin-bottom: 2rem;
`

export const FormTitle = styled.h4`
  line-height: ${({ theme }) => theme.FONTS.TEXT.LINE_HEIGHT[130]}%;
  font-weight: 400;
`

export const FormSubTitle = styled.p`
  font-family: '${({ theme }) => theme.FONTS.TEXT.FAMILY}', sans-serif;
  font-size: ${({ theme }) => theme.FONTS.TEXT.SIZES.SM}px;
  line-height: ${({ theme }) => theme.FONTS.TEXT.LINE_HEIGHT[130]}%;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`

export const BaseInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.COLORS['BASE-INPUT']};
  border: 1px solid ${({ theme }) => theme.COLORS['BASE-BUTTON']};
  border-radius: 4px;
`
export const CepInput = styled(BaseInput)`
  flex: 0;
  width: 12.5rem;
`
