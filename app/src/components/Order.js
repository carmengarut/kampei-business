
import FontAwesome from 'react-fontawesome'
import '../css/order.css'

export default function Order ({ order, handleClick }) {
  return (
    <div className='or-container'>
      <div className='or-left-block'>
        <div className='or-order-title'>Pedido nº XX</div>
        {order.items.map((orderObject, key) => (
          <div key={key} className='or-item-container'>
            <div className='ci-count'>
              {orderObject.count}
            </div>
            <div>
              {orderObject.subitem
                ? orderObject.item.name + ' - ' + orderObject.subitem.name.slice(0, -7)
                : orderObject.item.name}
            </div>
          </div>
        ))}
      </div>
      {order.status !== 'served'
        ? (
          <button className='or-button' onClick={handleClick}>
            <FontAwesome name='check' style={{ color: '#ffffff' }} />
            {' '}
            Served
          </button>)
        : null}
    </div>
  )
}
