import React from 'react'
import { Provider } from 'react-redux'
import { AppStore } from './store/AppStore'
import { ProductListPage } from './view/pages/HomePage'

export const App = () => (
  <Provider store={AppStore.store}>
    <ProductListPage />
  </Provider>
)
