import React from 'react'
import { useTranslation } from 'react-i18next'

export type ScaffoldProps = React.PropsWithChildren<unknown>

export const Scaffold = ({ children }: ScaffoldProps) => {
  const { t } = useTranslation()
  return (
    <div className="flex-col h-screen bg-gray-50">
      <header className="sticky top-0 z-30 p-5 bg-white border-b border-slate-200 shadow-sm">
        <h1 className="text-gray-600 text-3xl font-bold">
          {t('common.appName')}
        </h1>
      </header>
      <main className="p-5 bg-gray-50">
        {children}
      </main>
      <footer className="p-5 text-gray-400 bg-white border-t border-slate-200 shadow-sm">
        {t('common.footer')}
      </footer>
    </div>
  )
}
