'use client'

import { useTranslations } from '@/hooks/useTranslations'
import Image from 'next/image'

export default function AboutPage() {
  const { t } = useTranslations()

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1>{t('about.title')}</h1>
              <p className="lead">{t('about.subtitle')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-text">
                <h2>{t('about.title')}</h2>
                <p>{t('about.description')}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-image">
                <Image 
                  src="/allfiles/img/about-img.svg" 
                  alt="About Softtract" 
                  width={500} 
                  height={400}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mission-card">
                <h3>{t('about.mission')}</h3>
                <p>{t('about.missionText')}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="vision-card">
                <h3>{t('about.vision')}</h3>
                <p>{t('about.visionText')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>{t('whyUs.title')}</h2>
              <p className="lead">{t('whyUs.subtitle')}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="feature-card">
                <h4>{t('whyUs.features.expertise.title')}</h4>
                <p>{t('whyUs.features.expertise.description')}</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-card">
                <h4>{t('whyUs.features.customerCentric.title')}</h4>
                <p>{t('whyUs.features.customerCentric.description')}</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-card">
                <h4>{t('whyUs.features.innovation.title')}</h4>
                <p>{t('whyUs.features.innovation.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="stat-card">
                <h3>100+</h3>
                <p>{t('whyUs.counters.satisfiedClients')}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-card">
                <h3>200+</h3>
                <p>{t('whyUs.counters.successfulProjects')}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-card">
                <h3>24/7</h3>
                <p>{t('whyUs.counters.hoursOfSupport')}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-card">
                <h3>15+</h3>
                <p>{t('whyUs.counters.dedicatedTeam')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>{t('services.cta.title')}</h2>
              <p>{t('services.cta.subtitle')}</p>
              <button className="btn btn-primary btn-lg">
                {t('services.cta.button')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
