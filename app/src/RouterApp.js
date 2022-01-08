import { Route, Switch, Redirect } from 'react-router-dom'

import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import OrderForm from './components/OrderForm'
import Profile from './Profile'
import { useSelector } from 'react-redux'
import LandingPage from './LandingPage'
import Menu from './Menu'
import EditMenu from './components/EditMenu'

export default function RouterApp () {
  const business = useSelector(state => state.business)

  return (

    <Switch>

      <Route path='/profile'>
        <Profile />
      </Route>

      <Route path='/menu'>
        <Menu />
      </Route>

      <Route path='/edit-menu'>
        <EditMenu />
      </Route>

      <Route path='/landing'>
        <LandingPage />
      </Route>

      <Route path='/order/:id'>
        <OrderForm />
      </Route>

      <Route
        path='/login' render={() => {
          return business.email ? <Redirect to='/' /> : <LoginForm />
        }}
      />

      <Route
        path='/register' render={() => {
          return business.email ? <Redirect to='/' /> : <RegistrationForm />
        }}
      />

      <Route path='/'>
        <Menu />
      </Route>

    </Switch>
  )
}
