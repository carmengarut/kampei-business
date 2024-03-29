import propTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { businessRegister } from '../reducers/businessReducer'
import Notification from './Notification'

import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import logo from '../public/logo-header.svg'
import '../css/registrationForm.css'
import Checkbox from './Checkbox'

export default function RegistrationForm () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [profileImg, setProfileImg] = useState(null)

  const dispatch = useDispatch()
  const history = useHistory()
  const { t } = useTranslation('global')

  const handleRegister = (event) => {
    event.preventDefault()

    try {
      dispatch(businessRegister({ email, password, name, surname, profileImg }))
      setEmail('')
      setPassword('')
      setName('')
      setSurname('')
      setProfileImg('')
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <div className='rf-container'>
      <img
        src={logo}
        width='80'
        height='80'
      />
      <div className='rf-box'>
        <h3 className='rf-title'>{t('sign_up.title')}</h3>
        <Notification />
        <form onSubmit={handleRegister}>
          <div className='rf-row-1'>
            <div className='rf-field-group'>
              <label>{t('sign_up.name')}</label>
              <input
                className='rf-field'
                type='text'
                value={name}
                name='Name'
                placeholder={t('sign_up.name')}
                onChange={({ target }) => setName(target.value)}
                required
              />
            </div>
            <div className='rf-field-group'>
              <label>{t('sign_up.surname')}</label>
              <input
                className='rf-field'
                type='text'
                value={surname}
                name='Surname'
                placeholder={t('sign_up.surname')}
                onChange={({ target }) => setSurname(target.value)}
                required
              />

            </div>
          </div>
          <div className='rf-row-2'>
            <div className='rf-field-group'>
              <label>{t('sign_up.email')}</label>
              <input
                className='rf-field'
                type='email'
                value={email}
                name='Email'
                placeholder={t('sign_up.email')}
                onChange={({ target }) => setEmail(target.value)}
                required
              />
            </div>
            <div className='rf-field-group'>
              <label>{t('sign_up.password')}</label>
              <input
                className='rf-field'
                type='password'
                value={password}
                name='Password'
                placeholder={t('sign_up.password')}
                onChange={({ target }) => setPassword(target.value)}
                required
              />
            </div>
          </div>
          <Checkbox required={1}>{t('sign_up.terms_and_conditions')}</Checkbox>
          {/* <div className='CheckboxContainer'>
            <input
              type='checkbox'
              name='terms and conditions'
              required
            />
            <span className='Checkbox' />
            <label>I agree to terms and conditions</label>
          </div> */}
          {/* <Form.Group id='profileImg' className='mb-3'>
            <Form.Label>Profile image (Optional)</Form.Label>
            <br />
            {profileImg
              ? (
                <>
                  <img src={profileImg} />
                  <Button onClick={handleClick} variant='light'>
                    Cambiar imagen
                  </Button>
                </>
                )
              : (
                <Button onClick={handleClick} variant='light'>
                  Subir imagen
                </Button>
                )}
          </Form.Group> */}

          <button className='rf-button' id='form-register-button' type='submit'>
            {t('sign_up.create_account')}
          </button>

          {t('sign_up.have_account')}<a onClick={() => history.push('/login')} href='' className='rf-link'>{t('sign_up.sign_in')}</a>

        </form>

      </div>
      {/* <CropImageModal show={show} setShow={setShow} setProfileImg={setProfileImg} /> */}

    </div>
  )
}

RegistrationForm.propTypes = {
  email: propTypes.string
}
