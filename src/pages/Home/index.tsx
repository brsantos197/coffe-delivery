import React, { useContext } from 'react'

import {
  AddToCartButton,
  CoffeActions,
  CoffeDescription,
  CoffeFooter,
  CoffeItemList,
  CoffeList,
  CoffeListContainer,
  CoffeName,
  CoffeSpecification,
  CoffeSpecificationContainer,
  HomeContainer,
  HomeIntro,
  IntroItems,
  IntroSubTitle,
  IntroTitle,
  ItemList,
  ListTitle,
  Price,
  Symbol,
} from './styles'

import { IconList } from '../../components/IconList'
import {
  Coffee,
  IconContext,
  Package,
  ShoppingCart,
  Timer,
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Counter } from '../../components/Counter'
import { CoffeContext } from '../../context/CoffeContext.ctx'

export const Home: React.FC = () => {
  const { coffes, addCoffeToCart } = useContext(CoffeContext)
  const theme = useTheme()
  return (
    <HomeContainer>
      <HomeIntro>
        <div>
          <IntroTitle>
            Encontre o café perfeito para qualquer hora do dia
          </IntroTitle>
          <IntroSubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </IntroSubTitle>
          <IconContext.Provider
            value={{
              color: theme.COLORS.WHITE,
              size: 16,
              weight: 'fill',
            }}
          >
            <IntroItems>
              <ItemList>
                <IconList bgColor="YELLOW-DARK">
                  <ShoppingCart />
                </IconList>
                Compra simples e segura
              </ItemList>
              <ItemList>
                <IconList bgColor="BASE-TEXT">
                  <Package />
                </IconList>
                Embalagem mantém o café intacto
              </ItemList>
              <ItemList>
                <IconList bgColor="YELLOW">
                  <Timer />
                </IconList>
                Entrega rápida e rastreada
              </ItemList>
              <ItemList>
                <IconList bgColor="PURPLE">
                  <Coffee />
                </IconList>
                O café chega fresquinho até você
              </ItemList>
            </IntroItems>
          </IconContext.Provider>
        </div>
        <img src="public/assets/title-image.png" alt="Imagem de introdução" />
      </HomeIntro>
      <CoffeListContainer>
        <ListTitle>Nossos cafés</ListTitle>
        <CoffeList>
          {coffes.map((coffe) => (
            <CoffeItemList key={coffe.name}>
              <img
                src={coffe.image}
                alt={`${coffe.name} imagem`}
                width={120}
                height={120}
              />
              <CoffeSpecificationContainer>
                {coffe.specifications.map((specification) => (
                  <CoffeSpecification key={specification}>
                    {specification}
                  </CoffeSpecification>
                ))}
              </CoffeSpecificationContainer>
              <CoffeName>{coffe.name}</CoffeName>
              <CoffeDescription>{coffe.description}</CoffeDescription>
              <CoffeFooter>
                <div>
                  <Symbol>R$ </Symbol>
                  <Price>
                    {(coffe.price * coffe.quantity)
                      .toFixed(2)
                      .replaceAll('.', ',')}
                  </Price>
                </div>
                <CoffeActions>
                  <Counter coffeId={coffe.id} quantity={coffe.quantity} />
                  <AddToCartButton onClick={() => addCoffeToCart(coffe)}>
                    <ShoppingCart size={22} weight="fill" />
                  </AddToCartButton>
                </CoffeActions>
              </CoffeFooter>
            </CoffeItemList>
          ))}
        </CoffeList>
      </CoffeListContainer>
    </HomeContainer>
  )
}
