import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import logo from '../public/logo-header.svg'
import '../css/header.css'
import menuSectionIcon from '../public/menu-section-icon.svg'
import ordersIcon from '../public/orders-icon.svg'
import profileIcon from '../public/profile-icon.svg'
import menuIcon from '../public/menu-icon.svg'

export default function Header () {
  const user = useSelector(state => state.user)

  const history = useHistory()
  const { t } = useTranslation('global')

  return (
    <header className='h-container'>
      <img
        alt=''
        src={logo}
        width='40'
        height='40'
        onClick={() => { history.push('/') }}
        className='h-logo'
      />{' '}
      <div className='h-menu-container'>
        <img
          alt=''
          src={menuIcon}
          width='30'
          height='30'
          className='h-menu-button'
        />
        <div className='h-menu-toggle'>
          <nav className='h-menu'>
            <div className='h-menu-section' onClick={() => { history.push('/items') }}>
              <img
                alt=''
                src={menuSectionIcon}
                width='30'
                height='30'
                className='h-menu-section-icon'
              />
              <div className='h-menu-section-title'>{t('header.menu')}</div>
            </div>
            <div className='h-menu-section' onClick={() => { history.push('/orders') }}>
              <img
                alt=''
                src={ordersIcon}
                width='35'
                height='35'
                className='h-menu-section-icon'
              />
              <div className='h-menu-section-title'>{t('header.orders')}</div>
            </div>
            {/* <Link to='/users'>
              Users
            </Link>
            <Link to='/profile'>
              My Profile
            </Link> */}
          </nav>
          {/* {
              user.email
                ? (
                  <div>
                    Signed in as: {user.name} <a onClick={() => { dispatch(userLogout()) }} variant='link' style={{ color: '#FFFFFF' }} href='#'>Logout</a>
                  </div>
                  )
                : (
                  <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                  </>
                  )
            } */}

          <div className='h-menu-profile-section' onClick={() => { history.push('/profile') }}>
            <img
              style={{
                resizeMode: 'contain',
                borderRadius: '50%'
              }}
              alt=''
              src={user.profileImg || profileIcon}
              width='40'
              height='40'
              className='h-menu-profile-icon'
            />
            <div className='h-menu-section-title'>{t('header.profile')}</div>
          </div>
        </div>
      </div>
    </header>
  )
}
