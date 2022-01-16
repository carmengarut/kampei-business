import { orderAlphabetically } from '../helpers/sort'

const initialState = {}

export const orderReducer = (state = initialState, action) => {
  if (action.type === '@order/init') {
    const currentOrder = action.payload
    return currentOrder
  }

  if (action.type === '@order/add-item') {
    const item = action.payload
    const newState = {
      ...state,
      items: state.items.concat(item).sort(orderAlphabetically)
    }

    window.localStorage.setItem(
      'currentOrder', JSON.stringify(newState)
    )
    return newState
  }

  if (action.type === '@order/remove-item') {
    const itemId = action.payload
    const newState = {
      ...state,
      items: state.items.filter(item => item.id !== itemId)
    }
    window.localStorage.setItem('currentOrder', JSON.stringify(newState))
    return newState
  }

  if (action.type === '@order/remove') {
    window.localStorage.removeItem('currentOrder')
    return {}
  }

  return state
}

export const orderInit = (currentOrder) => {
  return {
    type: '@order/init',
    payload: currentOrder
  }
}

export const orderAddItem = (item) => {
  return {
    type: '@order/add-item',
    payload: item
  }
}

export const orderRemoveItem = (itemId) => {
  return {
    type: '@order/remove-item',
    payload: itemId
  }
}

export const removeOrder = () => {
  return {
    type: '@order/remove'
  }
}
