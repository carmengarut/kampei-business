import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import SectionTitle from './components/SectionTitle'
import Order from './components/Order'

import { ordersInit } from './reducers/ordersReducer'

import './css/orders.css'

export default function Orders () {
  const { t } = useTranslation('global')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ordersInit())
  }, [])

  const orders = useSelector(state => state.orders)

  if (!orders[0]) return null

  return (
    <div className='o-container'>
      <SectionTitle>
        {t('orders.orders')}
      </SectionTitle>

      {orders.map((order, key) =>
        <Order order={order} key={key} />)}

    </div>
  )
}
