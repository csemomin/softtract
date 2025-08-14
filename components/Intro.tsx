'use client'

import Image from 'next/image'
import { useTranslations } from '@/hooks/useTranslations'

export default function Intro() {
  const { t } = useTranslations()

  const scheduleCall = () => {
    // You can replace this with your actual scheduling logic
    window.open('https://calendly.com/your-link', '_blank')
  }

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
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
          <h2>Powering Ideas into Digital Reality</h2>
          <p>From concept to deployment, Softtract delivers tailor-made software solutions for businesses of all sizes. We specialize in web, mobile, cloud, and enterprise systems that are fast, secure, and scalable.</p>
          <div className="intro-buttons">
            <button 
              className="btn-schedule"
              onClick={scheduleCall}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span>Schedule a Call</span>
            </button>
            <button 
              className="btn-services"
              onClick={scrollToServices}
            >
              <span>Our Services</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 