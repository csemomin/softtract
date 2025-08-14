'use client'

import { createInstance } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { I18nextProvider } from 'react-i18next'
import { useEffect, useState } from 'react'

const initI18next = async (locale: string) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .init({
      lng: locale,
      fallbackLng: 'en',
      ns: ['common'],
      defaultNS: 'common',
      resources: {
        en: {
          common: require('../public/locales/en/common.json')
        },
        fr: {
          common: require('../public/locales/fr/common.json')
        },
        es: {
          common: require('../public/locales/es/common.json')
        },
        de: {
          common: require('../public/locales/de/common.json')
        },
        pt: {
          common: require('../public/locales/pt/common.json')
        },
        it: {
          common: require('../public/locales/it/common.json')
        }
      }
    })
  return i18nInstance
}

export default function I18nProvider({ children, locale = 'en' }: { children: React.ReactNode, locale?: string }) {
  const [i18nInstance, setI18nInstance] = useState<any>(null)

  useEffect(() => {
    initI18next(locale).then(setI18nInstance)
  }, [locale])

  if (!i18nInstance) {
    return <div>Loading...</div>
  }

  return (
    <I18nextProvider i18n={i18nInstance}>
      {children}
    </I18nextProvider>
  )
}
