import { useSelector } from 'react-redux'
import SectionTitle from './SectionTitle'
import Order from './Order'

import '../css/orders.css'

export default function OrdersSection () {
  const orders = useSelector(state => state.orders)
  return (
    <div className='o-container'>
      <SectionTitle>
        kl
      </SectionTitle>

      {orders.map((order, key) =>
        <Order order={order} key={key} />)}

    </div>
  )
}
