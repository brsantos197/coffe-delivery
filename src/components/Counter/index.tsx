import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeContext } from '../../context/CoffeContext.ctx'
import { ButtonIcon, CounterContainer, Quantity } from './styles'

interface CounterProps {
  quantity: number
  coffeId: number
  type?: 'list' | 'cart'
}

export const Counter = ({ quantity, coffeId, type = 'list' }: CounterProps) => {
  const { updateCoffeQuantity } = useContext(CoffeContext)
  return (
    <CounterContainer>
      <ButtonIcon
        type="button"
        onClick={() => {
          updateCoffeQuantity(coffeId, (quantity -= 1), type)
        }}
      >
        <Minus size={14} weight="bold" />
      </ButtonIcon>
      <Quantity>{quantity}</Quantity>
      <ButtonIcon
        type="button"
        onClick={() => {
          updateCoffeQuantity(coffeId, (quantity += 1), type)
        }}
      >
        <Plus size={14} weight="bold" />
      </ButtonIcon>
    </CounterContainer>
  )
}
