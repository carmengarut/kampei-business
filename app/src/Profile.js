import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import SectionTitle from './components/SectionTitle'

import { businessEdit, businessLogout } from './reducers/businessReducer'

import avatar from './public/avatar.svg'
import './css/profile.css'

const Profile = () => {
  const business = useSelector(state => state.business)
  const [name, setName] = useState(business.name || '')
  const [surname, setSurname] = useState(business.surname || '')
  const [email, setEmail] = useState(business.email || '')
  const dispatch = useDispatch()
  const { t } = useTranslation('global')

  return (
    <div className='p-container'>
      <SectionTitle>
        {t('profile_page.profile')}
      </SectionTitle>
      <div className='p-box'>
        <div>{t('profile_page.edit_your_account_info')}</div>
        <div className='p-name-block'>
          <img
            style={{
              width: '100px',
              height: '100px',
              resizeMode: 'contain',
              borderRadius: '50%'
            }}
            src={business.profileImg || avatar}
            alt={business.name}
          />

          <div className='p-name'>
            {business.name} {business.surname}
          </div>
        </div>

        <form
          className='p-form'
        >
          <div className='p-form-row-1'>
            <div className='p-field-group'>
              <label>{t('profile_page.name')}</label>
              <input
                className='p-field'
                type='text'
                value={name}
                name='Name'
                placeholder={t('profile_page.name')}
                onChange={({ target }) => setName(target.value)}
              />
            </div>
            <div className='p-field-group'>
              <label>{t('profile_page.surname')}</label>
              <input
                className='p-field'
                type='text'
                value={surname}
                name='Surname'
                placeholder={t('profile_page.surname')}
                onChange={({ target }) => setSurname(target.value)}
              />

            </div>
          </div>

          <div className='p-field-group'>
            <label>{t('profile_page.email')}</label>
            <input
              className='p-field'
              type='text'
              value={email}
              name='Email'
              placeholder={t('profile_page.email')}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>

        </form>

      </div>

      <div className='p-buttons-container'>
        <button className='p-logout-button' onClick={() => { dispatch(businessLogout()) }}>
          {t('profile_page.logout')}
        </button>
        <button className='p-save-button' onClick={() => { dispatch(businessEdit(business.id, { email, name, surname })) }}>
          {t('profile_page.save_changes')}
        </button>

      </div>
    </div>
  )
}

export default Profile
