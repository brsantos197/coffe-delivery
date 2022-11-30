import { Minus, Plus } from 'phosphor-react'
import { ButtonIcon, CounterContainer, Quantity } from './styles'

interface CounterProps {
  quantity: number
}

export const Counter = ({ quantity }: CounterProps) => {
  return (
    <CounterContainer>
      <ButtonIcon>
        <Minus size={14} weight="bold" />
      </ButtonIcon>
      <Quantity>{quantity}</Quantity>
      <ButtonIcon>
        <Plus size={14} weight="bold" />
      </ButtonIcon>
    </CounterContainer>
  )
}
