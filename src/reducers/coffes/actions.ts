import { CoffeType } from './reducer'
export enum ActionTypes {
  ADD_COFFE_TO_CART = 'ADD_COFFE_TO_CART',
  UPDATE_COFFE_QUANTITY = 'UPDATE_COFFE_QUANTITY',
  REMOVE_ITEM_COFFE = 'REMOVE_ITEM_COFFE',
  CLEAR_CART = 'CLEAR_CART',
}

export const addCoffeToCartAction = (newCoffe: CoffeType) => {
  return {
    type: ActionTypes.ADD_COFFE_TO_CART,
    payload: {
      newCoffe,
    },
  }
}
export const updateCoffeQuantityAction = (
  coffeId: number,
  quantity: number,
  type: 'list' | 'cart',
) => {
  return {
    type: ActionTypes.UPDATE_COFFE_QUANTITY,
    payload: {
      coffeId,
      quantity,
      type,
    },
  }
}
export const removeCoffeCartAction = (coffeCartId: number) => {
  return {
    type: ActionTypes.REMOVE_ITEM_COFFE,
    payload: {
      coffeCartId,
    },
  }
}

export const clearCartAction = () => {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}
