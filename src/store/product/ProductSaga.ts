import {
  all, call, put, takeLatest,
} from 'typed-redux-saga'
import { IoC } from '../../ioc/IoC'
import { ProductRepository } from '../../repository/ProductRepository'
import { putError } from '../sagaUtils'
import { ProductSlice } from './ProductSlice'

const LIMIT_PREVIEW = 5

const sagas = {
  * loadPreviewAsync() {
    try {
      const { entries } = yield* call(
        IoC.get(ProductRepository).getProducts,
        { page: 0, size: LIMIT_PREVIEW },
      )
      yield* put(ProductSlice.actions.receivePreview(entries))
    } catch (e) {
      yield* putError(ProductSlice.actions.failLoadPreview, e)
    }
  },
}

export const ProductSaga = {
  sagas,
  * mainSaga() {
    yield* all([
      takeLatest(ProductSlice.actions.loadPreview.type, sagas.loadPreviewAsync),
    ])
  },
}
