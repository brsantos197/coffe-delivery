import { Container, IconListStyleProps } from './styles'
import { ReactNode } from 'react'

interface IconListProps {
  bgColor: IconListStyleProps
  children: ReactNode
}

export const IconList = ({ bgColor, children }: IconListProps) => {
  return <Container bgColor={bgColor}>{children}</Container>
}
