import { Route, Switch, Redirect } from 'react-router-dom'

import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import OrderForm from './components/OrderForm'
import Profile from './Profile'
import { useSelector } from 'react-redux'
import Users from './Users'
import LandingPage from './LandingPage'
import ItemDetails from './components/ItemDetails'
import ItemForm from './components/ItemForm'
import Menu from './Menu'

export default function RouterApp () {
  const business = useSelector(state => state.business)

  return (

    <Switch>
      <Route path='/items/:id'>
        <ItemDetails />
      </Route>

      <Route path='/profile'>
        <Profile />
      </Route>

      <Route path='/items'>
        <Menu />
      </Route>

      <Route path='/users'>
        <Users />
      </Route>

      <Route path='/create-item'>
        <ItemForm />
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
