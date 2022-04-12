import React from 'react'
import { Provider } from 'react-redux'
import { AppStore } from './store/AppStore'
import './styles.css'
import { ProductListPage } from './view/HomePage'

export const App = () => (
  <Provider store={AppStore.store}>
    <ProductListPage />
  </Provider>
)
