'use client'

import Image from 'next/image'

export default function Intro() {
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
          <h2>Empowering Businesses with Smarter <span>Solutions</span></h2>
          <div>
            <button 
              className="btn-get-started scrollto"
              onClick={() => scrollToSection('about')}
            >
              Get Started
            </button>
            <button 
              className="btn-services scrollto"
              onClick={() => scrollToSection('services')}
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 