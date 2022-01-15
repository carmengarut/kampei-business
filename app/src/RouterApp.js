import { Route, Switch, Redirect } from 'react-router-dom'

import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import Item from './components/Item'
import Profile from './Profile'
import { useSelector } from 'react-redux'
import LandingPage from './LandingPage'
import Menu from './Menu'
import EditMenu from './components/EditMenu'
import EditCartItem from './components/EditCartItem'
import Cart from './components/Cart'
import MenuCustomers from './components/MenuCustomers'
import MenuCategory from './components/MenuCategory'
import ItemBlendedDrinks from './components/ItemBlendedDrinks'
import OrdersSection from './components/OrdersSection'

export default function RouterApp () {
  const business = useSelector(state => state.business)

  return (

    <Switch>

      <Route path='/profile'>
        <Profile />
      </Route>

      <Route path='/menu/:businessId/item/:id'>
        <Item />
      </Route>

      <Route path='/menu/:businessId/blendedDrinks/:id'>
        <ItemBlendedDrinks />
      </Route>

      <Route path='/menu/:businessId/cart/:id'>
        <EditCartItem />
      </Route>

      <Route path='/menu/:id/cart'>
        <Cart />
      </Route>

      <Route path='/menu/:id/:category'>
        <MenuCategory />
      </Route>

      <Route path='/menu/:id'>
        <MenuCustomers />
      </Route>

      <Route path='/menu'>
        <Menu />
      </Route>

      <Route path='/orders'>
        <OrdersSection />
      </Route>

      <Route path='/edit-menu'>
        <EditMenu />
      </Route>

      <Route path='/landing'>
        <LandingPage />
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
