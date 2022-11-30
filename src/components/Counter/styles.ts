import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS['BASE-BUTTON']};
`

export const ButtonIcon = styled.button`
  background-color: transparent;
  border: 0;

  color: ${({ theme }) => theme.COLORS.PURPLE};

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.COLORS['PURPLE-DARK']};
  }
`

export const Quantity = styled.p`
  width: 1.25rem;
  text-align: center;
  font-family: '${({ theme }) => theme.FONTS.TEXT.FAMILY}', sans-serif;
  font-size: ${({ theme }) => theme.FONTS.TEXT.SIZES.MD}px;
  line-height: ${({ theme }) => theme.FONTS.TEXT.LINE_HEIGHT}%;
  font-weight: 400;

  color: ${({ theme }) => theme.COLORS['BASE-TITLE']};
`
