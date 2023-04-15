import React from 'react'
import HomeScreen from './screens/HomeScreen'
import { Provider } from 'react-redux'
import { store } from './store/store'

export default function App() {
  return (
    <Provider store={store}>
    <HomeScreen/>
    </Provider>
  )
}
