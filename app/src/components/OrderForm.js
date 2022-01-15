import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import SectionTitle from './SectionTitle'

import '../css/orders.css'
import { editOrder, ordersInit } from '../reducers/ordersReducer'
import Order from './Order'

const OrderForm = () => {
  const { t } = useTranslation('global')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ordersInit())
  }, [])

  const orders = useSelector(state => state.orders)

  const handleClick = (id) => {
    dispatch(editOrder(id, { status: 'served' }))
  }

  if (!orders) return null

  return (
    <div className='o-container'>
      <SectionTitle>
        {t('orders.orders')}
      </SectionTitle>

      {orders.filter(order => order.status !== 'served').map((order, key) =>
        <Order order={order} key={key} handleClick={() => { handleClick(order.id) }} />)}

    </div>
  )
}

export default OrderForm
