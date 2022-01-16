import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import plus from '../public/plus.svg'
import minus from '../public/minus.svg'

import '../css/editCartItem.css'
import { itemInit } from '../reducers/itemReducer'
import { orderAddItem, orderInit, orderRemoveItem } from '../reducers/orderReducer'
import FontAwesome from 'react-fontawesome'
// import { orderAddItem, orderRemoveItem } from '../reducers/orderReducer'

const EditCartItem = () => {
  const { id, businessId } = useParams()
  const dispatch = useDispatch()
  const { t } = useTranslation('global')

  useEffect(() => {
    dispatch(itemInit(businessId))
    const currentOrder = JSON.parse(window.localStorage.getItem('currentOrder'))
    if (currentOrder) {
      if (currentOrder.business === businessId) {
        dispatch(orderInit(currentOrder))
      } else {
        dispatch(orderInit({ business: businessId, items: [] }))
      }
    } else {
      dispatch(orderInit({ business: businessId, items: [] }))
    }
  }, [])

  const history = useHistory()
  const currentOrder = useSelector(state => state.currentOrder)
  const [counter, setCounter] = useState(currentOrder.items
    ? currentOrder.items.find(orderItem => orderItem.id === id).count
    : 0)
  const item = useSelector(state => state.items).find(item => item.id === id)

  useEffect(() => {
    if (currentOrder.items) {
      setCounter(currentOrder.items.find(orderItem => orderItem.id === id).count)
    }
  }, [currentOrder])
  const handleClick = () => {
    dispatch(orderRemoveItem(id))
    dispatch(orderAddItem({
      id,
      count: counter
    }))
    history.push(`/menu/${item.business.id}/cart`)
  }

  const removeItem = () => {
    dispatch(orderRemoveItem(id))
    history.push(`/menu/${item.business.id}/cart`)
  }

  if (!item) return null
  return (
    <div className='eci-container'>
      <div className='eci-title-container'>
        <FontAwesome onClick={() => { history.push(`/menu/${businessId}/cart`) }} name='arrow-left' size='2x' style={{ color: '#8B5CF6' }} />
        <div className='eci-title'>{item.name}</div>
      </div>
      <div className='eci-box'>
        <div className='eci-image-container'>
          <img
            src={item.image}
            width='auto'
            height='150'
          />
        </div>

        <div className='eci-name'>
          {item.name}
        </div>
        <div className='eci-price'>{item.price} €</div>
        <div className='eci-counter-container'>
          <img
            type='button'
            src={minus}
            width='50'
            height='50'
            onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}
            className='eci-counter-button'
          />
          <div className='eci-counter'>{counter}</div>
          <img
            type='button'
            src={plus}
            width='50'
            height='50'
            onClick={() => setCounter(counter + 1)}
            className='eci-counter-button'
          />
        </div>
        <button onClick={removeItem} className='eci-remove-button'>{t('edit_cart_item.remove_item')}</button>

      </div>
      <button onClick={handleClick} className='eci-button'>{t('edit_cart_item.update_cart')}</button>
    </div>
  )
}

export default EditCartItem
