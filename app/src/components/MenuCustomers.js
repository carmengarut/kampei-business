import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import blendedDrinks from '../public/blendedDrinks.png'
import beers from '../public/beer.jpeg'
import softDrinks from '../public/soda.jpeg'

import '../css/menuCustomers.css'
import { itemInit } from '../reducers/itemReducer'
import { orderInit } from '../reducers/orderReducer'

export default function MenuCustomers () {
  const { id } = useParams()
  const history = useHistory()
  const { t } = useTranslation('global')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(itemInit(id))
    const currentOrder = JSON.parse(window.localStorage.getItem('currentOrder'))
    if (currentOrder) {
      console.log(currentOrder)
      console.log(currentOrder.business === id)
      if (currentOrder.business === id) {
        console.log('entra4')
        dispatch(orderInit(currentOrder))
      } else {
        dispatch(orderInit({ business: id, items: [] }))
      }
    } else {
      dispatch(orderInit({ business: id, items: [] }))
    }
  }, [])

  const currentOrder = useSelector(state => state.currentOrder)

  if (!currentOrder.items) return null
  return (
    <div className='mc-container'>
      <div className='mc-title'>{t('menu_customers.menu')}</div>

      <button onClick={() => history.push(`/menu/${id}/blendedDrinks`)} className='mc-box'>
        <div>
          {t('menu_customers.blended_drinks')}
        </div>
        <img
          alt=''
          src={blendedDrinks}
          width='60'
          height='60'
        />
      </button>
      <button onClick={() => history.push(`/menu/${id}/beers`)} className='mc-box'>
        <div>
          {t('menu_customers.beers')}
        </div>
        <img
          alt=''
          src={beers}
          width='60'
          height='60'
        />
      </button>
      <button onClick={() => history.push(`/menu/${id}/softDrinks`)} className='mc-box'>
        <div>
          {t('menu_customers.soft_drinks')}
        </div>
        <img
          alt=''
          src={softDrinks}
          width='60'
          height='60'
        />
      </button>
      {currentOrder.items.length > 0
        ? (
          <button onClick={() => history.push(`/menu/${id}/cart`)} className='mc-button'>{t('menu_customers.see_cart')} ({currentOrder.items.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.count
          }, 0)})
          </button>)
        : null}
      {/* <Modal
        action={() => {
          dispatch(hideModal())
        }}
        displayCancelButton='none'
        buttonName={t('menu.accept')}
      >
        <img
          alt=''
          src={successIcon}
          width='100'
          height='100'
        />
        <h6>{t('menu.menu_created')}</h6>
        {t('menu.successfully_created')}
      </Modal> */}
    </div>
  )
}
