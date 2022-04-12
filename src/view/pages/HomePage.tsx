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
            <div className="self-center flex font-sans my-5 max-w-2xl" key={p.id}>
              <div className="flex-none w-56 relative shadow-xl z-10">
                <img src={p.images[0]} alt="" className="w-full h-full object-cover border-[1px] border-gray-600 rounded-lg shadow-xl shadow-gray-500 z-50" />
              </div>
              <div className="flex-auto my-3 p-6 bg-gray-200 rounded-r-lg shadow-xl">
                <h3 className="font-medium text-slate-900">
                  {p.title}
                </h3>
                <div className="mt-2 text-3xl font-bold text-gray-600">
                  {p.price}
                </div>
                <h4 className="mt-4 mb-3 text-gray-700">Variants</h4>
                <div className="text-sm grid sm:grid-cols-2 md:grid-cols-4 gap-2 self-start">
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
    </Scaffold>
  )
}
