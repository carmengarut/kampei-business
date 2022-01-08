import { orderAlphabetically } from '../helpers/sort'
import { createItem, deleteItem, getAllItems, updateItem } from '../services/items'
import { showModal } from './modalReducer'

const initialState = []

export const itemReducer = (state = initialState, action) => {
  if (action.type === '@items/init') {
    const items = action.payload
    items.sort(orderAlphabetically)
    return items
  }

  if (action.type === '@items/created') {
    return [...state, action.payload]
  }

  // if (action.type === '@items/sign') {
  //   const itemUpdated = action.payload
  //   const items = state.map(item => {
  //     if (item.id === itemUpdated.id) {
  //       return {
  //         ...item,
  //         signedBy: itemUpdated.signedBy
  //       }
  //     }
  //     return item
  //   })
  //   items.sort(compareFunction)
  //   return items
  // }

  if (action.type === '@items/edit') {
    const itemUpdated = action.payload
    const items = state.map(item => {
      if (item.id === itemUpdated.id) {
        return {
          ...item,
          ...itemUpdated
        }
      }
      return item
    })
    items.sort(orderAlphabetically)
    return items
  }

  // if (action.type === '@blogs/add_comment') {
  //   console.log(action.payload)
  //   const { savedComment, id } = action.payload
  //   const blogs = state.map(blog => {
  //     if (blog.id === id) {
  //       return {
  //         ...blog,
  //         comments: [...blog.comments, {
  //           content: savedComment.content,
  //           id: savedComment.id
  //         }]
  //       }
  //     }
  //     return blog
  //   })
  //   return blogs
  // }

  if (action.type === '@items/deleted') {
    const { id } = action.payload
    const items = state.filter(item => item.id !== id)
    return items
  }

  return state
}

export const itemInit = () => {
  return async (dispatch) => {
    const items = await getAllItems()
    dispatch({
      type: '@items/init',
      payload: items
    })
  }
}

export const addNewItem = item => {
  return async (dispatch) => {
    try {
      const newItem = await createItem(item)
      dispatch(showModal())
      dispatch({
        type: '@items/created',
        payload: newItem
      })
    } catch (e) {
      console.error(e)
      console.error(e.message)
    }
  }
}

// export const signItem = (id, users) => {
//   return async (dispatch) => {
//     const itemUpdated = await sign(id, users)
//     dispatch({
//       type: '@items/sign',
//       payload: itemUpdated
//     })
//   }
// }

export const editItem = (id, object) => {
  return async (dispatch) => {
    const itemUpdated = await updateItem(id, object)
    dispatch(showModal())
    dispatch({
      type: '@items/edit',
      payload: itemUpdated
    })
  }
}

export const removeItem = id => {
  return async (dispatch) => {
    await deleteItem(id)
    dispatch(showModal())
    dispatch({
      type: '@items/deleted',
      payload: { id }
    })
  }
}
