import styled from 'styled-components'
import backgroundImage from '../../assets/home-background.png'

export const HomeIntro = styled.div`
  width: 100%;
  height: 544px;
  display: flex;
  gap: 3.5rem;
  background-image: url(${backgroundImage});
`

export const IntroInfo = styled.div`
  padding-left: 10rem;
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

export const IntroItems = styled.div``
