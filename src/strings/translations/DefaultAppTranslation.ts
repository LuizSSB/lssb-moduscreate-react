/* eslint-disable no-template-curly-in-string */

const AppTranslationObject = {
  common: {
    appName: 'Modus Create test',
    footer: 'Developed by Luiz S.S. Baglie (luizssb -at- gmail -dot- com)',
    tryAgain: 'Try again',
  },
  home: {
    title: 'New Arrivals',
    label: {
      variants: 'Variants',
      price: '${{price, number}}',
    },
  },
  error: {
    unknown: 'Ops, seems like something went wrong :/',
  },
}

export type AppTranslation = Readonly<typeof AppTranslationObject>

export const DefaultAppTranslation = AppTranslationObject
