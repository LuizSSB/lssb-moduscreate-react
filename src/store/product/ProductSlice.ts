import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../../model/Product'
import { LoadableState, LoadableStateEx } from '../SliceUtils'

export type ProductLoadingTags = 'loadPreview'

export type ProductState = LoadableState<ProductLoadingTags>
  & {
    preview: Product[]
  }

export const ProductSlice = createSlice({
  name: 'product',
  initialState: <ProductState>{
    ...LoadableStateEx.default(),
    preview: [],
  },
  reducers: {
    loadPreview: LoadableStateEx.reducer.startLoading('loadPreview'),
    receivePreview: LoadableStateEx.reducer.receiveValue('loadPreview', 'preview'),
    failLoadPreview: LoadableStateEx.reducer.receiveError('loadPreview'),
  },
})
