import React from 'react'
import { useHistory } from 'react-router-dom'

import '../css/item.css'

import avatar from '../public/avatar.svg'

const Item = ({ item }) => {
  const history = useHistory()

  return (
    <div className='TableRow' key={item.id} onClick={() => { history.push(`/items/${item.id}`) }}>

      <div className='ColumnMemberTitle'>
        <img
          src={avatar}
          width='30px'
          height='30px'
          className='Avatar'
        />
      </div>
      <div className='ColumnMember'>
        {item.title}
      </div>
    </div>
  )
}

export default Item
