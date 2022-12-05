import {
  Bank,
  CreditCard,
  CurrencyDollar,
  IconContext,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import React from 'react'
import { useTheme } from 'styled-components'
import { Counter } from '../../components/Counter'
import { coffes } from '../Home/coffes'

import {
  CardTitle,
  CheckoutCard,
  CheckoutCardContainer,
  CheckoutContainer,
  FormContainer,
  FormHeader,
  FormSubTitle,
  FormTitle,
  AddressInput,
  BaseInput,
  Row,
  OptionalInput,
  OptionalInputContainer,
  OptionalInputLabel,
  CityInput,
  StateInput,
  ButtonPaymentSelect,
  CartContainer,
  CartItem,
  ItemDetails,
  ItemName,
  RowCart,
  RemoveButton,
  CartItemPrice,
  Divider,
  CartFooter,
  RowCartFooter,
  RowCartFooterTotal,
  ConfirmButton,
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
            <BaseInput placeholder="CEP" />
            <AddressInput placeholder="Rua" />
            <Row>
              <BaseInput placeholder="Número" />
              <OptionalInputContainer>
                <OptionalInput placeholder="Complemento" />
                <OptionalInputLabel>Opcional</OptionalInputLabel>
              </OptionalInputContainer>
            </Row>
            <Row>
              <BaseInput placeholder="Bairro" />
              <CityInput placeholder="Cidade" />
              <StateInput placeholder="UF" />
            </Row>
          </FormContainer>
        </CheckoutCard>
        <CheckoutCard>
          <IconContext.Provider
            value={{
              color: theme.COLORS.PURPLE,
              size: 16,
            }}
          >
            <FormHeader>
              <CurrencyDollar size={22} />
              <div>
                <FormTitle>Pagamento</FormTitle>
                <FormSubTitle>
                  Informe o endereço onde deseja receber seu pedido
                </FormSubTitle>
              </div>
            </FormHeader>
            <Row>
              <ButtonPaymentSelect>
                <CreditCard />
                <p>cartão de crédito</p>
              </ButtonPaymentSelect>
              <ButtonPaymentSelect>
                <Bank />
                <p>cartão de débito</p>
              </ButtonPaymentSelect>
              <ButtonPaymentSelect active>
                <Money />
                <p>dinheiro</p>
              </ButtonPaymentSelect>
            </Row>
          </IconContext.Provider>
        </CheckoutCard>
      </CheckoutCardContainer>

      <CheckoutCardContainer>
        <CardTitle>Cafés selecionados</CardTitle>
        <CartContainer>
          <CartItem>
            <ItemDetails>
              <img
                src={coffes[0].image}
                alt={`${coffes[0].name} imagem`}
                width={64}
                height={64}
              />
              <div>
                <ItemName>{coffes[0].name}</ItemName>
                <RowCart>
                  <Counter quantity={coffes[0].quantity} />
                  <RemoveButton>
                    <Trash size={16} color={theme.COLORS.PURPLE} /> Remover
                  </RemoveButton>
                </RowCart>
              </div>
            </ItemDetails>
            <CartItemPrice>R$ {coffes[0].price}</CartItemPrice>
          </CartItem>
          <Divider />
          <CartItem>
            <ItemDetails>
              <img
                src={coffes[5].image}
                alt={`${coffes[5].name} imagem`}
                width={64}
                height={64}
              />
              <div>
                <ItemName>{coffes[5].name}</ItemName>
                <RowCart>
                  <Counter quantity={coffes[5].quantity} />
                  <RemoveButton>
                    <Trash size={16} color={theme.COLORS.PURPLE} /> Remover
                  </RemoveButton>
                </RowCart>
              </div>
            </ItemDetails>
            <CartItemPrice>R$ {coffes[5].price}</CartItemPrice>
          </CartItem>
          <Divider />
          <CartFooter>
            <RowCartFooter>
              <p>Total</p>
              <span>R$ 13,80</span>
            </RowCartFooter>
            <RowCartFooter>
              <p>Entrega</p>
              <span>R$ 5,00</span>
            </RowCartFooter>
            <RowCartFooterTotal>
              <p>Total</p>
              <span>R$ 18,80</span>
            </RowCartFooterTotal>
          </CartFooter>
          <ConfirmButton>confirmar pedido</ConfirmButton>
        </CartContainer>
      </CheckoutCardContainer>
    </CheckoutContainer>
  )
}
