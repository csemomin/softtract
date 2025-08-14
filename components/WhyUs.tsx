'use client'

import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { useTranslations } from '@/hooks/useTranslations'

export default function WhyUs() {
  const { t } = useTranslations()
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    hours: 0,
    team: 0
  })

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      setCounters({
        clients: 4,
        projects: 7,
        hours: 3364,
        team: 10
      })
    }
  }, [inView])

  const features = [
    {
      icon: 'fa fa-diamond',
      titleKey: 'whyUs.features.expertise.title',
      descriptionKey: 'whyUs.features.expertise.description'
    },
    {
      icon: 'fa fa-language',
      titleKey: 'whyUs.features.customerCentric.title',
      descriptionKey: 'whyUs.features.customerCentric.description'
    },
    {
      icon: 'fa fa-object-group',
      titleKey: 'whyUs.features.innovation.title',
      descriptionKey: 'whyUs.features.innovation.description'
    }
  ]

  return (
    <section id="why-us" className="wow fadeIn">
      <div className="container">
        <header className="section-header">
          <h3>{t('whyUs.title')}</h3>
          <p>{t('whyUs.subtitle')}</p>
        </header>

        <div className="row row-eq-height justify-content-center">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div className="card wow bounceInUp">
                <i className={feature.icon}></i>
                <div className="card-body">
                  <h5 className="card-title">{t(feature.titleKey)}</h5>
                  <p className="card-text">{t(feature.descriptionKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row counters" ref={ref}>
          <div className="col-lg-3 col-6 text-center">
            <span>
              {inView && <CountUp end={counters.clients} duration={2} />}
            </span>
            <p>{t('whyUs.counters.satisfiedClients')}</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span>
              {inView && <CountUp end={counters.projects} duration={2} />}
            </span>
            <p>{t('whyUs.counters.successfulProjects')}</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span>
              {inView && <CountUp end={counters.hours} duration={2} />}
            </span>
            <p>{t('whyUs.counters.hoursOfSupport')}</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span>
              {inView && <CountUp end={counters.team} duration={2} />}
            </span>
            <p>{t('whyUs.counters.dedicatedTeam')}</p>
          </div>
        </div>
      </div>
    </section>
  )
} 