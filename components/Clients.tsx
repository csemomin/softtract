'use client'

import Image from 'next/image'
import { useTranslations } from '@/hooks/useTranslations'
import { useEffect, useRef, useState } from 'react'

export default function Clients() {
  const { t } = useTranslations()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)

  const clients = [
    {
      name: '',
      logo: '/allfiles/img/clients/c-1.png',
      width: 80,
      height: 60
    },
    {
      name: '',
      logo: '/allfiles/img/clients/client-1.png',
      width: 80,
      height: 60
    },
    // {
    //   name: '',
    //   logo: '/allfiles/img/clients/client-2.png',
    //   width: 80,
    //   height: 60
    // },
    {
      name: '',
      logo: '/allfiles/img/clients/client-3.png',
      width: 80,
      height: 60
    },
    {
      name: '',
      logo: '/allfiles/img/clients/client-4.png',
      width: 80,
      height: 60
    },
    {
      name: '',
      logo: '/allfiles/img/clients/client-5.png',
      width: 80,
      height: 60
    },
    // {
    //   name: '',
    //   logo: '/allfiles/img/clients/client-6.png',
    //   width: 80,
    //   height: 60
    // },
    {
      name: '',
      logo: '/allfiles/img/clients/logo.png.webp',
      width: 80,
      height: 60
    },

  ]

  const companiesPerView = 1
  const maxIndex = Math.max(0, clients.length - companiesPerView)

  // Auto-scroll functionality - slower and smoother
  useEffect(() => {
    if (!isAutoScrolling) return

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex + 1
        if (nextIndex > maxIndex) {
          return 0 // Reset to beginning
        }
        return nextIndex
      })
    }, 5000) // Changed from 3000 to 5000ms for slower scrolling

    return () => clearInterval(interval)
  }, [isAutoScrolling, maxIndex])

  // Update scroll position when currentIndex changes - smoother transition
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const itemWidth = container.scrollWidth / clients.length
      container.scrollTo({
        left: currentIndex * itemWidth,
        behavior: 'smooth' // This ensures smooth scrolling
      })
    }
  }, [currentIndex, clients.length])

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index)
    setIsAutoScrolling(false) // Pause auto-scroll when manually navigating
    
    // Resume auto-scroll after 8 seconds of inactivity (increased from 5)
    setTimeout(() => {
      setIsAutoScrolling(true)
    }, 8000)
  }

  const scrollLeft = () => {
    const newIndex = Math.max(0, currentIndex - companiesPerView)
    scrollToIndex(newIndex)
  }

  const scrollRight = () => {
    const newIndex = Math.min(maxIndex, currentIndex + companiesPerView)
    scrollToIndex(newIndex)
  }

  const handleMouseEnter = () => {
    setIsAutoScrolling(false)
  }

  const handleMouseLeave = () => {
    setIsAutoScrolling(true)
  }

  return (
    <section id="clients" className="section-bg">
      <div style={{width: '90%', left: '5%', position: 'relative'}}>
        <div className="section-header">
          <h3>{t('clients.title')}</h3>
          <p>{t('clients.subtitle')}</p>
        </div>

        <div className="clients-container">
          {/* Left Arrow */}
          <button 
            className="scroll-arrow left-arrow"
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
              opacity: currentIndex === 0 ? 0.5 : 1,
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Right Arrow */}
          <button 
            className="scroll-arrow right-arrow"
            onClick={scrollRight}
            disabled={currentIndex >= maxIndex}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: currentIndex >= maxIndex ? 'not-allowed' : 'pointer',
              opacity: currentIndex >= maxIndex ? 0.5 : 1,
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          <div 
            ref={scrollContainerRef}
            className="clients-scroll-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              overflow: 'hidden',
              position: 'relative',
              width: '100%',
              padding: '40px 60px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <div 
              className="clients-wrapper"
              style={{
                display: 'flex',
                gap: '30px',
                alignItems: 'center',
                minWidth: 'max-content',
                transition: 'transform 0.8s ease' // Increased from 0.3s for smoother transitions
              }}
            >
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="client-logo"
                  style={{
                    flex: '0 0 auto',
                    transition: 'transform 0.5s ease, filter 0.5s ease', // Increased from 0.3s
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '300px', // Increased size for single company
                    height: '150px', // Increased height
                    padding: '30px',
                    background: 'white',
                    borderRadius: '15px',
                    boxShadow: '0 6px 25px rgba(0,0,0,0.12)',
                    border: '1px solid #e5e7eb'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.08)'
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.18)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = '0 6px 25px rgba(0,0,0,0.12)'
                  }}
                >
                  <Image 
                    src={client.logo} 
                    alt={client.name} 
                    width={client.width}
                    height={client.height}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      // filter: 'grayscale(100%)',
                      transition: 'filter 0.8s ease' // Increased from 0.3s
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'grayscale(0%)'
                    }}
                    onMouseLeave={(e) => {
                      // e.currentTarget.style.filter = 'grayscale(100%)'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .clients-container {
          position: relative;
          margin: 0 auto;
          max-width: 1400px;
        }
        
        .scroll-arrow:hover {
          background: rgba(255, 255, 255, 1) !important;
          transform: translateY(-50%) scale(1.1) !important;
        }
      `}</style>
    </section>
  )
} 