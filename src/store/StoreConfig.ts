import { combineReducers } from 'redux'
import { all, fork } from 'typed-redux-saga'
import { ProductSaga } from './product/ProductSaga'
import { ProductSlice } from './product/ProductSlice'

export const StoreConfig = {
  rootReducer: combineReducers({
    [ProductSlice.name]: ProductSlice.reducer,
  }),
  * rootSaga() {
    yield* all(
      [
        ProductSaga,
      ]
        .map((sagaDef) => sagaDef.mainSaga)
        .map(fork),
    )
  },
}
