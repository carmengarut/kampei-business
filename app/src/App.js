import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Header from './components/Header'
import RouterApp from './RouterApp'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import LandingPage from './LandingPage'
import HeaderWeb from './components/HeaderWeb'
import { itemInit } from './reducers/itemReducer'
import { orderInit } from './reducers/orderReducer'
import { businessSet } from './reducers/businessReducer'
import { businessesInit } from './reducers/businessesReducer'

const App = () => {
  const dispatch = useDispatch()
  const business = useSelector(state => state.business)

  useEffect(() => {
    const loggedBusinessJSON = window.localStorage.getItem('loggedBusiness')

    if (loggedBusinessJSON) {
      const businessToSet = JSON.parse(loggedBusinessJSON)
      dispatch(businessSet(businessToSet))
    }

    dispatch(itemInit())
    dispatch(orderInit())
    dispatch(businessesInit())
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
            <HeaderWeb />
            <Switch>

              <Route path='/login'>
                <LoginForm />
              </Route>

              <Route path='/register'>
                <RegistrationForm />
              </Route>

              <Route path='/'>
                <LandingPage />
              </Route>
            </Switch>
          </>
          )}
    </BrowserRouter>
  )
}

export default App
