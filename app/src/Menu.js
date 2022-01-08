
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import SectionTitle from './components/SectionTitle'
import MenuSection from './components/MenuSection'
import Modal from './components/Modal'

import useItems from './hooks/useItems'

import { addNewItem } from './reducers/itemReducer'
import { hideModal } from './reducers/modalReducer'

import successIcon from './public/success-icon.svg'

import './css/menu.css'

export default function Menu () {
  const business = useSelector(state => state.business)
  const items = useSelector(state => state.items)

  const history = useHistory()
  const { t } = useTranslation('global')
  const dispatch = useDispatch()

  const { menu, setMenu } = useItems()

  const createMenu = (e) => {
    e.preventDefault()
    menu.filter(item => item.value === true).map(item => {
      return (items.find(it => it === item))
        ? null
        : dispatch(addNewItem(item))
    })
  }

  return (
    <div className='m-container'>
      <SectionTitle>
        {t('menu.menu')}
      </SectionTitle>

      {items.filter(item => {
        if (item.business.id) return item.business.id === business.id
        return item.business === business.id
      }).length > 0
        ? (
          <>
            <div className='m-button-container'>
              <button onClick={() => history.push('/edit-menu')} className='m-edit-button-top'>{t('menu.edit_menu')}</button>
            </div>
            <div className='m-box'>
              <div>{t('menu.menu_details')}</div>
              <br />
              <MenuSection category='blendedDrinks' />
              <MenuSection category='softDrinks' />
            </div>
            <div className='m-button-container'>
              <button onClick={() => history.push('/edit-menu')} className='m-edit-button-bottom'>{t('menu.edit_menu')}</button>
            </div>
          </>
          )
        : (
          <form onSubmit={createMenu}>
            <div className='m-box'>
              <div>{t('menu.create_your_menu')}</div>
              <br />
              <MenuSection category='blendedDrinks' checkbox menu={menu} setMenu={setMenu} />
              <MenuSection category='softDrinks' checkbox menu={menu} setMenu={setMenu} />
            </div>
            <div className='m-button-container'>
              <button type='submit' className='m-save-button'>{t('menu.save_menu')}</button>
            </div>
          </form>
          )}

      <Modal
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
      </Modal>
    </div>
  )
}
