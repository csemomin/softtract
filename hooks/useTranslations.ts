'use client'

import React, { useState, useEffect, createContext, useContext } from 'react'

// Import all translation files
import en from '../public/locales/en/common.json'
import fr from '../public/locales/fr/common.json'
import es from '../public/locales/es/common.json'
import de from '../public/locales/de/common.json'
import pt from '../public/locales/pt/common.json'
import it from '../public/locales/it/common.json'

const translations = {
  en,
  fr,
  es,
  de,
  pt,
  it
}

type TranslationContextType = {
  t: (key: string) => string
  locale: string
  changeLocale: (newLocale: string) => void
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState('en')

  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[locale as keyof typeof translations] || translations.en

    for (const k of keys) {
      value = value?.[k]
      if (!value) break
    }

    return value || key
  }

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale)
    // Store in localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale)
    }
  }

  useEffect(() => {
    // Load saved locale from localStorage
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale')
      if (savedLocale && translations[savedLocale as keyof typeof translations]) {
        setLocale(savedLocale)
      }
    }
  }, [])

  return (
    <TranslationContext.Provider value={{ t, locale, changeLocale }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslations() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslations must be used within a TranslationProvider')
  }
  return context
}
