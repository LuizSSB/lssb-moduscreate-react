import React from 'react'
import { useTranslation } from 'react-i18next'
import { Configurations } from '../../Configurations'

export type ScaffoldProps = React.PropsWithChildren<unknown>

export const Scaffold = ({ children }: ScaffoldProps) => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="sticky top-0 z-30 p-5 bg-white border-b border-slate-200 shadow-sm">
        <h1 className="text-gray-600 text-3xl font-bold">
          <a href="/">{t('common.appName')}</a>
        </h1>
      </header>
      <main className="p-5 grow bg-gray-50">
        {children}
      </main>
      <footer className="flex items-center p-5 text-gray-400 bg-white border-t border-slate-200 shadow-sm">
        <a
          href={Configurations.links.PERSONAL}
          target="__blank"
          className="w-[30px] mr-5"
        >
          <img src="img/github.svg" alt="github" />
        </a>
        <div>
          {t('common.footer1')}
          <br />
          {t('common.footer2')}
        </div>
      </footer>
    </div>
  )
}
