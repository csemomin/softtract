'use client'

import Image from 'next/image'
import { useTranslations } from '@/hooks/useTranslations'

export default function Intro() {
  const { t } = useTranslations()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = document.getElementById('header')?.offsetHeight || 0
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="intro" className="clearfix">
      <div className="container">
        <div className="intro-img">
          <Image 
            src="/allfiles/img/intro-img.svg" 
            alt="Intro" 
            width={500} 
            height={400}
            className="img-fluid"
          />
        </div>

        <div className="intro-info">
          <h2>{t('intro.title')} <span>{t('intro.subtitle')}</span></h2>
          <p>{t('intro.description')}</p>
          <div>
            <button 
              className="btn-get-started scrollto"
              onClick={() => scrollToSection('about')}
            >
              {t('intro.cta')}
            </button>
            <button 
              className="btn-services scrollto"
              onClick={() => scrollToSection('services')}
            >
              {t('navigation.services')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 