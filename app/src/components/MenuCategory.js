import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import '../css/menuCategory.css'
import { itemInit } from '../reducers/itemReducer'
import { orderInit } from '../reducers/orderReducer'
import FontAwesome from 'react-fontawesome'

export default function MenuCategory () {
  const { id, category } = useParams()
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

  const currentOrder = useSelector(state => state.currentOrder)
  const items = useSelector(state => state.items).filter(item => item.category === category)

  return (
    <div className='mca-container'>
      <div className='mca-title-container'>
        <FontAwesome onClick={() => { history.push(`/menu/${id}`) }} name='arrow-left' size='2x' style={{ color: '#8B5CF6' }} />
        <div className='mca-title'>{t('menu_category.' + category)}</div>
      </div>
      {items.filter(item => item.subcategory !== 'soda').map((item, key) =>
        <button
          onClick={() => {
            return category === 'blendedDrinks'
              ? history.push(`/menu/${id}/blendedDrinks/${item.id}`)
              : history.push(`/menu/${id}/item/${item.id}`)
          }}
          key={key}
          className='mca-box'
        >
          <div className='mca-content'>

            <div>
              {item.name}
            </div>
            <div className='mca-price'>
              {item.price} €
            </div>
          </div>
          <div className='mca-image-container'>
            {currentOrder.items.find(orderItem => orderItem.id === item.id)
              ? (
                <div className='mca-counter'>{currentOrder.items.filter(orderItem => orderItem.id === item.id).reduce((previousValue, currentValue) => {
                  return previousValue + currentValue.count
                }, 0)}
                </div>)
              : null}

            <img
              alt=''
              src={item.image}
              width='60'
              height='60'
            />
          </div>
        </button>)}
      {currentOrder.items.length > 0
        ? (
          <button onClick={() => history.push(`/menu/${id}/cart`)} className='mca-button'>{t('menu_category.see_cart')} ({currentOrder.items.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.count
          }, 0)})
          </button>)
        : null}

    </div>
  )
}
