import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  margin-inline: 10rem;
  margin-top: 5rem;
`
export const SuccessHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 2.5rem;
`

export const SuccessTitle = styled.h2`
  font-size: ${({ theme }) => theme.FONTS.HEADER.SIZES.LG}px;
  font-family: '${({ theme }) => theme.FONTS.HEADER.FAMILY}', sans-serif;
  line-height: ${({ theme }) => theme.FONTS.HEADER.LINE_HEIGHT}%;
  font-weight: 800;

  color: ${({ theme }) => theme.COLORS['YELLOW-DARK']};
`
export const SuccessSubTitle = styled.p`
  font-size: ${({ theme }) => theme.FONTS.TEXT.SIZES.LG}px;
  line-height: ${({ theme }) => theme.FONTS.TEXT.LINE_HEIGHT[130]}%;

  color: ${({ theme }) => theme.COLORS['BASE-SUBTITLE']};
`
export const OrderCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  border: 1px solid transparent;

  border-radius: 6px 36px;
  background: white;
  background-clip: padding-box;

  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px; /* !importanté */
    border-radius: inherit; /* !importanté */
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.COLORS.YELLOW},
      ${({ theme }) => theme.COLORS.PURPLE}
    );
  }
`
export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    line-height: ${({ theme }) => theme.FONTS.TEXT.LINE_HEIGHT[130]}%;
  }
`
