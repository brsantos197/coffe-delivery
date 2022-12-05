import {
  Bank,
  CreditCard,
  CurrencyDollar,
  IconContext,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import React, { useContext } from 'react'
import { useTheme } from 'styled-components'
import { Counter } from '../../components/Counter'
import { CoffeContext } from '../../context/CoffeContext.ctx'

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

export const Checkout = () => {
  const { cart } = useContext(CoffeContext)
  const theme = useTheme()

  const taxDelivery = 5
  const totalCart = cart.coffes.reduce(
    (total, coffe) => (total += coffe.price * coffe.quantity),
    0,
  )
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
          {cart.coffes.length
            ? cart.coffes.map((coffe) => (
                <div key={coffe.id}>
                  <CartItem>
                    <ItemDetails>
                      <img
                        src={coffe.image}
                        alt={`${coffe.name} imagem`}
                        width={64}
                        height={64}
                      />
                      <div>
                        <ItemName>{coffe.name}</ItemName>
                        <RowCart>
                          <Counter
                            coffeId={coffe.id}
                            quantity={coffe.quantity}
                            type="cart"
                          />
                          <RemoveButton>
                            <Trash size={16} color={theme.COLORS.PURPLE} />{' '}
                            Remover
                          </RemoveButton>
                        </RowCart>
                      </div>
                    </ItemDetails>
                    <CartItemPrice>
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(coffe.price * coffe.quantity)}
                    </CartItemPrice>
                  </CartItem>
                  <Divider />
                </div>
              ))
            : null}
          <CartFooter>
            <RowCartFooter>
              <p>Total</p>
              <span>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(totalCart)}
              </span>
            </RowCartFooter>
            <RowCartFooter>
              <p>Entrega</p>
              <span>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(taxDelivery)}
              </span>
            </RowCartFooter>
            <RowCartFooterTotal>
              <p>Total</p>
              <span>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(taxDelivery + totalCart)}
              </span>
            </RowCartFooterTotal>
          </CartFooter>
          <ConfirmButton to="/success">confirmar pedido</ConfirmButton>
        </CartContainer>
      </CheckoutCardContainer>
    </CheckoutContainer>
  )
}
