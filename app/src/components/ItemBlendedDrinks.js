import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import plus from '../public/plus.svg'
import minus from '../public/minus.svg'

import '../css/item.css'
import { itemInit } from '../reducers/itemReducer'
import { orderAddItem, orderInit } from '../reducers/orderReducer'
import FontAwesome from 'react-fontawesome'
import Dropdown from './Dropdown'
// import { orderAddItem, orderRemoveItem } from '../reducers/orderReducer'

const ItemBlendedDrinks = () => {
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
  const [counter, setCounter] = useState(1)
  const items = useSelector(state => state.items)
  const item = useSelector(state => state.items).find(item => item.id === id)

  const [dropdownList, setDropdownList] = useState(items.filter(item => item.subcategory === 'soda').map((item, key) => {
    return {
      id: key,
      title: item.name.slice(0, -7),
      selected: false,
      key: 'subitem',
      value: item.id
    }
  }

  ))

  const resetThenSet = (id, key) => {
    setDropdownList(prev => {
      prev.forEach(item => { item.selected = false })
      prev[id].selected = true
      return prev
    })
  }
  const handleClick = () => {
    const subitemId = dropdownList.find(item => item.selected === true).value
    dispatch(orderAddItem({
      id,
      count: counter,
      subitemId
    }))
    history.push(`/menu/${item.business.id}`)
  }
  if (!item) return null
  return (
    <div className='i-container'>
      <div className='i-title-container'>
        <FontAwesome onClick={() => { history.push(`/menu/${businessId}/${item.category}`) }} name='arrow-left' size='2x' style={{ color: '#8B5CF6' }} />
        <div className='i-title'>{item.name}</div>
      </div>
      <div className='i-box'>
        <div className='i-image-container'>
          <img
            src={item.image}
            width='auto'
            height='150'
          />
        </div>

        <div className='i-name'>
          {item.name}
        </div>
        <div className='i-price'>{item.price} €</div>

        <Dropdown title={t('item.select_mix')} list={dropdownList} resetThenSet={resetThenSet} />
        <div className='i-counter-container'>
          <img
            type='button'
            src={minus}
            width='50'
            height='50'
            onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}
            className='i-counter-button'
          />
          <div className='i-counter'>{counter}</div>
          <img
            type='button'
            src={plus}
            width='50'
            height='50'
            onClick={() => setCounter(counter + 1)}
            className='i-counter-button'
          />
        </div>

      </div>
      <button onClick={handleClick} className='i-button'>{t('item.add')} {counter} {t('item.to_cart')}</button>
    </div>
  )
}

export default ItemBlendedDrinks
