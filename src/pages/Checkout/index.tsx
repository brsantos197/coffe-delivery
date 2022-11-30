import { MapPinLine } from 'phosphor-react'
import React from 'react'
import { useTheme } from 'styled-components'
import { CoffeCard } from '../../components/CoffeCard'

import {
  CardTitle,
  CepInput,
  CheckoutCard,
  CheckoutCardContainer,
  CheckoutContainer,
  FormContainer,
  FormHeader,
  FormSubTitle,
  FormTitle,
} from './styles'

export const Checkout: React.FC = () => {
  const theme = useTheme()
  return (
    <CheckoutContainer>
      <CheckoutCardContainer>
        <CardTitle>Complete seu pedido</CardTitle>
        <CheckoutCard>
          <FormHeader>
            <MapPinLine size={22} color={theme.COLORS['YELLOW-DARK']} />
            <div>
              <FormTitle>Endereço de Entrega</FormTitle>
              <FormSubTitle>
                Informe o endereço onde deseja receber seu pedido
              </FormSubTitle>
            </div>
          </FormHeader>
          <FormContainer>
            <CepInput placeholder="CEP" />
          </FormContainer>
        </CheckoutCard>
        <CheckoutCard></CheckoutCard>
      </CheckoutCardContainer>

      <CheckoutCardContainer>
        <CardTitle>Cafés selecionados</CardTitle>
        <CoffeCard>a</CoffeCard>
      </CheckoutCardContainer>
    </CheckoutContainer>
  )
}
