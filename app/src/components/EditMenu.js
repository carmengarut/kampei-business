import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import useItems from '../hooks/useItems'

import '../css/menu.css'

import SectionTitle from './SectionTitle'
import { addNewItem, editItem, removeItem } from '../reducers/itemReducer'

import MenuSection from './MenuSection'
import Modal from './Modal'
import { hideModal } from '../reducers/modalReducer'

import successIcon from '../public/success-icon.svg'

function EditMenu () {
  const business = useSelector(state => state.business)
  const items = useSelector(state => state.items).filter(item => item.business === business.id || item.business.id === business.id)

  const history = useHistory()
  const { t } = useTranslation('global')
  const dispatch = useDispatch()

  const { menu, setMenu } = useItems()

  useEffect(() => {
    setMenu(prev => prev.map(item => {
      const existingItem = items.find(menuItem => menuItem.name === item.name)
      if (existingItem) {
        return {
          ...item,
          price: existingItem.price
        }
      } else {
        return {
          ...item,
          value: false

        }
      }
    }
    ))
  }, [])

  const saveMenu = (e) => {
    e.preventDefault()
    menu.map(item => {
      const existingItem = items.find(it => it.name === item.name)
      if (existingItem) {
        if (item.value === true) {
          if (item.price === existingItem.price) {
            return null
          } else {
            return dispatch(editItem(existingItem.id, { price: item.price }))
          }
        } else {
          return dispatch(removeItem(existingItem.id))
        }
      } else {
        if (item.value === true) {
          return dispatch(addNewItem(item))
        } else {
          return null
        }
      }
    })
  }

  return (
    <div className='m-container'>
      <SectionTitle>
        {t('menu.menu')}
      </SectionTitle>

      <form onSubmit={saveMenu}>
        <div className='m-box'>
          <div>{t('menu.edit_your_menu')}</div>
          <br />
          <MenuSection category='blendedDrinks' checkbox menu={menu} setMenu={setMenu} />
          <MenuSection category='softDrinks' checkbox menu={menu} setMenu={setMenu} />
        </div>
        <div className='m-button-container'>
          <button type='submit' className='m-save-button'>{t('menu.save_menu')}</button>
        </div>
      </form>

      <Modal
        action={() => {
          history.push('/menu')
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
        <h6>{t('menu.menu_edited')}</h6>
        {t('menu.successfully_edited')}
      </Modal>

    </div>
  )
}

export default EditMenu
