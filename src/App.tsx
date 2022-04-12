import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Provider } from 'react-redux'
import { AppStore } from './store/AppStore'
import { ProductListPage } from './view/pages/HomePage'

export const App = () => {
  const { t } = useTranslation()
  useEffect(() => {
    document.title = t('common.appName')
  }, [t])

  return (
    <Provider store={AppStore.store}>
      <ProductListPage />
    </Provider>
  )
}
