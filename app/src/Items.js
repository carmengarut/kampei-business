
import Notification from './components/Notification'
import Item from './components/Item'
import { useTranslation } from 'react-i18next'

import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import addItemIcon from './public/add-item-icon.svg'

import './css/items.css'

import SectionTitle from './components/SectionTitle'

function Items () {
  const business = useSelector(state => state.business)
  const items = useSelector(state => state.items)

  const history = useHistory()
  const { t } = useTranslation('global')

  return (
    <div className='i-container'>
      <SectionTitle>
        {t('items.menu')}
      </SectionTitle>
      <Notification />
      <div className='i-button-container'>
        <button onClick={() => history.push('/create-item')} className='i-button'>{t('items.new_item')}</button>
      </div>

      {items.filter(item => {
        if (item.business.id) return item.business.id === business.id
        return item.business === business.id
      }).length > 0
        ? items.filter(item => {
            if (item.business.id) return item.business.id === business.id
            return item.business === business.id
          }).map((item, i) =>
            <Item
              key={i}
              item={item}
            />
          )
        : (
          <div className='i-no-items-container'>
            <img
              alt=''
              src={addItemIcon}
              width='100'
              height='100'
            />
            <div className='i-no-items-text'>{t('items.no_items')}</div>
            <button onClick={() => history.push('/create-item')} className='i-button'>{t('items.new_item')}</button>
          </div>)}
    </div>
  )
}

export default Items
