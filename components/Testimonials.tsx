'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useTranslations } from '@/hooks/useTranslations'

export default function Testimonials() {
  const { t } = useTranslations()
  const carouselRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      image: '/allfiles/img/Babacar.jpg',
      name: 'Babacar Ndiaye',
      position: '~Rédacteur Mémoire',
      text: 'I was blown away by the results. The team delivered beyond what I had imagined, and the process was smooth and efficient.'
    },
    {
      image: '/allfiles/img/bi.jpeg',
      name: 'Bi Diyoro Thierry GOORE',
      position: 'CEO at f.AI',
      text: 'This service has completely transformed our business. The team\'s dedication and expertise were evident in every step of the process. Highly recommended!'
    },
    {
      image: '/allfiles/img/tamim.jpeg',
      name: 'Gazi Md. Shahnewaz',
      position: 'Freelancer, Web Developer',
      text: 'The attention to detail and customer support we received was second to none. Our projects were delivered on time and exceeded expectations.'
    },
    {
      image: '/allfiles/img/testimonial-5.jpg',
      name: 'Michael Lee',
      position: 'Entrepreneur, Startup Founder',
      text: 'Their innovative approach and expertise helped us overcome significant challenges and scale our business. I highly recommend their services.'
    }
  ]

  useEffect(() => {
    // Initialize Owl Carousel after component mounts
    const initCarousel = () => {
      if (typeof window !== 'undefined' && window.jQuery && carouselRef.current) {
        const $ = window.jQuery
        const $carousel = $(carouselRef.current)
        
        if ($carousel.length && typeof $carousel.owlCarousel === 'function') {
          $carousel.owlCarousel({
            items: 1,
            loop: true,
            margin: 20,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn'
          })
        }
      }
    }

    // Wait for jQuery and Owl Carousel to be available
    const checkAndInit = () => {
      if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn && window.jQuery.fn.owlCarousel) {
        initCarousel()
      } else {
        setTimeout(checkAndInit, 100)
      }
    }

    checkAndInit()

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined' && window.jQuery && carouselRef.current) {
        const $ = window.jQuery
        const $carousel = $(carouselRef.current)
        if ($carousel.length && $carousel.data('owl.carousel')) {
          $carousel.trigger('destroy.owl.carousel')
        }
      }
    }
  }, [])

  return (
    <section id="testimonials" className="section-bg">
      <div className="container">
        <header className="section-header">
          <h3>{t('testimonials.title')}</h3>
          <p>{t('testimonials.subtitle')}</p>
        </header>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div ref={carouselRef} className="owl-carousel testimonials-carousel wow fadeInUp">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-item">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    width={80} 
                    height={80}
                    className="testimonial-img"
                  />
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.position}</h4>
                  <p>{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 