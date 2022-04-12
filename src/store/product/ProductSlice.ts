import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../../model/Product'
import { LoadableState, LoadableStateEx } from '../sliceUtils'

export type ProductLoadingTags = 'loadPreview'

export type ProductState = LoadableState<ProductLoadingTags>
  & {
    preview: Product[]
  }

const initialState: ProductState = {
  ...LoadableStateEx.default(),
  preview: [],
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    loadPreview(state) {
      LoadableStateEx.reducer.startLoading('loadPreview')(state)
      state.latestError = undefined
    },
    receivePreview: LoadableStateEx.reducer.receiveValue('loadPreview', 'preview'),
    failLoadPreview: LoadableStateEx.reducer.receiveError('loadPreview'),
  },
})
