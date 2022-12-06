import { produce } from 'immer'
import { ActionTypes } from './actions'
export interface CoffeType {
  id: number
  image: string
  name: string
  description: string
  specifications: string[]
  price: number
  quantity: number
}

export interface Cart {
  coffes: CoffeType[]
  taxDelivery: number
  total: number
}

export interface CoffesState {
  coffes: CoffeType[]
  cart: Cart
}

export const coffesReducer = (state: CoffesState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_COFFE_TO_CART:
      return produce(state, (draft) => {
        draft.cart.coffes.push(action.payload.newCoffe)
      })
    case ActionTypes.UPDATE_COFFE_QUANTITY:
      if (action.payload.quantity > 0) {
        return produce(state, (draft) => {
          const coffe =
            action.payload.type === 'list'
              ? draft.coffes.find((c) => c.id === action.payload.coffeId)
              : draft.cart.coffes[action.payload.coffeId]
          if (coffe) {
            coffe.quantity = action.payload.quantity
          }
        })
      } else {
        return { ...state }
      }
    case ActionTypes.REMOVE_ITEM_COFFE:
      return produce(state, (draft) => {
        draft.cart.coffes.splice(action.payload.coffeCartId, 1)
      })
    case ActionTypes.CLEAR_CART:
      return produce(state, (draft) => {
        draft.cart.coffes = []
      })
    default:
      return state
  }
}
