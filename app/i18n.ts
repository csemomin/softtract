import { createInstance } from 'i18next'
import { initReactI18next } from 'react-i18next'

const initI18next = async (locale: string) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .init({
      lng: locale,
      fallbackLng: 'en',
      ns: ['common'],
      defaultNS: 'common',
      backend: {
        loadPath: `/locales/${locale}/{{ns}}.json`,
      },
    })
  return i18nInstance
}

export default initI18next
