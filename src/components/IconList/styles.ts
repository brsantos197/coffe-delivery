import { defaultTheme } from './../../styles/themes/default'
import styled from 'styled-components'

export type IconListStyleProps = keyof typeof defaultTheme.COLORS
interface ContainerProps {
  bgColor: IconListStyleProps
}

export const Container = styled.span<ContainerProps>`
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  border-radius: 999px;

  background-color: ${({ theme, bgColor }) => theme.COLORS[bgColor]};
`
