import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { ClipLoader } from 'react-spinners'
import { ProductSlice } from '../../store/product/ProductSlice'
import { Scaffold } from '../components/Scaffold'
import { useAppSelector } from '../useAppSelector'

export const ProductListPage = () => {
  const { t } = useTranslation()

  const { products, isLoading, error } = useAppSelector((s) => ({
    products: s.product.preview,
    isLoading: s.product.loadingTags.includes('loadPreview'),
    error: s.product.latestError?.error,
  }))

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ProductSlice.actions.loadPreview())
  }, [dispatch])

  return (
    <Scaffold>
      <h2 className="text-center text-gray-500 text-2xl font-bold border-b border-slate-200 pb-4">
        {t('home.title')}
      </h2>
      <div className="align-center content-center">
        {isLoading && (
          <div className="text-center my-5">
            <ClipLoader loading />
          </div>
        )}
        {error
          ? (
            <div className="text-center ">
              <div className="my-2">{error.message}</div>
              <button
                type="button"
                className="p-2 bg-gray-600 hover:bg-gray-900 text-white rounded-full text-center"
                onClick={() => dispatch(ProductSlice.actions.loadPreview())}
              >
                {t('common.tryAgain')}
              </button>
            </div>
          )
          : products.map((p) => (
            <div
              className="self-center font-sans my-5 p-5 max-w-2xl bg-gray-200 shadow-lg shadow-gray-500 rounded-lg"
              key={p.id}
            >
              <div className="flex">
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="w-32 h-32 mr-6 object-cover border-[1px] border-gray-600 rounded-lg shadow-lg shadow-gray-500"
                />
                <div>
                  <h3 className="text-2xl font-medium text-slate-900">
                    {p.title}
                  </h3>
                  <div className="mt-2 text-3xl font-bold text-gray-600">
                    {t('home.label.price', { price: p.price })}
                  </div>
                </div>
              </div>
              <div className="mt-5 text-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 self-start">
                {p.variants.map((v) => (
                  <div key={v.id} className="py-2 bg-gray-600 text-white rounded-full text-center">
                    {v.title}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </Scaffold>
  )
}
