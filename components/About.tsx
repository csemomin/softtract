'use client'

import Image from 'next/image'
import { useTranslations } from '@/hooks/useTranslations'

export default function About() {
  const { t } = useTranslations()

  return (
    <section id="about">
      <div className="container">
        <header className="section-header">
          <h3>{t('about.title')}</h3>
          <p>{t('about.subtitle')}</p>
        </header>

        <div className="row about-container">
          <div className="col-lg-6 content order-lg-1 order-2">
            <p>
              {t('about.description')}
            </p>

            <div className="icon-box wow fadeInUp">
              <div className="icon"><i className="fa fa-cogs"></i></div>
              <h4 className="title"><a href="">{t('services.erpSolutions.title')}</a></h4>
              <p className="description">{t('services.erpSolutions.description')}</p>
            </div>

            <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
              <div className="icon"><i className="fa fa-comments"></i></div>
              <h4 className="title"><a href="">{t('services.aiIntegration.title')}</a></h4>
              <p className="description">{t('services.aiIntegration.description')}</p>
            </div>

            <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
              <div className="icon"><i className="fa fa-cloud"></i></div>
              <h4 className="title"><a href="">{t('services.cloudServices.title')}</a></h4>
              <p className="description">{t('services.cloudServices.description')}</p>
            </div>
          </div>

          <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
            <Image 
              src="/allfiles/img/about-img.svg" 
              alt="Custom ERP and Business Solutions Consulting" 
              width={500} 
              height={400}
              className="img-fluid"
            />
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-6 wow fadeInUp">
            <Image 
              src="/allfiles/img/about-extra-1.svg" 
              alt="Our Mission" 
              width={500} 
              height={400}
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <h4>{t('about.mission')}</h4>
            <p>
              {t('about.missionText')}
            </p>
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <Image 
              src="/allfiles/img/about-extra-2.svg" 
              alt="Why Choose Us" 
              width={500} 
              height={400}
              className="img-fluid"
            />
          </div>

          <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
            <h4>{t('about.vision')}</h4>
            <p>
              {t('about.visionText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 