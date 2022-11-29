import styled from 'styled-components'

export const HomeIntro = styled.div`
  width: 100%;
  height: 544px;
  padding: 5.75rem 10rem;
  display: flex;
  gap: 3.5rem;
  background-image: url('public/assets/home-background.png');
`

export const IntroTitle = styled.h1`
  font-family: '${({ theme }) => theme.FONTS.HEADER.FAMILY}', sans-serif;
  font-size: ${({ theme }) => theme.FONTS.HEADER.SIZES.XL}px;
  line-height: ${({ theme }) => theme.FONTS.HEADER.LINE_HEIGHT}%;
  font-weight: 800;

  color: ${({ theme }) => theme.COLORS['BASE-TITLE']};
`

export const IntroSubTitle = styled.h2`
  font-family: '${({ theme }) => theme.FONTS.TEXT.FAMILY}', sans-serif;
  font-size: ${({ theme }) => theme.FONTS.TEXT.SIZES.XL}px;
  line-height: ${({ theme }) => theme.FONTS.TEXT.LINE_HEIGHT[130]}%;
  font-weight: 400;

  margin-top: 1rem;

  color: ${({ theme }) => theme.COLORS['BASE-SUBTITLE']};
`

export const IntroItems = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem 2.5rem;
  margin-top: 4.125rem;
  line-height: ${({ theme }) => theme.FONTS.TEXT.LINE_HEIGHT[130]}%;
`
export const ItemList = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
export const CoffeListContainer = styled.div`
  padding: 2rem 10rem 0 10rem;
`

export const ListTitle = styled.h3`
  font-family: '${({ theme }) => theme.FONTS.HEADER.FAMILY}', sans-serif;
  font-size: ${({ theme }) => theme.FONTS.HEADER.SIZES.LG}px;
  line-height: ${({ theme }) => theme.FONTS.HEADER.LINE_HEIGHT}%;
  font-weight: 800;

  margin-bottom: 3.375rem;

  color: ${({ theme }) => theme.COLORS['BASE-SUBTITLE']};
`
export const CoffeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
`
export const CoffeItemList = styled.div`
  width: 256px;
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  padding: 1.25rem;

  text-align: center;

  img {
    position: absolute;
    top: -20px;
    left: calc(50% - 120px / 2);
  }
`
export const CoffeName = styled.h4`
  margin-top: -0.75rem;
  font-family: '${({ theme }) => theme.FONTS.HEADER.FAMILY}', sans-serif;
  font-size: ${({ theme }) => theme.FONTS.HEADER.SIZES.SM}px;
  line-height: ${({ theme }) => theme.FONTS.HEADER.LINE_HEIGHT}%;
  font-weight: 700;

  color: ${({ theme }) => theme.COLORS['BASE-SUBTITLE']};
`

export const CoffeSpecificationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  margin-top: 5rem;
`

export const CoffeSpecification = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.25rem 0.5rem;

  border-radius: 100px;
  background-color: ${({ theme }) => theme.COLORS['YELLOW-LIGHT']};
  color: ${({ theme }) => theme.COLORS['YELLOW-DARK']};
  font-size: ${({ theme }) => theme.FONTS.TEXT.SIZES.XS}px;
  font-weight: 700;
  line-height: ${({ theme }) => theme.FONTS.TEXT.LINE_HEIGHT[130]}%;
`

export const CoffeDescription = styled.p`
  margin-top: -0.75rem;
  font-family: '${({ theme }) => theme.FONTS.TEXT.FAMILY}', sans-serif;
  font-size: ${({ theme }) => theme.FONTS.TEXT.SIZES.SM}px;
  line-height: ${({ theme }) => theme.FONTS.TEXT.LINE_HEIGHT}%;
  font-weight: 400;

  color: ${({ theme }) => theme.COLORS['BASE-LABEL']};
`

export const CoffeFooter = styled.div``

export const Symbol = styled.span`
  font-family: '${({ theme }) => theme.FONTS.TEXT.FAMILY}', sans-serif;
  font-size: ${({ theme }) => theme.FONTS.TEXT.SIZES.SM}px;
  line-height: ${({ theme }) => theme.FONTS.TEXT.LINE_HEIGHT}%;
  font-weight: 400;

  color: ${({ theme }) => theme.COLORS['BASE-TEXT']};
`
