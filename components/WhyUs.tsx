'use client'

import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function WhyUs() {
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
      title: 'Expertise You Can Trust',
      description: 'With years of experience in ERP, CRM, and cutting-edge technologies, we deliver solutions that are tailored, reliable, and scalable.'
    },
    {
      icon: 'fa fa-language',
      title: 'Customer-Centric Approach',
      description: 'We prioritize understanding your unique needs, providing personalized solutions that enhance efficiency and elevate customer experiences.'
    },
    {
      icon: 'fa fa-object-group',
      title: 'Innovation at the Core',
      description: 'Our focus on the latest technologies, including cloud computing and AI, ensures that your business stays ahead of the competition.'
    }
  ]

  return (
    <section id="why-us" className="wow fadeIn">
      <div className="container">
        <header className="section-header">
          <h3>Why Choose Us?</h3>
          <p>At Softtract, we bring innovation, expertise, and commitment to every project, ensuring your business thrives in the digital era.</p>
        </header>

        <div className="row row-eq-height justify-content-center">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div className="card wow bounceInUp">
                <i className={feature.icon}></i>
                <div className="card-body">
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text">{feature.description}</p>
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
            <p>Satisfied Clients</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span>
              {inView && <CountUp end={counters.projects} duration={2} />}
            </span>
            <p>Successful Projects</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span>
              {inView && <CountUp end={counters.hours} duration={2} />}
            </span>
            <p>Hours of Support</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span>
              {inView && <CountUp end={counters.team} duration={2} />}
            </span>
            <p>Dedicated Team Members</p>
          </div>
        </div>
      </div>
    </section>
  )
} 