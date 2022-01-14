import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Header from './components/Header'
import Item from './components/Item'
import RouterApp from './RouterApp'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import LandingPage from './LandingPage'
import HeaderWeb from './components/HeaderWeb'
import Cart from './components/Cart'
import { businessSet } from './reducers/businessReducer'
import MenuCustomers from './components/MenuCustomers'
import MenuCategory from './components/MenuCategory'
import EditCartItem from './components/EditCartItem'
import ItemBlendedDrinks from './components/ItemBlendedDrinks'

const App = () => {
  const dispatch = useDispatch()
  const business = useSelector(state => state.business)

  useEffect(() => {
    const loggedBusinessJSON = window.localStorage.getItem('loggedBusiness')

    if (loggedBusinessJSON) {
      const businessToSet = JSON.parse(loggedBusinessJSON)
      dispatch(businessSet(businessToSet))
    }
  }, [])

  return (
    <BrowserRouter>
      {business.email
        ? (
          <>
            <Header />
            <RouterApp />
          </>)
        : (
          <>

            <Switch>

              <Route path='/menu/:businessId/item/:id'>
                <Header />
                <Item />
              </Route>

              <Route path='/menu/:businessId/blendedDrinks/:id'>
                <Header />
                <ItemBlendedDrinks />
              </Route>

              <Route path='/menu/:businessId/cart/:id'>
                <Header />
                <EditCartItem />
              </Route>

              <Route path='/menu/:id/cart'>
                <Header />
                <Cart />
              </Route>

              <Route path='/menu/:id/:category'>
                <Header />
                <MenuCategory />
              </Route>

              <Route path='/menu/:id'>
                <Header />
                <MenuCustomers />
              </Route>

              <Route path='/item/:id'>
                <Header />
                <Item />
              </Route>

              <Route path='/login'>
                <HeaderWeb />
                <LoginForm />
              </Route>

              <Route path='/register'>
                <HeaderWeb />
                <RegistrationForm />
              </Route>

              <Route path='/'>
                <HeaderWeb />
                <LandingPage />
              </Route>
            </Switch>
          </>
          )}
    </BrowserRouter>
  )
}

export default App
