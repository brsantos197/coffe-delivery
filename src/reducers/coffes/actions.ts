import { CoffeType } from './reducer'
export enum ActionTypes {
  ADD_COFFE_TO_CART = 'ADD_COFFE_TO_CART',
  UPDATE_COFFE_QUANTITY = 'UPDATE_COFFE_QUANTITY',
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
