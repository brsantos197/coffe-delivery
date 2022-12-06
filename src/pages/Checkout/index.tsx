import {
  Bank,
  CreditCard,
  CurrencyDollar,
  IconContext,
  MapPinLine,
  Money,
  ShoppingCart,
  Trash,
} from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { Counter } from '../../components/Counter'
import { CoffeContext } from '../../context/CoffeContext.ctx'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

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
  EmptyCartMessage,
  EmptyCartMessageContainer,
} from './styles'
import { useNavigate } from 'react-router-dom'

const newAddressFormValidationSchema = zod.object({
  cep: zod
    .string()
    .regex(/(\d{5})-\d{3}/, 'Insira um CEP válido')
    .length(9),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string(),
  district: zod.string(),
  city: zod.string(),
  state: zod
    .string()
    .min(2)
    .max(2)
    .transform((val) => val.toUpperCase()),
  formPayment: zod.string(),
})

export type AddressFormData = zod.infer<typeof newAddressFormValidationSchema>

export const Checkout = () => {
  const { cart, removeCoffeCart, clearCart } = useContext(CoffeContext)
  const theme = useTheme()

  const navigate = useNavigate()

  const { register, handleSubmit, watch, reset } = useForm<AddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      cep: '',
      city: '',
      complement: '',
      district: '',
      formPayment: 'credit',
      number: '',
      state: '',
      street: '',
    },
  })

  const formPayment = watch('formPayment')

  const taxDelivery = 5
  const totalCart = cart.coffes.reduce(
    (total, coffe) => (total += coffe.price * coffe.quantity),
    0,
  )

  const handleRegisterAddress = (data: any) => {
    localStorage.setItem('@coffe-delivery:address-1.0.0', JSON.stringify(data))
    reset()
    navigate('/success')
    clearCart()
  }

  return (
    <CheckoutContainer
      id="addressForm"
      onSubmit={handleSubmit(handleRegisterAddress)}
    >
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
            <BaseInput placeholder="CEP" {...register('cep')} />
            <AddressInput placeholder="Rua" {...register('street')} required />
            <Row>
              <BaseInput placeholder="Número" {...register('number')} />
              <OptionalInputContainer>
                <OptionalInput
                  placeholder="Complemento"
                  {...register('complement')}
                />
                <OptionalInputLabel>Opcional</OptionalInputLabel>
              </OptionalInputContainer>
            </Row>
            <Row>
              <BaseInput
                placeholder="Bairro"
                {...register('district')}
                required
              />
              <CityInput placeholder="Cidade" {...register('city')} required />
              <StateInput placeholder="UF" {...register('state')} required />
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
              <ButtonPaymentSelect active={formPayment === 'credit'}>
                <CreditCard />
                <input
                  type="radio"
                  value="credit"
                  {...register('formPayment')}
                />
                <p>cartão de crédito</p>
              </ButtonPaymentSelect>
              <ButtonPaymentSelect active={formPayment === 'debit'}>
                <Bank />
                <input
                  type="radio"
                  value="debit"
                  {...register('formPayment')}
                />
                <p>cartão de débito</p>
              </ButtonPaymentSelect>
              <ButtonPaymentSelect active={formPayment === 'money'}>
                <Money />
                <input
                  type="radio"
                  value="money"
                  {...register('formPayment')}
                />
                <p>dinheiro</p>
              </ButtonPaymentSelect>
            </Row>
          </IconContext.Provider>
        </CheckoutCard>
      </CheckoutCardContainer>
      <CheckoutCardContainer>
        <CardTitle>Cafés selecionados</CardTitle>
        <CartContainer>
          {cart.coffes.length ? (
            <>
              {cart.coffes.map((coffe, index) => (
                <div key={`${coffe.id}-${index}`}>
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
                            coffeId={index}
                            quantity={coffe.quantity}
                            type="cart"
                          />
                          <RemoveButton
                            type="button"
                            onClick={() => removeCoffeCart(index)}
                          >
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
              ))}
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
              <ConfirmButton type="submit" form="addressForm">
                confirmar pedido
              </ConfirmButton>
            </>
          ) : (
            <EmptyCartMessageContainer>
              <ShoppingCart size={72} />
              <EmptyCartMessage>Carrinho Vazio</EmptyCartMessage>
            </EmptyCartMessageContainer>
          )}
        </CartContainer>
      </CheckoutCardContainer>
    </CheckoutContainer>
  )
}
