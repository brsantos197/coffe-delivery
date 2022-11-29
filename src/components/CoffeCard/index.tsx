import { ReactNode } from 'react'
import { CoffeCardContainer } from './styles'

interface CoffeCardProps {
  children: ReactNode
}

export const CoffeCard = ({ children }: CoffeCardProps) => {
  return <CoffeCardContainer>{children}</CoffeCardContainer>
}
