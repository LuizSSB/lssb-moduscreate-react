import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ProductSlice } from '../store/product/ProductSlice'
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
      <header className="sticky top-0 z-30 p-5 bg-white border-b border-slate-200 shadow-sm">
        <h1 className="text-gray-600 text-3xl font-bold">
          Home Page
        </h1>
      </header>
      <main className="p-5">
        <h2 className="text-center text-gray-500 text-2xl font-bold border-b border-slate-200 pb-4">
          New Products
        </h2>
        {isLoading && 'Loading'}
        <div className="flex-col align-center content-center">
          {products.map((p) => (
            <div className="self-center flex font-sans my-5 max-w-2xl" key={p.id}>
              <div className="flex-none w-56 relative">
                <img src={p.images[0]} alt="" className="w-full h-full object-cover border-[1px] border-gray-600 rounded-lg shadow-xl" />
              </div>
              <div className="flex-auto my-3 p-6 bg-gray-200 rounded-r-lg shadow-xl">
                <h3 className="font-medium text-slate-900">
                  {p.title}
                </h3>
                <div className="mt-2 text-3xl font-bold text-gray-600">
                  {p.price}
                </div>
                <h4 className="mt-4 mb-3 text-gray-700">Variants</h4>
                <div className="text-sm grid sm:grid-cols-2 md:grid-cols-4 gap-4 self-start">
                  {p.variants.map((v) => (
                    <div key={v.id} className="py-2 bg-gray-600 text-white rounded-full text-center">
                      {v.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="p-5 text-gray-400 border-t border-slate-200 shadow-sm">
        Developed by Luiz S.S. Baglie
      </footer>
    </div>
  )
}
