import { createContext, ReactNode, useReducer } from 'react'
import {
  addCoffeToCartAction,
  updateCoffeQuantityAction,
} from '../reducers/coffes/actions'
import { Cart, coffesReducer, CoffeType } from '../reducers/coffes/reducer'

interface CoffeContextType {
  coffes: CoffeType[]
  cart: Cart
  addCoffeToCart: (newCoffe: CoffeType) => void
  updateCoffeQuantity: (
    coffeId: number,
    quantity: number,
    type: 'list' | 'cart',
  ) => void
}

interface CoffeContextProviderProps {
  children: ReactNode
}
export const CoffeContext = createContext({} as CoffeContextType)

export const CoffeContextProvider = ({
  children,
}: CoffeContextProviderProps) => {
  const [coffesState, dispatch] = useReducer(coffesReducer, {
    coffes: [
      {
        id: 1,
        image: 'public/assets/expresso-tradicional.png',
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        specifications: ['Tradicional'],
        price: 4.9,
        quantity: 1,
      },
      {
        id: 2,
        image: 'public/assets/expresso-americano.png',
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        specifications: ['Tradicional'],
        price: 4.9,
        quantity: 1,
      },
      {
        id: 3,
        image: 'public/assets/expresso-cremoso.png',
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        specifications: ['Tradicional'],
        price: 4.9,
        quantity: 1,
      },
      {
        id: 4,
        image: 'public/assets/expresso-gelado.png',
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        specifications: ['Tradicional', 'Gelado'],
        price: 4.9,
        quantity: 1,
      },
      {
        id: 5,
        image: 'public/assets/cafe-leite.png',
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        specifications: ['Tradicional', 'Com leite'],
        price: 7.9,
        quantity: 1,
      },
      {
        id: 6,
        image: 'public/assets/latte.png',
        name: 'Latte',
        description:
          'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        specifications: ['Tradicional', 'Com leite'],
        price: 8.9,
        quantity: 1,
      },
      {
        id: 7,
        image: 'public/assets/capuccino.png',
        name: 'Capuccino',
        description:
          'Bebida com canela feita de doses iguais de café, leite e espuma',
        specifications: ['Tradicional', 'Com leite'],
        price: 9.9,
        quantity: 1,
      },
      {
        id: 8,
        image: 'public/assets/macchiato.png',
        name: 'Macchiato',
        description:
          'Café expresso misturado com um pouco de leite quente e espuma',
        specifications: ['Tradicional', 'Com leite'],
        price: 8.9,
        quantity: 1,
      },
      {
        id: 9,
        image: 'public/assets/mocaccino.png',
        name: 'Mocaccino',
        description:
          'Café expresso com calda de chocolate, pouco leite e espuma',
        specifications: ['Tradicional', 'Com leite'],
        price: 10.9,
        quantity: 1,
      },
      {
        id: 10,
        image: 'public/assets/chocolate-quente.png',
        name: 'Chocolate Quente',
        description:
          'Bebida feita com chocolate dissolvido no leite quente e café',
        specifications: ['Tradicional', 'Com leite'],
        price: 10.9,
        quantity: 1,
      },
      {
        id: 11,
        image: 'public/assets/cubano.png',
        name: 'Cubano',
        description:
          'Drink gelado de café expresso com rum, creme de leite e hortelã',
        specifications: ['Especial', 'Alcoólico', 'Gelado'],
        price: 13.9,
        quantity: 1,
      },
      {
        id: 12,
        image: 'public/assets/havaiano.png',
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        specifications: ['Especial'],
        price: 10.9,
        quantity: 1,
      },
      {
        id: 13,
        image: 'public/assets/arabe.png',
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        specifications: ['Especial'],
        price: 11.9,
        quantity: 1,
      },
      {
        id: 14,
        image: 'public/assets/irlandes.png',
        name: 'Irlandês',
        description:
          'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        specifications: ['Especial', 'Alcoólico'],
        price: 14.9,
        quantity: 1,
      },
    ],
    cart: {
      coffes: [],
      taxDelivery: 0,
      total: 0,
    },
  })

  const addCoffeToCart = (newCoffe: CoffeType) => {
    dispatch(addCoffeToCartAction(newCoffe))
  }

  const updateCoffeQuantity = (
    coffeId: number,
    quantity: number,
    type: 'list' | 'cart',
  ) => {
    dispatch(updateCoffeQuantityAction(coffeId, quantity, type))
  }

  return (
    <CoffeContext.Provider
      value={{
        coffes: coffesState.coffes,
        cart: coffesState.cart,
        addCoffeToCart,
        updateCoffeQuantity,
      }}
    >
      {children}
    </CoffeContext.Provider>
  )
}
