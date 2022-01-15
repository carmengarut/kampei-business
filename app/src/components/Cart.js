import { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import '../css/cart.css'
import { itemInit } from '../reducers/itemReducer'
import CartItem from './CartItem'
import { orderInit, removeOrder } from '../reducers/orderReducer'
import FontAwesome from 'react-fontawesome'
import { addOrder } from '../services/items'

export default function Cart () {
  const { id } = useParams()
  const history = useHistory()
  const { t } = useTranslation('global')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(itemInit(id))
    const currentOrder = JSON.parse(window.localStorage.getItem('currentOrder'))
    if (currentOrder) {
      if (currentOrder.business === id) {
        dispatch(orderInit(currentOrder))
      } else {
        dispatch(orderInit({ business: id, items: [] }))
      }
    } else {
      dispatch(orderInit({ business: id, items: [] }))
    }
  }, [])

  const items = useSelector(state => state.items)
  const currentOrder = useSelector(state => state.currentOrder)

  const handleClick = async () => {
    const total = currentOrder.items.reduce((previousValue, currentValue) => {
      if (currentValue.subitemId) {
        return previousValue + items.find(item => item.id === currentValue.id).price * currentValue.count + items.find(item => item.id === currentValue.subitemId).price * currentValue.count
      } else {
        return previousValue + items.find(item => item.id === currentValue.id).price * currentValue.count
      }
    }, 0)

    const itemsList = currentOrder.items.map(item => {
      return { item: item.id, count: item.count, subitem: item.subitemId }
    })
    try {
      await addOrder({ businessId: currentOrder.business, itemsList, total })
      dispatch(removeOrder())
      history.push(`/menu/${id}`)
    } catch (e) {
      console.log(e.name)
      console.log(e.message)
    }
  }

  if (!items[0] || !currentOrder.items) return null

  return (
    <div className='ca-container'>
      <div className='ca-title-container'>
        <FontAwesome onClick={() => { history.push(`/menu/${id}`) }} name='arrow-left' size='2x' style={{ color: '#8B5CF6' }} />
        <div className='ca-title'>{t('cart.your_cart')}</div>
      </div>

      {currentOrder.items.map((orderItem, key) =>
        <CartItem orderItem={orderItem} key={key} />)}
      <div className='ca-subtotal'>
        <div>{t('cart.subtotal')}</div>
        <div>
          {
            currentOrder.items.reduce((previousValue, currentValue) => {
              if (currentValue.subitemId) {
                return previousValue + items.find(item => item.id === currentValue.id).price * currentValue.count + items.find(item => item.id === currentValue.subitemId).price * currentValue.count
              } else {
                return previousValue + items.find(item => item.id === currentValue.id).price * currentValue.count
              }
            }, 0)
        } €
        </div>
      </div>
      <button onClick={handleClick} className='ca-button'>{t('cart.checkout')}</button>
    </div>
  )
}
