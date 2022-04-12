import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { DefaultAppTranslation } from './translations/DefaultAppTranslation'

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    // lbaglie: main translation
    en: { translation: DefaultAppTranslation },

    // lbaglie: additional translations below
  },
  react: {
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
  },
  lng: 'en',
})
