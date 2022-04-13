import React, { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
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

  const dispatchReload = useCallback(
    () => {
      if (!isLoading) {
        dispatch(ProductSlice.actions.loadPreview())
      }
    },
    [dispatch, isLoading],
  )

  return (
    <Scaffold>
      <div className="
        flex justify-center
        text-center text-gray-500 text-2xl font-bold
        border-b border-slate-200
        pb-4"
      >
        <div className="relative w-[640px]">
          <h2>{t('home.title')}</h2>
          {!isLoading && (
            <button
              type="button"
              className="absolute right-0 top-0 w-[30px]"
              onClick={dispatchReload}
            >
              <img src="img/spinner.svg" alt="reload" />
            </button>
          )}
        </div>
      </div>
      <div className="align-center content-center">
        {isLoading && (
          <div className="flex justify-center my-5">
            <img src="img/spinner.svg" alt="loading" className="animate-spin" />
          </div>
        )}
        {error
          ? (
            <div className="text-center ">
              <div className="my-2">{error.message}</div>
              <button
                type="button"
                className="
                  p-2
                  bg-gray-600 hover:bg-gray-900
                  rounded-full
                  text-white text-center"
                onClick={dispatchReload}
              >
                {t('common.tryAgain')}
              </button>
            </div>
          )
          : (
            <div className="flex flex-wrap items-center justify-center">
              {products.map((p) => (
                <div
                  className="
                    self-center
                    font-sans
                    my-5 mx-3
                    p-5
                    w-[450px] h-[270px]
                    bg-gray-200 hover:bg-blue-100
                    shadow-lg shadow-gray-500
                    rounded-lg"
                  key={p.id}
                >
                  <div className="flex">
                    <img
                      src={p.images[0]}
                      alt={p.title}
                      className="
                        w-32 h-32
                        mr-6
                        object-cover
                        border-[1px] border-gray-600
                        rounded-lg
                        shadow-lg shadow-gray-500"
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
                  <div className="mt-5 text-sm grid grid-cols-4 gap-2 self-start">
                    {p.variants.map((v) => (
                      <div
                        key={v.id}
                        className="
                          py-2
                          bg-gray-600 hover:bg-blue-600
                          text-white text-center
                          rounded-full
                          hover:cursor-pointer"
                      >
                        {v.title}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
      </div>
    </Scaffold>
  )
}
