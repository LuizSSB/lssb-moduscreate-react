import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { StoreConfig } from './StoreConfig'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: StoreConfig.rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware()
      .concat(sagaMiddleware)
  },
})

sagaMiddleware.run(StoreConfig.rootSaga)

export const AppStore = { store }

export type AppStoreState = ReturnType<typeof StoreConfig.rootReducer>
