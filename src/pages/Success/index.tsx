import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import React from 'react'
import { useTheme } from 'styled-components'
import { IconList } from '../../components/IconList'

import {
  OrderCard,
  Row,
  SuccessContainer,
  SuccessHeader,
  SuccessSubTitle,
  SuccessTitle,
} from './styles'

export const Success: React.FC = () => {
  const theme = useTheme()
  return (
    <SuccessContainer>
      <div>
        <SuccessHeader>
          <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
          <SuccessSubTitle>
            Agora é só aguardar que logo o café chegará até você
          </SuccessSubTitle>
        </SuccessHeader>
        <OrderCard>
          <Row>
            <IconList bgColor="PURPLE">
              <MapPin weight="fill" color={theme.COLORS.WHITE} />
            </IconList>
            <div>
              <p>
                Entrega em <b>Rua Major Santos Silva, 19</b>
              </p>
              <p>Embaré - Santos, SP</p>
            </div>
          </Row>
          <Row>
            <IconList bgColor="YELLOW">
              <Timer weight="fill" color={theme.COLORS.WHITE} />
            </IconList>
            <div>
              <p>Previsão de entrega</p>
              <b>Embaré - Santos, SP</b>
            </div>
          </Row>
          <Row>
            <IconList bgColor="YELLOW-DARK">
              <CurrencyDollar weight="fill" color={theme.COLORS.WHITE} />
            </IconList>
            <div>
              <p>Pagamento na entrega</p>
              <b>Cartão de Crédito</b>
            </div>
          </Row>
        </OrderCard>
      </div>
      <img src="public/assets/delivery.svg" alt="" />
    </SuccessContainer>
  )
}
