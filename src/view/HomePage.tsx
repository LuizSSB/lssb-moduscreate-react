import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ProductSlice } from '../store/product/ProductSlice'
import '../styles.css'
import { useAppSelector } from './useAppSelector'

export const ProductListPage = () => {
  const { products, isLoading } = useAppSelector((s) => ({
    products: s.product.preview,
    isLoading: s.product.loadingTags.includes('loadPreview'),
  }))

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ProductSlice.actions.loadPreview())
  }, [dispatch])

  return (
    <div>
      <h1>Home Page</h1>
      <h2>New Products</h2>
      {isLoading && 'Carregando'}
      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          {p.price}
        </div>
      ))}
    </div>
  )
}
