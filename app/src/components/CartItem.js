import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import '../css/cartItem.css'

export default function CartItem ({ orderItem }) {
  const item = useSelector(state => state.items).find(item => item.id === orderItem.id)
  const subitem = useSelector(state => state.items).find(item => item.id === orderItem.subitemId)
  const history = useHistory()
  return (

    <button onClick={() => history.push(`/menu/${item.business.id}/cart/${item.id}`)} className='ci-container'>
      <div className='ci-content'>
        <div className='ci-count'>
          {orderItem.count}
        </div>
        <div>
          {orderItem.subitemId
            ? item.name + ' - ' + subitem.name.slice(0, -7)
            : item.name}
        </div>
      </div>

      <div className='ci-price'>

        {(item.price + (subitem ? subitem.price : 0)) * orderItem.count} €
      </div>

    </button>

  )
}
